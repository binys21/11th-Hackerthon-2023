import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { filterSlice, setFilter } from "../../redux/filterSlice";
import { useSelector, useDispatch } from "react-redux";
//image
import circleimg from "../../pages/images/circleimg.png";
import btn from "../../pages/images/btn.png";

const Pharmacy = (props) => {
    const { hospital } = props; //병원 정보를 props로 받아옴
    const navigate = useNavigate();

    const navigateToDetail = () => {
        navigate("/drugdetail", { state: { hospital } });
    };

    const { filter } = useSelector((state) => state.filter);

  

    return (
        <>
            <Wrapper>
                <BoxWrapper>
                    <LeftWrapper>
                        <ImgWrapper>
                            <img src={circleimg} />
                        </ImgWrapper>
                    </LeftWrapper>

                    <CenterWrapper>
                        <DateWrapper>{hospital.date}</DateWrapper>
                        <NameWrapper>{hospital.name}</NameWrapper>
                        <AddWrapper>{hospital.addr}</AddWrapper>
                        <hr></hr>
                        <DocWrapper>{hospital.doctor}</DocWrapper>
                    </CenterWrapper>

                    <BtnWrapper>
                        <button onClick={navigateToDetail}>
                            <img src={btn} alt=""></img>
                        </button>
                    </BtnWrapper>
                </BoxWrapper>
            </Wrapper>
        </>
    );
};

export default Pharmacy;
const Wrapper = styled.div`
    background-color: none;
`;
const BoxWrapper = styled.div`
    background-color: white;
    display: flex;

    width: 330px;
    height: 114px;
    margin-bottom: 20px;
    border-radius: 8px;
`;
const ImgWrapper = styled.div``;
const NameWrapper = styled.div`
    margin-top: 10px;
    font-size: 16px;
    font-weight: 700;
`;
const AddWrapper = styled.div`
    font-size: 9px;
    color: #868c8c;
    font-weight: 500;
`;
const DocWrapper = styled.div`
    font-size: 9px;
    font-weight: 600;
    color: #2273ec;
`;
const DateWrapper = styled.div`
    margin-top: 20px;
    color: #868c8c;
    font-size: 9px;
`;
const CenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    hr {
        width: 185px;
        height: 0.5px;
        border: 1px;
        background-color: #868c8c;
    }
`;
const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const BtnWrapper = styled.div`
    button {
        border: 0;
        background-color: transparent;
    }
    margin-top: 50px;
    margin-left: 15px;
`;
