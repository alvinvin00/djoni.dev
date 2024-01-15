'use client'
import React, {ReactNode} from "react";
import Link from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";

export const NavLink = function ({href, children}: { href: string, children: ReactNode }) {
    const pathname = usePathname()

    const linkClasses = clsx([
        "text-md font-semibold",
        "dark:text-white",
        "group-hover:drop-shadow-2xl",
        "duration-300 ease-in-out",
        {"text-blue-400": pathname === href}
    ]);

    return (
        <div className="group transition-all flex flex-col">
            <Link href={href} className={linkClasses}>
                {children}
            </Link>
        </div>
    );
};
