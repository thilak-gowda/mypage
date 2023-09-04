import React, { useState } from "react";
import "./project1.css";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

import "./images/1.png";
import "./images/2.png";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const projectNames = ["Maportus", "Kinges Court", "Styro Next"];

function Image({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    const projName = projectNames[id - 1];

    return (
        <section className="sect-2">
            <section className="section">
                <div ref={ref}>
                    <img src={require(`./images/${id}.png`)} alt="project images" className="img" />
                </div>
                <motion.h3 style={{ y }}>{`#00${id}`}
                    <div>
                        {projName}
                    </div>
                </motion.h3>
            </section>
        </section>

    );
}

export default function Appp() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {[1, 2, 3].map((image) => (
                <Image key={image} id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}
