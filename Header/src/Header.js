import React from "react";
import ReactDOM from "react-dom";

// components
import HeaderContent from "./components/HeaderContent";

const App = (props) => {

  /* ---------------------------------- props --------------------------------- */
  const { changeLangManual, list, img } = props;

  /* -------------------------------- functions ------------------------------- */
  const getBackLangSelected = langSelected => {
    changeLangManual(langSelected)
  }

  return (
    <>
      <HeaderContent img={img} list={list} getBackLangSelected={getBackLangSelected} />
    </>
  );
} 
ReactDOM.render(
  <App />,
  document.getElementById("app")
);

export default App;