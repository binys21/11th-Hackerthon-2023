import React, { useState } from "react";
import styled from "styled-components";
//component
import Header from "../../components/Header";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserDocter } from "@fortawesome/free-solid-svg-icons";
// //image
// <script src="https://kit.fontawesome.com/7268985bf2.js" crossorigin="anonymous"></script>
// import user from '../../pages/images/user.png';
import userPatient from "../../pages/images/userPatient.png";
import NavigateBar from "../../components/NavigateBar";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyPage = () => {
        const [userId,setUserId]=useState("");
        const navigate=useNavigate();

        const getUserInfo=()=>{
            axios({
                method:"GET",
                url:"silverjek.pythonanywhere.com//mypage/1/",
            })
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
                throw new Error(error);
            });
        };

    return (
        <>
            <Wrapper>
                <Header title="나의 정보" />
                <hr></hr>
                <Container>
                    {/* <FontAwesomeIcon icon={ faUserDocter }/> */}
                    <UserWrapper>
                        <img src={userPatient} />
                        <div class="info">
                            <div class="name">정대만</div>
                            <div class="age">18세 ㅣ 남성</div>
                        </div>
                    </UserWrapper>
                    <Infos>
                        <div className="login">
                            <div class="title">로그인 정보</div>
                            <div class="id">userid1234</div>
                        </div>
                        <hr />
                        <div class="myQ">내가 남긴 질문</div>
                        <hr />
                        <div class="logout">로그아웃</div>
                    </Infos>
                </Container>
                <NavWrapper>
                    <NavigateBar />
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
    background: #171b21;
    hr {
        width: 100vh;
        opacity: 0.2;
        background: #4c4e53;
        margin-top: 10px;
    }
`;
const Container = styled.div`
    color: white;
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    align-items: flex-start;
    align-self: center;
    margin-bottom: 10%;
    img {
        padding: 20px 20px 20px 10px;
    }
    .info {
        justify-content: center;
        align-self: center;
        .name {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 3px;
        }
        .age {
            font-size: 15px;
            color: #aeaeae;
        }
    }
`;
const Infos = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    .login {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;
        padding: 10px;
        margin-left: 30px;
        .title {
            font-size: 17px;
        }
        .id {
            color: #aeaeae;
            font-size: 15px;
        }
    }
    .myQ {
        font-size: 17px;
        padding: 10px;
        margin-left: 20px;
    }
    .logout {
        font-size: 17px;
        color: #aeaeae;
        padding: 10px;
        margin-left: 20px;
    }
`;
const NavWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
