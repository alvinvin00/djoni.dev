'use client'

import Link from 'next/link'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faClose} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {NavLink} from "@/components/UI/NavLink";
import {useToggle} from "@uidotdev/usehooks";
import {useParams} from "next/navigation";
import {Button, DialogTrigger, Modal, ModalOverlay} from "react-aria-components";
import {ClientOnly} from "@/components/UI/ClientOnly";
import {DarkModeButton} from "@/components/Button/DarkMode";

export const Navbar = () => {
    const {lang} = useParams<{ lang: string }>();

    const [isOpen, setOpen] = useToggle(false);


    return (
        <nav className="container sticky top-0 flex flex-col md:flex-row p-4 text-xl">
            <div className="flex flex-grow justify-between items-center text-black dark:text-white">
                <Link href='/' className="text-lg font-bold inline transition-all hover:text-blue-400 hover:scale-110">
                    <h6>
                        Djoni&apos;s Den
                    </h6>
                </Link>
                <div className="inline-flex gap-4 md:mr-4">
                    <ClientOnly>
                        <DarkModeButton/>
                    </ClientOnly>
                    <DialogTrigger>
                        <Button className="rounded-2xl p-1 md:hidden" onPress={() => {
                            setOpen(true)
                        }}>
                            <FontAwesomeIcon icon={faBars}/>
                        </Button>
                        <ModalOverlay className={'fixed backdrop-blur-sm inset-0 z-50'} isOpen={isOpen}>
                            <Modal
                                className={'fixed top-3 left-0 right-0 p-2 max-w-full mx-4 rounded-2xl bg-blue-300 dark:bg-gray-700 z-50'}
                            >
                                <div className={'flex flex-row justify-between'}>
                                    <h6 className={'text-black dark:text-white'}>Djoni&apos;s Den</h6>
                                    <Button className={'text-black dark:text-white'} onPress={() => {
                                        setOpen(false)
                                    }}>
                                        <FontAwesomeIcon icon={faClose}/>
                                    </Button>
                                </div>
                                <hr/>
                                <div className={'flex flex-col gap-4'}>
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
                            </Modal>
                        </ModalOverlay>
                    </DialogTrigger>
                </div>
            </div>
            <div className={'hidden md:flex md:flex-row gap-4 transition duration-500'}>
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
