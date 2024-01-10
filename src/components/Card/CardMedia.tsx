import React from "react";

export const CardMedia = ({children}: {
    children: React.ReactNode
}) => {
    return <div className={'relative aspect-video w-full min-h-fit h-full max-h-40 object-fill'}>{children}</div>
}
