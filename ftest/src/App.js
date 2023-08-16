import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import LoginPatient from "./pages/Login/LoginPatient";
import LoginDoctor from "./pages/Login/LoginDoctor";

import SignUpPage from "./pages/Login/SignUpPage";
import AfVerify from "./components/Login_comp/afVerify";
import Verifying from "./components/Login_comp/Verifying";
import AfVerify2 from "./components/Login_comp/AfVerify2";

import HomePage from "./pages/Patient/HomePage";
import MyNFT from "./pages/Patient/MyNFT";

import DoctorHome from "./pages/Doctor/DoctorHome";
import DoctorNft from "./pages/Doctor/DoctorNft";
import ViewNft from "./pages/Doctor/ViewNft";
import RenewalPage from "./pages/Doctor/RenewalPage";
import RenewalPage2 from "./pages/Doctor/RenewalPage2";

import MyNFTcleared from "./pages/Patient/MyNFTcleared";
import HistoryDetail from "./pages/Patient/HistoryDetail";
import DrugDetail from "./pages/Patient/DrugDetail";
import CategoryPage from "./pages/common/CategoryPage";
import SurgeryDetail from "./pages/Patient/SurgeryDetail";
import NftRenewalPage from "./pages/common/NftRenewalPage";
import MediInfoPage from "./pages/Patient/MediInfoPage";
import DocterMediInfo from "./pages/Doctor/DocterMediInfo";
import AgreePop from "./components/NFT_comp/AgreeNft";
import DocterCategory from "./pages/Doctor/DocterCategory";
import MyQuestion from "./pages/Patient/MyQuestion";
import MyPage from './pages/Patient/MyPage';
import DocterQuestion from './pages/Doctor/DocterQuestion';
import DocterMypage from './pages/Doctor/DocterMypage';
import Reply from './pages/Patient/Reply';
import MakeQuestion from './pages/Patient/MakeQuestion';
import WrittenQuestion from './pages/Patient/WrittenQuestion';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/loginpatient" element={<LoginPatient />} />
                    <Route path="/logindoctor" element={<LoginDoctor />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/afVerify" element={<AfVerify />} />
                    <Route path="/verifying" element={<Verifying />} />
                    <Route path="/afVerify2" element={<AfVerify2 />} />
                    <Route path="/home" element={<HomePage />} />

                    <Route path="/doctorhome" element={<DoctorHome />} />
                    <Route path="/doctornft" element={<DoctorNft />} />
                    <Route path="/viewnft" element={<ViewNft />} />
                    <Route path="/renewalpage" element={<RenewalPage />} />
                    <Route path="/renewalpage2" element={<RenewalPage2 />} />

                    <Route path="/mynft" element={<MyNFT />} />
                    <Route path="/mynftcleared" element={<MyNFTcleared />} />
                    <Route path="/historydetail" element={<HistoryDetail />} />
                    <Route path="/drugdetail" element={<DrugDetail />} />
                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/surgerydetail" element={<SurgeryDetail />} />
                    <Route path="/nftrenewal" element={<NftRenewalPage />} />
                    <Route path="/medicalinfo" element={<MediInfoPage />} />

                    <Route path='/myquestion' element={<MyQuestion/>}/>
                    <Route path='/mypage' element={<MyPage/>}/>
                    <Route path='/reply' element={<Reply/>}/>
                    <Route path='/makequestion' element={<MakeQuestion/> }/>
                    <Route path='/writtenquestion' element={<WrittenQuestion/>}/>

                    <Route
                        path="/doctermediinfo"
                        element={<DocterMediInfo />}
                    />
                    <Route
                        path="/doctercategory"
                        element={<DocterCategory />}
                    />
                     <Route path='/docterquestion' element={<DocterQuestion/>}/>
                     <Route path='/docmypage' element={<DocterMypage/>}/>
                     
                </Routes>
               
            </Router>
        </>
    );
}

export default App;
