import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import closeQr from "../components/images_comp/closeQr.png";
import { QRCodeCanvas } from "qrcode.react";

const QrPatient = (props) => {
    const { setQr } = props;

    const deleteQr = () => {
        setQr(false);
    };

    return (
        <Wrapper>
            <Container>
                <QrTitle>
                    <div>정대만님의 건강 NFT</div>
                    <img onClick={deleteQr} src={closeQr} />
                </QrTitle>
                <div class="exp">의료인에게 건강 NFT를 스캔받으세요.</div>
                <div class="qrCode">
                    <QRCodeCanvas size={200} />
                </div>
            </Container>
        </Wrapper>
    );
};

export default QrPatient;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:10;
`;

const Container = styled.div`
    width: 80%;
    height: 50%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #175df9, #000000);
    img {
        display: flex;
        width: 80%;
        justify-self: center;
        align-self: center;
        margin-top: 10px;
    }
    .exp {
        display: flex;
        justify-self: flex-start;
        align-self: flex-start;
        color: white;
        font-size: 13px;
        font-weight: 500;
        margin-left: 30px;
    }
    .qrCode {
        width: 75%;
        height: 55%;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        margin-top: 20px;
        background-color: white;
        border-style: none;
        border-radius: 10px;
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
    padding-bottom: 4%;
`;
