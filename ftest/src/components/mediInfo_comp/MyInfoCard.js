import React from "react";
import styled from "styled-components";

const MyInfoCard=()=>{
    return(
        <>
        <BoxWrapper>
            <ContentWrapper>

            </ContentWrapper>
            <TitleWrapper>
                이름 
                성별/생년월일
                주민번호
                혈액형
                키/체중
                연락처
                거주지
            </TitleWrapper>
        </BoxWrapper>
        </>
    );

};
export default MyInfoCard;
const BoxWrapper=styled.div`
`;
const TitleWrapper=-styled.div`
`;