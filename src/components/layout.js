import React from "react"

import styled from "styled-components"

import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"

import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap');

  html {
    font-size: 24px;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.colors.clear};
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
  .fixedImage {
    max-width: 400px;
    max-height: 400px;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledWrapper>
      <GlobalStyle />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledWrapper>
  </ThemeProvider>
)

export default Layout
