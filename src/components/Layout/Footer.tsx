'use client';

import {socials} from "@/config/socials";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={"mt-2 py-4 text-white bg-blue-400 dark:bg-transparent"}>
            <div className={'container flex flex-col-reverse md:flex-row justify-between gap-2'}>
                <div className={'col-span-6'}>
                    <p>
                        &copy; 2024 Djoni&apos;s Den, All Rights Reserved. <br/>
                        Made with love and NextJS, hosted on Vercel
                    </p>
                </div>
                <div className={'col-span-6 flex flex-row items-center gap-1'}>
                    <h6 className={'font-bold'}>
                        Find me on Cyberspace:
                    </h6>
                    {
                        socials.map((social) => (
                            <Link key={social.id} href={social.url} title={social.title ?? social.name}>
                                <span className={'rounded-sm p-2 size-8 grid place-items-center text-white'}
                                      style={{
                                          backgroundColor: social.color,
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
