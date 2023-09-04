import React from "react";
import img1 from "./images/1.png";
import "./projects.css"; // Import the CSS file
import img2 from "./images/3.png";
import img3 from "./images/2.png";

import mobimg1 from "./images/maportus.png";
import mobimg2 from "./images/styronext.png";
import mobimg3 from "./images/kingescort.png"
import { row } from 'react-bootstrap';





function Projects() {
    return (
        <section id="container">
            <div className="project">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="img-rel">

                            <a href="https://maportus.com/" target={"_blank"}> <picture>
                                <source media="(min-width:768px)" srcset={img1} />
                                <source media="(max-width:768px)" className="w-100" srcset={mobimg1} />
                                <img src={img1} className="projImg d-block mx-auto" loading="lazy" alt="Private family office" title="Private family office" />
                            </picture></a>

                            {/* <img src={img1} alt="" className="w-50 d-block mx-auto" /> */}
                        </div>
                    </div>
                    <div className="col-md-6 projInfo">
                        <a href="https://maportus.com/" target={"_blank"}> <img src="https://maportus.com/pictures/logo-%20maportuz.webp" alt="" className="projLogo" /></a>
                        <p className="abtProj ">
                            Introducing <span> <a href="https://maportus.com/" target={"_blank"}>Map Ortus  </a></span>
                            – India's foremost family office advisory team. Making my debut as a web developer. They have an impressive journey of advising over USD 4 billion across 90 families comes to life
                        </p>
                    </div>
                </div>
            </div>

            <div className="project morProjects ">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="img-rel">

                            <a href="https://styronext.com/" target={"_blank"}>   <picture>
                                <source media="(min-width:768px)" srcset={img2} />
                                <source media="(max-width:768px)" className="w-100" srcset={mobimg2} />
                                <img src={img2} className="projImg d-block mx-auto" loading="lazy" alt="Private family office" title="Private family office" />
                            </picture> </a>

                            {/* <img src={img2} alt="" className="w-50 d-block mx-auto" /> */}
                        </div>
                    </div>
                    <div className="col-md-6 projInfo">
                        <a href="https://styronext.com/" target={"_blank"}><img src="https://styronext.com/staging/images/logo.png" alt="" className="projLogo" /> </a>
                        <p className="abtProj ">
                            Welcome to <span> <a href="https://styronext.com/" target={"_blank"}>StyroNext  </a></span>
                            - where architectural innovation meets breathtaking beauty.As this was my second website venture, I've elevated my coding skills, optimized the website's structure, and embraced countless enhancements.
                        </p>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="img-rel">

                            <a href="https://metrokingscourt.in/" target={"_blank"}>  <picture>
                                <source media="(min-width:768px)" srcset={img3} />
                                <source media="(max-width:768px)" className="w-100" srcset={mobimg3} />
                                <img src={img3} className="projImg d-block mx-auto" loading="lazy" alt="Private family office" title="Private family office" />
                            </picture></a>

                            {/* <img src={img3} alt="" className="w-50 d-block mx-auto" /> */}
                        </div>
                    </div>
                    <div className="col-md-6 projInfo">
                        <a href="https://metrokingscourt.in/" target={"_blank"}> <img src="https://metrokingscourt.in/logo.png" alt="" className="projLogo" /></a>
                        <p className="abtProj ">
                            Welcome to <span> <a href="https://metrokingscourt.in/" target={"_blank"}>Metro King's Court</a></span>
                            - Shaping Architectural Visions. A visionary construction company, through this landing page I've crafted.
                        </p>
                    </div>
                </div>

            </div>

            <div className="morProjects py-4">
                <div className="row d-flex align-items-center extProj w-100">

                    <div className="col-md-3 text-center">
                        <a href="hhttps://primerosehills.prestigegroup.live/" target={"_blank"}>Prestigegroup </a>
                    </div>

                    <div className="col-md-3 text-center">
                        <a href="https://www.housso.co.in/" target={"_blank"}>Housso  </a>
                    </div>

                    <div className="col-md-3 text-center">
                        <a href="https://esteemsouthpark.com/" target={"_blank"}>Esteemsouthpark </a>
                    </div>

                    <div className="col-md-3 text-center">
                        <a href="https://aashrithaa.com/" target={"_blank"}>Aashrithaa</a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;
