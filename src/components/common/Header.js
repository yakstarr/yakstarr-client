import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return <Wrapper onClick={() => navigate("/")}>藥水터</Wrapper>;
};

export default Header;

const Wrapper = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  background-color: #3e43f0;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
`;
