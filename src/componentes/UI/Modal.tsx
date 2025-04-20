import React from "react";

interface ModalProps {
  isVisible?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === "wrapper" && onClose) {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-20 inset-0 bg-black/60 backdrop-blur-xs flex justify-center items-center text-zinc-900"
      id="wrapper"
      onClick={handleClose}
    >
      <div
        className="w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white p-4 rounded-sm flex flex-col justify-center">
          <div className="mb-3">
            <h2 className="font-serif text-center text-xl md:text-2xl font-semibold text-teal-500">
              Realize uma nova consulta!
            </h2>
            <p className="font-sans text-slate-600 text-center max-w-4xl mx-auto text-base sm:text-base">
              Descubra se você foi vítima ou não de fraude.
            </p>
          </div>
          <div className="flex justify-center w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
