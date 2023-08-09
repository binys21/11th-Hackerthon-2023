import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SurgeryTab from './SergeryTab';
//Data
import { hospitalData } from '../../_mock/hospitalData';
//image
import btn from "../../pages/images/btn.png";

const Surgery=(props)=>{
    const {hospital}=props; //병원 정보를 props로 받아옴 
    const [tab,setTab]=useState(false);
    const navigate = useNavigate();
    
    //수술 상세보기 여는 함수
    const openTab=()=>{
        setTab(true);
    };

    return (
        <>
        <Wrapper>
          <BoxWrapper>
   
            <CenterWrapper>
            <DateWrapper>{hospital.date}</DateWrapper>
            <NameWrapper>{hospital.name}</NameWrapper>
            <AddWrapper>{hospital.addr}</AddWrapper>
            <hr></hr>
            <DocWrapper>{hospital.doctor}</DocWrapper>
            <SurNumWrapper>{hospital.surgery}</SurNumWrapper>
            
            {tab ? <SurgeryTab setTab={setTab}/>:null}
            </CenterWrapper>

           <BtnWrapper><button onClick={openTab}><img src={btn} ></img></button></BtnWrapper>
            
            
          </BoxWrapper>
        </Wrapper>

        </>
      );
};

export default Surgery;

const Wrapper=styled.div`
    background-color:none;
`;
const BoxWrapper=styled.div`
    background-color:white;
    display: flex;

    width:330px;
    height:114px;
    margin-bottom:20px;
    border-radius:8px;
`;


const NameWrapper=styled.div`
  margin-top:10px;
  font-size:16px;
  font-weight:700;
`;
const AddWrapper=styled.div`
  font-size:9px;
  color:#868C8C;
  font-weight:500;
`;
const DocWrapper=styled.div`
  font-size:9px;
  font-weight:600;
  color:#868C8C;
`;
const DateWrapper=styled.div`
margin-top:20px;
color:#868C8C;
font-size:9px;
`;
const CenterWrapper=styled.div`
  display: flex;
  flex-direction: column;
  margin-left:25px;
  hr{
    width:185px;
    height:0.5px;
    border:1px;
    background-color:#868C8C;
  }
`;
const BtnWrapper=styled.div`
button{
  border: 0;
  background-color: transparent;
}
margin-top:50px;
margin-left:65px;
`;
const SurNumWrapper=styled.div`
margin-top:3px;
 color: #175DF9;
 font-size:9px;
 font-weight:600;
`;