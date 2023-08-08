import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import goBackIcon from "./images_comp/goBack.png";

const Header = () => {
    const navigate = useNavigate();
    const path = window.location.pathname;
    return (
        <>
            <HeaderWrapper>
                <img src={goBackIcon} />
                <div class="pageTitle">회원가입</div>
                <div></div>
            </HeaderWrapper>
        </>
    );
};

export default Header;

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20%;

    img {
        width: 7px;
    }
    .pageTitle {
        color: white;
        font-size: 14px;
    }
`;
