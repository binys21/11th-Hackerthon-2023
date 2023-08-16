import React, { useState } from "react";
import styled from "styled-components";
import doctoruser from "../../pages/images/doctoruser.png";
import docteruser from "../../pages/images/docteruser.png";
import QnaHeader from "./QnaHeader";
//Q&A_환자 답글 작성하기
const ReplyComp = ({ show, onToggle }) => {
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
                <div className={`reply ${show ? "visible" : ""}`}>
                    {/* <button onClick={onToggle}>내가 남긴 질문</button> */}
                    {/* Other reply content */}
                </div>
                <QnaHeader title="답글 작성하기" />
                <Container>
                    <hr />
                    <Question>
                        <img
                            className="circle"
                            src={doctoruser}
                            width={40}
                            height={40}
                        ></img>
                        <ContentWrapper>
                            <div className="title">남긴 질문 게시글의 제목</div>
                            <div className="date">2023.08.13 22:08 작성</div>
                            <hr></hr>
                            <Content>
                                본문의 내용이 두줄정도 뜨게 된다.본문의 내용이
                                두줄정도 뜨게 된다. 본문의 내용이 두줄정도 뜨게
                                된다.본문의 내용이 두줄정도 뜨게 된다. 본문의
                                내용이 두줄정도 뜨게 된다.본문의 내용이 두줄정도
                                뜨게 된다.{" "}
                            </Content>
                        </ContentWrapper>
                        <hr></hr>
                    </Question>
                    <hr></hr>
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

export default ReplyComp;
const Wrapper = styled.div`
    background: #15181d;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    min-height: 10vh;
    max-height: 80vh;
    z-index: 10;
    .visible {
        transform: translateY(0);
    }
`;
const Container = styled.div`
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;

    hr {
        width: 400px;
        height: 0px;
        flex-shrink: 0;
        stroke-width: 1px;
        stroke: #fff;
        opacity: 0.08;
    }
`;
const Question = styled.div`
    padding: 10px;
    margin-left: 10px;
    display: flex;
    .title {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .date {
        opacity: 0.4;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;
const Content = styled.div`
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.13px;
    opacity: 0.8;
    margin-right: 130px;
`;
const InputWrapper = styled.div`
    margin-left: 20px;
    margin-top: 20px;
    hr {
        width: 393px;
        height: 0px;
        flex-shrink: 0;
        opacity: 0.08;
    }
    input {
        border: none;
        width: 200px;
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

const ImgWrapper = styled.div`
    .circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #10c38e;
    }
    img {
        position: absolute;
        top: 16%;
        left: 12%;
    }
`;
const ContentWrapper = styled.div`
    margin-left: 13px;
`;
