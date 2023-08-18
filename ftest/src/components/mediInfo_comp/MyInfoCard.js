import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useEffect } from 'react';
//image
import lowbtn from "../../pages/images/lowbtn.png";

const MyInfoCard = () => {

    const [medicalInfo,setMedicalInfo]=useState(null);

    useEffect(() => {
        const fetchMedicalInfo = async () => {
            try {
                const response = await axios.get(
                    `https://silverjek.pythonanywhere.com/medicalinfo/access/${pk}/`,
                    {
                        params: {
                            pk: pk,
                        },
                    }
                );

                // 응답 데이터를 상태에 저장
                setMedicalInfo(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMedicalInfo();
    }, [pk]);


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
                    <NameWrapper>{medicalInfo.medi.patName}</NameWrapper>
                    {medicalInfo.medi.patSex}/{medicalInfo.medi.patBirth}
                    <br></br>
                    {medicalInfo.medi.patSSN}
                    <br></br>
                    {medicalInfo.medi.patBlood}/{medicalInfo.medi.patRH}
                    <br></br>
                    {medicalInfo.medi.patHeight}cm/{medicalInfo.medi.patWeight}kg
                    <br></br>
                    {medicalInfo.medi.patPhone}
                    <br></br>
                    {medicalInfo.medi.patAddress}
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

const BtnWrapper = styled.div`
    button {
        color: white;
        border: 0;
        background-color: transparent;
    }
    z-index: 10;
    position: absolute;
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
