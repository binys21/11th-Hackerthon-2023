import React, { useState } from "react";
import styled from "styled-components";

import HomeHeader from "../../components/homeHeader";
import btn_receive from "../images/btn_receive.png";
import nftList from "../images/nftList.png";
import AgreeNft from "../../components/NFT_comp/AgreeNft";

const MyNFT = () => {
    const [agreePop, setAgreePop] = useState(false);

    const openAgreePop = () => {
        setAgreePop(true);
    };

    return (
        <>
            <Wrapper>
                <Container>
                    {agreePop ? <AgreeNft setAgreePop={setAgreePop} /> : null}
                    <HomeHeader />
                    <Content>
                        <div class="title">새로운 NFT 조회 요청</div>
                        <CardInfo>
                            <BlueBox>
                                <div>
                                    <div class="contentTitle">세브란스병원</div>
                                    <span>승인요청</span>
                                </div>
                                <div class="contentinfo">2023.07.30</div>
                                <div class="contentinfo">
                                    외과 전문의 김학선
                                </div>
                            </BlueBox>
                            <div class="imgwrap">
                                <img onClick={openAgreePop} src={btn_receive} />
                            </div>
                        </CardInfo>
                        <CardInfo>
                            <BlueBox>
                                <div class="contentTitle">
                                    아현서울이비인후과병원
                                </div>
                                <div class="contentinfo">2023.07.29</div>
                                <div class="contentinfo">
                                    이비인후과 전문의 김현아
                                </div>
                            </BlueBox>
                            <div class="imgwrap">
                                <img onClick={openAgreePop} src={btn_receive} />
                            </div>
                        </CardInfo>
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

export default MyNFT;

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

const CardInfo = styled.div`
    width: 95%;
    display: flex;
    align-self: center;
    flex-direction: row;
    border-radius: 10px;
    background: #363b46;
    margin: 10px 0;
    .imgwrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 12px;
        img {
            width: 38px;
            height: 50px;
        }
    }
`;
const BlueBox = styled.div`
    width: 80%;
    background: #175df9;
    border-radius: 10px;
    align-items: center;
    padding-bottom: 5%;
    .contentTitle {
        display: flex;
        color: white;
        font-size: 14px;
        font-weight: 600;
        padding: 7%;
        justify-self: flex-start;
    }
    .contentinfo {
        color: white;
        font-size: 10px;
        padding: 0 0 1% 7%;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        span {
            color: white;
            font-size: 10px;
            padding-right: 5%;
        }
    }
`;
const Circles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
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
