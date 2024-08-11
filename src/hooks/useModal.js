import { ModalContext } from "../context/ModalProvider.jsx";
import { useContext } from "react";

export const useModal = () => useContext(ModalContext);