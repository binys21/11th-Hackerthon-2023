import React, { useState, useEffect } from "react";
import styled from "styled-components";
//component
import MyInfoCard from '../../components/mediInfo_comp/MyInfoCard';
import AllegyCard from '../../components/mediInfo_comp/AllegyCard';
import FamilyHisCard from '../../components/mediInfo_comp/FamilyHisCard';
import GardianCard from '../../components/mediInfo_comp/GardianCard';
import Header from '../../components/Header';


const MediInfoPage=()=>{
    return(
        <>
        <Wrapper>
            <Header title="의료정보"/>
                <OneTitleWrapper>
                    나의 기본 의료 정보
                </OneTitleWrapper>    
            <MyInfoCard/>
            <TwoTitleWrapper>
                    알러지 및 부작용
                </TwoTitleWrapper>
                <AllegyCard/>
                <br></br>
                <AllegyCard/>
                <ThirdTitleWrapper>
                    가족력
                </ThirdTitleWrapper>
                <FamilyHisCard/>
                <br></br>
                <FamilyHisCard/>
                <FourTitleWrapper>
                    보호자 정보
                </FourTitleWrapper>
                <GardianCard/>
                <br></br>
                <GardianCard/>
                <br></br>
                <br></br>
                
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
const ThirdTitleWrapper=styled.div`
color:white;
font-size:16px;
font-weight:700;
margin-right:280px;
margin-top:45px;
margin-bottom:20px;
`;
const FourTitleWrapper=styled.div`
color:white;
font-size:16px;
font-weight:700;
margin-right:260px;
margin-top:45px;
margin-bottom:20px;
`;