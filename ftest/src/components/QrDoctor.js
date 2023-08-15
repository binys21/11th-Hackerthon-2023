import React, { useState } from "react";
import styled from "styled-components";
// import Webcam from "react-webcam";
import QrReader from "react-web-qr-reader";
import { useNavigate } from "react-router-dom";
import closeQr2 from "../components/images_comp/closeQr2.png";
import RequestNft from "./NFT_comp/RequestNft";

const QrDoctor = (props) => {
    const { setQr } = props;

    const [qrScanned, setQrScanned] = useState(false);

    const deleteQr = () => {
        setQr(false);
    };
    const scanned = () => {
        setQrScanned(true);
    };

    const delay = 500;
    const previewStyle = {
        height: 250,
        width: 250,
    };
    const [result, setReselt] = useState("No result");
    const handleScan = (result) => {
        if (result) {
            setReselt(result);
            setQrScanned(true);
        }
    };
    const handleError = (error) => {
        console.log(error);
    };

    return (
        <Wrapper>
            {qrScanned ? <RequestNft setQrScanned={setQrScanned} /> : null}
            <Container>
                <QrTitle>
                    <div>건강 NFT 불러오기</div>
                    <img onClick={deleteQr} src={closeQr2} />
                </QrTitle>
                <div class="exp">의료인에게 건강 NFT를 스캔받으세요.</div>
                <div class="webcam">
                    <QrReader
                        delay={delay}
                        style={previewStyle}
                        onError={handleError}
                        onScan={handleScan}
                    />
                </div>
            </Container>
        </Wrapper>
    );
};

export default QrDoctor;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 80%;
    height: 50%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    background: linear-gradient(to bottom, #10c38e, #000000);
    .exp {
        display: flex;
        justify-self: flex-start;
        align-self: flex-start;
        color: white;
        font-size: 13px;
        font-weight: 500;
        margin-left: 30px;
        padding-bottom: 20px;
    }
    .webcam {
        display: flex;
        justify-content: center;
        align-self: center;
    }
`;

const QrTitle = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
        font-size: 22px;
        font-weight: 600;
        color: white;
        padding: 30px 0 0 30px;
    }
    img {
        width: 20px;
        height: 20px;
        margin-top: 30px;
    }
    padding-bottom: 10px;
`;
