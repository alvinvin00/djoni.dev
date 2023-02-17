import React, {PropsWithoutRef} from "react";
import Image from "next/image";
import {Card} from "@/components/Card/Card";

type BlogEntriesProps = PropsWithoutRef<{
    title: string,
    summary: string,
    imageUrl: string,
    imageDescription: string,
    createdAt: Date
}>

export const BlogCard = (props: BlogEntriesProps) => {
    return (
        <Card>
            <div className="relative aspect-video w-full min-h-fit h-full max-h-40 object-fill">
                {/*<Image*/}
                {/*    src={props.imageUrl}*/}
                {/*    alt={props.imageDescription}*/}
                {/*    fill*/}
                {/*/>*/}
            </div>
            <h3 className="text-lg font-bold whitespace-nowrap overflow-clip overflow-ellipsis">
                {props.title}
            </h3>
            <p className="text-xs font-light line-clamp-3">
                {props.summary}
            </p>
        </Card>
    )
}
