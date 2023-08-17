import React from "react";
import styled from "styled-components";

const QnaHeaderWrite = (props) => {
    const { title } = props;

    const path = window.location.pathname;
    return (
        <>
            <Wrapper>
                <hr></hr>
                <HeaderWrapper>
                    <div class="pageTitle">{title}</div>
                    <div>작성하기</div>
                </HeaderWrapper>
                <Line>
                    <hr></hr>
                </Line>
            </Wrapper>
        </>
    );
};

export default QnaHeaderWrite;
const Wrapper = styled.div`
    width: 100%;
    border-radius: 30px;
    background: #15181d;
    margin-top: 10px;
    hr {
        top: 5px;
        margin-top: 20px;
        width: 117px;
        height: 4px;
        flex-shrink: 0;
        border-radius: 3px;
        opacity: 0.7;
        background: #fff;
    }
`;
const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 5%;
    .pageTitle {
        color: white;
        font-size: 14px;
        font-weight: 500;
        margin-left: 150px;
    }
    div {
        font-size: 12px;
        color: blue;

        width: 100vh;
        margin-left: 50px;
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
