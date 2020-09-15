import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.text};
  padding: 50px 0px;
  font-size: 0.8rem;
  text-align: center;

`

const StyledContactBox = styled.div`
  width: 80vw;
  margin: 0 auto;
  min-height: 50px;
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

const Footer = () => (
  <footer>
    <StyledFooter>
      <StyledContactBox>
        <ContactBoxItem>
          <i className="fas fa-envelope"></i>
          xyz@abc.com
        </ContactBoxItem>
        <ContactBoxItem>
          <i className="fas fa-map-marker-alt"></i> 
          Sajatin (FCI) PORSCHE<br />
          Chajna (FCI) BETSY
        </ContactBoxItem>
        <ContactBoxItem>
          <i className="fas fa-phone-square-alt"></i> 
          (+48) 728 851 465
        </ContactBoxItem>
      </StyledContactBox>
      Made by Marcin Smoła © FCI Chajna 2020
    </StyledFooter>
  </footer>
)

export default Footer
