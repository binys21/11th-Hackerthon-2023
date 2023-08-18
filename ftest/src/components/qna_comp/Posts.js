import styled from "styled-components";
import userPatient from "../../pages/images/userPatient.png";
import { useNavigate } from "react-router";

const Post = (props) => {
    const { title, content, id, selectedPostId, setSelectedPostId } =
        props.posts;
    const navigate = useNavigate();
    const gotoReply = () => {
        navigate(`/replypage/${id}`);
    };

    return (
        <Question>
            <ImgWrapper>
                <img src={userPatient} width={40}></img>
            </ImgWrapper>
            <Wrapper>
                <ContentWrapper>
                    <div className="title">{title}</div>
                    <div className="date">2023.08.13 22:08 작성</div>
                    <hr></hr>
                    <Content>{content}</Content>
                </ContentWrapper>
                <InputWrapper>
                    <div onClick={gotoReply} class="reply">
                        답글 작성하기
                    </div>
                    <div class="reply">수정ㅣ삭제</div>
                </InputWrapper>
            </Wrapper>
        </Question>
    );
};

export default Post;

const Question = styled.div`
    padding: 20px;
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
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
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
    width: 102%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    .reply {
        border: none;
        width: 200px;
        font-size: 12px;
        color: #aeaeae;
        padding: 13px;
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
