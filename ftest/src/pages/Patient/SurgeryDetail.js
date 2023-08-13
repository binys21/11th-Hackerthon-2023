import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
//component
import Header from '../../components/Header';
import Hospital from '../../components/category_comp/Hospital';
import Surgery from '../../components/category_comp/Surgery';


const SurgeryDetail=()=>{
    const location = useLocation();     //useLocation으로 hospital 상태 정보 가져옴 
    const { hospital } = location.state || {};
    
    return (
        <>
        <Wrapper>
            <Header title="상세보기"/>
        <Container>
        <InfoWrapper>
        차트 No.038415                                                 2023.06.13 | 최영아 작성
        </InfoWrapper>
        <Surgery hospital={{ 
            date: "2023.05.20 진단",
            name: "독수리약국",
            addr: "서울 서대문구 연세로 36 독수리빌딩",
            doctor: "권한민 약사" }} />

        <PatientBox>
            <div className='date'>2023.06.03 수술 | 1차 수술 
            연세세브란스
            </div>
            <div className='reginum'>환자 등록번호 : 0000193</div>

            <TitleWrapper>
                <div className='thick'>환자의 정보</div>
                <hr></hr>
                환자의 성명
                <br></br>
                환자의 주민등록번호
                <hr></hr>
                나이
                <br></br>
                성별
                <br></br>
                연락처
            </TitleWrapper>

            <PaientInfo>
                정대만
                <br></br>
                720922-1234567
                <hr></hr>
                만 17세
                <br></br>
                남
                <br></br>
                010-2408-3893
            </PaientInfo>

        </PatientBox>
        <SurgeryBox>
            해당 수술과
            <hr></hr>
            수술 집도의명 <br></br> 수술 보조의명 
            <br></br><br></br>  <hr></hr>
            마취의명
            <DocterWrapper>
            비뇨의학과 <br></br>
            김현아 의사 <br></br>
            김무열 의사 <br></br>
            김원필 간호사 <br></br><br></br>
            고이찬 의사 
        </DocterWrapper>
        </SurgeryBox>



        </Container>
        </Wrapper>
        </>
    );

};
export default SurgeryDetail;
const Wrapper = styled.div`
    height: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202329;

`;
const Container = styled.div`
    width: 80%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:10px;
    
`;
const InfoWrapper=styled.div`
    font-size:10px;
    color:#FFF;
    white-space: pre-wrap;
`;

const PatientBox=styled.div`
background-color: white;
width: 333px;
height: 245px;
border-radius: 9.63px;
`;
const SurgeryBox=styled.div`
background-color: white;
width: 333px;
height: 174px;
border-radius: 9.63px;
`;
const TitleWrapper=styled.div`
`;
const PaientInfo=styled.div`
`;
const DocterWrapper=styled.div`
position:absolute;
top:62%;
left:70%;
`;