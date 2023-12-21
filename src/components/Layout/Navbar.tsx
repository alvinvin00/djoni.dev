'use client'

import Link from 'next/link'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import React, {useEffect} from "react";
import {NavLink} from "@/components/UI/NavLink";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import {useLocalStorage, useToggle} from "@uidotdev/usehooks";
import {useParams} from "next/navigation";

export const Navbar = () => {
    const {lang} = useParams<{ lang: string }>();

    const [isOpen, setOpen] = useToggle(false);
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    useEffect(() => {
        if (darkMode) {
            window.document.body.classList.add('dark');
        } else {
            window.document.body.classList.remove('dark');
        }
    }, [darkMode]);

    const navbarMenuClasses = clsx([
            'flex-col gap-4 items-center transition transition-all duration-500',
            "md:flex md:flex-row",
        ], {
            'hidden': !isOpen,
            'flex': isOpen,
        },
    )

    return (
        <nav className="container sticky top-0 flex flex-col md:flex-row p-4 text-xl">
            <div className="flex flex-grow justify-between items-center text-black dark:text-white">
                <Link href='/' className="text-lg font-bold inline transition-all hover:text-blue-400 hover:scale-110">
                    Alvin&apos;s Blog
                </Link>
                <div className="inline-flex gap-4 md:mr-4">
                    <button
                        className="transition-all hover:text-blue-400 active:scale-75"
                        title={'Toggle Dark Mode'}
                        onClick={() => {
                            setDarkMode((prevState) => !prevState);
                        }}>
                        <FontAwesomeIcon icon={darkMode ? faMoon : faSun}/>
                    </button>
                    <button className="rounded-2xl p-1 md:hidden" onClick={() => {
                        setOpen(!isOpen)
                    }}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </div>
            <div className={navbarMenuClasses}>
                <NavLink href={`/${lang}/showcase`}>
                    Showcase
                </NavLink>
                <NavLink href={`/${lang}/blog`}>
                    Blog
                </NavLink>
                <NavLink href={`/${lang}/about`}>
                    About
                </NavLink>
            </div>
        </nav>
    )
}
