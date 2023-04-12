import React from "react";
import Link from "next/link";
import { Fira_Code } from "next/font/google";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const firaCode = Fira_Code({
    weight: ["600"],
    subsets: ["latin"],
	variable: "--font-fira-code"
});

const Logo = () => {
    return (
        <div
            className="flex items-center justify-between mt-2"
        >
            <MotionLink
                href="/"
                className={`${firaCode.className} h-16 flex items-center justify-center text-xl font-bold`}
                whileHover={{
                    transition: { duration: 1, repeat: Infinity },
                    color: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                }}
            >
                {"<HalimRafi />"}
            </MotionLink>
        </div>
    )
}

export default Logo