import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const NavigateBar=()=>{
    return (
        <>
        <Wrapper>
            <Navbar>
                <Link className="navbarMenu" to={'/home'}>Home</Link>
                <Link className="navbarMenu" to={'/home'}>QR</Link>
                <Link className="navbarMenu" to={'/mynft'}>Myinfo</Link>
            </Navbar>

        </Wrapper>

        </>

    );

};
export default NavigateBar;
const Wrapper=styled.div`

`;
const Navbar=styled.div`
justify-contents:space-evenly;
width: 393px;
height: 98px;
border-radius: 20px;
background: #15181D;
.navbarMenu{
    color:#FFFFFF;
    justify-contents:space-evenly;
}
`;
