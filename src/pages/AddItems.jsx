import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import AddFile from "../animations/AddFile";
import Loading from "../animations/Loading";

const AddItems = () => {
  const [ infoImage, setInfoImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ img, setImg] = useState("");
  const [ viewImage, setViewImage ] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    const formData = new FormData(e.target);
    const imageFile = formData.get("img");

    console.log( formData.get("img"))

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
        url: " https://c95f-2a00-23c8-131a-f901-3867-279-7fb7-d472.ngrok.io./predict/",
      };

      const resServer = await axios(options);

      setImg(formData.get("image"));
      setIsLoading(false)
      console.log(resServer)
      setInfoImage(resServer.data.class);
    };
  };

  const viewImg = (e) => {

    const dataImg = e.target.files[0]
    const viewImg = new FileReader()

    viewImg.onload = () =>{
      setViewImage( viewImg.result)
    }

   viewImg.readAsDataURL(dataImg) 
  
  }

  return (
    <MainPrincipal>
      <Form onSubmit={onSubmit}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
          
            <MainContainerAddImg>
              { infoImage ? <h2>This is a {infoImage}</h2> : <h1>Add Image</h1> }
              {viewImage  ? <img src={viewImage}/>  : <AddFile />}
             <InputFile type="file" name="img" accept=".jpeg, .jpg" onChange={viewImg} />
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

  h2{
    text-align: center;
  }

  img{
    width: 90%;
    height: 350px;
    border-radius: 10px;
    margin-top: 20px;
  }
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
  gap: 20px;

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
