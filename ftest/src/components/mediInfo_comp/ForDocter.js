import React from "react";
import styled from "styled-components";
//image
import lowbtn from "../../pages/images/lowbtn.png";
const ForDocter = () => { //의사가 보는 환자 개인정보 카드(의사용컬러)
    return (
        <>
            <BoxWrapper>
                <ContentWrapper>
                    <NameWrapper>정대만</NameWrapper>
                    남/2000.05.22
                    <br></br>
                    000522-3121212
                    <br></br>
                    A형/Rh+
                    <br></br>
                    184cm/70kg
                    <br></br>
                    000-0000-0000
                    <br></br>
                    서울특별시 서대문구 성산로 508
                </ContentWrapper>
                <TitleWrapper>
                    이름
                    <br></br>
                    성별/생년월일
                    <br></br>
                    주민번호
                    <br></br>
                    혈액형
                    <br></br>
                    키/체중
                    <br></br>
                    연락처
                    <br></br>
                    거주지
                </TitleWrapper>
            </BoxWrapper>
        </>
    );
};
export default ForDocter;

const BoxWrapper = styled.div`
    display: flex;
    background-color: #10c38e;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 40px;
`;
const TitleWrapper = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 3.2;
    text-align: right;
    margin-top: 15px;
`;
const NameWrapper = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-top: 4px;
    text-align: left;
`;
const ContentWrapper = styled.div`
    font-size: 15px;
    font-weight: 700;
    line-height: 2.5;
    margin-left: 20px;
    text-align: left;
    padding-bottom: 15px;
`;
