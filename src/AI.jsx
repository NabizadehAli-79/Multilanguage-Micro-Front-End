import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import OutSideModal from "./components/OutSideModal";

const AI = (props) => {

  /* ---------------------------------- props --------------------------------- */
  const { list, activeLang, img } = props;

  return ( <OutSideModal list={list} activeLang={activeLang} img={img} /> )
}

export default AI;

ReactDOM.render(
        <AI />,
  document.getElementById("app")
);
