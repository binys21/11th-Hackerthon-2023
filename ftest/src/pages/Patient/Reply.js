import React, { useState } from "react";
import styled from "styled-components";

import QnaHeader from '../../components/qna_comp/QnaHeader';
//Q&A_환자 답글 작성하기
const Reply=()=>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const changeTitle = (e) => {
        setTitle(e.target.value);
      };
    const changeContent = (e) => {
        setTitle(e.target.value);
    };

    return (
        <>
        <Wrapper>
            <QnaHeader title="답글 작성하기"/>
        <Container>
            <hr></hr>
            <Question>
                <div className='title'>남긴 질문 게시글의 제목</div>
                <div className='date'>2023.08.13 22:08 작성</div>
                <hr></hr>
                <Content>본문의 내용이 두줄정도 뜨게 된다.본문의 내용이 두줄정도 뜨게 된다. 
                    본문의 내용이 두줄정도 뜨게 된다.본문의 내용이 두줄정도 뜨게 된다. 
                    본문의 내용이 두줄정도 뜨게 된다.본문의 내용이 두줄정도 뜨게 된다. </Content>
            <hr></hr>
            </Question>

            <InputWrapper>
            <Input placeholder="제목을 입력해주세요" onChange={changeTitle} value={title} />
            <hr></hr>
            <Input placeholder="본문을 입력해주세요" onChange={changeContent} value={content} />

            </InputWrapper>
        </Container>

        </Wrapper>
        </>
    );

};

export default Reply;
const Wrapper = styled.div`
height: 893px;
background: #15181D;
color:white;

`;
const Container = styled.div`
hr{
    width: 393px;
    height: 0px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #FFF;
    opacity: 0.08;
}

    
`;
const Question=styled.div`
.title{
    font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.date{
    opacity: 0.4;
    font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;

}
`;
const Content=styled.div`
color: #FFF;
font-size: 13px;
font-weight: 400;
line-height: normal;
letter-spacing: -0.13px;
opacity: 0.8;

`;
const InputWrapper=styled.div`

`;
const Input=styled.div`
width: 96%;
aspect-ratio: 10.1/1;
margin-top: 4%;
padding-left: 4%;

box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
border-radius: 10px;

font-size: 18px;
letter-spacing: 0.1em;

`;