import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
    return (
        <header className="sticky top-0 flex items-center justify-between w-full px-2 h-14 bg-M-white">
            <Link to={"/"}>
                <img className="h-4/5" src={logo} alt="logo" />
            </Link>
            <div className="w-8 text-center">
                <AiOutlineUser size={"100%"} strokeWidth={"1rem"} color="#3F3C41" />
            </div>
        </header>
    );
};

export default Header;
