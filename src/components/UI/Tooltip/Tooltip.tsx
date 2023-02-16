import React, {ReactNode} from "react";
import clsx from "clsx";

type TooltipProps = {
    title: string;
    children: ReactNode;

    position: 'top' | 'bottom' | 'left' | 'right'
}

export const Tooltip = (props: TooltipProps) => {
    return (
        <div className="relative inline-block group">
            <div
                className={clsx([
                        'absolute z-10 w-max bg-gray-100 rounded-lg px-3 py-2',
                        'transition-opacity ease-in-out',
                        'collapse group-hover:visible',
                        'opacity-0 group-hover:opacity-100',
                        // 'visible',
                    ],
                    {
                        'top': 'top-1',
                        'bottom': 'mt-1 top-full left-1/2 transform -translate-x-1/2',
                        'left': 'left-1',
                        'right': 'right-1',
                    }[props.position])}>
                <span className="text-center text-sm">{props.title}</span>
            </div>
            {props.children}
        </div>
    )

}
