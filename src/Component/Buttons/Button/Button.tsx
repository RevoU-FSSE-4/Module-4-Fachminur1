import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: any;
}

const Tombol = ({label, onClick, ...props}: Props) => {
    return (
        <button {...props} 
        className="rounded-md bg-orange-300 hover:bg-orange-400 px-3 py-2 text-sm font-semibold text-sky-950 shadow-sm"> 
        {label}</button>
    )
}
export default Tombol;