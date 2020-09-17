import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
const StyledCarousel = styled.div`
  width: 90%;
  height: 33vw;
  background: #454545;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledCarouselItem = styled.div`
  height: 33vw;
  width: 100%;
`
const DogCarousel = (props) => {
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "pies3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide2: file(relativePath: { eq: "pies6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide3: file(relativePath: { eq: "sesja1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Carousel as={StyledCarousel}>
      <Carousel.Item as={StyledCarouselItem}>
        <Img
          className="slide"
          fadeIn
          fluid={data.slide1.childImageSharp.fluid}
        />
      </Carousel.Item>
      <Carousel.Item as={StyledCarouselItem}>
        <Img
          className="slide"
          fluid={data.slide2.childImageSharp.fluid}
        />
      </Carousel.Item>
      <Carousel.Item as={StyledCarouselItem}>
        <Img
          className="slide"
          fluid={data.slide3.childImageSharp.fluid}
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default DogCarousel
