import Link from 'next/link'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useDisclosure} from "@/hooks/useDisclosure";
import clsx from "clsx";
import React from "react";
import {NavLink} from "@/components/UI/NavLink";


export const Navbar = () => {
    const {isOpen, toggle} = useDisclosure()

    const navbarMenuClasses = clsx([
            'flex-col gap-4 items-center',
            "md:flex md:flex-row"
        ], {
            'hidden': !isOpen,
            'flex': isOpen,
        },
    )

    return (
        <nav className="container sticky top-0 flex flex-col md:flex-row p-4 text-xl">
            <div className="flex flex-grow justify-between items-center">
                <Link href='/' className="text-lg font-bold inline hover:text-blue-400 transition-all hover:scale-110">
                    Alvin&apos;s Blog
                </Link>
                <div className="inline md:hidden">
                    <button className="rounded-2xl p-1" onClick={() => {
                        toggle()
                    }}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </div>
            <div className={navbarMenuClasses}>
                <NavLink href="/showcase">
                    Showcase
                </NavLink>
                <NavLink href="/about">
                    About
                </NavLink>
            </div>
        </nav>
    )
}
