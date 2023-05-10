import React from "react";
import styled from "styled-components";

const Home = () => {

  return (
    <MainContainer>
      <TitleHome>Day Dot-Cake APP</TitleHome>
      <MainBody>
      <h2> Creating a web application to identify cakes using a Convolutional Neaural Network (CNN) 
        model for a coffee shop can be a great way to streamline the process of managing inventory 
        and ensuring the freshness of the baked goods. By using image recognition technology, employees 
        can simply take a photo of the cake, and the system can identify it using the pre-trained CNN 
        model. Additionally, the application can integrate with a database to track the expiration dates 
        of the cakes and show the staff when the cakes are approaching their expiration dates. This way,
        the coffee shop can ensure that the cakes are always fresh and minimize waste by only keeping the 
        cakes on display that are still within their expiration dates. Overall, this web application can 
        provide a convenient and efficient solution to manage the inventory and freshness of cakes for a 
        coffee shop.</h2>
      

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
  color: #d38c98;
  font: 50px Helvetica;
`;

const MainBody = styled.div`
  padding: 150px 100px;
  text-align: center;
  font: 18px Helvetica;
  color: #d38c98;
  text-align: justify;
  
  
  

`;



