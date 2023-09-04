import React from "react";

let expi= {

    fontSize :"20px",
    textAlign:"justify",
    fontStyle:"italic"

}

let lnk = {
    color:"goldenRod"
}


function Experience(){
    return(
        <div>
            <p style={expi}>
            I possess over a year of dedicated professional experience at <a href="https://www.imsolutions.co/" style={lnk}>IM Solutions</a>  and am currently an active member of their team. Alongside my full-time role, I have also successfully ventured into freelancing, further enriching my skill set. Throughout my journey, I have adeptly crafted and optimized more than 30 webpages, consistently achieving impressive web page scores of 90 and above. My proficiency extends to ensuring rapid loading times, impeccable design aesthetics, and meticulously structured code. This extensive experience at IM Solutions and in freelancing has not only refined my abilities but has also allowed me to consistently deliver high-quality web development solutions.
            </p>
        </div>
    )
}

export default Experience;