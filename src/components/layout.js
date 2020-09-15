import React from "react"

import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import Footer from "./footer"
import { Helmet } from 'react-helmet'
const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap');

  html {
    font-size: 26px;
    ${({ theme }) => theme.media.mobile} {
      font-size: 20px;
    }
    ${({ theme }) => theme.media.watch} {
      font-size: 14px;
    }
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.colors.clear};
    color: ${({ theme }) => theme.colors.dark};
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0 10px;
    font-weight: 700;
    display: inline-block;
  }
  .slide {
    max-height: 100%;
    margin: 0 auto;
    padding: 0 10%;
    display: block;
  }
  .carousel-indicators {
    z-index: 1;
  }
  .heroImage {
    position: absolute;
  }
  .inlineImage {
    min-width: 150px;
    min-height: 150px;
    width: 35vw;
    height: 35vw;
    max-width: 520px;
    max-height: 520px;
    border-radius: 50%;
  }
  .floatLeft {
    float: left;
    margin-right: 2rem;
    &::after {
      content: '';
      clear: both;
    }
  }
  .floatRight {
    float: right;
    margin-left: 2rem;
    &::after {
      content: '';
      clear: both;
    }
  }
  .underlined {
    border-bottom: 4px ${({ theme }) => theme.colors.dark} solid;
    margin-bottom: 1rem;
  }
  .fas {
    margin: 15px;
    font-size: 1.3rem;
  }
  .textAlignRight {
    text-align: right;
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
  <>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"></link>
    </Helmet>
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <GlobalStyle />
        <Content>{children}</Content>
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  </>
)

export default Layout
