import React from "react";
import htmlLogo from './images/logo-html.png';
import cssLogo from './images/csslogo.jpg';
import botLogo from './images/bootstrap5-logo.png';
import jsLogo from './images/js.png';
import reactLogo from './images/react-logo.jpg';

import AOS from 'aos';

import 'aos/dist/aos.css';
import { useEffect } from "react";

function Skills() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);

    return (
        <div className="container skills">
            <div className="row skilrow">
                <div className="col-md-4 col-6">

                    <img src={htmlLogo} alt="fireSpot" data-aos="fade-right" className="skilImg d-block mx-auto" />
                    <p>HTML</p>
                </div>
                <div className="col-md-4 col-6 d-md-block d-none">
                    <img src={cssLogo} alt="fireSpot" data-aos="fade-left" className="skilImg d-block mx-auto" />
                    <p>CSS</p>
                </div>
                <div className="col-md-4 col-6 d-md-block d-none">
                    <img src={botLogo} alt="fireSpot" data-aos="fade-left" className="skilImg d-block mx-auto" />
                    <p>Bootstrap</p>
                </div>

                <div className="col-md-4 col-6 d-block d-md-none">
                    <img src={cssLogo} alt="fireSpot" data-aos="fade-left" className="skilImg d-block mx-auto" />
                    <p>CSS</p>
                </div>
                <div className="col-md-4 col-6 d-block d-md-none">
                    <img src={botLogo} alt="fireSpot" data-aos="zoom-in" className="skilImgboot d-block mx-auto" />
                    <p>Bootstrap</p>
                </div>


            </div>
            <div className="row skilrow">
                <div className="col-md-4 col-6">
                    <img src={jsLogo} alt="fireSpot"  data-aos="fade-right" className="skilImg d-block mx-auto" />
                    <p>Javascript</p>
                </div>
                <div className="col-md-4 col-6">
                    <img src={reactLogo} alt="fireSpot"  data-aos="fade-left" className="skilImg d-block mx-auto" />
                    <p>React</p>
                </div>

            </div>
        </div>
    );
}

export default Skills;