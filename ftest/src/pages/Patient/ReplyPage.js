import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

import doctoruser from "../../pages/images/doctoruser.png";
import QnaHeader from "../../components/qna_comp/QnaHeader";

import Post from "../../components/qna_comp/Posts";
import Replies from "../../components/qna_comp/Replies";

//Q&A_환자 답글 작성하기
const ReplyPage = (props) => {
    const { selectedPostId, posts, replies, setReplies } = props;
    const navigate = useNavigate();

    const [newReply, setNewReply] = useState({
        retitle: "",
        recontent: "",
    });
    const { retitle, recontent } = newReply;

    const onChange = (e) => {
        const { name, value } = e.target;
        setNewReply({ ...newReply, [name]: value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!recontent) alert("본문을 입력해주세요");
        else {
            const newReplyWithId = { ...newReply, id: Date.now() };
            const updatedReplies = replies.map((reply) =>
                reply.id === selectedPostId
                    ? { ...reply, replies: [...reply.replies, newReplyWithId] }
                    : reply
            );
            setReplies(updatedReplies);
            navigate("/writtenquestion");
        }
    };
    const selectedPost = posts.find((post) => post.id === selectedPostId);

    return (
        <>
            <Back>
                <Wrapper>
                    <QnaHeader title="답글 작성하기" />
                    <Container>
                        {selectedPost && (
                            <Post
                                title={selectedPost.title}
                                content={selectedPost.content}
                            />
                        )}
                        {/* <Post
                            posts={selectedPostId} // Pass the selected post data
                            title={selectedPostId ? selectedPostId.title : ""}
                            content={
                                selectedPostId ? selectedPostId.content : ""
                            }
                        /> */}
                        {/* {posts.map((item) => (
                            <Post
                                posts={item}
                                title={item.title}
                                content={item.content}
                            />
                        ))} */}
                        <hr></hr>
                        <InputWrapper>
                            <input
                                class="reTitle"
                                type="text"
                                placeholder="제목을 입력해주세요"
                                name="retitle"
                                value={retitle}
                                onChange={onChange}
                            ></input>
                            <hr></hr>
                            <form onSubmit={onSubmit}>
                                <input
                                    class="reContent"
                                    type="text"
                                    placeholder="본문을 입력해주세요"
                                    name="recontent"
                                    value={recontent}
                                    onChange={onChange}
                                ></input>
                                <button>답글 달기</button>
                            </form>
                        </InputWrapper>
                    </Container>
                </Wrapper>
            </Back>
        </>
    );
};

export default ReplyPage;
const Back = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    background-color: black;
`;
const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    height: 90vh;
    width: 100%;
    background: #15181d;
    color: white;
    box-shadow: 0px 4px 120px rgba(134, 197, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
`;
const Container = styled.div`
    hr {
        width: 400px;
        height: 0px;
        flex-shrink: 0;
        stroke-width: 1px;
        stroke: #fff;
        opacity: 0.08;
    }
`;
// const Question = styled.div`
//     padding: 20px;
//     margin-left: 10px;
//     display: flex;
//     .title {
//         font-size: 16px;
//         font-style: normal;
//         font-weight: 600;
//         line-height: normal;
//     }
//     .date {
//         opacity: 0.4;
//         font-size: 13px;
//         font-style: normal;
//         font-weight: 400;
//         line-height: normal;
//     }
// `;
// const Content = styled.div`
//     color: #fff;
//     font-size: 13px;
//     font-weight: 400;
//     line-height: normal;
//     letter-spacing: -0.13px;
//     opacity: 0.8;
//     margin-right: 130px;
// `;
const InputWrapper = styled.div`
    margin-left: 20px;
    margin-top: 20px;
    hr {
        width: 90%;
        height: 0px;
        flex-shrink: 0;
        opacity: 0.08;
        margin: 10px 0;
    }
    input {
        color: white;
        border: none;
        width: 90%;
        height: 30px;
        margin-left: 10px;
        background: transparent;

        &::placeholder {
            color: #aeaeae;
        }
    }
    .reTitle {
        font-size: 16px;
        font-weight: 600;
    }
    .reContent {
        font-size: 15px;
    }
    button {
        background: transparent;
        border: none;
        color: white;
        font-size: 14px;
        margin-top: 200px;
        margin-left: 280px;
    }
`;
// const ImgWrapper = styled.div`
//     .circle {
//         width: 40px;
//         height: 40px;
//         border-radius: 50%;
//         background-color: #10c38e;
//     }
// `;
// const ContentWrapper = styled.div`
//     margin-left: 13px;
// `;
