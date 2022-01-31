import React from "react";
import classes from "./SignIn.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import {IconButton} from "@mui/material";

const SignInFailed = (props) => {
  return (
    <div onClick={props.onClick} className={classes.failedContainer}>
      <div className={classes.failedBox}>
        <a className={classes.failedText}>{props.message}</a>
        <br />
        <a>Tap to try again</a>
      </div>
    </div>
  );
};

export default SignInFailed;
