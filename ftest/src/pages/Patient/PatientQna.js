import React, { useState } from "react";
import styled from "styled-components";
//coponent
import NavigateBar from '../../components/NavigateBar';
import Header from '../../components/Header';
import QuestionCard from '../../components/qna_comp/QuestionCard';
//image
import select_btn from "../../pages/images/select_btn.png";

//Q&A_환자2
const PatientQna=()=>{

    return (
        <>
        <Wrapper>
            <Header title="내가 남긴 질문"/>
            <hr></hr>
        <Container>


        </Container>
        </Wrapper>
        </>
    );

};

export default PatientQna;
const Wrapper = styled.div`
    height: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202329;
    hr {
        width : 100%;
        opacity: 0.2;
        background-color: #4C4E53;
      }

`;
const Container = styled.div`
    width: 80%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:10px;
    
`;
const TopWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    margin-bottom:15px;
`;
const Number = styled.div`
    color: white;
    font-size: 12px;
    display: flex;
`;
const SelectBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        width: 12px;
        height: 8px;
    }
    select {
        width: 45px;
        padding: 0.8em 0.5em;
        font-size: 13px;
        color: #175df9;
        border: none;
        background-color: transparent;
        background: "url(${select_btn})" no-repeat 95% 50%;
        -o-appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: 0;
    }
    select::-ms-expand {
        display: none;
    }
    `;