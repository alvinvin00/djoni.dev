import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import React, {ReactNode} from "react";

type LayoutProps = { children: ReactNode };

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className={`w-full`}>
            <div
                className="shadow-gray-200 shadow-lg bg-white dark:bg-gray-700 transition-colors ease-out duration-500">
                <Navbar/>
            </div>
            <div
                className="py-1 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black transition-colors ease-out duration-500">
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
        </div>
    )
}
