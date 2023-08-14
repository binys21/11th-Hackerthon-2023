import React, { useState } from "react";
import styled from "styled-components";
//component
import Header from '../../components/Header';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserDocter } from "@fortawesome/free-solid-svg-icons";
// //image
// <script src="https://kit.fontawesome.com/7268985bf2.js" crossorigin="anonymous"></script>
import user from '../../pages/images/user.png';
import NavigateBar from '../../components/NavigateBar';

const MyPage= () => {

    return (
        <>
            <Wrapper>
                <Header title="나의 정보"/>
                <hr></hr>
                <Container>
                {/* <FontAwesomeIcon icon={ faUserDocter }/> */}
                
                <UserWrapper>
                <img src={user}></img> <div className="circle"></div>
                <div className='name'>정대만 </div> 
                <br></br>
                <div className='age'>18세 | 남성</div>
                </UserWrapper>

                <LoginInfo>
                    <div className='title'>로그인 정보</div>
                    <hr></hr>
                    <div className='id'>userid1234</div>
                </LoginInfo>

                <QList>내가 남긴 질문</QList>
                <hr></hr>
                <LogOut>로그아웃</LogOut>

                </Container>
                <NavWrapper>
                <NavigateBar/>
                </NavWrapper>
            </Wrapper>
        </>
    );
};

export default MyPage;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #171B21;
    hr{
        width: 393px;
        opacity: 0.2;
        background: #4C4E53;
        margin-top:10px;
    }

`;
const Container = styled.div`
color:white;
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const UserWrapper=styled.div`
color:white;
display:flex;
justify-contents:flex-start;
margin-left:27px;
margin-top:35px;
.circle {

    width : 70px;
    height : 70px;
    border-radius: 50%;
    background-color: #175DF9
  
  }
  .name{
    margin-left:20px;
    font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
  }
  .age{
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.7;
    margin-top:30px;
  }
img{
    position:absolute;
    top:20%;
    left:12%;
  }
`;
const LoginInfo=styled.div`
  .title{
    font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 2.5;
margin-left:27px;

  }

margin-top:55px;
.id{
    position:absolute;
    left:64%;
    top:34%;
    margin-left:27px;
    font-size: 18px;
    font-weight: 400;
    opacity: 0.7;
}

`;
const QList=styled.div`
line-height: 2.5;
margin-left:27px;
font-size: 18px;
font-weight: 600;
`;
const LogOut=styled.div`
margin-left:27px;
opacity: 0.5;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 2.5;
`;
const NavWrapper=styled.div`
margin-top:230px;
`;