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

const NavbarButton = styled(Link)`
  background: ${({ theme }) => theme.colors.light};
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-decoration: none;
  transition: transform 0.2s;
  &:hover {
    text-decoration: none;
    transform: translateY(-10%);
    color: ${({ theme }) => theme.colors.text};
    & span::before {
      transform: scaleX(1);
    }
  }
`

const ButtonText = styled.span`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.4) 2px 2px 2px;
  position: relative;
  transform: translateY(0);
  transition: transform 0.2s;
  line-height: 1;
  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 120%;
    left: -10%;
    border-bottom: 4px ${({ theme }) => theme.colors.highlight} solid;
    transform: scaleX(0);
    transition: transform 0.2s;
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
      <NavbarButton rel="canonical" to="/"><ButtonText>Strona Główna</ButtonText></NavbarButton>
      <NavbarButton to="/gallery"><ButtonText>Galeria</ButtonText></NavbarButton>
      <NavbarButton to="/contact"><ButtonText>Kontakt</ButtonText></NavbarButton>
    </StyledNavbar>
  </nav>
)

export default Navbar
