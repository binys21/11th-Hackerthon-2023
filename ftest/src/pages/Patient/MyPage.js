import React, { useState } from "react";
import styled from "styled-components";
//component
import Header from '../../components/Header';

const MyPage= () => {

    return (
        <>
            <Wrapper>
                <Header title="나의 정보"/>
                <hr></hr>
                <Container>

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
