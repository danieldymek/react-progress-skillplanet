import React from "react";
import Modal from "./Modal";
import SuccessModal from "./SuccessModal";
const Backdrop = (props) => {
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
  return (
    <div style={styles}>
      <Modal />
    </div>
  );
};

export default Backdrop;
