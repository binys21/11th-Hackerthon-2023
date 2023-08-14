import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import goArrow from "../images/goArrow.png";
import slideBtn from "../images/slideBtn.png";

const ViewNft = () => {
    const navigate = useNavigate();
    const viewNft = () => {
        navigate("/doctornft");
    };
    return (
        <>
            <Wrapper>
                <Header title="HOME" />
                <Content>
                    <div class="title">
                        환자 건강 NFT 기록을
                        <br />
                        살펴보세요
                    </div>
                    <div class="renew_btn">새로 고침</div>
                </Content>
                <Card>
                    <Line1>
                        <div class="name">정대만</div>
                        <div class="complete">승인 완료</div>
                    </Line1>
                    <Line2>
                        <div class="date_renewal">승인일 2023.07.30</div>
                    </Line2>
                    <GoMyNft onClick={viewNft}>
                        <div class="wrap">
                            <div class="ment_mynft">환자의 NFT 조회</div>
                        </div>
                        <img src={goArrow} />
                    </GoMyNft>
                </Card>
                <Container>
                    <div class="slide">올려서 QR 스캔하기</div>
                    <div class="slide_btn">
                        <img src={slideBtn} />
                    </div>
                </Container>
            </Wrapper>
        </>
    );
};
export default ViewNft;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #202329;
`;
const Content = styled.div`
    margin-top: 20px;
    width: 85%;
    display: flex;
    flex-direction: column;
    .title {
        align-items: flex-start;
        color: white;
        font-size: 18px;
        font-weight: 600;
        padding: 10% 0;
        left: 0;
    }
    .renew_btn {
        color: white;
        font-size: 10px;
        align-self: flex-end;
        margin-bottom: 20px;
    }
`;
const Card = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-self: center;
    border-radius: 10px;
    background: #363b46;
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
    .complete {
        display: flex;
        justify-content: center;
        color: white;
        font-size: 10px;
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
    .date_renewal {
        color: #10c38e;
        font-size: 10px;
        text-decoration: underline;
    }
`;
const GoMyNft = styled.div`
    width: 100%;
    display: flex;
    background: #010816;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    .wrap {
        display: flex;
    }
    .ment_mynft {
        color: white;
        font-size: 14px;
        font-weight: 600;
        margin-left: 15px;
    }
    img {
        width: 5%;
        margin-right: 15px;
    }
`;
const Container = styled.div`
    width: 85%;
    height: 100px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: flex-end;
    background-color: #10c38e;
    border-style: none;
    border-radius: 20px 20px 0 0;
    margin-top: 310px;
    .slide {
        color: white;
        font-size: 12px;
        margin-top: 20px;
        margin-bottom: 0;
        font-weight: 600;
    }
    .slide_btn img {
        width: 40px;
        margin-top: 20px;
    }
`;
