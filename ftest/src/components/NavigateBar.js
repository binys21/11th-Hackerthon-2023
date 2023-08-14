import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//image
import Home from "../pages/images/Home.png";
import usericon from "../pages/images/usericon.png";
import QRicon from "../pages/images/QRicon.png";

const NavigateBar = () => {
    return (
        <>
            <Wrapper>
                <Navbar>
                    <Link className="navbarhomeMenu" to={"/home"}>
                        <img src={Home} /> 홈
                    </Link>
                    <Link className="navbarMenu" to={"/home"}>
                        <img src={QRicon} />
                        QR 조회하기
                    </Link>
                    <Link className="navbarMenu" to={"/mynft"}>
                        <img src={usericon} />
                        나의 정보
                    </Link>
                </Navbar>
            </Wrapper>
        </>
    );
};
export default NavigateBar;
const Wrapper = styled.div`
    width: 85%;
    display: flex;
    position: absolute;
    bottom: 0;
    margin-left: 15px;
`;
const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100px;
    border-radius: 20px;
    background: #15181d;
    z-index: 20;
    .navbarhomeMenu {
        display: flex;
        flex-direction: column;
        text-decoration-line: none;
        color: #2f70ff;
        font-size: 13.1px;
        font-style: normal;
        font-weight: 500;
        align-items: center;
        margin-right: 10px;
    }
    .navbarMenu {
        display: flex;
        flex-direction: column;
        text-decoration-line: none;
        color: #ffffff;
        font-size: 13.1px;
        font-style: normal;
        font-weight: 500;
        align-items: center;
        img {
            width: 25px;
        }
    }
`;
