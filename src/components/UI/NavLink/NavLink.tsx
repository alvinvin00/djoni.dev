'use client'
import React, {ReactNode} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const NavLink = function ({href, children}: { href: string, children: ReactNode }) {
    const pathname = usePathname()

    return (
        <div className="group transition-all flex flex-col">
            <Link
                href={href}
                className={`text-md font-semibold text-black dark:text-white data-[current=true]:text-blue-400 dark:data-[current=true]:text-blue-400 group-hover:text-blue-400 group-hover:drop-shadow-2xl group-hover:drop-shadow-blue-400 duration-300 ease-in-out`
                }
                data-current={pathname === href}
            >
                {children}
            </Link>
        </div>
    );
};
