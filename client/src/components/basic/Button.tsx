import React from "react";

interface IProps {
    className?: string;
    children?: React.ReactNode;
    btnType: "fill-pink" | "fill-blue" | "empty-pink" | "empty-blue" | "fill-gray";
    onClick: () => void;
}

export default function Button({ className, btnType, onClick, children }: IProps) {
    const btnStyle = {
        "fill-pink": "bg-M-pink text-M-white",
        "fill-blue": "bg-M-blue text-M-white",
        "empty-pink":
            "bg-transparent border-2 border-M-pink text-M-pink transition-color duration-300 hover:bg-M-pink hover:text-M-white",
        "empty-blue":
            "bg-transparent border-2 border-M-blue text-M-blue transition-color duration-300 hover:bg-M-blue hover:text-M-white",
        "fill-gray": "bg-[#EBEBEB] text-[#C6C6C6]",
    };

    return (
        <button
            className={`rounded-md p-2 font-bold min-w-fit ${btnStyle[btnType]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
