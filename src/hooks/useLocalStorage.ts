import {useState} from "react";

type SetStateDispatcher<T> = (value: T | ((val: T) => T)) => void;

type UseLocalStorageFn = <T>(key: string, initialValue: T) => [T, SetStateDispatcher<T>];

export const useLocalStorage: UseLocalStorageFn = <T>(key: string, initialValue: T) => {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });

    const setValue: SetStateDispatcher<T> = (value) => {
        try { // Allow value to be a function, so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(e);
        }
    }

    return [storedValue, setValue];
}
