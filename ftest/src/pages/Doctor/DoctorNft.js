import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../components/homeHeader";
import NavigateBarDoc from "../../components/NavigateBarDoc";

import goArrow2 from "../images/goArrow2.png";
import greenbox1 from "../images/greenbox1.png";
import greenbox2 from "../images/greenbox2.png";

const DoctorNft = () => {
    const navigate = useNavigate();

    const gotoNftRenewal = () => {
        navigate("/nftrenewal");
    };

    const gotoMediInfo = () => {
        navigate("/DocterMediInfo");
    };
    const gotoCategory = () => {
        navigate("/DocterCategory");
    };

    return (
        <>
            <Wrapper>
                <Content>
                    <div class="title">
                        정대만님의 건강 NFT에서 <br />
                        조회하실 수 있는 내용이에요.
                    </div>
                    <RenewWrap>
                        <div class="renewal_date">갱신일 2023.07.29</div>
                        <div onClick={gotoNftRenewal} class="btn_renewal">
                            NFT 갱신 기록 보러가기
                        </div>
                    </RenewWrap>
                    <CardInfo>
                        <GreenBox>
                            <div class="contentTitle">나의 의료 정보</div>
                            <img class="greenbox1" src={greenbox1} />
                        </GreenBox>
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
                        <GreenBox>
                            <div class="contentTitle">나의 진료 정보</div>
                            <img class="greenbox2" src={greenbox2} />
                        </GreenBox>
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
                <NavigateBarDoc />
            </Wrapper>
        </>
    );
};

export default DoctorNft;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #202329;
    padding-top: 10%;
`;
const Content = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    padding-top: 20%;
    .title {
        align-items: flex-start;
        color: white;
        font-size: 20px;
        font-weight: 600;
        padding: 5% 0;
        left: 0;
        margin-bottom: 20px;
    }
`;
const RenewWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .renewal_date {
        color: white;
        font-size: 10px;
        margin-bottom: 10px;
    }
    .btn_renewal {
        color: #aeaeae;
        font-size: 10px;
        text-decoration: underline;
        margin-bottom: 20px;
    }
`;
const CardInfo = styled.div`
    width: 100%;
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
const GreenBox = styled.div`
    width: 80%;
    background: #10c38e;
    border-radius: 10px;
    align-items: center;
    .contentTitle {
        display: flex;
        color: white;
        font-size: 18px;
        font-weight: 600;
        padding: 7%;
        justify-self: flex-start;
    }
    .greenbox1 {
        width: 200px;
        padding: 5% 0 5% 7%;
        margin-top: 15px;
    }
    .greenbox2 {
        width: 120px;
        padding: 5% 0 5% 7%;
        margin-top: 15px;
    }
`;
