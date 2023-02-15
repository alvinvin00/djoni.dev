import React from "react";
import Image from "next/image";

type BlogEntriesProps = {
    children?: React.ReactNode
}

export const BlogEntries = (props: BlogEntriesProps) => {
    return (
        <div className="bg-white drop-shadow-md rounded-lg hover:scale-105 transition pb-2 h-fit">
            {props.children}
        </div>
    )
}

type BlogEntriesImageProps = {
    src: string
    alt: string
}
export const BlogEntriesImage = (props: BlogEntriesImageProps) => {
    return (
        <div className="relative aspect-video w-full min-h-fit h-full max-h-40 object-fill">
            <Image
                src={props.src}
                alt={props.alt}
                fill
            />
        </div>
    )
}

export const BlogEntriesTitle = (props: { children: React.ReactNode }) => {
    return (
        <h3 className="text-lg font-bold whitespace-nowrap overflow-clip overflow-ellipsis">
            {props.children}
        </h3>
    )
}

export const BlogEntriesDescription = (props: { children: React.ReactNode }) => {
    return (
        <p className="text-xs text-gray-700 line-clamp-3">
            {props.children}
        </p>
    )
}
