import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/header/HeaderLayout";
import Example from "./pages/Example";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<div>asdf</div>} />
                </Route>
                <Route path="/example" element={<Example />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
