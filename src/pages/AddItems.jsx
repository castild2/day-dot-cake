import axios from 'axios';
import React, { useState } from 'react'

const AddItems = () => {

  const [ infoImage, setInfoImage ] = useState("")

  const onSubmit =  (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const imageFile = formData.get('img');

    const image = new Image();
    image.src = URL.createObjectURL(imageFile);

    image.onload = async () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, 128, 128);

      const formData = new FormData();
      formData.append('image', canvas.toDataURL('image/jpeg'));

      const img = formData.get('image').split(",")[1]

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: { image : img },
        url: "https://1fa2-2a00-23c8-131a-f901-d90e-9128-5dad-a78b.ngrok.io/predict/"
      };

       const resServer = await axios(options)

       setInfoImage(resServer.data.class)
    }

  }

  return (
    <div>
      <form onSubmit={onSubmit}  >
         <input type="file" name="img" accept='.jpeg, .jpg' />
         <button>Send</button>
         <h1>The cake is:</h1>
         <h3>{infoImage}</h3>
      </form>

      
    </div>
  )
}

export default AddItems