import React, { useState } from "react";
import styled from "styled-components";
//image
import lowbtn from '../../pages/images/lowbtn.png';

const DrugCard2=()=>{
    return(
        <>
        <BoxWrapper>
        <ContentWrapper>
                <NameWrapper>써스펜8시간이알서방정</NameWrapper>
                <hr></hr>
                약효
                <br></br>
                성분명
                <br></br>
                약품코드
                <br></br>
                단위
                <hr></hr>
                <br></br>
                1일 투약량
                <br></br>
                1일 투여횟수
                <br></br>
                총 투약 일수
            </ContentWrapper>

            <TitleWrapper>
                진통/소염제
                <br></br>
                acetaminophen(enc apsulated)
                <br></br>
                643501510
                <br></br>
                1정
            </TitleWrapper>

            <CountWrapper>
                2정
                <br></br>
                3회
                <br></br>
                2일
            </CountWrapper>

        </BoxWrapper>
        </>

    );

};
export default DrugCard2;
const BoxWrapper=styled.div`
background-color:#363B46;
width:333px;
height:270px;
color:white;
border-radius:10px;
margin-bottom:30px;
`;
const ContentWrapper=styled.div`
font-size:12px;
font-weight:700;
margin-top:13px;
margin-left:20px;
line-height:1.7;
hr{
    width:293px;
    margin-right:30px;
}
`;
const NameWrapper=styled.div`
font-size:20px;
font-weight:600;
margin-top:20px;

`;
const TitleWrapper=styled.div`
font-size:12px;
font-weight:500;
text-align:right;
margin-bottom:50%;
position: absolute;
top:72.5%;
left: 49%;
line-height:1.6;
z-index:10;
`;
const CountWrapper=styled.div`
color:white;
font-size: 12px;
font-weight: 500;
line-height:1.6;
position: absolute;
top:86%;
left: 83%;
`;

