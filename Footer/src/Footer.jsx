import React from "react";
import ReactDOM from "react-dom";

// css
import "./assets/css/reset.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/footer.css";

// img
import gitub from "./assets/img/hub.svg";
import linkedin from "./assets/img/in.svg";


const Footer = (props) => {

    const { list, activeLang } = props;

    return (
      <footer className="bg-dark p-5">
        <div className="container">
          <div className={`row ${activeLang == "per" ? "flex-row-reverse" : ""} align-items-center`}>
            <div className="col-lg-6">
              <p className={`text-white ${activeLang == "per" ? "borderRight" : "borderLeft"}`}>
                {
                  list
                  &&
                  list.aboutProject
                }
              </p>
            </div>
            <div className="col-lg-6">
              <p className={`text-white meSection techs ${activeLang == "per" ? "text-start" : "text-end"}`}>
                <span>
                {
                  list
                  &&
                  list.me
                }
                </span>
                <span className={`d-flex align-items-center socialMediaHolder mt-3 ${activeLang == "per" ? "justify-content-start" : "justify-content-end"}`}>
                  <a target={"_blank"} href="https://github.com/NabizadehAli-79" className="socialMedia me-4">
                    <img src={gitub} alt="" />
                  </a>
                  <a target={"_blank"} href="https://www.linkedin.com/in/ali-lamiry-13a8a1219/" className="socialMedia">
                    <img src={linkedin} alt="" />
                  </a>
                </span>
              </p>
              
            </div>
          </div>
        </div>
      </footer>
    )
};

export default Footer;
ReactDOM.render(<Footer />, document.getElementById("app"));
