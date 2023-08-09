import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import goBackIcon from "./images_comp/goBack.png";

const HeaderWithRef = (props) => {
    const { title } = props;
    const navigate = useNavigate();
    const path = window.location.pathname;
    return (
        <>
            <HeaderWrapper>
                <img src={goBackIcon} />
                <div class="pageTitle">{title}</div>
                <button>새로고침</button>
            </HeaderWrapper>
        </>
    );
};

export default HeaderWithRef;

const HeaderWrapper = styled.div`
    width: 330px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15%;
    padding-bottom: 5%;

    img {
        width: 7px;
    }
    .pageTitle {
        color: white;
        font-weight: 500;
        font-size: 18px;

    }
    .button{
    background-color:transparent;

    }
`;
