import React, { useState } from "react";
import styled from "styled-components";
//component
import QnaHeader from "../../components/qna_comp/QnaHeader";
import QnaHeaderWrite from "../../components/qna_comp/QnaHeaderWrite";
//image
import noQ from "../../pages/images/noQ.png";
import qmark from "../../pages/images/qmark.png";
import docteruser from "../../pages/images/docteruser.png";
//Q&A_환자 질문 없을 때
const NoQuestion = () => {
    return (
        <>
            <Back>
                <Wrapper>
                    <QnaHeaderWrite title="내가 받은 질문" />
                    <Container>
                        <ImageWrapper>
                            <Img>
                                {" "}
                                <img src={qmark} />
                            </Img>
                        </ImageWrapper>

                        <div className="main">아직 남겨진 질문이 없어요.</div>
                        <div className="content">
                            환자께서 궁금한 부분에 대해 질문을 작성하면
                        </div>
                        <div className="bottom">알림을 전송해드릴게요.</div>
                    </Container>
                </Wrapper>
            </Back>
        </>
    );
};

export default NoQuestion;
const Back = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    background-color: black;
`;
const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    height: 90vh;
    width: 100%;
    background: #15181d;
    color: white;
    box-shadow: 0px 4px 120px rgba(134, 197, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    text-align: center;
`;
const Container = styled.div`
    white-space: pre-line;
    margin-top: 50%;
    hr {
        width: 400px;
        height: 0px;
        flex-shrink: 0;
        stroke-width: 1px;
        stroke: #fff;
        opacity: 0.08;
    }
    .main {
        font-size: 18.941px;
        font-style: normal;
        font-weight: 600;
        opacity: 0.8;
        margin-bottom: 10px;
    }
    .content {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        opacity: 0.5;
    }
    .bottom {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        opacity: 0.5;
    }
`;
const ImageWrapper = styled.div`
    margin-bottom: 25px;
`;
const Img = styled.div``;
