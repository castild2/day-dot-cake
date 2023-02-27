import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import AddFile from "../animations/AddFile";
import Loading from "../animations/Loading";

const AddItems = () => {
  const [infoImage, setInfoImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    const formData = new FormData(e.target);
    const imageFile = formData.get("img");

    const image = new Image();
    image.src = URL.createObjectURL(imageFile);

    image.onload = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, 128, 128);

      const formData = new FormData();
      formData.append("image", canvas.toDataURL("image/jpeg"));

      const img = formData.get("image").split(",")[1];

      const options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: { image: img },
        url: "https://b2bd-2a00-23c8-131a-f901-9987-fae6-5a27-e76.ngrok.io/predict/",
      };

      const resServer = await axios(options);

      setImg(formData.get("image"));
      setIsLoading(false)

      setInfoImage(resServer.data.class);
    };
  };

  return (
    <MainPrincipal>
      <Form onSubmit={onSubmit}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
          
            <MainContainerAddImg>
              <h1>Add image</h1>
              <AddFile />
              <InputFile type="file" name="img" accept=".jpeg, .jpg" />
            </MainContainerAddImg>
            <button>Send</button>
          </>
        )}
      </Form>

      {/* <form action="">
        <div>
          <label htmlFor="">Expire Date</label>
          <input type="date" />
        </div>

        <img src={img} alt="" />
  </form>*/}
    </MainPrincipal>
  );
  
};

export default AddItems;

const MainPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const MainContainerAddImg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  background-color: white;
  border-radius: 10px;
  width: 90%;
  padding: 20px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 80%;
    padding: 10px;
    background-color: #8b0505;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
  }
`;

const InputFile = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 2;
  position: absolute;
`;
