import React, { useState } from "react";
import styled from "styled-components";

import HomeHeader from "../../components/homeHeader";
import nftList from "../images/nftList.png";
import doneAll from "../images/doneAll.png";

const MyNFTcleared = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <HomeHeader />
                    <Content>
                        <div class="title">새로운 NFT 조회 요청</div>
                        <DoneWrapper>
                            <img src={doneAll} />
                            <div class="done">
                                새로운 NFT 조회 요청이
                                <br />
                                없습니다
                            </div>
                        </DoneWrapper>
                        <Circles>
                            <div class="circle"></div>
                            <div></div>
                            <div></div>
                        </Circles>
                    </Content>
                    <Content>
                        <div class="title">NFT 조회 승인 목록</div>
                        <img class="nftList" src={nftList} />
                    </Content>
                </Container>
            </Wrapper>
        </>
    );
};

export default MyNFTcleared;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #202329;
`;
const Container = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Content = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    .title {
        align-items: flex-start;
        color: white;
        font-size: 14px;
        font-weight: 600;
        padding: 5% 0;
        left: 0;
    }
    .nftList {
        width: 100%;
        bottom: 0;
    }
`;
const DoneWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 30%;
        padding-top: 10%;
    }
    .done {
        color: #175df9;
        font-size: 15px;
        font-weight: 800;
        text-align: center;
        padding-bottom: 10%;
    }
`;
const Circles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 10%;
    div {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
        margin: 4px 4px;
        margin-bottom: 10px;
    }
    .circle {
        background-color: #175df9;
    }
`;
