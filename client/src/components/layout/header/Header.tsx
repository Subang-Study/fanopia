import React from "react";
import logo from "../../../assets/logo.svg";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
    return (
        <header className="sticky top-0 w-full h-14 px-2 flex items-center justify-between bg-M-white">
            <img className="h-4/5" src={logo} alt="logo" />
            <div className="w-8 text-center">
                <AiOutlineUser size={"100%"} strokeWidth={"1rem"} color="#3F3C41" />
            </div>
        </header>
    );
};

export default Header;
