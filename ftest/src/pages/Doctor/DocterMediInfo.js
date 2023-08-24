import React, { useState, useEffect } from "react";
import styled from "styled-components";
//component
import AllegyCard from "../../components/mediInfo_comp/AllegyCard";
import AllegyCard2 from '../../components/mediInfo_comp/AllegyCard2';
import FamilyHisCard from "../../components/mediInfo_comp/FamilyHisCard";
import GardianCard from "../../components/mediInfo_comp/GardianCard";
import ForDocter from "../../components/mediInfo_comp/ForDocter";
import Header from "../../components/Header";

import RefreshNft from "../../components/NFT_comp/RefreshNft";
import RefreshedPop from "../../components/NFT_comp/RefreshedPop";

import reddot from "../images/reddot.png";
//올라가라

const DocterMediInfo = () => {
    const [getNewPop, setgetNewPop] = useState(false);
    const [doneRefresh, setdoneRefresh] = useState(false);

    const handleGetNewPop = () => {
        setgetNewPop(true);
    };
    const closeGetNewPop = () => {
        setgetNewPop(false);
    };
    const handleDoneRefresh = () => {
        setdoneRefresh(true);
    };
    const closeDoneRefresh = () => {
        setdoneRefresh(false);
    };
    return (
        <>
            <Wrapper>
                {getNewPop && (
                    <RefreshNft
                        handleGetNewPop={handleGetNewPop}
                        closeGetNewPop={closeGetNewPop}
                        handleDoneRefresh={handleDoneRefresh}
                    />
                )}
                {doneRefresh && (
                    <RefreshedPop
                        handleDoneRefresh={handleDoneRefresh}
                        closeDoneRefresh={closeDoneRefresh}
                        closeGetNewPop={closeGetNewPop}
                    />
                )}
                <Header title="의료 정보" />
                <BtnRenewal onClick={handleGetNewPop}>새로고침</BtnRenewal>
                <Container>
                    <OneTitleWrapper>환자의 기본 의료 정보</OneTitleWrapper>
                    <ForDocter />
                    <TwoTitleWrapper>알러지 및 부작용</TwoTitleWrapper>
                    <AllegyCard />
                    <br></br>
                    <AllegyCard2 />
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
            </Wrapper>
        </>
    );
};
export default DocterMediInfo;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202329;
`;
const BtnRenewal = styled.div`
    position: relative;
    top: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 40px;
    color: white;
    font-size: 11px;
`;
const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10%;
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
