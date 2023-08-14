import React, { useState } from "react";
import styled from "styled-components";
//coponent
import NavigateBar from '../../components/NavigateBar';
import Header from '../../components/Header';
import DocQuestionCard from '../../components/qna_comp/DocQuestionCard';
//image
import select_btn_doc from "../../pages/images/select_btn_doc.png";



const DocterQuestion=()=>{

    return (
        <>
        <Wrapper>
            <Header title="내가 받은 질문"/>
            <hr></hr>
        <Container>
        <TopWrapper>
                            <Number>총 4건</Number>
                            <SelectBox>
                                <select>
                                    <option key="latest" value="latest">
                                        최근순
                                    </option>
                                    <option key="older" value="older">
                                        오래된순
                                    </option>
                                </select>
                                <img src={select_btn_doc} />
                            </SelectBox>
                        </TopWrapper>
                        <DocQuestionCard/>
                        <DocQuestionCard/>
                        <DocQuestionCard/>
                        <DocQuestionCard/>

        </Container>
        <NavigateBar/>
        </Wrapper>
        </>
    );

};

export default DocterQuestion;
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
        color: #10C38E;
        border: none;
        background-color: transparent;
        background: "url(${select_btn_doc})" no-repeat 95% 50%;
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