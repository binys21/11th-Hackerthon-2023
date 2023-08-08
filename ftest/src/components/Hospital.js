import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { filterSlice, setFilter } from "../redux/filterSlice";
import {useSelector,useDispatch} from "react-redux";
//Data
import {hospitalData} from "../_mock/hospitalData";
import { hospitalCover } from '../_mock/hospitalData';
//image
import circleimg from "../pages/images/circleimg.png";
import btn from "../pages/images/btn.png";

const Hospital=(props)=>{
    const {hospital}=props; //병원 정보를 props로 받아옴 
    const navigate = useNavigate();

    const { filter } = useSelector((state) => state.filter);

    //진단 카테고리면 historyDetail, 약물 카테고리면 drugDetail로 이동하도록 
    const navigateToDetail = () => {

      navigate("/historydetail");

    };
  
    
    return (
        <>
        <Wrapper>
          <BoxWrapper>
            <LeftWrapper>
            <TypeWrapper>의원</TypeWrapper>
            <ImgWrapper>
            <img src={circleimg}/>
            </ImgWrapper>
            </LeftWrapper>
   
            <CenterWrapper>
            <DateWrapper>{hospital.date}</DateWrapper>
            <NameWrapper>{hospital.name}</NameWrapper>
            <AddWrapper>{hospital.addr}</AddWrapper>
            <hr></hr>
            <DocWrapper>{hospital.doctor}</DocWrapper>
            </CenterWrapper>

           <BtnWrapper><button onClick={navigateToDetail} ><img src={btn} alt=""></img></button></BtnWrapper>
            
            
          </BoxWrapper>
        </Wrapper>

        </>
      );
};

export default Hospital;
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
const TypeWrapper=styled.div`
    background-color:#2273EC;
    color:white;
    width:28px;
    height:18px;
    border-radius:7px;
    font-size:9px;
    text-align:center;
    margin-left:22px;
    margin-top:6px;
`;
const ImgWrapper=styled.div`

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
  color:#2273EC;
`;
const DateWrapper=styled.div`
margin-top:20px;
color:#868C8C;
font-size:9px;
`;
const CenterWrapper=styled.div`
  display: flex;
  flex-direction: column;
  hr{
    width:185px;
    height:0.5px;
    border:1px;
    background-color:#868C8C;
  }
`;
const LeftWrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
const BtnWrapper=styled.div`
button{
  border: 0;
  background-color: transparent;
}
margin-top:50px;
margin-left:15px;
`;