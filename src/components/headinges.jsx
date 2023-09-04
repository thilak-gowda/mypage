import React from "react";
import style from './headinges.css';

import AOS from 'aos';

import 'aos/dist/aos.css';
import { useEffect } from "react";

let hedsty = {
    background: "-webkit-linear-gradient(#787474, #c3bdbd, #eee, #eee)"
}

function Heading(props) {
    useEffect(()=> {
        AOS.init({duration:1000})
    },[])
    return <div>
        <div className="head-container pt-2" >
            <h2 data-aos="zoom-in"> {props.heeading} </h2>
             <p >{props.subheeading}</p>   
        </div>
    </div>
}



export default Heading;