import React from "react";
import Heading from "./headinges";
import Amenities from "./amenities";
import Skills from "./skill";
import Expertise from "./experties";
import Numbproj from "./numbproj.jsx";
import Projects from "./projects";
import Form from "./contact";
import Experience from "./experience";



import AOS from 'aos';

import 'aos/dist/aos.css';

// import "./Premier.pdf";

import style from "./main.css";

import mainLogo from './images/thilak-img1.png';

import video1 from "./images/bg-vid.mp4";



let sup = {
    fontWeight: '600',
    fontSize: '20px',
    color: "goldenrod"
}


let currentYear = new Date().getFullYear();

{/* <div className="col-5">
<img  src={mainLogo} alt="fireSpot" className="w-100"/>
</div> */}

function Mainsec() {
    return (
        <div className="main">
            <div id="myVideo">

                <video
                    autoPlay
                    muted
                    loop
                    className="bgViedo"
                >
                    <source
                        src={video1}
                        type="video/mp4"
                    />
                </video>

                <div className="about sec-dif container pb-0">



                    <Heading 
                        heeading="About Me"
                        subheeading='"Crafting Web Experiences"'
                    />

                    <img src={mainLogo} alt="fireSpot" className="w-100 d-block d-md-none" />
                    <div className="row">
                        <div className="col-md-10">

                            <p className="para" >Hey there! I'm Thilak B, a passionate and creative Frontend Web Developer with over <span> one<sup style={sup}>+</sup> </span>year of professional experience in the evolving world of web development. I thrive on bringing designs to life and crafting delightful user experiences through clean and efficient code. My focus is always on writing clean and maintainable code that not only looks great but also performs efficiently across various devices and browsers.</p>
                        </div>
                    </div>

                    <img src={mainLogo} alt="fireSpot" className="abs-img d-md-block d-none" />
                </div>
            </div>

            <div className="amenities  container pt-0 numbers">

                <Numbproj />

            </div>


            <div className="amenities sec-dif  experience" id="experience">
                <div className="container cont">
                    <Heading 
                        heeading="Experience"
                        subheeading='"Empowering Achievement, Fulfilling Duties"'
                    />
                    <  Experience />
                </div>
            </div>

            <div className="amenities sec-dif container" id="skills">
                <Heading
                    heeading="Skills"
                    subheeading='"Unlocking Potential, Unleashing Skills"'
                />
                <Skills />

            </div>



            <div className=" sec-dif" id="projects">
                <Heading
                    heeading="Projectes"
                    subheeading='"Turning Ideas into Reality"'
                />
                <Projects />
            </div>



            <div className="amenities sec-dif container" id="experties">
                <Heading
                    heeading="Expertise"
                    subheeading='"Empowering Achievement, Fulfilling Duties"'
                />
                <Expertise />

            </div>


            <div className="amenities sec-dif bg2 pb-0" id="contact">
                <Heading
                    heeading="Contact"
                    subheeading='"Empowering Achievement, Fulfilling Duties"'
                />
                <Form />

            </div>

            <div className="footer experience text-center py-2 fw-bold mt-4">
                <div className="row contIcons pb-4 d-flex justify-content-center">

                    <div className="col-2 text-center">
                        <a href="https://www.linkedin.com/in/thilak-gowda-061352236/" className="text-white" target={"_blank"}><i class="bi bi-linkedin"></i></a>
                    </div>

                    <div className="col-2 text-center">
                        <a href="mailto:thilakgowda1998@gmail.com" className="text-white" target={"_blank"}> <i class="bi bi-envelope-at-fill"></i></a>
                    </div>

                    <div className="col-2 text-center">
                        <a href="https://www.instagram.com/thilak6808/" className="text-white" target={"_blank"}><i class="bi bi-instagram icon col-2" aria-hidden="true"></i></a>
                    </div>


                    <div className="col-2 text-center">
                        <a className="text-white" href="https://wa.me/+918660750519?text=hi Thilak"> <i class="bi bi-whatsapp"></i></a>
                    </div>
                    <div className="col-2 text-center">
                        <a className="text-white" href="tel:+918660750519" target="_blank"><i class="bi bi-telephone-outbound-fill"></i></a>
                    </div>


                </div>

                © {currentYear} All Rights Reserved by Thilak B.
            </div>


          




        </div>);
}

export default Mainsec