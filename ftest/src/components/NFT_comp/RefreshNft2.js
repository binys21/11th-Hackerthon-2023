import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import popupRequest from "../images_comp/popupRequest.png";
import RefreshedPop from "./RefreshedPop";

const RefreshNft2 = (props) => {
    const { closeGetNewPop, handleDoneRefresh } = props;

    const handleLater = () => {
        closeGetNewPop();
    };
    const handleInnerModal = () => {
        closeGetNewPop();
        handleDoneRefresh();
    };

    return (
        <Wrapper>
            <Container>
                <img src={popupRequest} />
                <div class="ment">
                    새로운 데이터를
                    <br />
                    가져오시겠습니까?
                </div>
                <RequestInfo>
                    <div class="request">작성자</div>
                    <div class="request_c">
                        독수리약국
                        <br />
                        약사 권한민
                    </div>
                </RequestInfo>
                <RequestInfo>
                    <div class="request">작성 일시</div>
                    <div class="request_c">
                        2023.07.30 (일)
                        <br />
                        오후 03시 50분
                    </div>
                </RequestInfo>
                <AgreeBtn onClick={handleInnerModal}>네, 좋아요</AgreeBtn>
                <LaterBtn onClick={handleLater}>다음에 할게요</LaterBtn>
            </Container>
        </Wrapper>
    );
};

export default RefreshNft2;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
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
    background-color: #10c38e;
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
