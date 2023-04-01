import React from "react";
import Navbar from "@/component/Navbar";

interface HomeLayoutProps {
    children: React.ReactNode
}

const HomeLayout = (props: HomeLayoutProps) => {
    return (
        <div>
            <Navbar />

            {props.children}
        </div>
    )
}

export default HomeLayout