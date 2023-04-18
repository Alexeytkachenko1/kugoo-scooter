import React from "react";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return createPortal(
    <div onClick={props.setActive}></div>,
    document.getElementById("backdrop-hook")
  );
};
export default Backdrop;
