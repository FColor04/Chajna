import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import StyledParagraph from "../components/paragraph"
import StyledRow from "../components/row"

const GalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const GalleryImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: -1;
  position: relative;
  &::after {
    content: "${props => props.label}";
    color: black;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
const ImageLink = styled.a`
  flex-grow: ${props => props.flexGrow || 1};
  object-fit: contain;
  min-width: 15vw;
  margin: 8px;
`
const LinkedImg = props => (
  <ImageLink href={props.fluid.src} target="_blank">
    <GalleryImg fadeIn {...props}></GalleryImg>
  </ImageLink>
)
const GallerySection = styled.div`
  width: 70%;
  min-height: 60px;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.dark};
  padding: 4%;
  position: relative;
  margin: 2rem auto;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    left: 2%;
    right: 2%;
    top: 2%;
    bottom: 2%;
    border: ${({ theme }) => theme.colors.dark} solid 2px;
    z-index: -1;
  }
  & h2 {
    font-size: 4rem;
    text-align: center;
    display: block;
    margin-top: 1rem;
  }
`
const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ImagesGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      pies1: file(relativePath: { eq: "2020/pies1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pies2: file(relativePath: { eq: "2020/pies2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pies3: file(relativePath: { eq: "2020/pies3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pies4: file(relativePath: { eq: "2020/pies4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pies5: file(relativePath: { eq: "2020/pies5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      r2021pies1: file(relativePath: { eq: "2021/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      r2021pies2: file(relativePath: { eq: "2021/2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      r2021pies3: file(relativePath: { eq: "2021/3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      r2021pies4: file(relativePath: { eq: "2021/4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <GalleryWrapper>
      <GallerySection>
        <h2>Miot 2021</h2>
        <FlexWrapper>
          <LinkedImg fluid={data.r2021pies1.childImageSharp.fluid} />
          <LinkedImg fluid={data.r2021pies2.childImageSharp.fluid} />
          <LinkedImg fluid={data.r2021pies3.childImageSharp.fluid} />
          <LinkedImg fluid={data.r2021pies4.childImageSharp.fluid} />
        </FlexWrapper>
      </GallerySection>
      <GallerySection>
        <h2>Miot 2020</h2>
        <FlexWrapper>
          <LinkedImg fluid={data.pies1.childImageSharp.fluid} label="Piesek" />
          <LinkedImg
            fluid={data.pies2.childImageSharp.fluid}
            label="Drugi Piesek"
          />
          <LinkedImg
            fluid={data.pies3.childImageSharp.fluid}
            label="Trzeci Piesek"
          />
          <LinkedImg
            fluid={data.pies4.childImageSharp.fluid}
            label="Czwarty Piesek"
          />
          <LinkedImg
            fluid={data.pies5.childImageSharp.fluid}
            label="Piąty Piesek"
          />
        </FlexWrapper>
      </GallerySection>
      <GallerySection>
        <h2>Pełna Galeria</h2>
        <FlexWrapper>
          {data.allImageSharp.edges.map(image => (
            <LinkedImg fluid={image.node.fluid} key={image.node.fluid.src} />
          ))}
        </FlexWrapper>
      </GallerySection>
    </GalleryWrapper>
  )
}

export default ImagesGallery
