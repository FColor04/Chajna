import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.text};
  height: 200px;
`

const Footer = () => (
  <footer>
    <StyledFooter>Footer</StyledFooter>
  </footer>
)

export default Footer
