import React from "react";
import styled from "styled-components";

const AllegyCard=()=>{
    return(
        <>
        <BoxWrapper>
        <ContentWrapper>
                <NameWrapper>파목신</NameWrapper>
                amoxicillin
                <br></br>
                piperacillin
                <br></br>
                oxacillin
                <br></br>
                <br></br>
                PENICILLINS
                <br></br>
                <br></br>
                호흡곤란
                <br></br>
                아나필락시스
            </ContentWrapper>

            <TitleWrapper>
                <OneTitle>Servere</OneTitle>
                <TwoTitle>성분명</TwoTitle>
                <ThreeTitle>성분군</ThreeTitle>
                <FourTitle>증상</FourTitle>
            </TitleWrapper>

        </BoxWrapper>
        </>

    );

};
export default AllegyCard;
const BoxWrapper=styled.div`
background-color:#363B46;
display: flex;
width:333px;
height:270px;
color:white;
border-radius:10px;
`;
const ContentWrapper=styled.div`
font-size:16px;
font-weight:700;
margin-top:10px;
margin-left:20px;
`;
const NameWrapper=styled.div`
font-size:24px;
font-weight:600;
margin-top:4px;
margin-bottom:18px;
line-height:2.3;
`;
const TitleWrapper=styled.div`
font-size:12px;
font-weight:400;
text-align:right;
margin-top:13px;
margin-left:145px;
`;
const OneTitle=styled.div`
color:#FF6868;
font-size:16px;
font-weight:700;
margin-top:15px;
`;
const TwoTitle=styled.div`
margin-top:38px;
`;
const ThreeTitle=styled.div`
margin-top:64px;
`;
const FourTitle=styled.div`
margin-top:25px;
`;
