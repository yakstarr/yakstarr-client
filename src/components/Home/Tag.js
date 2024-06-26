import styled from "styled-components";

const Tags = [
  "두통",
  "감기",
  "오한",
  "복통",
  "근육통",
  "비타민",
  "코로나",
  "통풍",
];

const Tag = () => {
  return (
    <Wrapper>
      {Tags.map((tag, key) => (
        <TagBox key={key}>{tag}</TagBox>
      ))}
    </Wrapper>
  );
};

export default Tag;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  /* background-color: orange; */
  flex-wrap: wrap;
  padding: 5px 5px;
`;

const TagBox = styled.div`
  display: flex;
  justify-content: center;
  width: 70px;
  background-color: #3e43f0;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #3e43f0;
    font-weight: 600;
  }
  &:active {
    scale: 0.9;
  }
`;
