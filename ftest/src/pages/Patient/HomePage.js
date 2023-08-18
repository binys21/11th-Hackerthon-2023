import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HomeHeader from "../../components/homeHeader";
import NavigateBar from "../../components/NavigateBar";

import goArrow from "../images/goArrow.png";
import goArrow2 from "../images/goArrow2.png";
import gotoChat from "../images/gotoChat.png";

import reddot from "../images/reddot.png";
import bluebox1 from "../images/bluebox1.png";
import bluebox2 from "../images/bluebox2.png";
import QrPatient from "../../components/QrPatient";

const HomePage = () => {
    const [qr, setQr] = useState(false);
    const qrPop = () => {
        setQr(true);
    };

    const navigate = useNavigate();
    const gotoMyNFT = () => {
        navigate("/mynft");
    };
    const gotoNftRenewal = () => {
        navigate("/nftrenewal");
    };
    const gotoMediInfo = () => {
        navigate("/medicalinfo");
    };
    const gotoCategory = () => {
        navigate("/category");
    };
    const gotoMyQ = () => {
        navigate("/myquestion");
    };

    return (
        <>
            <Wrapper>
                <Container>
                    {qr ? <QrPatient setQr={setQr} /> : null}
                    <Content>
                        <TitleWrapper>
                            <div class="title">
                                정대만님,
                                <br />
                                오늘도 건강한 하루 보내세요 :{")"}
                            </div>
                            <img onClick={gotoMyQ} src={gotoChat} />
                        </TitleWrapper>
                        <Card>
                            <Line1>
                                <div class="name">정대만</div>
                                <div onClick={qrPop} class="btn_qr">
                                    QR 코드
                                </div>
                            </Line1>
                            <Line2>
                                <div
                                    onClick={gotoNftRenewal}
                                    class="btn_renewal"
                                >
                                    갱신일 2023.07.29
                                </div>
                                <div class="stored">안전하게 보관 중</div>
                            </Line2>
                            <GoMyNft onClick={gotoMyNFT}>
                                <div class="wrap">
                                    <div class="ment_mynft">
                                        NFT 요청 · 승인 조회{" "}
                                    </div>
                                    <img src={reddot} />
                                </div>
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
                    <CardInfo>
                        <BlueBox>
                            <div class="contentTitle">나의 의료 정보</div>
                            <img class="bluebox1" src={bluebox1} />
                        </BlueBox>
                        <div onClick={gotoMediInfo} class="detailWrapper">
                            <div class="goDetail">
                                내용
                                <br />
                                보러 가기
                            </div>
                            <img src={goArrow2} />
                        </div>
                    </CardInfo>
                    <CardInfo>
                        <BlueBox>
                            <div class="contentTitle">나의 진료 정보</div>
                            <img class="bluebox2" src={bluebox2} />
                        </BlueBox>
                        <div onClick={gotoCategory} class="detailWrapper">
                            <div class="goDetail">
                                내용
                                <br />
                                보러 가기
                            </div>
                            <img src={goArrow2} />
                        </div>
                    </CardInfo>
                </Content>
                <NavigateBar />
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
    height: 35%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #171b21;
`;
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
        height: 25px;
    }
`;
const Content = styled.div`
    position: relative;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 200px;
    margin-top: 40px;
    .title {
        align-items: flex-start;
        color: white;
        font-size: 18px;
        font-weight: 600;
        padding: 5% 0;
        left: 0;
    }
`;
const Card = styled.div`
    width: 95%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-self: center;
    border-radius: 10px;
    background: #1a2334;
`;
const Line1 = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    .name {
        color: white;
        font-size: 18px;
        font-weight: 600;
    }
    .btn_qr {
        display: flex;
        justify-content: center;
        width: 50px;
        color: white;
        font-size: 10px;
        font-weight: 500;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        background-color: #363b46;
        padding: 4px;
    }
`;
const Line2 = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    margin-top: 10px;
    .btn_renewal {
        color: #175df9;
        font-size: 10px;
        text-decoration: underline;
    }
    .stored {
        color: #aeaeae;
        font-size: 10px;
    }
`;
const GoMyNft = styled.div`
    width: 100%;
    display: flex;
    background: linear-gradient(140deg, #175df9 0%, #3e5f95 100%);
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    .wrap {
        display: flex;
        img {
            width: 4px;
            align-self: flex-start;
            margin-left: 3px;
        }
    }
    .ment_mynft {
        color: white;
        font-size: 14px;
        font-weight: 600;
        margin-left: 15px;
    }
    .reddot {
        color: red;
        font-weight: 900;
    }
    img {
        width: 5%;
        margin-right: 15px;
    }
`;
const CardInfo = styled.div`
    width: 95%;
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 10px;
    background: #363b46;
    margin: 10px 0;
    .detailWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 11px;
        .goDetail {
            color: white;
            font-size: 10px;
            background-color: #363b46;
            border-style: none;
            margin: 10px 0;
            text-align: center;
        }
        img {
            width: 15px;
        }
    }
`;
const BlueBox = styled.div`
    width: 80%;
    background: #175df9;
    border-radius: 10px;
    align-items: center;
    .contentTitle {
        display: flex;
        color: white;
        font-size: 14px;
        font-weight: 600;
        padding: 7%;
        justify-self: flex-start;
    }
    img {
        width: 200px;
        padding: 7% 0 5% 7%;
        margin-top: 15px;
    }
    .bluebox1 {
        width: 180px;
    }
    .bluebox2 {
        width: 120px;
    }
`;
