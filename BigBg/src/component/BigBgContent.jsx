import React from 'react';

// gifs
import gif1 from "../assets/gifs/1.gif";
import gif2 from "../assets/gifs/2.gif";
import gif3 from "../assets/gifs/3.gif";

// component
import Carousel from 'react-bootstrap/Carousel';

// css
import "../assets/css/reset.css";
import "../assets/css/bootstrap.min.css"; 
import "../assets/css/BigBg.css";


function BigBgContent(props) {

  const { list, activeLang } = props;


  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-12 px-0 overflow-hidden">
            <div className="bigBgGifs">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={gif2}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={gif3}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={gif1}/>
                </Carousel.Item>
              </Carousel>
              <div className={`bigBgGifs_content ${activeLang == "per" ? "bigBgGifs_content--rtl" : "bigBgGifs_content--ltr"}`}>
                    <h3 className={`py-2 picBgHeader ${activeLang == "per" ? "text-end" : "text-start"}`}>
                        {/* {t('title')} */}
                        {
                          list
                          &&
                          list.bigbgTitle
                        }
                    </h3>

                    <p className={`picBgPara ${activeLang == "per" ? "text-end" : "text-start"}`}>
                        {/* {t('para')} */}
                        {
                          list
                          &&
                          list.bigbgPara
                        }
                    </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BigBgContent
