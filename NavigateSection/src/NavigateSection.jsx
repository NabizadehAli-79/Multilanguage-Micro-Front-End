import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// components
import NavigateHolder from "./components/NavigationHolder";

const NavigateSection = (props) => {

    const {  list, activeLang } = props
   
    return (
        <>
            <NavigateHolder list={list} activeLang={activeLang} />
        </>
  )
}
ReactDOM.render(
        <NavigateSection />,
  document.getElementById("app")
  );
export default NavigateSection;