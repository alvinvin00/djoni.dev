'use client'

import {useLocalStorage} from "@uidotdev/usehooks";
import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";

export const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    useEffect(() => {
        if (darkMode) {
            window.document.body.classList.add('dark');
        } else {
            window.document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button
            className="transition-all hover:text-blue-400 active:scale-75"
            title={'Toggle Dark Mode'}
            onClick={() => {
                setDarkMode((prevState) => !prevState);
            }}>
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun}/>
        </button>
    )
}
