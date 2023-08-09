import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import closeQr from "../components/images_comp/closeQr.png";

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
                <div class="btn_qr">QR 코드</div>
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
`;

const Container = styled.div`
    width: 80%;
    height: 50%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background-color: #175df9;
    .btn_qr {
        display: flex;
        justify-content: center;
        align-self: center;
        width: 50px;
        color: white;
        font-size: 10px;
        font-weight: 500;
        border: 1px solid white;
        border-radius: 10px;
        background-color: none;
        padding: 4px;
    }
`;

const QrTitle = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
        font-size: 18px;
        font-weight: 600;
        color: white;
        padding: 30px 0 0 30px;
    }
    img {
        width: 20px;
        height: 20px;
        margin-top: 30px;
    }
    padding-bottom: 20%;
`;
