import React from 'react'
import Lottie from 'lottie-react'
import styled from 'styled-components'
import loading from "../img/loading.json"

const Loading = () => {
  return (
   <MainContainer>
        <Lottie animationData={loading} />
   </MainContainer>
  )
}

export default Loading


const MainContainer = styled.div`

`