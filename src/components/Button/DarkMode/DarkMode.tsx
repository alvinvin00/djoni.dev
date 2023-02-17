import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons';
import React from "react";
import {useDarkMode} from "@/hooks/useDarkMode";

export const DarkMode = () => {
    const [darkMode, toggleDarkMode] = useDarkMode(false);

    return (
        <button className="transition-all hover:text-blue-400 active:scale-75" onClick={() => {
            toggleDarkMode();
        }}>
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun}/>
        </button>
    )
}
