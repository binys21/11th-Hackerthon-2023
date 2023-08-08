import React from "react";
import styled from "styled-components";


const RenewalCard=(props)=>{
    const { hospital} = props;
    return (
        <>
        <Wrapper>
        <BoxWrapper>
            <InfoWrapper>
            <NameWrapper>{hospital.name}</NameWrapper>
            <DateWrapper>{hospital.date}</DateWrapper>
            <DocWrapper>{hospital.doctor}</DocWrapper>
            </InfoWrapper>
            <hr></hr>
            <SideWrapper>
                {hospital.type}
            </SideWrapper>
        </BoxWrapper>
        </Wrapper>

        </>

    );

};
export default RenewalCard;
const Wrapper=styled.div`

`;
const BoxWrapper=styled.div`
background-color:#363B46;
width:270px;
height:95px;
margin-botton:200px;
`;
const InfoWrapper=styled.div`
`;
const NameWrapper=styled.div`
`;
const DateWrapper=styled.div`
`;
const DocWrapper=styled.div`
`;
const SideWrapper=styled.div`
`;