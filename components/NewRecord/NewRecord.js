import React from "react";
import classes from "./NewRecord.module.css";
import Input from "../UI/Input";
import CustomButton from "../UI/CustomButton";
import {useRef} from "react";
import {useState} from "react";
import {useEffect} from "react";
import chapterFinder from "../../helpers/chapter-finder";
import {storageActions} from "../../redux/storage-slice";
import SuccessModal from "../UI/SuccessModal";
import {uiActions} from "../../redux/ui-slice";
import {useDispatch} from "react-redux";
const NewRecord = () => {
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const [isConfirmed, setIsConfirmed] = useState(false);

  const dateRef = useRef();
  const episodeRef = useRef();
  const nameRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;

    const date = new Date(dateRef.current.value);
    const episode = episodeRef.current.value;
    const result = {
      name,
      episode,
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      chapter: chapterFinder(+episode),
    };
    const sendData = async () => {
      const url =
        "https://react-skillplanet-default-rtdb.europe-west1.firebasedatabase.app/logs.json";
      const request = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(result),
      });
      if (!request.ok) {
        throw new Error("Data transfer failed");
      }
    };
    sendData();
    dispatch(storageActions.resetAll());
    setIsConfirmed(true);
    dispatch(uiActions.toggleSuccessModal());
  };
  useEffect(() => {
    setDate(getDate());
  }, []);
  const getDate = () => {
    const date = new Date();
    const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
    const month =
      date.getMonth() + 1 > 9
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1);
    const year = date.getFullYear();
    const fulldate = `${year}-${month}-${day}`;
    return fulldate;
  };

  return (
    <div className={classes.container}>
      {isConfirmed && <SuccessModal></SuccessModal>}

      {!isConfirmed && (
        <div className={classes.main}>
          <div className={classes.card}>
            <div className={classes.header}>
              <h3>New record</h3>
            </div>
            <form onSubmit={formSubmitHandler} className={classes.cardItem}>
              <Input type="text" placeholder="Name" ref={nameRef} />
              <Input
                style={{minWidth: "250px"}}
                value={date}
                ref={dateRef}
                type="date"
                placeholder="Date"
              />
              <Input
                min="1"
                max="500"
                type="number"
                placeholder="Episode"
                ref={episodeRef}
              />
              <br />
              <CustomButton
                styles={{marginTop: "15px"}}
                type="submit"
                children={"add new record"}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewRecord;
