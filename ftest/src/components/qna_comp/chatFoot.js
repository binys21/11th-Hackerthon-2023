import React, { useState } from "react";
import styled from "styled-components";
import underbar from "../../pages/images/underbar.png";
import chatArrow from "../../pages/images/chatArrow.png";

const chatFoot = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <img src={underbar} />
                    <div class="myQ">내가 남긴 질문</div>
                    <img src={chatArrow} />
                </Container>
            </Wrapper>
        </>
    );
};
export default chatFoot;

const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    z-index: 10;
    background-color: #15181d;
    height: 15%;
    border-style: none;
    border-radius: 20px 20px 0 0;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
