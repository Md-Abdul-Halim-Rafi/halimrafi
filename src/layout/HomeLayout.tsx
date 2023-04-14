import React from "react";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

interface HomeLayoutProps {
    children: React.ReactNode
}

const HomeLayout = (props: HomeLayoutProps) => {
    return (
        <div>
            <Navbar />

            {props.children}

            <Footer />
        </div>
    )
}

export default HomeLayout