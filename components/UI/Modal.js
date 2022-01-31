import React from "react";
import Card from "./Card";
import classes from "./Modal.module.css";
import {useSelector} from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {IconButton} from "@mui/material";
import {uiActions} from "../../redux/ui-slice";
import {useDispatch} from "react-redux";
const Modal = (props) => {
  const dispatch = useDispatch();
  const toggleModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };
  const {data, name} = useSelector((state) => state.ui.recordsModal);
  const formatter = new Intl.DateTimeFormat("en", {month: "short"});
  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <h3>{name}</h3>
        <IconButton
          onClick={toggleModalHandler}
          sx={{
            position: "fixed",
            right: "10px",
            height: "fit-content",
            top: 10,
            border: "1px lightgray solid",
            height: "50px",
            width: "50px",
          }}
        >
          <CloseIcon
            sx={{
              fontSize: "30px",
            }}
          />
        </IconButton>
      </div>
      <div className={classes.main}>
        {[...data].reverse().map((callback, index) => (
          <div
            key={JSON.stringify(callback) + Math.random() * 1000}
            className={classes.item}
          >
            {/* <div className={classes.yearBadge}>
              
            </div> */}
            <div className={classes.yearBadge}>
              <div className={classes.top}>DATE</div>

              <div className={classes.date}>{`${callback.year}`}</div>
              <div className={classes.date}>{`${formatter.format(
                new Date(callback.year, callback.month - 1)
              )}`}</div>
              <div className={classes.date}>{`${callback.day}`}</div>
            </div>

            {/* {JSON.stringify(callback)} */}
            <div className={classes.yearBadge}>
              <div className={classes.top}>EPISODE</div>
              <div className={classes.date}>{callback.episode}</div>
            </div>
            <div className={classes.yearBadge}>
              <div className={classes.top}>CHAPTER</div>
              <div className={classes.date}>{callback.chapter}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Modal;
