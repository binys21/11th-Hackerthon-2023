import React, { useState } from "react";
import styled from "styled-components";
//image
import lowbtn from "../../pages/images/lowbtn.png";

const AllegyCard = () => {
    const [isBlur, setIsBlur] = useState(true);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const toggleBlur = () => {
        setIsBlur(!isBlur);
        setIsButtonVisible(false);
    };

    return (
        <>
            <BoxWrapper>
                {isButtonVisible && (
                    <BtnWrapper>
                        <button onClick={toggleBlur}>
                            내려서 상세보기
                            <br></br>
                            <br></br>
                            <img src={lowbtn} alt=""></img>
                        </button>
                    </BtnWrapper>
                )}
                <NameWrapper>
                    <div class="name">파목신</div>
                    <div class="stage">Severe</div>
                </NameWrapper>
                <Substance blur={isBlur}>
                    <div class="content">
                        amoxicillin
                        <br />
                        piperacillin
                        <br />
                        oxacillin
                        <br />
                        <br />
                        PENICILLINS
                        <br />
                        <br />
                        호흡곤란
                        <br />
                        아나필락시스
                    </div>
                    <div class="title">
                        성분명
                        <br />
                        <br />
                        <br />
                        <br />
                        성분군
                        <br />
                        <br />
                        증상
                        <br />
                        <br />
                    </div>
                </Substance>
            </BoxWrapper>
        </>
    );
};
export default AllegyCard;

const BtnWrapper = styled.div`
    button {
        color: white;
        border: 0;
        background-color: transparent;
    }
    z-index: 10;
    position: absolute;
    top: 70%;
    margin-left: 120px;
`;
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
        color: #ff6868;
    }
`;
const Substance = styled.div`
    filter: ${({ blur }) => (blur ? "blur(1px)" : "none")};
    -webkit-filter: ${({ blur }) => (blur ? "blur(5px)" : "none")};
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
        line-height: 1.5;
    }
    .title {
        text-align: right;
        padding-right: 20px;
        padding-top: 5%;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.8;
        margin-top: 4px;
    }
`;
