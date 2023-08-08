import React from "react";
import styled from "styled-components";


const RenewalCard=(props)=>{
    const { nftHospital} = props;
    return (
        <>
        <Wrapper>
        <BoxWrapper>
            <InfoWrapper>
            <NameWrapper>{nftHospital.name}</NameWrapper>
            <DateWrapper>{nftHospital.date}</DateWrapper>
            <DocWrapper>{nftHospital.doctor}</DocWrapper>
            </InfoWrapper>
            <SideWrapper>
                {nftHospital.type}
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
display: flex;
width: 270px;
height: 95px;
margin-bottom: 20px;
border-radius: 8px;
`;
const InfoWrapper=styled.div`
color:white;
margin-left:21px;
`;
const NameWrapper=styled.div`
font-size:16px;
font-weight:700;
margin-bottom:17px;
margin-top:14px;

`;
const DateWrapper=styled.div`
font-size:10px;
font-weight:400
`;
const DocWrapper=styled.div`
font-size:12px;
font-weight:400
`;
const SideWrapper=styled.div`
margin-top:14px;
margin-left:41px;
font-size:10px;
font-weight:400;
color:#FF6868;
`;