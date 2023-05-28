import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/header/HeaderLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<div>asdf</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
