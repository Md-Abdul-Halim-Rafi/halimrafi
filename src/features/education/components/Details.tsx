import React, { useRef } from "react";
import { motion } from "framer-motion";

import LiIcon from "@/component/LiIcon";

interface DetailsProps {
    institution: string;
    course: string;
    institutionLink: string;
    time: string;
    grade: number;
    gradeUnit: string;
}

const Details = (props: DetailsProps) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className="m-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between">
            <LiIcon reference={ref} />
            <motion.div
                className="flex flex-col items-start"
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <a
                    href={props.institutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold"
                >
                    <h3 className="capitalize font-bold text-2xl text-dark">
                        {props.institution}
                    </h3>
                </a>
                <p className="font-medium text-dark/80 m-0">{props.time}</p>
                <p className="font-medium text-dark">
                    {props.course} | {+props.grade} {props.gradeUnit}
                </p>
            </motion.div>
        </li>
    )
}

export default Details;