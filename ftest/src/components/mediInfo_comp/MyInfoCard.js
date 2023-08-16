import React, { useState } from "react";
import styled from "styled-components";
//image
import lowbtn from "../../pages/images/lowbtn.png";

const MyInfoCard = () => {
    const [isBlur, setIsBlur] = useState(true);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const toggleBlur = () => {
        setIsBlur(!isBlur);
        setIsButtonVisible(!isButtonVisible);
    };

    return (
        <>
            <BoxWrapper>
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
                <ContentWrapper blur={isBlur}>
                    <NameWrapper>정대만</NameWrapper>
                    남/2000.05.22
                    <br></br>
                    000522-3121212
                    <br></br>
                    A형/Rh+
                    <br></br>
                    184cm/70kg
                    <br></br>
                    000-0000-0000
                    <br></br>
                    서울특별시 서대문구 성산로 508
                </ContentWrapper>
                <TitleWrapper blur={isBlur}>
                    이름
                    <br></br>
                    성별/생년월일
                    <br></br>
                    주민번호
                    <br></br>
                    혈액형
                    <br></br>
                    키/체중
                    <br></br>
                    연락처
                    <br></br>
                    거주지
                </TitleWrapper>
            </BoxWrapper>
        </>
    );
};
export default MyInfoCard;

// const BtnWrapper = styled.div`
//     filter: blur(10px);
//     -webkit-filter: blur(10px);

//     position: absolute;
//     top: 25%;
//     width: 87%;
//     height: 250px;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     z-index: 9;
//     border-radius: 10px;

//     div {
//         color: white;
//         margin: 10px 0;
//         z-index: 10;
//     }
//     img {
//         width: 20px;
//         height: 10px;
//         z-index: 10;
//     }
// `;
const BtnWrapper = styled.div`
    button {
        color: white;
        border: 0;
        background-color: transparent;
    }
    z-index: 10;
    position: fixed;
    top: 22%;
    margin-left: 120px;
`;

const BoxWrapper = styled.div`
    display: flex;
    background-color: #175df9;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 40px;
    color: white;
`;
const TitleWrapper = styled.div`
    filter: ${({ blur }) => (blur ? "blur(1px)" : "none")};
    -webkit-filter: ${({ blur }) => (blur ? "blur(5px)" : "none")};
    font-size: 12px;
    font-weight: 400;
    line-height: 3.2;
    text-align: right;
    margin-top: 15px;
`;
const NameWrapper = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-top: 4px;
    text-align: left;
`;
const ContentWrapper = styled.div`
    filter: ${({ blur }) => (blur ? "blur(1px)" : "none")};
    -webkit-filter: ${({ blur }) => (blur ? "blur(5px)" : "none")};
    font-size: 15px;
    font-weight: 700;
    line-height: 2.5;
    margin-left: 18px;
    text-align: left;
    padding-bottom: 15px;
`;
