import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, StackOverflowIcon } from "@/icons/socials";

interface NavLinkProps {
    href: string;
    text: string;
}

const NavLink = (props: NavLinkProps) => {

    const router = useRouter();

    const { href, text } = props;


    return (
        <Link href={href} className="relative group">
            {text}
            <span
                className={`h-[1px] inline-block bg-dark transition-[width] duration-300 ease-in-out group-hover:w-full absolute left-0 -bottom-0.5 ${router.asPath === href ? "w-full" : "w-0"}`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const Navbar = () => {
    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between"
        >
            <nav className="gap-10 flex">
                <NavLink href="/" text="Home" />
                <NavLink href="/about" text="About" />
                <NavLink href="/projects" text="Projects" />
                <NavLink href="/articles" text="Articles" />
            </nav>

            <nav className="flex items-center gap-4">
                <Link href="/">
                    <GithubIcon />
                </Link>
                <Link href="/about">
                    <LinkedInIcon />
                </Link>
                <Link href="/projects">
                    <StackOverflowIcon />
                </Link>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                {/* <Logo /> */}
            </div>
        </header>
    )
}

export default Navbar