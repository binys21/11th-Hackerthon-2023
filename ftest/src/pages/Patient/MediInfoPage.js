import React, { useState, useEffect } from "react";
import styled from "styled-components";
//component
import MyInfoCard from "../../components/mediInfo_comp/MyInfoCard";
import AllegyCard from "../../components/mediInfo_comp/AllegyCard";
import FamilyHisCard from "../../components/mediInfo_comp/FamilyHisCard";
import GardianCard from "../../components/mediInfo_comp/GardianCard";
import Header from "../../components/Header";
import ReplyComp from '../../components/qna_comp/ReplyComp';
import chatArrow from "../images/chatArrow.png";

import chatFoot from "../../components/qna_comp/chatFoot";

const MediInfoPage = () => {
    // const [modal, setModal] = useState(false); //질문창 모달
    // // modal 여는 함수
    // const openModal = () => {
    //     setModal(true);
    // };
    const [showReply, setShowReply] = useState(false);
    const handleToggleReply = () => {
        setShowReply(!showReply);
    };

    return (
        <>
            <Wrapper>
                <Header title="의료 정보" />
                <Container>
                    <OneTitleWrapper>나의 기본 의료 정보</OneTitleWrapper>
                    <MyInfoCard />
                    <TwoTitleWrapper>알러지 및 부작용</TwoTitleWrapper>
                    <AllegyCard />
                    <br></br>
                    <AllegyCard />
                    <ThirdTitleWrapper>가족력</ThirdTitleWrapper>
                    <FamilyHisCard />
                    <br></br>
                    <FamilyHisCard />
                    <FourTitleWrapper>보호자 정보</FourTitleWrapper>
                    <GardianCard />
                    <br></br>
                    <GardianCard />
                    <br></br>
                    <br></br>
                </Container>
                {/* <img src={chatArrow} onToggle={handleToggleReply} />
                <Reply show={showReply} onToggle={handleToggleReply} /> */}
                <chatFoot />
            </Wrapper>
        </>
    );
};
export default MediInfoPage;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202329;
`;
const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8%;
`;
const OneTitleWrapper = styled.div`
    color: white;
    font-size: 15px;
    font-weight: 700;
    align-self: flex-start;
    margin-bottom: 15px;
`;
const TwoTitleWrapper = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 700;
    align-self: flex-start;
    margin-bottom: 15px;
`;
const ThirdTitleWrapper = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 700;
    align-self: flex-start;
    margin-bottom: 15px;
    margin-top: 40px;
`;
const FourTitleWrapper = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 700;
    align-self: flex-start;
    margin-bottom: 15px;
    margin-top: 40px;
`;
