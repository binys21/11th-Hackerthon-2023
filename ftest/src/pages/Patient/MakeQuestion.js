import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import docteruser from "../../pages/images/docteruser.png";
import QnaHeader from "../../components/qna_comp/QnaHeader";
//Q&A_환자 답글 작성하기
const MakeQuestion = (props) => {
    const { posts, setPosts } = props;
    const navigate = useNavigate();
    //새로운 게시글을 저장할 useState
    // (제목과 내용 2가지 값을 1개의 useState에서 객체 형식으로 관리)
    const [newPost, setNewPost] = useState({
        // id: posts.length + 1,
        title: "",
        content: "",
    });
    //제목과 내용을 구조분해할당으로 풀어쓰기
    const { title, content } = newPost;

    const onChange = (e) => {
        const { name, value } = e.target;
        //새로운 게시글에 input값 반영
        //키 이름은 name, 값은 value로
        setNewPost({ ...newPost, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!content) alert("본문을 입력해주세요");
        else {
            setPosts([...posts, newPost]);
            navigate("/writtenquestion");
        }
    };

    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");
    // const changeTitle = (e) => {
    //     setTitle(e.target.value);
    // };
    // const changeContent = (e) => {
    //     setContent(e.target.value);
    // };

    return (
        <>
            <Back>
                <Wrapper>
                    <QnaHeader title="질문 작성하기" />
                    <Container>
                        <InputWrapper>
                            <input
                                placeholder="제목을 입력해주세요"
                                name="title"
                                value={title}
                                onChange={onChange}
                            ></input>
                            <hr></hr>
                            <form onSubmit={onSubmit}>
                                <input
                                    class="content"
                                    placeholder="본문을 입력해주세요"
                                    name="content"
                                    value={content}
                                    onChange={onChange}
                                ></input>
                                <button type="submit">질문하기</button>
                            </form>
                        </InputWrapper>
                    </Container>
                </Wrapper>
            </Back>
        </>
    );
};

export default MakeQuestion;
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
        width: 100%;
        height: 0px;
        flex-shrink: 0;
        stroke-width: 1px;
        stroke: #fff;
        opacity: 0.08;
    }
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    hr {
        display: flex;
        justify-content: center;
        width: 85%;
        height: 0px;
        flex-shrink: 0;
        opacity: 0.08;
    }
    input {
        border: none;
        width: 200px;
        height: 35px;
        font-size: 16px;
        /* font-weight: 600; */
        margin-left: 7%;
        background: transparent;
        color: white;
        &::placeholder {
            color: #aeaeae;
        }
    }
    .content {
        width: 300px;
        color: white;
    }
    button {
        margin-top: 20px;
        border: 0;
    }
`;
