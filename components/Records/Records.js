import React from "react";
import classes from "./Records.module.css";
import {Fragment} from "react";
import Card from "../UI/Card";
import MoreIcon from "@mui/icons-material/More";
import {useSelector} from "react-redux";
import PageviewIcon from "@mui/icons-material/Pageview";
import Backdrop from "../UI/Backdrop";
import SearchIcon from "@mui/icons-material/Search";
import {useDispatch} from "react-redux";
import {uiActions} from "../../redux/ui-slice";
const Records = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.db.data);
  const users = useSelector((state) => state.db.users);
  const query = "Artur";
  let queryResult;
  users.forEach((callback, index) => {
    if (callback === query) {
      queryResult = records[index];
    }
  });
  const peakEpisodes = [];
  records.map((callback) => {
    const helper = [];
    callback.map((callback2) => {
      helper.push(callback2.episode);
    });
    peakEpisodes.push(Math.max(...helper));
  });
  const openModalHandler = (data, name) => {
    dispatch(uiActions.toggleModal());
    dispatch(uiActions.setModalData({data, name}));
  };
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <Card>
          <div className={classes.header}>
            <h3>Records</h3>
          </div>
          <div className={classes.userGroup}>
            {users.map((callback, index) => (
              <div
                key={callback + Math.random() * 1000}
                className={classes.userTab}
              >
                <div className={classes.nameContainer}>
                  <div className={classes.name}>{callback}</div>
                  <div
                    className={classes.icon}
                    onClick={() => {
                      openModalHandler(records[index], callback);
                    }}
                  >
                    <SearchIcon sx={{fill: "white", fontSize: "40px"}} />
                  </div>
                </div>

                <div className={classes.group}>
                  <div
                    className={classes.episode}
                  >{`Best episode: ${peakEpisodes[index]}`}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Records;
