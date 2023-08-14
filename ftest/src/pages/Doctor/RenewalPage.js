import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import btn_get from "../images/btn_get.png";

import RefreshNft2 from "../../components/NFT_comp/RefreshNft2";
import RefreshedPop2 from "../../components/NFT_comp/RefreshedPop2";

const RenewalPage = () => {
    const [getNewPop, setgetNewPop] = useState(false);
    const [doneRefresh, setdoneRefresh] = useState(false);

    const handleGetNewPop = () => {
        setgetNewPop(true);
    };
    const closeGetNewPop = () => {
        setgetNewPop(false);
    };
    const handleDoneRefresh = () => {
        setdoneRefresh(true);
    };
    const closeDoneRefresh = () => {
        setdoneRefresh(false);
    };

    return (
        <>
            <Wrapper>
                {getNewPop && (
                    <RefreshNft2
                        handleGetNewPop={handleGetNewPop}
                        closeGetNewPop={closeGetNewPop}
                        handleDoneRefresh={handleDoneRefresh}
                    />
                )}
                {doneRefresh && (
                    <RefreshedPop2
                        handleDoneRefresh={handleDoneRefresh}
                        closeDoneRefresh={closeDoneRefresh}
                        closeGetNewPop={closeGetNewPop}
                    />
                )}
                <Container>
                    <Header title="갱신하기" />
                    <Content>
                        <div class="title">
                            새롭게 가져올 파일을
                            <br />
                            선택해주세요
                        </div>
                        <CardInfo>
                            <GreenBox>
                                <div>
                                    <div class="contentTitle">
                                        아현서울이비인후과의원
                                    </div>
                                    <span>진단 내역</span>
                                </div>
                                <div class="contentinfo">
                                    2023.07.30 {"(일)"} 오후 3시 50분 작성
                                </div>
                                <div class="contentinfo">
                                    이비인후과 전문의 고의정
                                </div>
                            </GreenBox>
                            <div class="imgwrap">
                                <img onClick={handleGetNewPop} src={btn_get} />
                            </div>
                        </CardInfo>
                        <CardInfo>
                            <GreenBox>
                                <div>
                                    <div class="contentTitle">
                                        아현서울이비인후과병원
                                    </div>
                                    <span>진단 내역</span>
                                </div>
                                <div class="contentinfo">
                                    2023.07.29 {"(토)"} 오후 4시 59분 작성
                                </div>
                                <div class="contentinfo">
                                    이비인후과 전문의 김현아
                                </div>
                            </GreenBox>
                            <div class="imgwrap">
                                <img onClick={handleGetNewPop} src={btn_get} />
                            </div>
                        </CardInfo>
                    </Content>
                </Container>
            </Wrapper>
        </>
    );
};
export default RenewalPage;

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
            width: 34px;
            height: 50px;
        }
    }
`;
const GreenBox = styled.div`
    width: 80%;
    background: #10c38e;
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
            color: black;
            font-size: 10px;
            padding-right: 5%;
        }
    }
`;
