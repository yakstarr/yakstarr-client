import styled from "styled-components";

const SearchInput = () => {
  return <Input placeholder="약을 검색해주세요." type="text" />;
};

export default SearchInput;

const Input = styled.input`
  border: none;
  width: 80%;
  background: none;
  padding-left: 30px;
  font-size: 20px;
  color: grey;
  &:focus {
    background-color: orange;
  }
`;
