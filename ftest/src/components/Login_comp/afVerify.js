import React, { useState } from "react";
import styled from "styled-components";

import mainLogo from "../images_comp/mainLogo.png";

const AfVerify = () => {
    return (
        <>
            <Wrapper>
                <img src={mainLogo} />
                <p>
                    인증이
                    <br /> 완료되었습니다.
                </p>
                <p4>서비스 이용을 위한 로그인을 진행해주세요.</p4>
                <button class="btn_next">완료</button>
            </Wrapper>
        </>
    );
};

export default AfVerify;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    button {
        height: 40px;
        border-style: none;
        outline: none;
        border-radius: 20px;
        background: #10c38e;
        color: white;
        font-size: 13px;
        margin-top: 50px;
    }
`;
