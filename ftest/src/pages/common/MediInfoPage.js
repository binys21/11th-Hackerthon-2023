import React, { useState, useEffect } from "react";
import styled from "styled-components";
//component
import MyInfoCard from '../../components/mediInfo_comp/MyInfoCard';

const MediInfoPage=()=>{
    return(
        <>
        <Wrapper>
                <OneTitleWrapper>
                    나의 기본 의료 정보
                </OneTitleWrapper>    
            <MyInfoCard/>
            <TwoTitleWrapper>
                    알러지 및 부작용
                </TwoTitleWrapper>
        </Wrapper>
        </>
    );

};
export default MediInfoPage;
const Wrapper=styled.div`
height: 100%; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #202329;
`;

const OneTitleWrapper=styled.div`
color:white;
font-size:16px;
font-weight:700;
margin-right:210px;
margin-bottom:15px;
`;
const TwoTitleWrapper=styled.div`
color:white;
font-size:16px;
font-weight:700;
margin-right:210px;
margin-top:45px;
margin-bottom:20px;
`;