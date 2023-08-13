import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import popupRequest from "../images_comp/popupRequest.png";

const RefreshedPop = (props) => {
    const { closeGetNewPop, closeDoneRefresh } = props;

    const handleCloseAllModals = () => {
        closeGetNewPop();
        closeDoneRefresh();
    };

    return (
        <Wrapper>
            <Container>
                <img src={popupRequest} />
                <div class="ment">
                    새로운 데이터
                    <br />
                    반영 완료
                </div>
                <AgreeBtn onClick={handleCloseAllModals}>
                    반영된 내용 보러가기
                </AgreeBtn>
            </Container>
        </Wrapper>
    );
};

export default RefreshedPop;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.8);
`;
const Container = styled.div`
    width: 100%;
    height: 60%;
    bottom: 0;
    border-style: none;
    border-radius: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #202329;
    padding-top: 10%;
    .ment {
        color: #10c38e;
        font-size: 17px;
        font-weight: 600;
        text-align: center;
        padding: 5% 0;
    }
    img {
        margin-top: 40px;
    }
`;
const AgreeBtn = styled.div`
    width: 80%;
    height: 38px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: white;
    background-color: #10c38e;
    margin: 20% 0 3% 0;
`;
