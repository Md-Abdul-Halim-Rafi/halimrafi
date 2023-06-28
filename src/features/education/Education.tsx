import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

import Details from "./components/Details";

const Education = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className="my-32 relative">
            <h2 className="font-bold text-8xl mb-32 w-full text-center text-dark">
                Education
            </h2>

            <div
                ref={ref}
                className="w-[75%] mx-auto relative"
            >
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-1 w-[4px] bg-dark origin-top h-full"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        institution="University of Dhaka"
                        course="BS (Hons) in Applied Mathematics"
                        institutionLink="https://www.du.ac.bd"
                        time="Jan 2018 - Jan 2023"
                        grade={3.38}
                        gradeUnit="CGPA"
                    />
                    <Details
                        institution="Dhaka Residential Model College"
                        course="Higher Secondary Certificate in Science"
                        institutionLink="http://www.drmc.edu.bd"
                        time="Jul 2015 - Jun 2017"
                        grade={5.00}
                        gradeUnit="GPA"
                    />
                </ul>
            </div>
        </div>
    );
}

export default Education;
