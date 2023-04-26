import React from 'react';

// i18
import { useTranslation } from 'react-i18next';

// css
import "../assets/css/reset.css";
import "../assets/css/bootstrap.min.css"; 
import "../assets/css/Header.css"

// img
import bgPic from "../assets/img/bg.png";
import lang from "../assets/img/language.svg";

function HeaderContent(props) {

    /* ---------------------------------- props --------------------------------- */

    const { getBackLangSelected, activeLang, list, img } = props;

    /* --------------------------------- states --------------------------------- */
    const langItems = ["En", "Ger", "Per"];

    /* -------------------------------- functions ------------------------------- */
    const changeLangHanlder = event => {
        getBackLangSelected(event.toLowerCase());
    }

    return (
        <>
          <div className="langIcon">
          <img src={lang} alt="" width="30px"/>
      </div>
      <div className="languageList">
        {
          langItems.map((item, index) =>
            <span 
              key={index} 
              className={`langListItems pointer ${index == 1 ? "mx-4" : ""} ${activeLang == item.toLowerCase() ? "activeLang" : ""}`} 
              onClick={()=> changeLangHanlder(item)}
            >
              {item}
            </span>
          )
        }
      </div>
                      
      <div className="container-fluid px-0 overflow-hidden">
        <div className="row">
              <div className="col-12">
                  <div className="imgHeaderHolder">
                      <img src={img ? img.background : bgPic} alt="" className="img-cover" />
                      <div className="headerHomePageTitle">
                          <h1 className="headerHomePage">
                              <span className="d-block mb-3">
                                {
                                  list
                                  ?
                                  list.ai
                                  :
                                  "AI,"
                                }
                              </span>
                              <span className="d-blcok">
                                {
                                  list
                                  ?
                                  list.differentFuture
                                  :
                                  "Different Future"
                                } 
                              </span>
                          </h1>
                      </div>
                  </div>
              </div>
        </div>
      </div>
        </>
    )
}

export default HeaderContent;