import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import mainLogo from "../images_comp/mainLogo.png";

const AfVerify = () => {
    const navigate = useNavigate();
    const gotoLogin = (e) => {
        navigate("/");
    };

    return (
        <>
            <Wrapper>
                <img src={mainLogo} />
                <Container>
                    <div class="ment">
                        인증이
                        <br />
                        완료되었습니다.
                    </div>
                    <div class="sub">
                        서비스 이용을 위한 로그인을 진행해 주세요.
                    </div>
                </Container>
                <button onClick={gotoLogin}>완료</button>
            </Wrapper>
        </>
    );
};

export default AfVerify;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #202329;
    img {
        width: 135px;
        align-items: center;
    }
    button {
        height: 40px;
        width: 80%;
        border-style: none;
        outline: none;
        border-radius: 20px;
        color: white;
        font-size: 12px;
        font-weight: 600;
        background: #175df9;
        margin-top: 40%;
        margin-bottom: 45%;
    }
`;
const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .ment {
        color: white;
        font-size: 20px;
        font-weight: 600;
        padding-top: 15%;
    }
    .sub {
        color: #aeaeae;
        font-size: 10px;
        padding-top: 10%;
    }
`;
