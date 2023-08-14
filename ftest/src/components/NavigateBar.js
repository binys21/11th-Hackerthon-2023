import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
//image
import Home from "../pages/images/Home.png";
import usericon from "../pages/images/usericon.png";
import QRicon from "../pages/images/QRicon.png";

const NavigateBar=()=>{
    return (
        <>
        <Wrapper>
            <Navbar>
                <Link className="navbarhomeMenu" to={'/home'}><img src={Home}></img>홈</Link>
                <Link className="navbarMenu" to={'/home'}><img src={usericon}></img>QR 조회하기</Link>
                <Link className="navbarMenu" to={'/mynft'}><img src={QRicon}></img>나의 정보</Link>
            </Navbar>

        </Wrapper>

        </>

    );

};
export default NavigateBar;
const Wrapper=styled.div`

`;
const Navbar=styled.div`
    .img{
        flex-direction: column;
    }
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;

    width: 393px;
    height: 98px;
    border-radius: 20px;
    background: #15181D;
    .navbarMenu{

        text-decoration-line: none;
        color:#FFFFFF;
        font-size: 13.1px;
    font-style: normal;
    font-weight: 500;
    }
    .navbarhomeMenu{
        flex-direction: column;
        text-decoration-line: none;
        color:#2F70FF;
        font-size: 13.1px;
    font-style: normal;
    font-weight: 500;
    }
`;
