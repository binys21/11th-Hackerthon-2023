import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
//image
import btn from "../../pages/images/btn.png";

const SurgeryTab = (props) => {
    const{setIsMoreView}=props;
    const navigate = useNavigate();
    
    //탭 닫기 함수
    const closeTab=()=>{
      setIsMoreView(false);
    };
    const navigateToDetail = () => {
      navigate("/SurgeryDetail");
    };


    return(
        <Wrapper>
            <Content>
            <Date>수술일 2023.06.03</Date>
            <SurName>외부 충격파쇄술[50590]</SurName>
            <DocName>
            <hr></hr>
            김현아 의사</DocName>
            </Content>
            <BtnWrapper><button onClick={navigateToDetail}><img src={btn} ></img></button></BtnWrapper>
        </Wrapper>



    )
};
export default SurgeryTab;

const Content=styled.div`
margin-left:20px;
margin-top:15px;
display: flex;
flex-direction: column;

`;
const Wrapper = styled.div`
    margin-left:9px;
    background-color:#363B46;
    width:297px;
    height:77px;
    border-radius:10px;
    display: flex;


`;

const Date=styled.div`
color:#868C8C;
font-size:9px;
`;
const SurName=styled.div`
color: #175DF9;
font-size:14px;
font-weight:700;
`;
const DocName=styled.div`
font-size:9px;
font-weight:600;
color:#868C8C;
margin-bottom:8px;
hr{
    width:185px;
    height:0.5px;
    border:1px;
    background-color:#868C8C;
  }

`;

const BtnWrapper=styled.div`
margin-left:45px;
margin-top:25px;
button{
  border: 0;
  background-color: transparent;
}
`;