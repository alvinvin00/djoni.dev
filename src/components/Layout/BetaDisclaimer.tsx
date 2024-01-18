import {getDictionary} from "@/app/[lang]/dictionaries";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const BetaDisclaimer = async ({lang}: { lang: string }) => {
    const dict = await getDictionary(lang as 'en' | 'id')

    return (
        <section
            className={"container flex gap-2 text-sm font-bold p-2 rounded-lg bg-yellow-300 text-black my-1"}>
            <div>
                <FontAwesomeIcon icon={faTriangleExclamation} size={"sm"}/>
            </div>
            <div className={"w-auto"}>
                <h1>
                    {dict.home.beta_disclaimer}
                </h1>
            </div>
        </section>
    );
};
