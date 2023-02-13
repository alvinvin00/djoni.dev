import {useState} from "react";

export const useDisclosure = (initialOpen: boolean = false) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    const onOpen = () => setIsOpen(true);

    const onClose = () => setIsOpen(false);

    const toggle = () => setIsOpen((prev) => !prev);

    return {isOpen, onOpen, onClose, toggle};
}
