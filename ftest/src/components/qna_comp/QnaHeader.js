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
            <Line>
                <hr></hr>
            </Line>
            
        </Wrapper>

        </>
    );
};

export default QnaHeader;
const Wrapper=styled.div`
width: 374px;
border-radius: 30px;
padding-top:0.01px;
background: #15181D;
margin-top:10px;
hr{
    
    top:5px;
    margin-top:20px;
    width: 117px;
    height: 4px;
flex-shrink: 0;
border-radius: 3px;
opacity: 0.7;
background: #FFF;
}



`;
const HeaderWrapper = styled.div`


    width: 370px;
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
        font-size:20px;
        
        border:none;
        color:white;
        background-color:#363B46;
        width:30px;
        height:30px;
        border-radius:50%;
        margin-left:100px;
        margin-bottom:5px;
    }
`;
const Line=styled.div`
hr{
    width: 400px;
    height: 0px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #FFF;
    opacity: 0.08;
}
`;
