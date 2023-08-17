import styled from "styled-components";
import userPatient from "../../pages/images/userPatient.png";

const Post = (props) => {
    const { title, content } = props.posts;
    return (
        <Question>
            <ImgWrapper>
                <img src={userPatient} width={40}></img>
            </ImgWrapper>
            <ContentWrapper>
                <div className="title">{title}</div>
                <div className="date">2023.08.13 22:08 작성</div>
                <hr></hr>
                <Content>{content}</Content>
            </ContentWrapper>
            <InputWrapper>
                <input type="text" placeholder="답글 작성하기"></input>
            </InputWrapper>
        </Question>
    );
};

export default Post;

const Question = styled.div`
    padding: 20px;
    margin-left: 10px;
    display: flex;
    .title {
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
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
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.13px;
    opacity: 0.8;
    margin-right: 130px;
`;
const InputWrapper = styled.div`
    margin-left: 20px;
    margin-top: 20px;
    hr {
        width: 393px;
        height: 0px;
        flex-shrink: 0;
        opacity: 0.08;
    }
    input {
        border: none;
        width: 200px;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 15px;
        padding-left: 7%;
        background: transparent;
        color: black;
        &::placeholder {
            color: #aeaeae;
        }
    }
`;

const ImgWrapper = styled.div`
    .circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #175df9;
    }
`;
const ContentWrapper = styled.div`
    margin-left: 13px;
`;
