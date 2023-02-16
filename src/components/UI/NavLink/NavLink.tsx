import React, {ReactNode} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";

export const NavLink = function ({href, children}: { href: string, children: ReactNode }) {
    const router = useRouter();

    return (
        <div
            className="group transition-all flex flex-col">
            <Link href={href} className={clsx([
                "group-hover:text-blue-600 text-md",
                {
                    "text-blue-400 font-semibold": router.pathname === href,
                }
            ])
            }>
                {children}
            </Link>
            <span
                className="block h-0.5 bg-blue-400 max-w-0 group-hover:max-w-full duration-500 ease-out"></span>
        </div>
    );
};
