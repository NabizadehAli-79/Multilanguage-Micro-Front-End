import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';

function CoreSlider(props) {

    /* ---------------------------------- props --------------------------------- */

    const { data } = props;

    return (
        <>
            <Swiper
                spaceBetween={20}
                slidesPerView={"auto"}
                className="smooth aiSlider"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
            >
                    {
                        data.map(item =>
                            <SwiperSlide className='swiper-slide_HomePage' key={item.id}>
                                    <a href="#" className='sliderLinks'>
                                        <div className="sliderCategory">
                                            <img src={item.img} width="100%" />
                                        </div>
                                        <div>
                                            <span className="d-flex justify-content-between">
                                                <span className="industryTitle text-white">
                                                    { item.name }
                                                </span>
                                            </span>
                                        </div>
                                    </a>
                            </SwiperSlide>
                        ) 
                    }
            </Swiper>
        </>
    )
}

export default CoreSlider
