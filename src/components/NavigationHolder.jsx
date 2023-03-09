import React from "react";
import ReactDOM from "react-dom";

// css
import "../assets/css/reset.css";
import "../assets/css/bootstrap.min.css"; 
import "../assets/css/NavigateSec.css"; 

// img
import vert from "../assets/img/ver.jpg";
import hor from "../assets/img/hor.jpg";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NavigateHolder = (props) => {

    const { list, activeLang } = props;

    /* --------------------------------- states --------------------------------- */

    return (
        <>
            <section className="beyondMind">
                <div className="container mb-5">
                    <h2 className={`text-white ${activeLang == "per" ? "navTitle-right" : "navTitle-left"} navTitle`}>
                        {/* {t('Beyond Future')} */}
                        {
                            list
                            &&
                            list.BeyondFuture
                        }
                    </h2>
                </div>
                <div className="container customContainer">
                    <div className="row align-items-end">
                        <div className="col-lg-6 px-0">
                            <div className="simplicity">
                                <a href="#" className={`simplicityTitle d-flex align-items-baseline justify-content-between p-3 ${activeLang == "per" ? '' : "flex-row-reverse"}`}>
                                    <span className={`d-block simplicityTxt ${activeLang == "per" ? 'text-end' : "text-start"}`}>
                                    {
                                        list
                                        &&
                                        list.BetterWorld
                                    }
                                    </span>
                                    <span>
                                        {
                                            activeLang == "per"
                                            ?
                                            <FontAwesomeIcon icon={faArrowLeft} />
                                            :
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        }
                                    </span>
                                </a>
                                <div className="simplicityPic">
                                    <img src={hor} width="100%"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 px-0">
                            <div className="position-relative">
                                <div className="d-flex skyAndSeaPic">
                                    <img src={vert} width="70%"/>
                                </div>
            
                                <a href="#" className={`skyAndSea d-flex align-items-center justify-content-between p-3 ${activeLang == "per" ? '' : "flex-row-reverse"}`}>
                                    <span className={`d-block simplicityTxt ${activeLang == "per" ? 'text-end' : "text-start"}`}>
                                    {
                                        list
                                        &&
                                        list.Architecture
                                    }
                                    </span>
                                    <span>
                                        {
                                            activeLang == "per"
                                            ?
                                            <FontAwesomeIcon icon={faArrowLeft} />
                                            :
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        }
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NavigateHolder;