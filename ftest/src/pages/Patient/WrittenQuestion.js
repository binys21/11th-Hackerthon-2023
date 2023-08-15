import React, { useState } from "react";
import styled from "styled-components";
import user from "../../pages/images/user.png";
import QnaHeader from '../../components/qna_comp/QnaHeader';
import ReplyCard from '../../components/qna_comp/ReplyCard';
import select_btn from "../../pages/images/select_btn.png";
//Q&A_환자 내가 남긴 질문 
const WrittenQuestion=()=>{
    const [comment, setComment] = useState("");

    return (
        <>
        <Wrapper>
            <QnaHeader title="내가 남긴 질문"/>
        <Container>
            <hr></hr>
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
                                <img src={select_btn} />
                            </SelectBox>
                        </TopWrapper>
            <Question>
                <ImgWrapper>
                <img src={user} width={23}></img> <div className="circle"></div>
                </ImgWrapper>

                <ContentWrapper>
                <div className='title'>남긴 질문 게시글의 제목?</div>
                <div className='date'>2023.08.13 22:08 작성</div>
                <hr></hr>
                <Content>본문의 내용이 두줄정도 뜨게 된다.본문의 내용이 두줄정도 뜨게 된다. 
                    본문의 내용이 두줄정도 뜨게 된다.본문의 내용이 두줄정도 뜨게 된다. 
                    본문의 내용이 두줄정도 뜨게 된다.본문의 내용이 두줄정도 뜨게 된다. </Content>
                </ContentWrapper>
                <InputWrapper>
            <input
                type="text"
                placeholder="답글 작성하기"
                value={comment}
                ></input>
            </InputWrapper>
            </Question>
                {/* 답글 컴포넌트 추가 */}
                <CardWrapper>

                <ReplyCard/>
                <ReplyCard/>
                </CardWrapper>


        </Container>

        </Wrapper>
        </>
    );

};

export default WrittenQuestion;
const Wrapper = styled.div`
height: 893px;
background: #15181D;
color:white;

`;
const CardWrapper=styled.div`
width:100px;
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
margin-right:130px;

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

const ImgWrapper=styled.div`
.circle {

    width : 40px;
    height : 40px;
    border-radius: 50%;
    background-color: #175DF9;
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