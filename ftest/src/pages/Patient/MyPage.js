import React, { useState } from "react";
import styled from "styled-components";
//component
import Header from '../../components/Header';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserDocter } from "@fortawesome/free-solid-svg-icons";
// //image
// <script src="https://kit.fontawesome.com/7268985bf2.js" crossorigin="anonymous"></script>


const MyPage= () => {

    return (
        <>
            <Wrapper>
                <Header title="나의 정보"/>
                <hr></hr>
                <Container>
                {/* <FontAwesomeIcon icon={ faUserDocter }/> */}
                    

\
                </Container>
            </Wrapper>
        </>
    );
};

export default MyPage;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #171B21;
    hr{
        width: 393px;
        opacity: 0.2;
        background: #4C4E53;
        margin-top:10px;
    }
`;
const Container = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
