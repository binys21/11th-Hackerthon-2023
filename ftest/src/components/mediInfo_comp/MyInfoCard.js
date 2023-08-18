import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useEffect } from 'react';
//image
import lowbtn from "../../pages/images/lowbtn.png";

const MyInfoCard = () => {
    const [pk,setPk]=useState(1);
    // const [medicalInfo, setMedicalInfo] = useState(null);
    const [medicalInfo,setMedicalInfo]=useState({
        "medi": {
            "id": 1,
            "user_id": 1,
            "patName": "김지은",
            "patSex": "FEMALE",
            "patBirth": "2002-08-28",
            "patAge": 0,
            "patAddress": "서울특별시 서대문구",
            "patSSN": "020828-0010613",
            "patBlood": "O",
            "patRH": "PLUS",
            "patHeight": 161.7,
            "patWeight": 7.25,
            "patPhone": "+821099473977",
            "updateDate": "2023-08-11T00:04:29.835168+09:00",
            "doc": "김멋사",
            "docMaj": "외과 전문의",
            "Hospital": "멋사 병원"
        },});


    useEffect(() => {
        // console.log('here');
        // fetchMedicalInfo().then(response => console.log(response));
    }, []);

    // const fetchMedicalInfo = async () => {
    //     try {
    //         const response = await axios.get(
    //             `https://silverjek.pythonanywhere.com/medicalinfo/access/${pk}/`,
    //         );
    //         return (response);
    //         // 응답 데이터를 상태에 저장
    //     } catch (error) {
    //         return (error);
    //     }
    // }

    console.log(medicalInfo);

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

                { medicalInfo && <ContentWrapper blur={isBlur}>


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
                </ContentWrapper>}


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
    margin-left:80px;
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
