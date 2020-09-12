import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
const StyledCarousel = styled.div`
  width: 90%;
  height: 35vw;
  margin: 0 auto;
  background: #454545;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledCarouselItem = styled.div`
  height: 700px;
  width: 100%;
`
const DogCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "pies1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide2: file(relativePath: { eq: "pies2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide3: file(relativePath: { eq: "pies4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      slide4: file(relativePath: { eq: "pies5.jpg" }) {
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
          fadeIn
          fluid={data.slide2.childImageSharp.fluid}
        />
      </Carousel.Item>
      <Carousel.Item as={StyledCarouselItem}>
        <Img
          className="slide"
          fadeIn
          fluid={data.slide3.childImageSharp.fluid}
        />
      </Carousel.Item>
      <Carousel.Item as={StyledCarouselItem}>
        <Img
          className="slide"
          fadeIn
          fluid={data.slide4.childImageSharp.fluid}
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default DogCarousel
