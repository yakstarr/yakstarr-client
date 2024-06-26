import CommentListSection from "./WriteComment";
import DetailPostSection from "./CommentView";
import SortToggle from "./SortToggle";
import { useEffect, useState } from "react";
import { instance } from "../../../api/instance";
import { useParams } from "react-router-dom";

const CommentPage = () => {
  const { productid } = useParams();
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(`/yakstarr/drugs/reviews/${productid}/`);
        setCommentList(res.data);
      } catch (e) {
        console.log(e);
        // alert(e);
      }
    };
    fetchData();
    // console.log(commentList);
  }, [commentList]);
  return (
    <div style={{ backgroundColor: "#E2E3FF", padding: "30px 15px" }}>
      <CommentListSection />
      <SortToggle />
      {commentList?.map((item, key) => (
        <DetailPostSection
          id={item.id}
          key={key}
          drug={item.drug}
          likes={item.likes}
          nickname={item.nickname}
          password={item.password}
          review_text={item.review_text}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default CommentPage;
