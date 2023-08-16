import React, { useState } from "react";
import styled from "styled-components";
import chatFooterBar from "../../pages/images/chatFooterBar.png";
import chatArrow from "../../pages/images/chatArrow.png";

const ChatFooter = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <img class="bar" src={chatFooterBar} />
                    <div class="myQ">내가 남긴 질문</div>
                    <img class="arrow" src={chatArrow} />
                </Container>
            </Wrapper>
        </>
    );
};
export default ChatFooter;

const Wrapper = styled.div`
    width: 95%;
    position: fixed;
    bottom: 0;
    z-index: 10;
    height: 40px;
    background-color: #15181d;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1),
        0 0 40px rgba(255, 255, 255, 0.1), 0 0 50px rgba(255, 255, 255, 0.1);

    height: 15%;
    border-style: none;
    border-radius: 20px 20px 0 0;
`;
const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    .myQ {
        color: white;
        font-size: 12px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`;
