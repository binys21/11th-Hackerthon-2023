import React, { useState } from "react";
import styled from "styled-components";

const QnA=({ toggleModal })=>{ //질문창 열고 닫을 상태 변경 함수 props로 받아오기 
    return(
        <>
        <Wrapper>
            {/* 배경을 클릭하면 질문창이 닫힘 */}
			<ModalBackground onClick={toggleModal} />
			{/* 배경보다 z-index가 높은 모달창은 클릭해도 닫히지 않음 */}
			<ModalDiv>내가 남길 질문</ModalDiv>
        </Wrapper>
        </>
    );

};
export default QnA;
const Wrapper=styled.div`
background-color:#15181D;
`;
const ModalBackground = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
`;

const ModalDiv = styled.div`
	z-index: 10;
	width: 40%;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background-color: thistle;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
	font-size: 2rem;
	font-weight: 600;
`;