import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import type {ReactNode} from "react";

type LayoutProps = { children: ReactNode };

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <div className="w-full">
                <div className="shadow-gray-200 shadow-lg">
                    <Navbar/>
                </div>
                <main>
                    {children}
                </main>
                <div className="bg-gray-400">
                    <Footer/>
                </div>
            </div>
        </>
    )
}
