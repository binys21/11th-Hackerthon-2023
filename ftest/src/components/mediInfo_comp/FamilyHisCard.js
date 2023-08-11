import React, { useState } from "react";
import styled from "styled-components";
//image
import lowbtn from '../../pages/images/lowbtn.png';

const FamilyHisCard=()=>{
    const [isBlur, setIsBlur] = useState(true);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const toggleBlur = () => {
        setIsBlur(!isBlur);
        setIsButtonVisible(false);
    };
    return(
        <>
         {isButtonVisible && (
                        <BtnWrapper>
                        <button onClick={toggleBlur}>
                                 내려서 상세보기
                                 <br></br>
                                 <br></br>
                                <img src={lowbtn} alt=""></img>
                        </button>
                        </BtnWrapper>
        )}
        <BoxWrapper blur={isBlur}>
            <ContentWrapper>
                <NameWrapper>당뇨</NameWrapper>
                1966.03.23 - 
                <br></br>
                -
            </ContentWrapper>
            <TitleWrapper>
            <OneTitle>친아버지</OneTitle>
                <TwoTitle>생년월일 - 사망일자</TwoTitle>
                <ThreeTitle>사망원인</ThreeTitle>
            </TitleWrapper>
            </BoxWrapper>
            </>

    );

};
export default FamilyHisCard;
const BoxWrapper=styled.div`
filter: ${({ blur }) => (blur ? "blur(1px)" : "none")};
-webkit-filter: ${({ blur }) => (blur ? "blur(5px)" : "none")};

background-color:#363B46;
display: flex;
width:333px;
height:155px;
color:white;
border-radius:10px;
`;
const ContentWrapper=styled.div`
font-size:16px;
font-weight:700;
margin-top:10px;
margin-left:20px;
line-height:1.8;
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
margin-top:38px;
`;
const ThreeTitle=styled.div`
margin-top:20px;
`;
const BtnWrapper=styled.div`
button {
    color:white;
    border: 0;
    background-color: transparent;
    
}
z-index:100;
position: absolute;
top:142%;
left: 40%;
`;