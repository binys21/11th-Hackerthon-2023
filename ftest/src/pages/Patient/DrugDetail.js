import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import d3 from "../images/drugimages/d3.png";
import Header from '../../components/Header';
//componenet
import DrugCard from '../../components/detail_comp/DrugCard';
import Hospital from '../../components/category_comp/Hospital';
import DrugCard2 from '../../components/detail_comp/DrugCard2';

const DrugDetail=()=>{
    const location = useLocation();     //useLocation으로 hospital 상태 정보 가져옴 
    const { hospital } = location.state || {};

    return (
        <>
        <Wrapper>
        <Header title="상세보기"/>
        <Container>
            <br></br>
            <Hospital hospital={{ date: "조제일자 2023-07-29 | 연결 진단서 1건",
            type:"의원",
            name: "독수리약국",
            addr: "서울 서대문구 연세로 36 독수리빌딩",
            doctor: "권한민 약사" }} />

            <DrugCard/>
            <br></br>
            <DrugCard2/>
        </Container>
        </Wrapper>
        </>
    );

};
export default DrugDetail;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202329;
`;
const Container = styled.div`
    width: 80%;
    height: 100%; 
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
