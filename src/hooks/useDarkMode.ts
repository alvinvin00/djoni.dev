import {useLocalStorage} from "@/hooks/useLocalStorage";
import {useEffect} from "react";

type UseDarkModeFn = (initialValue: boolean) => [boolean, () => void];

export const useDarkMode: UseDarkModeFn = (initialValue = false) => {
    const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', initialValue);

    const toggleDarkMode = () => {
        setDarkMode((prevState) => !prevState);
    }

    useEffect(() => {
        if (darkMode) {
            window.document.body.classList.add('dark');
        } else {
            window.document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return [darkMode, toggleDarkMode];
}
