// import 'modal.css';
import React, { ReactElement, useEffect } from "react";
import ReactPortal from "./reactportal";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
interface Modal {
  children: React.ReactElement;
  isOpen: boolean;
  handleClose: () => void;
}

const dropin = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  visible: {
    y: "0",
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ children, isOpen, handleClose }: Modal) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const wapperClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).id === "wapper") handleClose();
  };

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          <div
            id="wapper"
            className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-40 bg-neutral-400 bg-opacity-5 backdrop-blur-sm"
            onClick={wapperClose}
          >
            <motion.div
              className="relative min-w-fit min-h-fit flex flex-col"
              onClick={(e) => e.stopPropagation()}
              variants={dropin}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="relative min-w-fit min-h-fit flex flex-col rounded box-border bg-none font-cairo overflow-hidden ">
                {children}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
            </AnimatePresence> */}
      </>
    </ReactPortal>
  );
};

export default Modal;
