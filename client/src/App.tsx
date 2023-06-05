import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/header/HeaderLayout";
import MainPage from "./pages/MainPage";
import Subscribe from "./pages/Subscribe";
import Example from "./pages/Example";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<MainPage />} />
                    <Route path="subscribe/:id" element={<Subscribe />} />
                </Route>
                <Route path="/example" element={<Example />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
