import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import type {ReactNode} from "react";

type LayoutProps = { children: ReactNode };

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className={`w-full`}>
            <div className="shadow-gray-200 shadow-lg bg-white dark:bg-gray-700 transition-colors ease-out duration-500">
                <Navbar/>
            </div>
            <div
                className="py-1 bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 dark:from-gray-700 dark:via-gray-900 dark:to-black transition-colors ease-out duration-500">
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
        </div>
    )
}
