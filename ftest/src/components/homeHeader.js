import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
    return (
        <>
            <HeaderWrapper>
                <div class="pageTitle">HOME</div>
            </HeaderWrapper>
        </>
    );
};

export default HomeHeader;

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15%;
    padding-bottom: 5%;
    .pageTitle {
        color: white;
        font-size: 14px;
    }
`;
