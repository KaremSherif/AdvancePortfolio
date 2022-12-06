import React from 'react';
import Info from './Info.jsx'
import "./about.css";
import Aboutimg from "../../images/about-img.jpg"
import CV from "../../images/John-Cv.pdf"
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className='section-title'>About Me</h2>
      <span className='section-subtitle'>Who Am i</span>

      <div className="about-container container grid">
        
      <img src={Aboutimg} className="about-img" alt="NA" />

       
        <div className="about-data">
          <Info />

          <p className="about-desc">
            Hello I'm Frontend Developer, 
            I create web pages with UI/UX user interface,
            I have years of experience and many 
            clients are happy with the projects carried out.
          </p>

          <a href={CV} download="" className='button button-flex'>Check Resume</a>
        </div>

      </div>
    </section>
  )
}

export default About