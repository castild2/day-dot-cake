import React from "react";
import styled from "styled-components";

const Home = () => {
  const data = [
    {
      product: "Salted Caramel Brownie",
      expirationDate: "19/02/2023",
    },
    {
      product: "Bluberry Muffin",
      expirationDate: "11/02/2023",
    },
    {
      product: "Raspberry Almond Cake",
      expirationDate: "01/02/2023",
    },
  ];

  return (
    <MainContainer>
      <TitleHome>LIST OF PRODUCTS TO EXPIRE</TitleHome>
      <ContainertProducts>
        {data.map((element) => {
          return (
            <Products>
              <p>{element.product}</p>
              <p>{element.expirationDate}</p>
            </Products>
          );
        })}
      </ContainertProducts>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
`;

const TitleHome = styled.h2`
  text-align: center;
  background-color: white;
  padding: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ContainertProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 10px 15px;
`;

const Products = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
