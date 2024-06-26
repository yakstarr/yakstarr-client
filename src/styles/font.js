import styled from "styled-components";

export const Body1 = styled.div`
  font-family: Pretendard;
  color: ${(props) =>
    props.color ||
    "#000000"}; //color를 props으로 넘겨주지 않을시 (undefind) 기본값은 검은색
  font-size: 1.5rem;
  font-weight: 400;
  font-style: normal;
  line-height: 100%;
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
  text-decoration-line: ${(props) => props.underline && "underline"};
`;

export const Body2 = styled.div`
  font-family: Pretendard;
  color: ${(props) =>
    props.color ||
    "#000000"}; //color를 props으로 넘겨주지 않을시 (undefind) 기본값은 검은색
  font-size: 1.2rem;
  font-weight: 400;
  font-style: normal;
  line-height: 100%;
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
  text-decoration-line: ${(props) => props.underline && "underline"};
`;
