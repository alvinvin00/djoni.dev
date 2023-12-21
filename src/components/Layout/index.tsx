import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import type {ReactNode} from "react";

type LayoutProps = { children: ReactNode };

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className={`w-full`}>
            <div
                className="shadow-gray-200 shadow-lg bg-white dark:bg-gray-700 transition-colors ease-out duration-500">
                <Navbar/>
            </div>
            <div
                className="py-1 bg-gradient-to-b from-white via-blue-400 to-blue-700 dark:from-gray-700 dark:via-gray-900 dark:to-black transition-colors ease-out duration-500">
                <div className={'container lg:max-w-screen-lg'}>
                    <main>
                        {children}
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
