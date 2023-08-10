import React, { useState } from "react";
import styled from "styled-components";

import Header from '../../components/Header';

import s1 from "../images/surimages/s1.png";
import s2 from "../images/surimages/s2.png";
import s3 from "../images/surimages/s3.png";
import s4 from "../images/surimages/s4.png";
import s5 from "../images/surimages/s5.png";

const SurgeryDetail=()=>{
    return (
        <>
        <Wrapper>
            <Header title="상세보기"/>
        <Container>
        <InfoWrapper>
                차트 No.038415                        2023.06.13 | 최영아 작성
                    
                </InfoWrapper>
            <ImgWrapper>
            <img src={s1} width='300px'/>
            <img src={s2} width = '300px'/>
            <img src={s3} width = '300px'/>
            <img src={s4} width = '300px'/>
            <img src={s5} width = '300px'/>

            </ImgWrapper>
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
    
`;
const ImgWrapper=styled.div`
    img{
        border-radius: 6px;
        margin-bottom:15px;
    }

`;
const InfoWrapper=styled.div`
    font-size:10px;
    color:#FFFFFF;
    white-space: pre-wrap;
`;