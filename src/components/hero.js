import React from "react"
import styled from "styled-components"

const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.dark};
  background-image: url("https://placekitten.com/1920/1080");
  background-size: 100vw 100vh;
  position: relative;
`
const StyledH1 = styled.h1`
  font-size: 16vw;
  position: absolute;
  bottom: 0;
  color: ${({ theme }) => theme.colors.text};
`
const Hero = () => (
  <StyledHero>
    <StyledH1>Chajna</StyledH1>
  </StyledHero>
)
export default Hero
