import React from "react";
import { Outlet } from "react-router";
import logo from "../logo.svg";
import { AiOutlineUser } from "react-icons/ai";

type Props = {};

const Layout = (props: Props) => {
    return (
        <>
            <header className="h-14 px-2 flex items-center justify-between">
                <img className="h-4/5" src={logo} alt="logo" />
                <div className="w-8">
                    <AiOutlineUser
                        className="mx-auto stroke-M-black fill-M-black"
                        size={"100%"}
                        strokeWidth={"1rem"}
                    />
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Layout;
