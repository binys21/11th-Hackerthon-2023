import React from "react";
import styled from "styled-components";

const GardianCard=()=>{
    return (
        <>
                <BoxWrapper>
            <ContentWrapper>
                <NameWrapper>정수리</NameWrapper>
                010-2222-2222
            </ContentWrapper>
            <TitleWrapper>
            <OneTitle>친아버지</OneTitle>
                <TwoTitle>연락처</TwoTitle>
            </TitleWrapper>
            </BoxWrapper></>
    );

};
export default GardianCard;
const BoxWrapper=styled.div`
background-color:#363B46;
display: flex;
width:333px;
height:115px;
color:white;
border-radius:10px;
`;
const ContentWrapper=styled.div`
font-size:16px;
font-weight:700;
margin-top:8px;
margin-left:20px;
line-height:1.3;
`;
const NameWrapper=styled.div`
font-size:24px;
font-weight:600;
margin-top:4px;
margin-bottom:10px;
line-height:2.3;
`;

const TitleWrapper=styled.div`
font-size:12px;
font-weight:400;
text-align:right;
margin-top:13px;
margin-left:100px;
`;
const OneTitle=styled.div`
font-size:16px;
font-weight:700;
margin-top:15px;
`;
const TwoTitle=styled.div`
margin-top:30px;
`;
