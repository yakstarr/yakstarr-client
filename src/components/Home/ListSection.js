import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../api/instance";

const ListSection = ({ modIndex }) => {
  const navigate = useNavigate();
  const [drugList, setDrugList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        if (modIndex === 1) {
          res = await instance.get("/yakstarr/drugs/");
        } else {
          res = await instance.get("/yakstarr/drugs/rating");
        }
        if (res.status === 200) {
          setDrugList(res.data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [modIndex]);
  return (
    <>
      {drugList.map((item, index) => {
        return (
          <ProductWrapper
            key={index}
            onClick={() => navigate(`/DetailPage/${item.id}`)}
          >
            <Img src={item.drug_image} />
            <Information>
              <TitleBox>
                <Title>{item.drug_name}</Title>
                <StarRate>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
          </svg> */}
                  ⭐ : {item.average_rating ? item.average_rating : 0}점
                </StarRate>
                <CommentCount>✍️ : {item.review_count}개</CommentCount>
              </TitleBox>
              <DetailBox>
                <TagBox>
                  {item.drug_category?.split(",").map((element, index) => {
                    if (index > 4) {
                      return;
                    }

                    return <Tag key={index}>{element.trim()}</Tag>;
                  })}
                </TagBox>
                <Details>
                  <div className="caution">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                    </svg>
                    {item.drug_warning.substr(0, 20) + "..."}
                  </div>
                  <div className="elements">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" />
                    </svg>
                    {item.drug_element}
                  </div>
                </Details>
              </DetailBox>
            </Information>
          </ProductWrapper>
        );
      })}
    </>
  );
};

export default ListSection;

const ListWrapper = styled.div`
  /* background-color: orange; */
`;

const SortBox = styled.div`
  /* background-color: aqua; */
  height: 40px;
  padding: 5px 0;
  display: flex;
  justify-content: end;
  margin-right: 10px;
`;

const Select = styled.select`
  width: 80px;
`;

const Details = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-style: italic;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  div {
    display: flex;
    align-items: center;
  }
  svg {
    width: 15px;
  }
  .caution {
    color: #f94c4a;
  }
  .elements {
    color: #00d26a;
  }
`;
const TagBox = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display: flex;
  font-size: 10px;
  justify-content: center;
  width: max-content;
  background-color: #3e43f0;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  /* background-color: yellow; */
  height: 50px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  /* background-color: aqua; */
  width: 100px;
`;
const DetailBox = styled.div`
  font-weight: 100;
  font-size: 12px;
`;

const StarRate = styled.div`
  font-size: 14px;
  display: flex;
  margin-right: 15px;
  svg {
    width: 30px;
  }
`;
const CommentCount = styled.div`
  font-size: 14px;
`;
const ProductWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 5px 10px;
  width: 100%;
  height: 20vh;
  /* background-color: pink; */
  border-top: 1px solid #3e43f0;
  &:hover {
    background-color: #c9ccfc;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 5px;
`;

const Information = styled.div`
  height: 80%;
`;
