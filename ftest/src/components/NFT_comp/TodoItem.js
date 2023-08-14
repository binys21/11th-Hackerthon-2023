import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "./NftContext";

import btn_receive from "../../pages/images/btn_receive.png";

const TodoItem = (props) => {
    const { id, hospital, date, doctor, done } = props;
    const [agreePop, setAgreePop] = useState(false);

    const openAgreePop = () => {
        setAgreePop(true);
    };
    return (
        <CardInfo>
            <BlueBox>
                <div>
                    <div class="contentTitle">{hospital}</div>
                    <span>승인요청</span>
                </div>
                <div class="contentinfo">{date}</div>
                <div class="contentinfo">{doctor}</div>
            </BlueBox>
            <div class="imgwrap">
                <img onClick={openAgreePop} src={btn_receive} />
            </div>
        </CardInfo>
    );
};

export default TodoItem;

const CardInfo = styled.div`
    width: 95%;
    display: flex;
    align-self: center;
    flex-direction: row;
    border-radius: 10px;
    background: #363b46;
    margin: 10px 0;
    .imgwrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 12px;
        img {
            width: 38px;
            height: 50px;
        }
    }
`;
const BlueBox = styled.div`
    width: 80%;
    background: #175df9;
    border-radius: 10px;
    align-items: center;
    padding-bottom: 5%;
    .contentTitle {
        display: flex;
        color: white;
        font-size: 14px;
        font-weight: 600;
        padding: 7%;
        justify-self: flex-start;
    }
    .contentinfo {
        color: white;
        font-size: 10px;
        padding: 0 0 1% 7%;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        span {
            color: white;
            font-size: 10px;
            padding-right: 5%;
        }
    }
`;
