import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//conmponent
import RenewalCard from '../components/RenewalCard';
//data
import { nftHospitalData } from '../_mock/nftHospitalData';

const NftRenewalPage=()=>{
    
    const nftHospitalList = nftHospitalData;
    return (
        <>
        <Wrapper>
        <TitleWrapper>
            정대만님의 NFT 갱신 기록
        </TitleWrapper>
        <SubtiWrapper>갱신한 날</SubtiWrapper>

        <WideWrapper>
        <DateWrapper>
        <FirstWrappper>2023.07.29</FirstWrappper>
        <SecondWrapper>2023.07.29</SecondWrapper>
        <ThirdWrapper>2023.07.29</ThirdWrapper>
        <ForthWrapper>2023.07.29</ForthWrapper>
        </DateWrapper>

        <ContentWrapper>
            {nftHospitalList.map((nftHospital)=>(
                <RenewalCard nftHospital={nftHospital}/>
            ))}
        </ContentWrapper>

        </WideWrapper>

        </Wrapper>
        
        </>
    );

};
export default NftRenewalPage;
const Wrapper=styled.div`
height: 100%; 
display: flex;
flex-direction: column;
align-items: center;
background-color: #202329;
`;
const TitleWrapper=styled.div`
margin-bottom:15px;
margin-right:170px;
color:white;
font-size:16px;
font-weight:700
`;
const SubtiWrapper=styled.div`
margin-right:296px;
color:white;
font-size:10px;
font-weight:400;
`;
const ContentWrapper=styled.div`
margin-right:15px;
`;
const WideWrapper=styled.div`
display:flex;
margin-top:20px;
`;
const DateWrapper=styled.div`
color:white;
font-size:10px;
font-weight:400;
margin-right:15px;
`;
const FirstWrappper=styled.div`
margin-top:10px;
`;
const SecondWrapper=styled.div`
margin-top:220px;
`;
const ThirdWrapper=styled.div`
margin-top:215px;
`;
const ForthWrapper=styled.div`
margin-top:105px;
`;