import styled from "styled-components";
import { useEffect, useState } from "react";
import Tag from "./Tag";
import ListSection from "./ListSection";

const ProductList = () => {
  const [modIndex, setModIndex] = useState(0);

  return (
    <Wrapper>
      <Tag />
      <ListWrapper>
        <SortBox>
          <Select>
            <option onClick={() => setModIndex(0)} value="추천순">
              추천순
            </option>
            <option onClick={() => setModIndex(1)} value="최신순">
              최신순
            </option>
          </Select>
        </SortBox>
        <ListSection modIndex={modIndex} />
      </ListWrapper>
    </Wrapper>
  );
};

export default ProductList;

const Wrapper = styled.div`
  background-color: #e2e3ff;
`;

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
