import React, { useState } from "react";
import ReactDOM from "react-dom";

// component
import MixWithIndustry from "../component/MixWithIndustry";
import MixWithTechs from "../component/MixWithTechs";

// css
import "../assets/css/reset.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/Slider.css";


const SliderHolder = (props) => {

  /* ---------------------------------- props --------------------------------- */

  const { list, activeLang } = props;

  /* ---------------------------------- state --------------------------------- */

  const [ currentPage, setCurrentPage ] = useState({
    industries: true,
    techs: false
  })

  /* -------------------------------- functions ------------------------------- */

  const clickIndustry = () => {
    setCurrentPage(prev => ({...prev, industries: true, techs: false}));
  }

  const clickTechs = () => {
    setCurrentPage(prev => ({...prev, industries: false, techs: true}));
  }

  return (
    <>
    <section className={`py-5 px-4 category ${activeLang == "per" ? "rtl" : "ltr"}`}>
        <div className="container noContainer">
            <div className="row">
                <div className="col-12 mb-3">
                    <h3 className="aiTitle text-white">
                        {
                          list
                          &&
                          list.MixtrueWithAI
                        }
                    </h3>
                </div>
            </div>


            <div className="mb-5">
                <button onClick={clickIndustry} className={`navigateButton ${activeLang == "per" ? "ms-3" : "me-3"} text-white ${currentPage.industries ? "navigateButton--active" : ""}`}>
                  {
                    list
                    &&
                    list.Industry
                  }
                </button>
                <button onClick={clickTechs} className={`navigateButton ${activeLang == "per" ? "ms-3" : "me-3"} text-white ${currentPage.techs ? "navigateButton--active" : ""}`}>
                  {
                    list
                    &&
                    list.Technology
                  }
                </button>
            </div>

            {
              currentPage.industries
              &&
              <MixWithIndustry list={list} activeLang={activeLang} />
            }

            {
              currentPage.techs
              &&
              <MixWithTechs list={list} activeLang={activeLang} />
            }
        </div>
    </section>
    
    </>
  )
}
export default SliderHolder;