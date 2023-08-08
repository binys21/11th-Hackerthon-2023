import React, { useState } from "react";
import styled from "styled-components";
//image
import d1 from "../pages/images/drugimages/d1.png";
import d2 from "../pages/images/drugimages/d2.png";
import d3 from "../pages/images/drugimages/d3.png";

const DrugDetail=()=>{
    return (
        <>
        <Wrapper>
        <Container>
            <ImgWrapper>
            <img src={d1} width='300px'/>
            <img src={d2} width = '300px'/>
            <img src={d3} width = '300px'/>

            </ImgWrapper>
        </Container>
        </Wrapper>
        </>
    );

};
export default DrugDetail;


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
    
`;
const ImgWrapper=styled.div`
    img{
        border-radius: 4%;
        margin-bottom:15px;
    }

`;