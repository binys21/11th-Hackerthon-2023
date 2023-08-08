import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HomeHeader from "../../components/homeHeader";
import goArrow from "../images/goArrow.png";

const HomePage = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <HomeHeader />
                    <Content>
                        <div class="title">정대만님의 건강 NFT</div>
                        <Card>
                            <div class="line1">
                                <div class="name">정대만</div>
                                <div class="btn_qr">QR 코드</div>
                            </div>
                            <div class="line2">
                                <div class="btn_renewal">갱신일 2023.07.29</div>
                                <div class="stored">안전하게 보관 중</div>
                            </div>
                            <GoMyNft>
                                <p>나의 NFT 조회</p>
                                <img src={goArrow} />
                            </GoMyNft>
                        </Card>
                    </Content>
                </Container>
                <Content>
                    <div class="title">
                        정대만님의 건강 NFT에 <br />
                        기록된 내용이에요
                    </div>
                </Content>
            </Wrapper>
        </>
    );
};

export default HomePage;

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
    background: #363b46;
`;
const Content = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        align-items: flex-start;
        color: white;
        font-size: 12px;
        font-weight: 600;
        padding-top: 5%;
    }
`;
const Card = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background: #202329;
`;
const GoMyNft = styled.div`
    width: 100%;
    background: black;
`;
