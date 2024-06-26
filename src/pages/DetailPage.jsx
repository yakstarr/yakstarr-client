import React from "react";
import DetailInfo from "../components/DetailPage/DetailInfo/detailinfo";
import CommentPage from "../components/DetailPage/Comments/CommentPage";
import Header from "../components/common/Header";

const DetailPage = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <DetailInfo />
      <CommentPage />
    </div>
  );
};

export default DetailPage;
