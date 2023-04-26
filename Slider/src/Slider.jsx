import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// component
import SliderHolder from "./component/SliderHolder";

const Slider = (props) => {

  /* ---------------------------------- props --------------------------------- */

  const { list, activeLang } = props;

  return (
    <>
      <SliderHolder list={list} activeLang={activeLang} />
    </>
  )
}
ReactDOM.render(
      <Slider />,
document.getElementById("app")
);

export default Slider;