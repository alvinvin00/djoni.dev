import Link from 'next/link'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useDisclosure} from "@/hooks/useDisclosure";
import clsx from "clsx";

export const Navbar = () => {
    const {isOpen, toggle} = useDisclosure(true)

    const navbarMenuClasses = clsx([
            'flex-col gap-4 items-center',
            "md:flex-row md:flex"
        ], {
            'hidden': !isOpen,
            'flex': isOpen,
        },
    )

    return (
        <nav className="container sticky top-0 flex flex-col md:flex-row p-4 text-xl">
            <div className="flex flex-grow justify-between items-center">
                <Link href='/' className="text-xl inline">Alvin&apos;s Blog</Link>
                <div className="inline md:hidden">
                    <button className="rounded-2xl p-1" onClick={() => {
                        toggle()
                    }}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </div>
            <div className={navbarMenuClasses}>
                <Link href="/showcase" className="hover:text-blue-400 active:text-blue-600">Showcase</Link>
                <Link href="/about" className="hover:text-blue-400 active:text-blue-600">About</Link>
            </div>
        </nav>
    )
}
