import React, { useState, useEffect, useRef } from "react";
import style from './numbproj.css';

import AOS from 'aos';

import 'aos/dist/aos.css';

function Numbproj() {

    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, []);

    const [startnumber, setStartNumber] = useState(0);
    const [startnumber1, setStartNumber1] = useState(0);
    const [startnumber2, setStartNumber2] = useState(0);

    const ref = useRef(null); // Create a ref for the component

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                // Start the timers when the component becomes visible
                const timer1 = setInterval(() => {
                    setStartNumber(prevNumber => Math.min(prevNumber + 1, 20));
                }, 200);

                const timer2 = setInterval(() => {
                    setStartNumber1(prevNumber => Math.min(prevNumber + 1, 5));
                }, 800);

                const timer3 = setInterval(() => {
                    setStartNumber2(prevNumber => Math.min(prevNumber + 1, 10));
                }, 400);

                return () => {
                    clearInterval(timer1);
                    clearInterval(timer2);
                    clearInterval(timer3);
                };
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);


    return (
        <div className="row" ref={ref}> {/* Attach the ref to the outermost element */}
            <div className="col-md-4">
                <div className="head-cont">
                    <h3 className="numb" data-aos="flip-up"> {startnumber}+ </h3>
                    <p>Landing Pages</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="head-cont">
                    <h3 className="numb" data-aos="flip-up"> {startnumber1}+ </h3>
                    <p>Emailers</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="head-cont">
                    <h3 className="numb" data-aos="flip-up"> {startnumber2}+ </h3>
                    <p>Websites</p>
                </div>
            </div>
        </div>
    );
}

export default Numbproj;
