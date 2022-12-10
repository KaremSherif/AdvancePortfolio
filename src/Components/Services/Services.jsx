import React, { useState } from "react";
import "./service.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What I Offer</span>
      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services-title">
              Prodcut <br /> Developer
            </h3>
          </div>
          <span
            className="services-button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View More{" "}
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services-popup active-popup"
                : "services-popup"
            }
          >
            <div className="services-popup-content">
              <i
                className="uil uil-times services-popup-close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services-popup-title">Product Developer</h3>
              <p className="services-popup-desc">
                Service with more than 3 years of experience. providing quality
                work to clients and companies.
              </p>
              <ul className="services-popup-serv grid">
                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">Web page development.</p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    I postion your company brand.
                  </p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    Desgin and mockups of product for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-arrow services-icon"></i>
            <h3 className="services-title">
              Ui/Ux <br /> Developer
            </h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(2)}>
            View More{" "}
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services-popup active-popup"
                : "services-popup"
            }
          >
            <div className="services-popup-content">
              <i
                className="uil uil-times services-popup-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services-popup-title">Ui/Ux Developer</h3>
              <p className="services-popup-desc">
                Service with more than 3 years of experience. providing quality
                work to clients and companies.
              </p>
              <ul className="services-popup-serv grid">
                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">Web page development.</p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    I postion your company brand.
                  </p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    Desgin and mockups of product for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-edit services-icon"></i>
            <h3 className="services-title">
              Visual <br /> Developer
            </h3>
          </div>
          <span className="services-button" onClick={() => toggleTab(3)}>
            View More{" "}
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services-popup active-popup"
                : "services-popup"
            }
          >
            <div className="services-popup-content">
              <i
                className="uil uil-times services-popup-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services-popup-title">Visual Developer</h3>
              <p className="services-popup-desc">
                Service with more than 3 years of experience. providing quality
                work to clients and companies.
              </p>
              <ul className="services-popup-serv grid">
                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">Web page development.</p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    I postion your company brand.
                  </p>
                </li>

                <li className="services-popup-service">
                  <i className="services-popup-icon uil uil-check-circle"></i>
                  <p className="services-popup-info">
                    Desgin and mockups of product for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
