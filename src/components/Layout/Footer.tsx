'use client';

import {socials} from "@/config/socials";
import {useParams} from "next/navigation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Footer = () => {
    const {lang} = useParams<{ lang: string }>()

    return (
        <footer className={"mt-2 py-4 text-white bg-blue-400 dark:bg-transparent"}>
            <div className={'flex flex-row justify-between container lg:max-w-screen-lg'}>
                <div className={'col-span-6'}>
                    <p>
                        &copy; 2024 Djoni&apos;s Den, All Rights Reserved. <br/>
                        Made with love and NextJS, hosted on Vercel
                    </p>
                </div>
                <div className={'col-span-6 flex flex-row items-center gap-1'}>
                    <p>
                        Find me on Cyberspace:
                    </p>
                    {
                        socials.map((social) => (
                            <Link key={social.id} href={social.url} title={social.title ?? social.name}>
                                <span className={'rounded p-2 size-8 grid place-items-center'}
                                     style={{
                                         backgroundColor: social.color,
                                         color: 'white',
                                     }}>
                                    <FontAwesomeIcon icon={social.icon}/>
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}
