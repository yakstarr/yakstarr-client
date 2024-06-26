import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import { useParams } from "react-router-dom";
import { instance } from "../../../api/instance";

const CommentListSection = () => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");
  const [nickname, setNickname] = useState("");
  const [rate, setRate] = useState(5);
  const { productid } = useParams();

  const body = {
    drug: productid,
    review_text: comment,
    nickname,
    password: "123456",
    rating: rate,
  };

  const handleClickPostButton = async () => {
    try {
      const res = await instance.post(`/yakstarr/drugs/reviews/`, body);
      console.dir(res);
    } catch (e) {
      console.error(e.response);
    } finally {
      setComment("");
      setNickname("");
    }
  };
  const onSelectChange = (e) => {
    setRate(e.target.value);
  };
  const onNameChange = (e) => {
    setNickname(e.target.value);
  };
  const onPriceChange = (e) => {
    setNickname(e.target.value);
  };
  return (
    <CommentListSectionWrapper>
      <CommentCount>후기 {commentList.length}</CommentCount>
      {commentList.map((item) => (
        <CommentItem
          value={nickname}
          key={item.id}
          content={item.content}
          user={item.user}
        />
      ))}
      이름
      <Price onChange={onNameChange} />
      구매가격
      <Price2 />
      별점
      <select id="rate" onChange={onSelectChange}>
        <option value={5}>5</option>
        <option value={4}>4</option>
        <option value={3}>3</option>
        <option value={2}>2</option>
        <option value={1}>1</option>
      </select>
      <TextWrapper>
        <CommentTextArea
          placeholder="후기를 작성해주세요"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <PostButton onClick={handleClickPostButton}>작성하기</PostButton>
      </TextWrapper>
    </CommentListSectionWrapper>
  );
};
const TextWrapper = styled.div`
  display: flex;
  padding: 10px 0;
`;

const CommentListSectionWrapper = styled.section`
  width: 100%;
  select {
    margin-left: 10px;
    width: 50px;
  }
`;

const CommentCount = styled.div`
  margin-bottom: 10px;
  font-size: 25px;
  font-family: "GmarketSans";
`;

const Price = styled.input`
  width: 100px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-left: 10px;
  background-color: white;
`;
const Price2 = styled.input`
  width: 100px;
  border: 1.5px solid #3e43f0;
  height: 20px;
  border: 1px solid;
  margin-right: 10px;
  margin-left: 10px;

  background-color: white;
`;

const CommentTextArea = styled.textarea`
  display: inline-block;
  width: 100%;
  height: 8rem;
  padding: 1rem 1rem;
  outline: none;
  border: 1px solid;
  resize: none;
  font-family: Pretendard;
  border-radius: 1rem 0px 0px 1rem;
  border-color: #3e43f0;
  &:focus {
    border: 2px solid #3e43f0;
  }
`;

const PostButton = styled.button`
  padding: 1rem 10px;
  width: 100px;
  border-radius: 0px 1rem 1rem 0px;
  font-family: "GmarketSans";
  background-color: #3e43f0;
  color: white;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    opacity: 0.8;
  }
`;

export default CommentListSection;
