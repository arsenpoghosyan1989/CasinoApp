import React from "react";
import spinnerGif from "./spinner.gif";
import dotGif from "./dot.gif";
import "./spinner.css";

const Spinner = () => {
  return <img src={spinnerGif} className="spinner" />;
};
export const Loading = () => {
  return <img src={dotGif} className="loading" />;
};

export default Spinner;
