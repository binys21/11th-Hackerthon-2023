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
            갱신한 날
        </TitleWrapper>

        <ContentWrapper>
            {nftHospitalList.map((hospital)=>(
                <RenewalCard hospital={hospital}/>
            ))}
        </ContentWrapper>
        </Wrapper>
        
        </>
    );

};
export default NftRenewalPage;
const Wrapper=styled.div`
height:100%;
`;
const TitleWrapper=styled.div`
margin-bottom:10px;
`;
const ContentWrapper=styled.div`
`;