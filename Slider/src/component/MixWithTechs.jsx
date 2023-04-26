import React, { useState } from "react";

// img
import sense from "../assets/img/6.jpeg";
import nlp from "../assets/img/7.png";
import learn from "../assets/img/8.jpg";

// component
import CoreSlider from "./CoreSlider";

function MixWithTechs(props) {

    const { list, activeLang } = props;

    const data = [
        {
            id: 1,
            name: list ? list.Sense : "" ,
            img: sense,
        },
        {
            id: 2,
            name: list ? list.Comprehend : "" ,
            img: nlp,
        },
        {
            id: 3,
            name: list ? list.Learn : "" ,
            img: learn,
        },
    ]

    return (
        <>
            <CoreSlider data={data} />
        </>
    )
}

export default MixWithTechs;