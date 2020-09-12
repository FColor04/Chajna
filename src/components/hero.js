import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledHero = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background: ${({ theme }) => theme.colors.dark};
  position: relative;
  overflow: hidden;
`
const StyledH1 = styled.h1`
  font-size: 16vw;
  font-weight: 700;
  letter-spacing: 0.3rem;
  position: absolute;
  bottom: 0;
  text-shadow: rgba(0, 0, 0, 0.6) 4px 4px 4px;
  color: ${({ theme }) => theme.colors.text};
`
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "heropies2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <StyledHero>
      <Img className="heroImage" fluid={data.hero.childImageSharp.fluid} />
      <StyledH1>FCI Chajna</StyledH1>
    </StyledHero>
  )
}
export default Hero
