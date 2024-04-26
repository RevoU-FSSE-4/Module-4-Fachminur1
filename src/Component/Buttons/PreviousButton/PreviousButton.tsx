import React from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const PreviousButton: React.FC<Props> = ({ label, disabled, ...props }) => {
  return (
    <button
      {...props}
      className="rounded-md bg-green-400 hover:bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm"
    >
      {label}
    </button>
  );
};

export default PreviousButton;