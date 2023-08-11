import React, { useState, useEffect } from "react";
import styled from "styled-components";
//component
import AllegyCard from "../../components/mediInfo_comp/AllegyCard";
import FamilyHisCard from "../../components/mediInfo_comp/FamilyHisCard";
import GardianCard from "../../components/mediInfo_comp/GardianCard";
import ForDocter from "../../components/mediInfo_comp/ForDocter";
import HeaderWithRef from "../../components/HeaderWithRef";

const DocterMediInfo = () => {
    return (
        <>
            <Wrapper>
                <HeaderWithRef title="의료 정보" />
                <Container>
                    <OneTitleWrapper>환자의 기본 의료 정보</OneTitleWrapper>
                    <ForDocter />
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
const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30%;
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
