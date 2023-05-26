import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<div>asdf</div>}></Route>
                    <Route path="main" element={<div>main</div>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
