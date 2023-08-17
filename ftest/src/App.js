import React, { useState } from "react";
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
import AgreePop from "./components/NFT_comp/AgreeNft";

import DocterCategory from "./pages/Doctor/DocterCategory";
import DocterMediInfo from "./pages/Doctor/DocterMediInfo";
import MyQuestion from "./pages/Patient/MyQuestion";

import MyPage from "./pages/Patient/MyPage";
import DocterQuestion from "./pages/Doctor/DocterQuestion";
import DocterMypage from "./pages/Doctor/DocterMypage";
import MakeQuestion from "./pages/Patient/MakeQuestion";
import WrittenQuestion from "./pages/Patient/WrittenQuestion";
import NoQuestion from "./pages/Patient/NoQuestion";
import ReplyPage from "./pages/Patient/ReplyPage";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "제 부상병 중에 혈어증에 대해서 알고 싶어요.",
            content:
                "안녕하세요! 제 부상병인 혈어증과 관련해 궁금한 부분이 있습니다. 혈액질환의 종류와 증상, 예방법에 대해 알고 싶습니다. 또한 혈액검사의 중요성과 정기적인 검사 주기도 궁금합니다.",
        },
    ]);
    const [replies, setReplies] = useState([
        {
            id: 1,
            retitle: "질병 관련 증상과 권장 사항입니다.",
            recontent:
                "답변드립니다. 혈액관련 질환은 다양한 종류가 있으며, 빈혈, 혈소판 감소 등이 있을 수 있습니다. 증상은 피로, 두통 등이 나타날 수 있으며, 건강한 식습관과 충분한 수면, 운동으로 예방할 수 있습니다. 정기 검사를 받는 걸 권장합니다.",
        },
    ]);

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

                    <Route path="/myquestion" element={<MyQuestion />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route
                        path="/makequestion"
                        element={
                            <MakeQuestion posts={posts} setPosts={setPosts} />
                        }
                    />
                    <Route
                        path="/writtenquestion"
                        element={
                            <WrittenQuestion posts={posts} replies={replies} />
                        }
                    />
                    <Route
                        path="/replypage"
                        element={
                            <ReplyPage
                                posts={posts}
                                replies={replies}
                                setReplies={setReplies}
                            />
                        }
                    />
                    <Route path="/noquestion" element={<NoQuestion />} />
                    <Route
                        path="/doctermediinfo"
                        element={<DocterMediInfo />}
                    />
                    <Route
                        path="/doctercategory"
                        element={<DocterCategory />}
                    />
                    <Route
                        path="/docterquestion"
                        element={<DocterQuestion />}
                    />
                    <Route path="/docmypage" element={<DocterMypage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
