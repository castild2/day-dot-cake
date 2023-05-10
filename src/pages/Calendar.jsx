import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import styled from "styled-components";
import { useState } from "react";

const Calendar = () => {

  const [data,setData] = useState([])

  useEffect(() => {
    const readDAta = async () => {
      const querySnapshot = await getDocs(collection(db, "dateCakes"));
      const dataObj = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataObj.push({ id: doc.id, ...doc.data() })
      });

      setData(dataObj)
    
    };
    readDAta()
  }, []);


  return<MainContainer>
  <TitleHome>LIST OF PRODUCTS TO EXPIRE</TitleHome>
  <ContainertProducts>
    {data?.map((element) => {
      return (
        <Products key={element?.id}>
          <p>{element?.name}</p>
          <p>{element?.date}</p>
        </Products>
      );
    })}
  </ContainertProducts>
</MainContainer>
};

export default Calendar;

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
  color: #d38c98;
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
