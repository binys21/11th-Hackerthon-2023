import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import chart from "../images/chart.png";
import ch1 from "../images/ch1.png";
import ch2 from "../images/ch2.png";
import ch3 from "../images/ch3.png";
import ch4 from "../images/ch4.png";
import ch5 from "../images/ch5.png";

const HistoryDetail = () => {
    return (
        <>
            <Wrapper>
                <Header title="상세보기" />
                <Container>
                    <InfoWrapper>
                        <div>차트 No.038415</div>
                        <div>2023.06.13 | 최영아 작성</div>
                    </InfoWrapper>
                    <ImgWrapper>
                        <img src={chart} width="300px" />
                        <br></br>
                        <img src={ch1} width="300px" />
                        <br></br>
                        <img src={ch2} width="300px" />
                        <br></br>

                        <img src={ch3} width="300px" />
                        <br></br>

                        <img src={ch4} width="300px" />
                        <img src={ch5} width="300px" />
                        <p class="discription">
                            「의료법」 제17조 및 같은 범 시행규칙 제9조제1향에
                            따라 위와 같이 진단합니다.
                        </p>
                    </ImgWrapper>
                </Container>
            </Wrapper>
        </>
    );
};
export default HistoryDetail;

const Wrapper = styled.div`
    height: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #202329;
`;
const Container = styled.div`
    position: absolute;
    top: 13%;
    width: 80%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const InfoWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 12px;
    color: #ffffff;
    margin-bottom: 20px;
`;
const ImgWrapper = styled.div`
    img {
        width: 330px;
        border-radius: 5px;
        margin-bottom: 13px;
    }
    .discription {
        font-size: 5px;
        text-decoration: underline;
        color: #c1c1c1;
    }
`;
