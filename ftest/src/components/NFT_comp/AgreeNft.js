import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import popupCheck from "../images_comp/popupCheck.png";

const AgreePop = (props) => {
    const navigate = useNavigate();
    const { setAgreePop } = props;

    const goCleared = () => {
        navigate("/mynftcleared");
    };
    const deletePop = () => {
        setAgreePop(false);
    };
    return (
        <Wrapper>
            <Container>
                <img src={popupCheck} />
                <div class="ment">
                    건강 NFT 조회를
                    <br />
                    승인하시겠습니까?
                </div>
                <RequestInfo>
                    <div class="request">요청자</div>
                    <div class="request_c">
                        세브란스병원 외과
                        <br />
                        전문의 김학선
                    </div>
                </RequestInfo>
                <RequestInfo>
                    <div class="request">요청일</div>
                    <div class="request_c">2023.07.30</div>
                </RequestInfo>
                <AgreeBtn onClick={goCleared}>네, 좋아요</AgreeBtn>
                <LaterBtn onClick={deletePop}>다음에 할게요</LaterBtn>
            </Container>
        </Wrapper>
    );
};

export default AgreePop;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
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
        color: #175df9;
        font-size: 17px;
        font-weight: 600;
        text-align: center;
        padding: 5% 0;
    }
`;
const RequestInfo = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 30px;
    .request {
        font-size: 10px;
        color: #aeaeae;
    }
    .request_c {
        font-size: 10px;
        color: white;
        text-align: end;
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
    background-color: #175df9;
    margin: 20% 0 3% 0;
`;
const LaterBtn = styled.div`
    width: 80%;
    height: 35px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: white;
    background-color: #202329;
`;
