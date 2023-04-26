import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// components
import ListOfItems from "./components/ListOfItems";

const TypesOfAi = (props) => {

    /* ---------------------------------- props --------------------------------- */
    const { activeLang, list } = props;


    return ( 
    <ListOfItems activeLang={activeLang} list={list} /> 
    )
}
export default TypesOfAi;

ReactDOM.render(
    <TypesOfAi />,
  document.getElementById("app")
);
