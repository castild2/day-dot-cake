import React from "react";
import styled from "styled-components";

const Home = () => {

  return (
    <MainContainer>
      <TitleHome>LIST OF PRODUCTS TO EXPIRE</TitleHome>
      <MainBody>
      <h2>Titulo Aplicacion</h2>

      </MainBody>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

const TitleHome = styled.h2`
  text-align: center;
  background-color: white;
  padding: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const MainBody = styled.div`
  padding: 15px 10px;
`

