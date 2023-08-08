import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//image
import hcard from "../images/hcard.png";


const MyHistory=()=> {

    return (
        <>
        <Wrapper>
            <Container>
                <UpperWrapper>
                <p class="count">총 5건</p>
                </UpperWrapper>
                
                <img src={hcard} width = '300px'/>
                <button class="btn1" type="button" >버튼</button>
                <img src={hcard} width = '300px'/>
                <img src={hcard}width = '300px'/>
                <img src={hcard} width = '300px'/>
                <img src={hcard} width = '300px'/>
            </Container>
        </Wrapper>
        </>
    );
};
export default MyHistory;

const Wrapper = styled.div`
    height: 800px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202329;
`;
const Container = styled.div`
    width: 80%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .btn1{
        position: absolute;
        top: 185px;
        left : 825px; 
    }
    
`;
const UpperWrapper=styled.div`
    .count{
        text-align:left;
        color:white;
        font-size:14px;
    }


`;
