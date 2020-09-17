import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.text};
  padding: 50px 0px;
  font-size: 0.8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.maxHeight ? 'calc(100vh - 100px)' : '250px'};
  position: ${props => props.fixed ? 'fixed' : 'relative'};
  bottom: 0;
  left: 0;
  right: 0;
`

const StyledContactBox = styled.div`
  width: 80vw;
  margin: 15px auto;
  min-height: 50px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const ContactBoxItem = styled.div`
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Copyright = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.litdark};
`

const Footer = (props) => (
  <StyledFooter {...props}>
    <footer>
      <StyledContactBox>
        <ContactBoxItem>
          <i className="fas fa-envelope"></i>
          aisha99@o2.pl
        </ContactBoxItem>
        <ContactBoxItem>
          <i className="fas fa-map-marker-alt"></i> 
          Woj. Śląskie, Rybnik
        </ContactBoxItem>
        <ContactBoxItem>
          <i className="fas fa-phone-square-alt"></i> 
          (+48) 728 851 465
        </ContactBoxItem>
      </StyledContactBox>
      <Copyright>Made by Marcin Smoła © FCI Chajna 2020</Copyright>
    </footer>
  </StyledFooter>
)

export default Footer
