import React from "react";
import classes from "./NavLogo.module.css";
import Logo from "./Logo";
const NavLogo = (props) => {
  return (
    <div style={props.style} className={classes.container}>
      <div className={classes.main}>
        {!props.logo ? (
          <Logo />
        ) : (
          <img className={classes.img} src={props.logo.src}></img>
        )}

        <a className={classes.logoText}>
          {" "}
          {!props.text ? "React Progress" : props.text}
        </a>
      </div>
    </div>
  );
};

export default NavLogo;
