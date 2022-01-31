import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <h2 className={classes.header} style={{margin: 0}}>
          Socials
        </h2>
        <div className={classes.content}>
          {props.items.map((callback) => {
            return <div className={classes.card}>{callback}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
