import React from "react";
import classes from "./Logo.module.css";
import logo from "../../../assets/NavLogo/brand_react_icon_158742.png";
const Logo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <img src={logo.src} className={classes.img} />
      </div>
    </div>
  );
};

export default Logo;
