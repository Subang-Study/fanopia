import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

type Props = {};

const HeaderLayout: React.FC<Props> = props => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default HeaderLayout;
