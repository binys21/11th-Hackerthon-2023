import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import goBackIcon from "./images_comp/goBack.png";

const Header = (props) => {
    const { title } = props;
    const navigate = useNavigate();
    const path = window.location.pathname;
    return (
        <>
            <HeaderWrapper>
                <img src={goBackIcon} />
                <div class="pageTitle">{title}</div>
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
    padding-top: 15%;
    padding-bottom: 5%;

    img {
        width: 7px;
    }
    .pageTitle {
        color: white;
        font-size: 14px;
        font-weight: 500;
    }
`;
