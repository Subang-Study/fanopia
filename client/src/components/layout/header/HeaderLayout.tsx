import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

type Props = {};

const HeaderLayout: React.FC<Props> = props => {
    return (
        <>
            <Header />
            <div className="px-4 py-1">
                <Outlet />
            </div>
        </>
    );
};

export default HeaderLayout;
