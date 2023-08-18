import styled from "styled-components";
import { useNavigate } from "react-router";

import doctoruser from "../../pages/images/doctoruser.png";
const Replies = ({ reply }) => {
    const navigate = useNavigate();
    // const gotoReply = () => {
    //     navigate("/replypage");
    // };

    return (
        <>
            {reply && (
                <Wrapper>
                    <Question>
                        <ImgWrapper>
                            <img src={doctoruser} width={40}></img>
                        </ImgWrapper>
                        <ContentWrapper>
                            <div className="title">{reply.retitle}</div>
                            <div className="date">2023.08.13 22:08 작성</div>
                            <hr></hr>
                            <Content>{reply.recontent}</Content>
                        </ContentWrapper>
                    </Question>
                    {/* <InputWrapper>
                    <input type="text" placeholder="답글 작성하기"></input>
                </InputWrapper> */}
                </Wrapper>
            )}
        </>
    );
};

export default Replies;
const Wrapper = styled.div`
    margin-left: 30px;
    margin-bottom: 20px;
    height: 180px;
`;
// const InputWrapper = styled.div`
//     margin-left: 29px;
//     hr {
//         width: 393px;
//         height: 0px;
//         flex-shrink: 0;
//         opacity: 0.08;
//     }
//     input {
//         border: none;
//         width: 200px;
//         font-size: 13px;
//         font-weight: 400;
//         padding-left: 7%;
//         background: transparent;
//         color: black;
//         &::placeholder {
//             color: #aeaeae;
//         }
//     }
// `;
const ImgWrapper = styled.div``;
const ContentWrapper = styled.div`
    margin-left: 10px;
`;
const Question = styled.div`
    padding: 20px;
    margin-left: 8px;
    display: flex;
    .title {
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 10px;
    }
    .date {
        opacity: 0.4;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;
const Content = styled.div`
    color: #fff;
    width: 270px;
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.13px;
    opacity: 0.8;
    /* margin-right: 185px; */
`;
