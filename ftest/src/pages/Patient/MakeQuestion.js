import React, { useState } from "react";
import styled from "styled-components";
import docteruser from "../../pages/images/docteruser.png";
import QnaHeader from '../../components/qna_comp/QnaHeader';
//Q&A_환자 답글 작성하기
const MakeQuestion=()=>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const changeTitle = (e) => {
        setTitle(e.target.value);
      };
    const changeContent = (e) => {
        setContent(e.target.value);
    };

    return (
        <>
        <Wrapper>
            <QnaHeader title="질문 작성하기"/>
        <Container>
            <InputWrapper>
            <input
                type="text"
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={changeTitle}
                ></input>
            <hr></hr>
            <input
                type="text"
                placeholder="본문을 입력해주세요"
                value={content}
                onChange={changeContent}
                ></input>
            </InputWrapper>

        </Container>

        </Wrapper>
        </>
    );

};

export default MakeQuestion;
const Wrapper = styled.div`
height: 893px;
background: #15181D;
color:white;

`;
const Container = styled.div`
hr{
    width: 400px;
    height: 0px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #FFF;
    opacity: 0.08;
}

    
`;

const InputWrapper=styled.div`
margin-left:20px;
margin-top:20px;
hr{
    width: 393px;
height: 0px;
flex-shrink: 0;
opacity: 0.08;
}
input {
    border:none;
    width:200px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
    padding-left: 7%;
    background: transparent;
    color: black;
    &::placeholder {
        color: #aeaeae;
    }
}
`;

