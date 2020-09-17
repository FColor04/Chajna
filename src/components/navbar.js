import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNavbar = styled.div`
  background: ${({ theme }) => theme.colors.light};
  height: 100px;
  width: 100%;
  z-index: 2;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
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
  font-size: 1.1rem;
  position: relative;
  transform: translateY(0);
  transition: transform 0.2s;
  flex-grow: 1;
  text-shadow: rgba(0, 0, 0, 0.4) 2px 2px 2px;
  &:hover {
    transform: translateY(-10%);
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 30%;
    width: 40%;
    border-bottom: 4px ${({ theme }) => theme.colors.highlight} solid;
    transform: scaleX(0);
    transition: transform 0.4s;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`

const Navbar = () => (
  <nav
    style={{
      position: "sticky",
      top: "0",
      zIndex: "5",
    }}
  >
    <StyledNavbar>
      <StyledButton rel="canonical" to="/">Strona Główna</StyledButton>
      <StyledButton to="/gallery">Galeria</StyledButton>
      <StyledButton to="/contact">Kontakt</StyledButton>
    </StyledNavbar>
  </nav>
)

export default Navbar
