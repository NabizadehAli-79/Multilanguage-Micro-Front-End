import React from "react";
import ReactDOM from "react-dom";

// css
import "../assets/css/reset.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/TypesOfAI.css";

// img
import pic2 from "../assets/img/2.avif";
import pic3 from "../assets/img/3.avif";
import pic4 from "../assets/img/4.avif";
import pic5 from "../assets/img/3.png";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ListOfItems = (props) => {

    /* ---------------------------------- props --------------------------------- */
    const { list, activeLang } = props;

    console.log(activeLang);

  return (
    <>
    
    <section className="specialAiBox overflow-hidden">
        <div className="callToActionsBg">
            <div className="container-fluid">
                <div className="row">
    
                    <div className="col-lg-5 px-0">
                        <div className="callToActionOne position-relative">
                            <img src={pic5} alt="" />
                            <a href="#" className={`d-flex justify-content-between w-100 linkAiArticle ${activeLang == "per" ? "" : "flex-row-reverse"}`}>
                                <span>
                                    {
                                        list
                                        &&
                                        list.MlRoadmap
                                    }
                                </span>
                                <span className="desktopNone">
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
    
                    <div className="col-lg-5 px-0">
                        <div className="callToActionTwo">
                            <div className="callToActionTwoTxt">
                                <span className="meetSpecialAi d-block">
                                    {
                                        list
                                        &&
                                        list.HelloFuture
                                    }
                                </span>
                                <div className={`callToActionTwoDetails ${activeLang == "per" ? "" : "flex-row-reverse"}`}>
                                    <span className={`meetSpecialAiPara ${activeLang == "per" ? "text-end" : "text-start"}`}>
                                        {
                                            list
                                            &&
                                            list.aiParaType
                                        }
                                    </span>
                                    <button className="btn-specialAi">
                                        {
                                            list
                                            &&
                                            list.moreInfo
                                        }
                                    </button>
                                </div>
                            </div>
                            <div className="callToActionTwoImgHolder position-relative">
                                <img src={pic2} alt="" />
                                <a href="#" className={`d-flex justify-content-between w-100 linkAiArticle ${activeLang == "per" ? "" : "flex-row-reverse"}`}>
                                    <span>
                                        {
                                            list
                                            &&
                                            list.Algebra
                                        }
                                    </span>
                                    <span className="desktopNone">
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

                    <div className="col-lg-2 px-0">
                        <div className="callToActionThree">
                            <div className="callToActionDoubleApple">
                                <img src={pic4} alt="" />
                                <a href="#" className={`d-flex justify-content-between w-100 linkAiArticle ${activeLang == "per" ? "" : "flex-row-reverse"}`}>
                                    <span>
                                        {
                                            list
                                            &&
                                            list.Deep
                                        }
                                    </span>
                                    <span className="desktopNone">
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
                            <div className="callToActionGreenGarden">
                                <img src={pic3} alt="" />
                                <a href="#" className={`d-flex justify-content-between w-100 linkAiArticle ${activeLang == "per" ? "" : "flex-row-reverse"}`}>
                                    <span>
                                        {
                                            list
                                            &&
                                            list.Network
                                        }
                                    </span>
                                    <span className="desktopNone">
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
            </div>
        </div>
    </section>
    
    </>
  )
}

export default ListOfItems