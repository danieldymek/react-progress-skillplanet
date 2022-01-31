import React from "react";
import classes from "./SuccessIcon.module.css";
const SuccessIcon = () => {
  return (
    <div className={classes.successIcon}>
      <div className={classes.successIcon__tip}></div>
      <div className={classes.successIcon__long}></div>
    </div>
  );
};

export default SuccessIcon;
