import React from "react";
import styled from "styled-components";
import { Body2 } from "../../../styles/font";

function CommentItem({ content, user }) {
  return (
    <CommentItemWrapper>
      <div className="row-1">
        <Body2>{user}</Body2>
      </div>
      <div className="content">
        <Body2>{content}</Body2>
      </div>
    </CommentItemWrapper>
  );
}

const CommentItemWrapper = styled.div`
  padding: 1.5rem 0 0;
  .row-1 {
    display: flex;
    gap: 1.5rem;
  }
  .content {
    margin-top: 0.5rem;
  }
`;
export default React.memo(CommentItem);
