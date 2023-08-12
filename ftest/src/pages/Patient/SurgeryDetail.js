import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
//component
import Header from '../../components/Header';
import Hospital from '../../components/category_comp/Hospital';
import Surgery from '../../components/category_comp/Surgery';


const SurgeryDetail=()=>{
    const location = useLocation();     //useLocation으로 hospital 상태 정보 가져옴 
    const { hospital } = location.state || {};
    
    return (
        <>
        <Wrapper>
            <Header title="상세보기"/>

        <Container>
        <InfoWrapper>
        차트 No.038415                                                 2023.06.13 | 최영아 작성
        </InfoWrapper>
        <Surgery hospital={{ 
            date: "2023.05.20 진단",
            name: "독수리약국",
            addr: "서울 서대문구 연세로 36 독수리빌딩",
            doctor: "권한민 약사" }} />

        <PatientBox></PatientBox>
        <SurgeryBox></SurgeryBox>

        </Container>
        </Wrapper>
        </>
    );

};
export default SurgeryDetail;
const Wrapper = styled.div`
    height: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202329;

`;
const Container = styled.div`
    width: 80%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:10px;
    
`;
const InfoWrapper=styled.div`
    font-size:10px;
    color:#FFF;
    white-space: pre-wrap;
`;

const PatientBox=styled.div`
background-color: white;
width: 333px;
height: 245px;
border-radius: 9.63px;
`;
const SurgeryBox=styled.div`
background-color: white;
width: 333px;
height: 174px;
border-radius: 9.63px;
`;