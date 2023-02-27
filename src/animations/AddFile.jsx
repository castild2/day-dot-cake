import React from 'react'
import Lottie from 'lottie-react'
import styled from 'styled-components'
import addfile from "../img/add_file.json"

const AddFile = () => {
  return (
   <MainContainer>
        <Lottie animationData={addfile} />
   </MainContainer>
  )
}

export default AddFile


const MainContainer = styled.div`

`