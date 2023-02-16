import React, {ReactNode} from "react";
import Link from "next/link";

export const NavLink = function ({href, children}: { href: string, children: ReactNode }) {
    return (
        <div
            className="group transition-all flex flex-col">
            <Link href={href} className="group-hover:text-blue-400">
                {children}
            </Link>
            <span
                className="block h-0.5 bg-blue-400 max-w-0 group-hover:max-w-full duration-500 ease-out"></span>
        </div>
    );
};
