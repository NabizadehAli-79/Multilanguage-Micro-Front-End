import React from 'react';

// img
import agriculture from "../assets/img/1.png";
import mechanic from "../assets/img/2.jpg";
import medicine from "../assets/img/3.jpg";
import banking from "../assets/img/4.jpg";
import iot from "../assets/img/5.jpg";

// component
import CoreSlider from './CoreSlider';

function MixWithIndustry(props) {

    const { list, activeLang } = props;

    const data = [
        {
            id: 1,
            name: list ? list.Agriculture : "",
            img: agriculture,
        },
        {
            id: 2,
            name: list ? list.Mechanic : "" ,
            img: mechanic,
        },
        {
            id: 3,
            name: list ? list.Medical : "" ,
            img: medicine,
        },
        {
            id: 4,
            name: list ? list.Bank : "" ,
            img: banking,
        },
        {
            id: 5,
            name: list ? list.IoT : "" ,
            img: iot,
        }
    ]

  return (
    <>
        <CoreSlider data={data} />
    </>
  )
}

export default MixWithIndustry
