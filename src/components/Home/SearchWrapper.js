import styled from "styled-components";

const SearchWrapper = () => {
  return (
    <Wrapper>
      <SearchBar>
        <SearchInput placeholder="약을 검색해주세요." type="text" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </SearchBar>
    </Wrapper>
  );
};

export default SearchWrapper;

const SearchInput = styled.input`
  border: none;
  width: 80%;
  background: none;
  font-size: 20px;
  &:focus {
    /* background-color: orange; */
  }
`;

const Wrapper = styled.div`
  background-color: #e2e3ff;
  height: 10vh;
  /* border: 3px solid black; */
  display: flex;
  align-items: center;
`;

const SearchBar = styled.div`
  width: 100%;
  border-radius: 20px;
  margin: 0px 20px;
  border: 1.5px solid #3e43f0;
  height: 60%;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  svg {
    stroke: #3e43f0;
    width: 30px;
    stroke: 4px;
    margin-right: 15px;
    cursor: pointer;
    &:hover {
      stroke: black;
    }
    &:active {
      scale: 0.9;
    }
  }
`;
