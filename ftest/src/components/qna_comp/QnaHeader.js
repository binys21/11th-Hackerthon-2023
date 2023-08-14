import React from "react";
import styled from "styled-components";


const QnaHeader = (props) => {

    const { title } = props;

    const path = window.location.pathname;
    return (
        <>
        <Wrapper>
        <hr></hr>
        <HeaderWrapper>
                <div class="pageTitle">{title}</div>
                <button>X</button>
            </HeaderWrapper>
        </Wrapper>

        </>
    );
};

export default QnaHeader;
const Wrapper=styled.div`
width: 390px;
border-radius: 30px;
border: 1px solid rgba(255, 255, 255, 0.05);
background: #15181D;
box-shadow: 0px 4px 100px 0px rgba(134, 197, 255, 0.20);
margin-top:10px;
hr{
    width: 117px;
height: 4px;
flex-shrink: 0;
border-radius: 3px;
opacity: 0.7;
background: #FFF;
}
`;
const HeaderWrapper = styled.div`

    width: 390px;
    margin-left:70px;
    display: flex;
    justify-content: center;
    padding-top: 5%;
    .pageTitle {
        color: white;
        font-size: 14px;
        font-weight: 500;
    }
    button{
        background-color:#363B46;
        width:30px;
        height:30px;
        border-radius:50%;
        margin-left:100px;
        margin-bottom:5px;
    }
`;
