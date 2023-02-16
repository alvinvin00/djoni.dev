import {PropsWithChildren} from "react";
import clsx from "clsx";

type CardProps = PropsWithChildren<{
    className?: string
}>

export const Card = ({children, className}: CardProps) => {
    const cardClasses = clsx([
        className,
        "bg-white drop-shadow-md rounded-lg hover:scale-105 transition pb-2 h-fit"
    ])

    return (
        <div className={cardClasses}>
            {children}
        </div>
    )
}
