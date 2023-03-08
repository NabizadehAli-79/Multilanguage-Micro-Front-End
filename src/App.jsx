import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// css
import "./assets/css/font.css";

// other apps
import Header from "header/header";
import AI from "AI/AI";
import TypesOfAI from "TypesOfAi/TypesOfAi";
import Slider from "Slider/Slider";
import NavigateSection from "NavigateSection/NavigateSection";
import BigBg from "BigBg/BigBg";
import Footer from "footer/footer";

// i18
import i18n from "i18next";
import "./states/lang/i18n";

// obj
import { tranlationList } from "./states/lang/translationList";
import { imgList } from "./states/imgList";

const App = () => {

  /* --------------------------------- states --------------------------------- */
  const list = tranlationList();
  const images = imgList();
  const [activeLang, setActiveLang] = useState("en");

  /* -------------------------------- functions ------------------------------- */
  const changeLangManual = langSelected => {
    i18n.changeLanguage(langSelected);
    setActiveLang(langSelected);
  }

  return (
    <>
      <Header changeLangManual={changeLangManual} list={list.header} activeLang={activeLang} img={images.header} />
      <AI list={list.ai} activeLang={activeLang} img={images.ai} />
      <TypesOfAI list={list.typesOfAi} activeLang={activeLang} />
      <Slider list={list.slider} activeLang={activeLang} /> 
      <NavigateSection list={list.navigation} activeLang={activeLang} />
      <BigBg list={list.BigBg} activeLang={activeLang} />
      <Footer list={list.footer} activeLang={activeLang} />
    </>
  )
}
ReactDOM.render(
      <App />,
document.getElementById("app")
);
