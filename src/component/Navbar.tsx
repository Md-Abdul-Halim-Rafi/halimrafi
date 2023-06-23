import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import Logo from "./Logo";
import {
    GithubIcon, LinkedInIcon, MediumIcon, WhatsAppIcon
} from "@/icons/socials";

import { navbarStrings } from "@/utils/staticData";

const MotionLink = motion(Link);

interface NavLinkProps {
    href: string;
    text: string;
}

interface NavSocialLinkProps {
    href: string;
    ariaLabel: string;
    icon: React.ReactNode;
}

const NavLink = (props: NavLinkProps) => {

    const router = useRouter();

    const { href, text } = props;

    return (
        <Link href={href} className="relative group text-dark">
            {text}
            <span
                className={`h-[1px] inline-block bg-dark transition-[width] duration-300 ease-in-out group-hover:w-full absolute left-0 -bottom-0.5 ${router.asPath === href ? "w-full" : "w-0"}`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const NavSocialLink = (props: NavSocialLinkProps) => {

    const { href, icon, ariaLabel } = props;

    return (
        <MotionLink
            href={href}
            target="_blank"
            aria-label={ariaLabel}
            rel="noopener noreferrer"
            className="relative group"
            whileHover={{
                translateY: 2,
                transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
        >
            {icon}
        </MotionLink>
    )
}

const Navbar = () => {
    return (
        <header
            className="w-full bg-white px-32 py-8 font-medium flex items-center justify-between"
        >
            <nav className="gap-10 flex">
                <NavLink href="/" text="Home" />
                <NavLink href="/projects" text="Projects" />
                <NavLink href="/articles" text="Articles" />
            </nav>

            <nav className="flex items-center gap-4">
                <NavSocialLink
                    href={navbarStrings.socials.github}
                    icon={<GithubIcon fill="#075454" />}
                    ariaLabel="Github Profile - Md-Abdul-Halim-Rafi"
                />
                <NavSocialLink
                    href={navbarStrings.socials.whatsapp}
                    icon={<WhatsAppIcon fill="#075454" />}
                    ariaLabel="WhatsApp Account - Md-Abdul-Halim-Rafi"
                />
                <NavSocialLink
                    href={navbarStrings.socials.linkedin}
                    icon={<LinkedInIcon fill="#075454" />}
                    ariaLabel="LinkedIn Profile - md-abdul-halim-rafi"
                />
                <NavSocialLink
                    href={navbarStrings.socials.medium}
                    icon={<MediumIcon fill="#075454" />}
                    ariaLabel="Medium Profile - @mdabdulhalimrafi"
                />
            </nav>

            {/* <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div> */}
        </header>
    )
}

export default Navbar