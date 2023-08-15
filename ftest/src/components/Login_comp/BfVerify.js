import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Header from "../Header";

import mainLogo from "../images_comp/mainLogo.png";
import checkedIcon from "../images_comp/checked.png";
import uncheckedIcon from "../images_comp/unchecked.png";

const BfVerify = () => {
    const navigate = useNavigate();
    const [id, setID] = useState();
    const [pw, setPW] = useState();
    const [pw_re, setPW_re] = useState();
    const [usertype, setUsertype] = useState();

    const handleChange = (e) => {
        setID(e.target.value);
    };
    const handleChange2 = (e) => {
        const value = e.target.value;
        setPW(value);
        if (value !== "") {
            setPW_re("");
        }
    };
    const handleChange3 = (e) => {
        setPW_re(e.target.value);
    };
    const handleUsertypeChange = (type) => {
        setUsertype(type);
    };
    const completeVerify = () => {
        if (usertype === "patient") {
            navigate("/afVerify");
        } else if (usertype === "doctor") {
            navigate("/verifying");
        }
    };

    return (
        <Wrapper>
            <Header title="회원가입" />
            <BfVerifyContent>
                <LogoWrapper>
                    <img src={mainLogo} />
                </LogoWrapper>
                <InputWrapper>
                    <div class="input">사용하실 아이디를 입력해주세요.</div>
                    <input
                        type="text"
                        placeholder="아이디 입력"
                        value={id}
                        onChange={handleChange}
                    ></input>
                    <div class="input">사용하실 비밀번호를 입력해주세요.</div>
                    <input
                        type="password"
                        placeholder="비밀번호 입력"
                        value={pw}
                        onChange={handleChange2}
                    ></input>
                    <div class="pw2Container">
                        <input
                            type="password"
                            placeholder="비밀번호 재확인"
                            value={pw_re}
                            onChange={handleChange3}
                        ></input>
                        <div class="checkicon">
                            {(pw === pw_re && pw !== "" && pw_re !== "" && (
                                <img src={checkedIcon} />
                            )) ||
                                ((pw === "" ||
                                    pw_re === "" ||
                                    pw !== pw_re) && (
                                    <img src={uncheckedIcon} />
                                ))}
                        </div>
                    </div>
                    <div class="input">성명을 입력하세요.</div>
                    <input
                        type="text"
                        placeholder="성명 입력"
                        value={id}
                        onChange={handleChange}
                    ></input>
                    <div class="input">성명을 입력하세요.</div>
                    <input
                        type="text"
                        placeholder="성명 입력"
                        value={id}
                        onChange={handleChange}
                    ></input>
                    <GenderAndAge>
                        <Gender>
                            <p class="genderType">성별을 선택하세요.</p>
                            <GenderTypeWrapper>
                                <span class="male">남성</span>
                                <span class="female">여성</span>
                            </GenderTypeWrapper>
                        </Gender>
                        <Age>
                            <p class="genderType">나이를 입력하세요.</p>
                            <AgeWrapper>
                                <span class="male">나이 입력</span>
                                <p class="count">세</p>
                            </AgeWrapper>
                        </Age>
                    </GenderAndAge>
                    <p class="userType">
                        해당하는 사용자 유형을 선택해 주세요.
                    </p>
                    <UserTypeWrapper>
                        <span
                            className={`patient ${
                                usertype === "patient" ? "#175df9" : ""
                            }`}
                            onClick={() => handleUsertypeChange("patient")}
                        >
                            일반 사용자
                        </span>
                        <span
                            className={`doctor ${
                                usertype === "doctor" ? "#10c38e" : ""
                            }`}
                            onClick={() => handleUsertypeChange("doctor")}
                        >
                            의료인 사용자
                        </span>
                    </UserTypeWrapper>
                    <button class="btn_next" onClick={completeVerify}>
                        다음으로
                    </button>
                </InputWrapper>
            </BfVerifyContent>
        </Wrapper>
    );
};

export default BfVerify;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202329;
`;
const BfVerifyContent = styled.div`
    margin-top: 30px;
    height: 100%;
    width: 85%;

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
    img {
        width: 80px;
    }
    margin-bottom: 30px;
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .input,
    .userType,
    .genderType {
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
        color: black;
        &::placeholder {
            color: #aeaeae;
        }
    }
    .pw2Container {
        height: 40px;
        border-style: none;
        outline: none;
        border-radius: 10px;
        background-color: white;
        display: flex;
        padding-right: 5%;
        justify-content: space-between;
        input {
            height: 94%;
        }
        img {
            height: 20px;
            display: flex;
            align-items: center;
        }
        .checkicon {
            display: flex;
            justify-content: center;
            align-items: center;
        }
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
    .btn_next {
        margin-bottom: 10%;
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
    }
    .patient {
        margin-right: 8px;
    }
    .doctor {
        margin-left: 8px;
    }
    .patient:hover {
        background: #175df9;
    }
    .doctor:hover {
        background: #10c38e;
    }
`;
const GenderAndAge = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
const Gender = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;
const Age = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;
const AgeWrapper = styled.div`
    display: flex;
    p {
        margin-left: 5px;
    }
    span {
        background: white;
        height: 40px;
        width: 70%;
        border-style: none;
        outline: none;
        border-radius: 10px;
        color: #aeaeae;
        font-weight: 500;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 5px;
        padding-left: 10px;
    }
    .count {
        font-size: 13px;
        color: white;
    }
`;
const GenderTypeWrapper = styled.div`
    display: flex;
    width: 90%;
    span {
        background: white;
        height: 40px;
        width: 50%;
        border-style: none;
        outline: none;
        border-radius: 10px;
        color: #aeaeae;
        font-weight: 500;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .male {
        margin-right: 5px;
    }
    .female {
        margin-left: 5px;
    }
    .male:hover,
    .female:hover {
        background-color: #175df9;
        color: white;
    }
`;
