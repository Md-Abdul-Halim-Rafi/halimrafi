import React, { useRef } from "react";
import { motion } from "framer-motion";

import LiIcon from "@/component/LiIcon";

interface DetailsProps {
    company: string;
    position: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
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
                <h3 className="capitalize font-bold text-2xl text-dark">
                    {props.position} &nbsp;
                    <a
                        href={props.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-bold"
                    >
                        @{props.company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/80">
                    {props.time} &nbsp; | &nbsp; {props.address}
                </span>
                <p className="font-medium text-dark">{props.work}</p>
            </motion.div>
        </li>
    )
}

export default Details;