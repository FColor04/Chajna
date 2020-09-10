import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.div`
  background: ${({ theme }) => theme.colors.clear};
  flex-grow: 1;
  text-align: justify;
  padding: 2rem;
`

export default StyledParagraph
