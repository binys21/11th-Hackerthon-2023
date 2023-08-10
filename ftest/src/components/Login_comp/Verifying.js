import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import mainLogo from "../images_comp/mainLogo.png";

const Verifying = (props) => {
    const fileInput = React.useRef(null);

    const handleButtonClick = (e) => {
        fileInput.current.click();
    };
    const handleChange = (e) => {
        console.log(e.target.files[0]);
    };

    const navigate = useNavigate();
    const completeVerify = (e) => {
        navigate("/afVerify2");
    };

    return (
        <>
            <Wrapper>
                <img src={mainLogo} />
                <Container>
                    <div class="ment">
                        의료인 인증을 위한 간단한
                        <br />
                        절차를 진행해주세요.
                    </div>
                    <div class="sub">
                        보건복지부 발급 의사 면허 증명서 스캔본을 업로드
                        해주세요.
                        <br />
                        *면허 번호 포함, jpg, png 사진만 가능, 용량 1M이하
                    </div>
                </Container>
                <React.Fragment>
                    <UploadWrapper>
                        <input
                            class="upload_blank"
                            type="file"
                            id="fileUpload"
                            ref={fileInput}
                            accept="image/jpg, image/png, image/jpeg"
                            onChange={handleChange}
                        />
                    </UploadWrapper>
                </React.Fragment>
                <button onClick={completeVerify}>인증하기</button>
            </Wrapper>
        </>
    );
};

export default Verifying;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #202329;
    img {
        width: 135px;
        align-items: center;
    }
    button {
        height: 40px;
        width: 80%;
        border-style: none;
        outline: none;
        border-radius: 20px;
        color: white;
        font-size: 12px;
        font-weight: 600;
        background: #10c38e;
        margin: 50px 0 200px 0;
    }
`;
const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20%;
    .ment {
        color: white;
        font-size: 20px;
        font-weight: 600;
        padding-top: 15%;
    }
    .sub {
        color: #aeaeae;
        font-size: 10px;
        padding-top: 10%;
    }
`;
const UploadWrapper = styled.div`
    width: 90%;
    .upload_btn {
        color: white;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .upload_blank {
        color: white;
    }
    input {
    }
`;
