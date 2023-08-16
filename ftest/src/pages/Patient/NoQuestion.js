import React, { useState } from "react";
import styled from "styled-components";
import docteruser from "../../pages/images/docteruser.png";
import QnaHeader from '../../components/qna_comp/QnaHeader';
//image
import noQ from "../../pages/images/noQ.png";
import qmark from "../../pages/images/qmark.png";
//Q&A_환자 질문 없을 때
const NoQuestion=()=>{


    return (
        <>
        <Wrapper>
            <QnaHeader title="내가 받은 질문"/>
        <Container>
            <ImageWrapper>
            <Img>  <img src={qmark}/></Img>
            </ImageWrapper>

            <div className='main'>아직 남겨진 질문이 없어요.</div>
            <div className='content'>환자께서 궁금한 부분에 대해 질문을 작성하면</div>
            <div className='bottom'>알림을 전송해드릴게요.</div>
            
            

        </Container>

        </Wrapper>
        </>
    );

};

export default NoQuestion;
const Wrapper = styled.div`
height: 893px;
bottom:0;
background: #15181D;
color:white;
text-align:center;
box-shadow: 0px 4px 100px 0px rgba(134, 197, 255, 0.20);

`;
const Container = styled.div`
white-space: pre-line;
margin-top:50%;
hr{
    width: 400px;
    height: 0px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #FFF;
    opacity: 0.08;
}
.main{
    font-size: 18.941px;
font-style: normal;
font-weight: 600;
    opacity: 0.8;
    margin-bottom:10px;
}
.content{
    font-size: 14px;
font-style: normal;
font-weight: 400;
    opacity: 0.5;
}
.bottom{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
        opacity: 0.5;

}
`;
const ImageWrapper=styled.div`
margin-bottom:25px;
`;
const Img=styled.div`
`;
