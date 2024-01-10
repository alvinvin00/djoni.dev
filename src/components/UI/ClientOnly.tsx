import {useIsClient} from "@uidotdev/usehooks";
import React from "react";

export const ClientOnly = ({children}: { children: React.ReactNode }) => {
    const isClient = useIsClient();

    return isClient ? <>{children}</> : null;
}
