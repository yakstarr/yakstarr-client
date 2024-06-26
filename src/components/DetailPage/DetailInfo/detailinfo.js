import React from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../../../api/instance";

function DetailInfo() {
  const [post, setPost] = useState(null);
  const { productid } = useParams();
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await instance.get(`/yakstarr/drugs/${productid}/`);
        setPost(res.data);
      } catch (err) {
        alert(err);
      }
    };
    fetchPostData();
  }, []);
  return (
    <AboutP>
      <ParInfo>
        <Part>
          <ParImg src={post?.drug_image} />
        </Part>
        <Part>
          <ParName id="name">
            {post?.drug_name}({post?.drug_company.substr(0, 10)})
          </ParName>
          <ParName id="detail">{post?.drug_element.substr(0, 10)}</ParName>
          <ParName >
            효능 : {post?.drug_effect.substr(0, 10)} <br />
            복용법 : {post?.drug_method.substr(0, 10)}
            <br />
            주의사항 : {post?.drug_warning.substr(0, 10)}
          </ParName>
        </Part>
      </ParInfo>
      <List>
        {post?.drug_category.split(",").map((item, index) => {
          return <Ls>{item.trim()}</Ls>;
        })}
      </List>
    </AboutP>
  );
}

const ParInfo = styled.div`
  display: flex;
  padding: 30px 10px;
  flex-wrap: wrap;
  gap: 30px;
`;
const Part = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  flex-shrink: 0;
  justify-content: center;
  gap: 8px;
  #name {
    font-weight: 600;
    font-size: 16px;
  }
  #detail {
    font-size: 13px;
    font-weight: 10;
    margin-bottom: 8px;
  }
`;
const ParName = styled.div`
  font-size: 14px;
  #detail{
    color: #3E43F0;
  }
`;

const ParImg = styled.img`
  width: 180px;
  border: 2px solid black;
`;

const AboutP = styled.div`
  background-color: #e2e3ff;
  padding: 20px 20px;
`;

const List = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
`;

const Ls = styled.div`
  font-size: 15px;
  padding: 8px;
  border-radius: 20px;
  background-color: #3e43f0;
  color: white;
`;
export default DetailInfo;
