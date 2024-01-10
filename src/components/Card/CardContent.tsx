import React from "react";

export const CardContent = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={'px-2'}>{children}</div>
    )
};
