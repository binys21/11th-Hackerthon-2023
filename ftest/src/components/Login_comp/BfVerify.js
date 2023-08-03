import React from "react";
import styled from "styled-components";

const BfVerify = () => {
    return (
        <Wrapper>
            <BfVerifyContent>
                <LogoWrapper>
                    {/*<img src={require("../../images/health-mark.png").default} />*/}
                    <img src="../../images/health-mark.png" />
                    <p class="title">국민들의 건강 관리 지키미, 건강지갑</p>
                </LogoWrapper>
                <InputWrapper>
                    <div class="input">사용하실 아이디를 입력해주세요.</div>
                    <input placeholder="아이디 입력"></input>
                    <div class="input">사용하실 비밀번호를 입력해주세요.</div>
                    <input placeholder="비밀번호 입력"></input>
                    <input placeholder="비밀번호 재확인"></input>
                    <p class="userType">
                        해당하는 사용자 유형을 선택해 주세요.
                    </p>
                    <UserTypeWrapper>
                        <span class="patient">일반 사용자</span>
                        <span class="doctor">의료인 사용자</span>
                    </UserTypeWrapper>
                    <button class="btn_next">다음으로</button>
                </InputWrapper>
            </BfVerifyContent>
        </Wrapper>
    );
};

export default BfVerify;

const Wrapper = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202329;
`;
const BfVerifyContent = styled.div`
    width: 85%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    .title {
        color: white;
        font-size: 13px;
    }
    margin-bottom: 30px;
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .input,
    .userType {
        font-size: 10px;
        color: white;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .userType {
        margin-top: 30px;
    }
    input {
        height: 40px;
        border-style: none;
        outline: none;
        border-radius: 10px;
        padding-left: 7%;
        margin-bottom: 10px;
        font-weight: 500;
        color: #aeaeae;
    }
    button {
        height: 40px;
        border-style: none;
        outline: none;
        border-radius: 20px;
        background: #aeaeae;
        color: white;
        font-size: 13px;
        margin-top: 50px;
    }
    .btn_next:hover {
        background: #175df9;
    }
`;
const UserTypeWrapper = styled.div`
    display: flex;
    span {
        background: #aeaeae;
        height: 40px;
        width: 50%;
        border-style: none;
        outline: none;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0 5px;
    }
    .patient:hover {
        background: #175df9;
    }
    .doctor:hover {
        background: #10c38e;
    }
`;
