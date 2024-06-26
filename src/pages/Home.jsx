import React from "react";
import SearchWrapper from "../components/Home/SearchWrapper";
import ProductList from "../components/Home/ProductList";
import Header from "../components/common/Header";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <HomeWrapper>
        <SearchWrapper />
        <ProductList />
      </HomeWrapper>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
