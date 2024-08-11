import s from "./ModalBackdrop.module.css";
import clsx from "clsx";
import { AnimationPov } from "../../constants.js";
import { useCallback, useEffect, useState } from "react";

const ModalBackdrop = ({ children, onClose }) => {
  const [active, setActive] = useState(false);

  const dynamicStyle = clsx(s.backdrop, active && s.active);

  const handleCloseModal = useCallback(
    (e) => {
      if (e.target === e.currentTarget || e.code === "Escape") {
        setActive(false);
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setActive(true);
      clearTimeout(id);
    }, AnimationPov.DURATION);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleCloseModal);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleCloseModal);
      document.body.removeAttribute("style");
    };
  }, [handleCloseModal]);

  return (
    <div className={dynamicStyle} onClick={handleCloseModal}>
      <div className={s.wrapper} onClick={handleCloseModal}>
        {children}
      </div>
    </div>
  );
};

export default ModalBackdrop;
