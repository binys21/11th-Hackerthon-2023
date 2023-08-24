import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

import QrDoctor from "../components/QrDoctor";

const NavigateBarDoc = () => {
    const [qr, setQr] = useState(false);
    const qrPop = () => {
        setQr(true);
    };

    return (
        <>
            {qr ? <QrDoctor setQr={setQr} /> : null}
            {/* {qrScanned ? (
                <RequestNft setQr={setQr} setQrScanned={setQrScanned} />
            ) : null} */}
            <Wrapper>
                <Navbar>
                    <Link className="navbarhomeMenu" to={"/doctornft"}>
                        <FontAwesomeIcon icon={faHome} class="footIcon" /> 홈
                    </Link>
                    <Link className="navbarMenu" onClick={qrPop}>
                        <FontAwesomeIcon icon={faExpand} class="footIcon" />
                        QR 조회하기
                    </Link>
                    <Link className="navbarMenu" to={"/docmypage"}>
                        <FontAwesomeIcon icon={faCircleUser} class="footIcon" />
                        나의 정보
                    </Link>
                </Navbar>
            </Wrapper>
        </>
    );
};
export default NavigateBarDoc;
const Wrapper = styled.div`
    width: 95%;
    display: flex;
    position: absolute;
    bottom: 0;
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
        color: #24e7ad;
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
    .navbarMenu:hover {
        color: #24e7ad;
    }
    .footIcon {
        width: 22px;
        margin-bottom: 4px;
    }
    .footIcon:hover {
        color: #24e7ad;
    }
`;
