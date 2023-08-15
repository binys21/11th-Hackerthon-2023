import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import doneAllDoc from "../images/doneAllDoc.png";
import slideBtn from "../images/slideBtn.png";
import QrDoctor from "../../components/QrDoctor";
import RequestNft from "../../components/NFT_comp/RequestNft";

const DoctorHome = (props) => {
    const { qrScanned, setQrScanned } = props;

    const [qr, setQr] = useState(false);
    const qrPop = () => {
        setQr(true);
    };

    const navigate = useNavigate();
    const refresh = () => {
        navigate("/viewnft");
    };

    return (
        <>
            {qr ? <QrDoctor setQr={setQr} /> : null}
            {/* {qrScanned ? (
                <RequestNft setQr={setQr} setQrScanned={setQrScanned} />
            ) : null} */}
            <Wrapper>
                {/* <Header title="HOME" /> */}
                <Content>
                    <div class="title">
                        아직 환자 건강 NFT
                        <br />
                        기록을 불러오지 못했어요. :{"("}
                    </div>
                    <div onClick={refresh} class="renew_btn">
                        새로 고침
                    </div>
                </Content>
                <DoneWrapper>
                    <img class="done" src={doneAllDoc} />
                    <div class="ment">
                        QR 스캔으로
                        <br />
                        환자의 건강 NFT 기록을 불러오세요
                    </div>
                </DoneWrapper>
                <Container onClick={qrPop}>
                    <div class="slide">올려서 QR 스캔하기</div>
                    <div class="slide_btn">
                        <img src={slideBtn} />
                    </div>
                </Container>
            </Wrapper>
        </>
    );
};

export default DoctorHome;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #202329;
    padding-top: 50px;
`;
const DoneWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    .done {
        margin: 20% 0 5% 0;
    }
    .ment {
        color: #10c38e;
        font-size: 13px;
        font-weight: 800;
        text-align: center;
    }
`;
const Content = styled.div`
    width: 85%;
    position: relative;
    top: 5%;
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
    margin-top: 300px;
    .slide {
        color: white;
        font-size: 12px;
        margin-top: 20px;
        font-weight: 600;
    }
    .slide_btn img {
        width: 40px;
        margin-top: 20px;
    }
`;
