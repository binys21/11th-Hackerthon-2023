import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/Login/SignUpPage";
import HomePage from "./pages/Patient/HomePage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signUp" element={<SignUpPage />}></Route>
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
