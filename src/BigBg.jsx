import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// component
import BigBgContent from "./component/BigBgContent";

const BigBg = (props) => {

  /* ---------------------------------- props --------------------------------- */
  const { list, activeLang } = props;

  return (
    <>
      <BigBgContent list={list} activeLang={activeLang} />
    </>
  )
}
ReactDOM.render(
      <BigBg />,
document.getElementById("app")
);
export default BigBg;