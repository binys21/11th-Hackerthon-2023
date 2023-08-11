import React, { useState } from "react";
import styled from "styled-components";
//image
import lowbtn from "../../pages/images/lowbtn.png";

const FamilyHisCard = () => {
    return (
        <>
            <BoxWrapper>
                <NameWrapper>
                    <div class="name">당뇨</div>
                    <div class="stage">친아버지</div>
                </NameWrapper>
                <Substance>
                    <div class="content">
                        1966.03.23 -<br />-
                    </div>
                    <div class="title">
                        생년월일 - 사망일자
                        <br />
                        사망원인
                    </div>
                </Substance>
            </BoxWrapper>
        </>
    );
};
export default FamilyHisCard;

const BoxWrapper = styled.div`
    background-color: #363b46;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    border-radius: 10px;
`;
const NameWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .name {
        text-align: left;
        padding-left: 20px;
        padding-top: 5%;
        font-weight: 600;
        font-size: 20px;
    }
    .stage {
        text-align: right;
        padding-right: 20px;
        padding-top: 5%;
        font-weight: 600;
        font-size: 18px;
        color: white;
    }
`;
const Substance = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 6fr 4fr;
    margin: 5% 0;
    .content {
        text-align: left;
        padding-left: 20px;
        padding-top: 5%;
        font-weight: 600;
        font-size: 15px;
        line-height: 2.3;
    }
    .title {
        text-align: right;
        padding-right: 20px;
        padding-top: 5%;
        font-weight: 400;
        font-size: 11px;
        line-height: 3;
        margin-top: 4px;
    }
`;
