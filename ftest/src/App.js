import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/Login/SignUpPage";
import AfVerify from "./components/Login_comp/afVerify";
import HomePage from "./pages/Patient/HomePage";
import MyNFT from "./pages/Patient/MyNFT";
import HistoryDetail from "./pages/Patient/HistoryDetail";
import DrugDetail from "./pages/Patient/DrugDetail";
import CategoryPage from "./pages/common/CategoryPage";
import SurgeryDetail from "./pages/Patient/SurgeryDetail";
import NftRenewalPage from "./pages/common/NftRenewalPage";
import MediInfoPage from './pages/Patient/MediInfoPage';
import DocterMediInfo from './pages/doctor/DocterMediInfo';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/afVerify" element={<AfVerify />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/mynft" element={<MyNFT />} />
                    <Route path="/historydetail" element={<HistoryDetail />} />
                    <Route path="/drugdetail" element={<DrugDetail />} />
                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/surgerydetail" element={<SurgeryDetail />} />
                    <Route path="/nftrenewal" element={<NftRenewalPage />} />
                    <Route path='/medicalinfo' element={<MediInfoPage/>}/>
                    <Route path='/doctermediinfo' element={<DocterMediInfo/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
