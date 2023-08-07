import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import mainLogo from "../images/mainLogo.png";

const LoginPage = () => {
    const navigate = useNavigate();
    const [id, setID] = useState();
    const [pw, setPW] = useState();

    //input내 값이 들어오는지 확인 (글자색 회색->검정으로 변경하기 위함)
    const handleChange = (e) => {
        setID(e.target.value);
    };

    const handleChange2 = (e) => {
        setPW(e.target.value);
    };

    //userID, userPW 를 key로, id, pw 정보를 localStorage에 저장하고 ~~로 이동
    const saveAccounts = () => {
        window.localStorage.setItem("userID", id);
        window.localStorage.setItem("userPW", pw);
        navigate("/homePage");
    };

    //회원가입하기 글자누르면 회원가입 페이지로 이동
    const gotoSignUp = () => {
        navigate("/signUp");
    };

    return (
        <>
            <Wrapper>
                <Container>
                    <LogoWrapper>
                        <img src={mainLogo} />
                        <p class="title">국민들의 건강 관리 지키미, 건강지갑</p>
                        <p class="direction">
                            서비스 이용을 위한<br></br>로그인을 진행해 주세요.
                        </p>
                    </LogoWrapper>
                    <InputWrapper>
                        <div class="input">아이디</div>
                        <input
                            type="text"
                            placeholder="아이디 입력"
                            value={id}
                            onChange={handleChange}
                        ></input>
                        <div class="input">비밀번호</div>
                        <input
                            type="password"
                            placeholder="비밀번호 입력"
                            value={pw}
                            onChange={handleChange2}
                        ></input>
                        <button class="btn_login" onClick={saveAccounts}>
                            로그인
                        </button>
                        <div class="btn_signUp" onClick={gotoSignUp}>
                            회원가입하기
                        </div>
                    </InputWrapper>
                </Container>
            </Wrapper>
        </>
    );
};

export default LoginPage;

const Wrapper = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #202329;
`;
const Container = styled.div`
    width: 80%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    .title {
        color: white;
        font-size: 13px;
    }
    .direction {
        color: #aeaeae;
        font-size: 10px;
        text-align: center;
    }
    margin-bottom: 30px;
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .input,
    .btn_signUp {
        color: #aeaeae;
        font-size: 10px;
        margin-bottom: 5px;
    }
    input,
    button {
        height: 40px;
        border-style: none;
        outline: none;
        border-radius: 10px;
    }
    input {
        margin-bottom: 15px;
        padding-left: 7%;
        background: #ffffff;
        color: black;
        &::placeholder {
            color: #aeaeae;
        }
    }
    button {
        background: #aeaeae;
        color: white;
        font-weight: 600;
        font-size: 12px;
        margin-top: 15px;
        border-radius: 20px;
    }
    .btn_login:hover {
        background: #175df9;
    }
    .btn_signUp {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
`;
