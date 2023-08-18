import React from "react";
import styled from "styled-components";
import { commentData } from '../../_mock/comments';

const QuestionCard = () => {


    return (
        <>
        
                <BoxWrapper>
                    <ContentWrapper>
                        <TopWrapper>
                        <Title>{commentData.title}
                     </Title>
                     <ColorBox>나의 의료 정보</ColorBox>
                        </TopWrapper>

                   
                    <Date>{commentData.date}</Date>
                    <hr></hr>
                    <Contents>{commentData.contents}</Contents>
                    </ContentWrapper>

                </BoxWrapper>
           
        </>
    );
};

export default QuestionCard;
const Wrapper = styled.div`
    background-color: none;
`;
const BoxWrapper = styled.div`
width: 343px;
height: 127px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(255, 255, 255, 0.05);
background: #363B46;
margin-bottom:20px;
`;
const Title=styled.div`
margin-left:4px;
color:white;
font-family: Apple SD Gothic Neo;
font-size: 16px;
font-style: normal;
font-weight: 700;
`;
const Date=styled.div`
margin-top:5px;
margin-left:26px;
color: #FFF;
font-family: Apple SD Gothic Neo;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
opacity: 0.4;
letter-spacing: -0.13px;

`;
const Contents=styled.div`
margin-top:10px;
margin-left:20px;
color:white;
font-family: Apple SD Gothic Neo;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
opacity: 0.7;
`;
const ContentWrapper=styled.div`
margin-top:20px;
margin-left:15px;
hr{
    width: 272px;
height: 0px;
flex-shrink: 0;
}
`;
const ColorBox=styled.div`
margin-left:10px;
border-radius: 4px;
border: 1px solid rgba(0, 0, 0, 0.05);
background: #6D95ED;
color:white;
padding: 3px 8px;
width:60px;
text-align: right;
font-family: Pretendard;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
const TopWrapper=styled.div`
display:flex;
`;