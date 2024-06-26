import React from "react";
import styled from "styled-components";
import { Body1 } from "../../../styles/font";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../../api/instance";
import circleLike from "../Comments/icon-like.png";

function DetailPostSection({
  id,
  key,
  drug,
  likes,
  nickname,
  password,
  review_text,
  rating,
}) {
  const [post, setPost] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const { productid } = useParams();
  const [isLike, setIsLike] = useState();
  const [isPendingRequest, setIsPendingRequest] = useState(false);

  const handleClickLikeButton = async () => {
    if (isLike) {
      setLikeCount((prev) => prev - 1);
      setIsLike(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setIsLike(true);
    }
    setIsPendingRequest(false);
  };

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await instance.get(`/yakstarr/drugs/reviews/${productid}`);
        setPost(res.data);
        console.log(res.data);
        // setLikeCount(res.data.likes);
        // const res2 = await instance.get(
        //   `board/post-detail/${postid}/like/`,
        //   {}
        // );
        // setIsLike(res2.data.like);
      } catch (err) {
        alert(err);
      }
    };
    fetchPostData();
  }, []);

  return (
    <DetailPostSectionWrapper>
      <NotLike>
        <TitleBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>

          <User>{nickname}</User>
          <Price>3,000원</Price>
          <StarRate>⭐{rating}점</StarRate>
        </TitleBox>
        <div className="content">{review_text}</div>
      </NotLike>
      <LikeSection $isLike={likes}>
        도움돼요
        {isLike ? (
          <svg
            className="isLike"
            onClick={handleClickLikeButton}
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 48 48"
          >
            <mask id="ipSGoodTwo0">
              <path
                fill="#fff"
                stroke="#fff"
                d="M4.189 22.173A2 2 0 0 1 6.181 20H10a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2H7.834a2 2 0 0 1-1.993-1.827l-1.652-19ZM18 21.375c0-.836.52-1.584 1.275-1.94c1.649-.778 4.458-2.341 5.725-4.454c1.633-2.724 1.941-7.645 1.991-8.772c.007-.158.003-.316.024-.472c.271-1.953 4.04.328 5.485 2.74c.785 1.308.885 3.027.803 4.37c-.089 1.436-.51 2.823-.923 4.201l-.88 2.937h10.857a2 2 0 0 1 1.925 2.543l-5.37 19.016A2 2 0 0 1 36.986 43H20a2 2 0 0 1-2-2V21.375Z"
              />
            </mask>
            <path
              fill="currentColor"
              d="M0 0h48v48H0z"
              mask="url(#ipSGoodTwo0)"
            />
          </svg>
        ) : (
          <svg
            onClick={handleClickLikeButton}
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 48 48"
          >
            <mask id="ipSGoodTwo0">
              <path
                fill="#fff"
                stroke="#fff"
                d="M4.189 22.173A2 2 0 0 1 6.181 20H10a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2H7.834a2 2 0 0 1-1.993-1.827l-1.652-19ZM18 21.375c0-.836.52-1.584 1.275-1.94c1.649-.778 4.458-2.341 5.725-4.454c1.633-2.724 1.941-7.645 1.991-8.772c.007-.158.003-.316.024-.472c.271-1.953 4.04.328 5.485 2.74c.785 1.308.885 3.027.803 4.37c-.089 1.436-.51 2.823-.923 4.201l-.88 2.937h10.857a2 2 0 0 1 1.925 2.543l-5.37 19.016A2 2 0 0 1 36.986 43H20a2 2 0 0 1-2-2V21.375Z"
              />
            </mask>
            <path
              fill="currentColor"
              d="M0 0h48v48H0z"
              mask="url(#ipSGoodTwo0)"
            />
          </svg>
        )}
        {isLike ? (
          <LikeCount>{likeCount}</LikeCount>
        ) : (
          <LikeCount>{likeCount}</LikeCount>
        )}
      </LikeSection>
    </DetailPostSectionWrapper>
  );
}

const NotLike = styled.div``;
const TitleBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  img {
    border-radius: 50%;
    background-color: #3e43f0;
    height: 40px;
    width: 40px;
  }
  svg {
    width: 30px;
    background-color: #3e43f0;
    border-radius: 50%;
    stroke: white;
    padding: 5px;
    stroke-width: 3px;
  }
`;

const Price = styled.div``;

const User = styled.div`
  font-size: 20px;
  color: #3e43f0;
  font-weight: 800;
`;

const StarRate = styled.div``;

const DetailPostSectionWrapper = styled.section`
  border: 1px solid;
  border-radius: 1rem;
  background-color: white;
  border-color: #3e43f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 10px;
  .title {
    font-weight: 600;
    font-size: 1.8rem;
  }
  .writer {
    margin-top: 1rem;
  }
  .content {
    margin-top: 1rem;
    font-size: 20px;
    font-weight: 200;
    line-height: 130%;
  }
`;
const LikeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: ${(props) => (props.$isLike ? 0.4 : 1)};
  cursor:pointer;
  svg {
    width: 20px;
    height: 20px;
    .isLike {
      background-color: #3e43f0;
    }
  }
`;

const Profile = styled.div`
  border: 1px solid;
`;

const LikeButton = styled.img`
  width: 1.5rem;
  cursor: pointer;
`;
const LikeCount = styled.div`
  font-family: "GmarketSans";
  font-weight: 600;
  font-size: 1rem;
`;
export default DetailPostSection;
