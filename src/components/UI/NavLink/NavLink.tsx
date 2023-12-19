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
        "group-hover:text-blue-600",
        'active:text-blue-400',
        'visited:text-purple-500',
        {"text-blue-400": pathname === href}
    ]);

    return (
        <div className="group transition-all flex flex-col">
            <Link href={href} className={linkClasses} >
                {children}
            </Link>
            <span className="block h-0.5 bg-blue-400 max-w-0 group-hover:max-w-full duration-500 ease-out"></span>
        </div>
    );
};
