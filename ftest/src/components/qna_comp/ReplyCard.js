import React, { useState } from "react";
import styled from "styled-components";
//image
import user from "../../pages/images/user.png";
import docteruser from "../../pages/images/docteruser.png";

const ReplyCard = () => {
    const [comment,setComment]=useState("");


    return (
        <>
        <Wrapper>
        <Question>
                <ImgWrapper>
                <img src={docteruser} width={23}></img> <div className="circle"></div>
                </ImgWrapper>

                <ContentWrapper>
                <div className='title'>남긴 질문 답변의 제목</div>
                <div className='date'>2023.08.13 22:08 작성</div>
                <hr></hr>
                <Content>본문의 내용이 두줄정도 뜨게 된다.본문의 내용이 두줄정도 뜨게 된다. 
                    본문의 내용이 두줄정도 뜨게 된다.본문의 내용이 두줄정도 뜨게 된다. 
                    본문의 내용이 두줄정도 뜨게 된다.본문의 내용이 두줄정도 뜨게 된다. </Content>
                </ContentWrapper>
                <hr></hr>
            </Question>
            <InputWrapper>
            <input
                type="text"
                placeholder="답글 작성하기"
                value={comment}
                ></input>
            </InputWrapper>
        </Wrapper>

        </>
    );
};

export default ReplyCard;
const Wrapper=styled.div`
margin-left:50px;

height: 179px;
`;
const InputWrapper=styled.div`
margin-left:20px;

hr{
    width: 393px;
height: 0px;
flex-shrink: 0;
opacity: 0.08;
}
input {
    border:none;
    width:200px;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 15px;
    padding-left: 7%;
    background: transparent;
    color: black;
    &::placeholder {
        color: #aeaeae;
    }
}
`;
const ImgWrapper=styled.div`
.circle {

    width : 40px;
    height : 40px;
    border-radius: 50%;
    background-color: #10C38E;
}
img{
    position:absolute;
    top:16%;
    left:12%;
}

`;
const ContentWrapper=styled.div`
margin-left:13px;
`;
const Question=styled.div`
padding:20px;
margin-left:10px;
display:flex;
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
margin-right:185px;

`;