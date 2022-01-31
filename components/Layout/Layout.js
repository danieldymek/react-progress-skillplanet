import React from "react";
import classes from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {uiActions} from "../../redux/ui-slice";
import {useDispatch} from "react-redux";
import deviceType from "../../helpers/device-type";
import {useRouter} from "next/router";
import {Fragment} from "react";
import Backdrop from "../UI/Backdrop";
import {useCallback} from "react";
import {storageActions} from "../../redux/storage-slice";
import SuccessBackdrop from "../UI/SuccessBackdrop";
import SuccessModal from "../UI/SuccessModal";
const Layout = (props) => {
  const getData = useCallback(async () => {
    const url =
      "https://react-skillplanet-default-rtdb.europe-west1.firebasedatabase.app/logs.json";
    const request = await fetch(url);
    if (!request.ok) {
      throw new Error("Failed to fetch data");
    }
    const json = request.json();
    json.then((callback) => {
      const arr = [];
      for (const key in callback) {
        const log = callback[key];
        arr.push(log);
      }
      const names = arr.map((callback) => {
        return callback.name;
      });
      const uniqueNames = [...new Set(names)];
      const usersData = [];

      uniqueNames.map((callback) => {
        const helper = [];

        arr.map((callback2) => {
          if (callback === callback2.name) {
            helper.push(callback2);
          }
        });
        usersData.push(helper);
      });
      if (!(storage.length > 0)) {
        dispatch(storageActions.setUniqueUsers(uniqueNames));
        dispatch(storageActions.setData(usersData));
      }
      const peakEpisodes = [];
      usersData.map((callback) => {
        const helper = [];
        callback.map((callback2) => {
          helper.push(callback2.episode);
        });
        peakEpisodes.push(Math.max(...helper));
      });
      const final = [];
      uniqueNames.forEach((callback, index) => {
        final.push({name: callback, episode: peakEpisodes[index]});
      });
      dispatch(storageActions.setChartData(final));
    });
  });

  const dispatch = useDispatch();

  const isMobile = useSelector((state) => state.ui.isMobile);
  const isLoggedIn = useSelector((state) => state.ui.isLoggedIn);
  const isModalOpen = useSelector((state) => state.ui.isRecordsModalOpen);
  const isSuccessModalOpen = useSelector(
    (state) => state.ui.isSuccessModalOpen
  );
  const recordsModal = useSelector((state) => state.ui.recordsModal);

  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      if (localStorage.getItem("isLogged") === "true") {
        dispatch(uiActions.toggleLoggedIn());
        return;
      }
      const illegal = ["/dashboard", "/records", "/new-record"];
      if (illegal.includes(router.pathname)) {
        router.push("start");
      }
    }
  }, []);

  const isHeroPage = router.pathname === "/";
  const state = useSelector((state) => state.ui);
  const storage = useSelector((state) => state.db);
  if (isLoggedIn) {
    if (storage.data.length === 0) {
      console.log("fetching data");
      getData();
    }
  }
  useEffect(() => {
    const type = deviceType();
    if (type === "mobile") {
      dispatch(uiActions.toggleIsMobile());
    }
  }, []);

  return (
    <Fragment>
      <div className={classes.container}>
        {isHeroPage && !isMobile && <Navigation />}
        {isHeroPage && isMobile && <Navigation />}
        {!isHeroPage && !isMobile && <Navigation />}
        {props.children}
        {!isHeroPage && isMobile && <Navigation />}
        {/* {<p style={{position: "fixed", bottom: 80}}>{JSON.stringify(state)}</p>} */}
        {/* {!storage.data.length === 0 && (
          <p style={{position: "fixed", bottom: 100}}>
            {JSON.stringify(storage)}
          </p>
        )} */}
        {isSuccessModalOpen && <SuccessModal to="dashboard"></SuccessModal>}

        {isModalOpen && <Backdrop>{recordsModal}</Backdrop>}
      </div>
    </Fragment>
  );
};

export default Layout;
