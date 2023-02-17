import {PropsWithChildren} from "react";
import Link from "next/link";
import clsx from "clsx";

type SocialProps = {
    link: string,
    buttonClass: string,
}

export const Social = (props: PropsWithChildren<SocialProps>) => {
    const buttonClasses = clsx([
        'rounded-lg p-1',
        props.buttonClass
    ])

    return (
        <button className={buttonClasses}>
            <Link href={props.link}>
                {props.children}
            </Link>
        </button>
    )
}
