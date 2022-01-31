import React from "react";
import {Fragment} from "react";

const SuccessBackdrop = (props) => {
  const styles = {
    position: "fixed",
    bottom: "0",
    height: "calc(100%)",
    width: "100vw",
    backgroundColor: "rgba(0, 0, 0, 0.763)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };
  return <div style={styles}>{props.children}</div>;
};

export default SuccessBackdrop;
