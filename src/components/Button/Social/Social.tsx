import {ReactNode} from "react";
import Link from "next/link";

type SocialProps = {
    link: string,
    buttonClass: string,
    children: ReactNode;
}

export const Social = (props: SocialProps) => {
    return (
        <button className={'rounded-lg p-1 ' + props.buttonClass}>
            <Link href={props.link}>
                {props.children}
            </Link>
        </button>
    )
}
