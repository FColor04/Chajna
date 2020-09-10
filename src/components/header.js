import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.colors.light};
  height: 100px;
  width: 35vw;
  position: fixed;
  z-index: 2;
  right: 10vw;
  top: 0;

  display: flex;
`

const StyledButton = styled(Link)`
  background: ${({ theme }) => theme.colors.light};
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  position: relative;
  transform: translateY(0);
  transition: transform 0.2s;
  flex-grow: 1;
  &:hover {
    transform: translateY(-10%);
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 30%;
    width: 68%;
    border-bottom: 4px #efefef solid;
    transform: scaleX(0);
    transition: transform 0.4s;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`

const Header = () => (
  <nav>
    <StyledHeader>
      <StyledButton to="/">Strona Główna</StyledButton>
      <StyledButton to="/">Nasze psy</StyledButton>
      <StyledButton to="/">Kontakt</StyledButton>
    </StyledHeader>
  </nav>
)

export default Header
