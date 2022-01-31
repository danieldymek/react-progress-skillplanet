import React from "react";
import {Fragment} from "react";
import classes from "./Board.module.css";
import MeterChart from "./Charts/MeterChart/MeterChart";
import {useState} from "react";
import {useCallback} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {storageActions} from "../../redux/storage-slice";
import {useSelector} from "react-redux";
import {uiActions} from "../../redux/ui-slice";
const Board = () => {
  const dispatch = useDispatch();
  const storage = useSelector((state) => state.db.data);

  return (
    <div className={classes.container}>
      <MeterChart />
    </div>
  );
};

export default Board;
