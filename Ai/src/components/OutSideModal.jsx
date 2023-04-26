import React, { useState, useEffect } from 'react';

// other apps
import Modal from 'react-bootstrap/Modal';
import InsideModal from "./InsideModal";

// css
import "../assets/css/reset.css";
import "../assets/css/bootstrap.min.css"; 
import "../assets/css/ai.css"

// img
import localImg from "../assets/img/bg.png";

function OutSideModal(props) {

    const { list, activeLang, img } = props;

    /* --------------------------------- states --------------------------------- */
    const [show, setShow] = useState(false);

    /* -------------------------------- functions ------------------------------- */
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
                {/* /* ------------------------------ modal ------------------------------ */}
                {/* <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton />
                    <Modal.Body>
                        <InsideModal />
                    </Modal.Body>
                </Modal> */}

                {/* /* ------------------------------ out of modal ------------------------------ */}
                <section className="selectYourCarpetByClick">
                    <div className="container">
                        <div className={`row align-items-center ${activeLang == "per" ? "text-end" : "flex-row-reverse"}`}>

                            <div className="col-lg-6">
                                <div className="bySomeClickImgHolder">
                                    <img src={img ? img.img1 : localImg} />
                                </div>
                            </div>

                            <div className="col-lg-6 selectYourCarpetByClickTxt text-white">
                                <h3 className="bySomeClick">
                                    {
                                        list
                                        ?
                                            list.AiTitle
                                        :
                                            "Say Hello to Jarvis"
                                    }
                                </h3>
                                <p className="bySomeClickPara">
                                    {
                                        list
                                        ?
                                            list.AiBriefCase
                                        :
                                            "Jarvis is an AI"
                                    }
                                </p>
                                <div className={`d-flex ${activeLang == "per" ? "justify-content-end" : ""}`}>
                                    <button className="text-white btn-header byYourChoiceBtn px-4 py-2" onClick={handleShow}>
                                        {
                                        list
                                        ?
                                            list.AiTestBtn
                                        :
                                            "Say Hello to Jarvis"
                                        }
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
    )
}

export default OutSideModal
