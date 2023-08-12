import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SurgeryTab from './SergeryTab';
//Data
import { hospitalData } from '../../_mock/hospitalData';
//image
import btn from "../../pages/images/btn.png";
import Vector from "../../pages/images/Vector.png";

const Surgery=(props)=>{
    const {hospital}=props; //병원 정보를 props로 받아옴 
    // const [tab,setTab]=useState(false);
    const navigate = useNavigate();

    const [isMoreView, setIsMoreView] = useState(false); // 더보기 & 접기 상태 저장

    const onClickImageMoreViewButton = () => {
      setIsMoreView(!isMoreView);
    }; // 클릭시 상태 반전
  

    return (
        <>
        <Wrapper>
          <BoxWrapper isMoreView={isMoreView} >
   
            <CenterWrapper>
            <DateWrapper>{hospital.date}</DateWrapper>
            <NameWrapper>{hospital.name}</NameWrapper>
            <AddWrapper>{hospital.addr}</AddWrapper>
            <hr></hr>
            <DocWrapper>{hospital.doctor}</DocWrapper>
            <SurNumWrapper>{hospital.surgery}</SurNumWrapper>
            
            
            {isMoreView ? <SurgeryTab /> :null}
            {isMoreView ? <SurgeryTab /> :null}
            </CenterWrapper>

           <BtnWrapper isMoreView={isMoreView}>
            <button onClick={onClickImageMoreViewButton}> 
              {/* 창 열려있으면 아무것도 없고 닫혀있을 때는 버튼이미지 */}
              {isMoreView ? null: <img src={btn} ></img> } 

            </button></BtnWrapper>
            
            
          </BoxWrapper>
        </Wrapper>

        </>
      );
};

export default Surgery;

// const ImageWrapper = styled.div<{ isMoreView: boolean }>`
//   max-height: ${(props) => (props.isMoreView ? "" : "400px")}; 
// //접혀있는 상태면 max-height가 400px, 펼쳐있는 상태면 이미지 길이 만큼
//   overflow: hidden;
// `;


const Wrapper=styled.div`
    background-color:none;
`;
const BoxWrapper=styled.div`
    background-color:white;
    display: flex;
    width:330px;
    height:114px;
    margin-top:20px;
    border-radius:8px;
    margin-bottom: ${(props) => (props.isMoreView ? "180px" : "5px")};
    transition: margin-top 0.3s ease; 
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