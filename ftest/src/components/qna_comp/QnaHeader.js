import React from "react";
import styled from "styled-components";
import btnX from "../images_comp/btnX.png";

const QnaHeader = (props) => {
    const { title } = props;

    const path = window.location.pathname;
    return (
        <>
            <Wrapper>
                <hr></hr>
                <HeaderWrapper>
                    <div class="pageTitle">{title}</div>
                    <img src={btnX} />
                </HeaderWrapper>
                <Line>
                    <hr></hr>
                </Line>
            </Wrapper>
        </>
    );
};

export default QnaHeader;
const Wrapper = styled.div`
    width: 374px;
    border-radius: 30px;
    padding-top: 0.01px;
    background: #15181d;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    hr {
        top: 5px;
        margin-top: 10px;
        width: 117px;
        height: 4px;
        flex-shrink: 0;
        border-radius: 3px;
        opacity: 0.7;
        background: #fff;
    }
`;
const HeaderWrapper = styled.div`
    width: 370px;
    margin-left: 125px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 5%;
    .pageTitle {
        color: white;
        font-size: 14px;
        font-weight: 500;
    }
    img {
        width: 20px;
        height: 20px;
        margin-left: 100px;
        margin-bottom: 5px;
    }
`;
const Line = styled.div`
    hr {
        width: 400px;
        height: 0px;
        flex-shrink: 0;
        stroke-width: 1px;
        stroke: #fff;
        opacity: 0.08;
    }
`;
