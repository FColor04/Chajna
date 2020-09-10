import React from "react"
import styled from "styled-components"

const StyledContent = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.clear};
  padding: 100px 4vw;
`

export default StyledContent
