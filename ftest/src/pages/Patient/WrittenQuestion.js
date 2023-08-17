import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import userPatient from "../../pages/images/userPatient.png";
import QnaHeaderWrite from "../../components/qna_comp/QnaHeaderWrite";
import ReplyCard from "../../components/qna_comp/ReplyCard";
import select_btn_white from "../images/select_btn_white.png";
import MakeQuestion from "./MakeQuestion";
import Post from "../../components/qna_comp/Posts";
//Q&A_환자 내가 남긴 질문
const WrittenQuestion = (props) => {
    const { posts } = props;

    return (
        <>
            <Back>
                <Wrapper>
                    <QnaHeaderWrite title="내가 남긴 질문" />
                    <Container>
                        <TopWrapper>
                            <Number>총 3건</Number>
                            <SelectBox>
                                <select>
                                    <option key="latest" value="latest">
                                        최근순
                                    </option>
                                    <option key="older" value="older">
                                        오래된순
                                    </option>
                                </select>
                                <img src={select_btn_white} />
                            </SelectBox>
                        </TopWrapper>
                        {posts.map((item) => (
                            <Post
                                posts={item}
                                title={item.title}
                                content={item.content}
                            />
                        ))}
                        {/* <Question>
                            <ImgWrapper>
                                <img src={userPatient} width={40}></img>
                            </ImgWrapper>
                            <ContentWrapper>
                                <div className="title">
                                    제 부상병 중에 혈어증에 대해서 알고 싶어요.
                                </div>
                                <div className="date">
                                    2023.08.13 22:08 작성
                                </div>
                                <hr></hr>
                                <Content>
                                안녕하세요! 제 부상병인 혈어증과 관련해
                                    궁금한 부분이 있습니다. 혈액질환의 종류와
                                    증상, 예방법에 대해 알고 싶습니다. 또한
                                    혈액검사의 중요성과 정기적인 검사 주기도
                                    궁금합니다.{" "}
                                </Content>
                            </ContentWrapper>
                            <InputWrapper>
                                <input
                                    type="text"
                                    placeholder="답글 작성하기"
                                    value={comment}
                                ></input>
                            </InputWrapper>
                        </Question> */}
                        {/* 답글 컴포넌트 추가 */}
                        {/* <CardWrapper>
                            <ReplyCard />
                            <ReplyCard />
                        </CardWrapper> */}
                    </Container>
                </Wrapper>
            </Back>
        </>
    );
};

export default WrittenQuestion;
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
`;
const CardWrapper = styled.div`
    width: 100px;
`;
const Container = styled.div`
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
    padding: 20px;
    margin-left: 10px;
    display: flex;
    .title {
        font-size: 15px;
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
        background-color: #175df9;
    }
`;
const ContentWrapper = styled.div`
    margin-left: 13px;
`;
const TopWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    width: 330px;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    margin-bottom: 15px;
    padding: 0 40px 0 30px;
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
        font-size: 13px;
        color: white;
        border: none;
        background-color: transparent;
        background: "url(${select_btn_white})" no-repeat 95% 50%;
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
