import React from "react";
import styled from "styled-components";

const GardianCard = () => {
    return (
        <>
            <BoxWrapper>
                <NameWrapper>
                    <div class="name">정수리</div>
                    <div class="stage">친아버지</div>
                </NameWrapper>
                <Substance>
                    <div class="content">010-2222-2222</div>
                    <div class="title">연락처</div>
                </Substance>
            </BoxWrapper>
        </>
    );
};
export default GardianCard;

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
        line-height: 2;
    }
    .title {
        text-align: right;
        padding-right: 20px;
        padding-top: 5%;
        font-weight: 400;
        font-size: 11px;
        line-height: 2.2;
        margin-top: 4px;
    }
`;
