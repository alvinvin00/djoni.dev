'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "@/components/UI/NavLink";
import { useToggle } from "@uidotdev/usehooks";
import { ClientOnly } from "@/components/UI/ClientOnly";
import { DarkModeButton } from "@/components/Button/DarkMode";
import { Dialog } from "@base-ui-components/react/dialog";

const Navlinks = () => {
    return (
        <>
            <NavLink href={`/now`}>
                Now
            </NavLink>
            <NavLink href={`/projects`}>
                Projects
            </NavLink>
            <NavLink href={`/blog`}>
                Blog
            </NavLink>
            <NavLink href={`/about`}>
                About
            </NavLink>
        </>
    );
};

export const Navbar = () => {
    const [isOpen, setOpen] = useToggle(false);

    return (
        <nav className="container sticky top-0 flex flex-col md:flex-row p-4 text-xl">
            <div className="flex grow justify-between items-center text-black dark:text-white">
                <Link href='/' className="inline transition-all hover:text-blue-400 hover:scale-110">
                    <h6 className={'text-lg font-bold'}>
                        Djoni&apos;s Den
                    </h6>
                </Link>
                <div className="inline-flex gap-4 md:mr-4">
                    <ClientOnly>
                        <DarkModeButton />
                    </ClientOnly>
                    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
                        <Dialog.Trigger className="rounded-2xl p-1 md:hidden">
                            <FontAwesomeIcon icon={faBars} />
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Backdrop className={'fixed backdrop-blur-xs inset-0 z-50'} />
                            <Dialog.Popup className={'fixed top-3 left-0 right-0 p-2 max-w-full mx-4 rounded-2xl bg-blue-300 dark:bg-gray-700 z-50'}>
                                <div className={'flex flex-row justify-between items-center text-black dark:text-white'}>
                                    <h6 className={'text-lg font-bold'}>Djoni&apos;s Den</h6>
                                    <Dialog.Close className={'text-black dark:text-white p-1 rounded'}>
                                        <FontAwesomeIcon icon={faClose} />
                                    </Dialog.Close>
                                </div>
                                <hr />
                                <div className={'flex flex-col gap-4'}>
                                    <Navlinks />
                                </div>
                            </Dialog.Popup>
                        </Dialog.Portal>
                    </Dialog.Root>
                </div>
            </div>
            <div className={'hidden md:flex md:flex-row gap-4 transition duration-500'}>
                <Navlinks />
            </div>
        </nav>
    )
}
