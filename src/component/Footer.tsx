import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { userInformation } from "@/utils/staticData";
import MailIcon from "@/icons/MailIcon";
import HeartIcon from "@/icons/HeartIcon";

const MotionLink = motion(Link);

const Footer = () => {
    return (
        <footer 
            className="px-32 flex justify-between items-center text-gray-500 bg-white py-8"
        >
            <p>2023 © All Rights Reserved</p>
            <MotionLink 
                target="_blank"
                className="flex items-center gap-1"
                href={`mailto:${userInformation.email}`} 
                whileHover={{
                    textDecoration: "underline"
                }}
            >
                <MailIcon fill="#6A7280" />
                <p>{userInformation.email}</p>
            </MotionLink>
            
            <div className="flex items-center gap-1">
                <p>Made with love</p>
                <HeartIcon fill="#DC2737" />
            </div>
        </footer>
    )
}

export default Footer