import React from 'react';
//
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components";
//
import Button from "../components/button"

const StyledDogShow = styled.div`
    position: relative;
    width: 100%;
    height: 20vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    flex-grow: 1;
    background: #000;
`;

const DogShow = () => {
    const data = useStaticQuery(graphql`
        query {
          pies1: file(relativePath: { eq: "pies1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          pies2: file(relativePath: { eq: "pies2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          pies3: file(relativePath: { eq: "pies3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          pies4: file(relativePath: { eq: "pies4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
    `)
    return (
        <>
        <StyledDogShow>
            <Img
              className="rowGalleryImage"
              fadeIn
              fluid={data.pies1.childImageSharp.fluid}
            />
            <Img
              className="rowGalleryImage"
              fadeIn
              fluid={data.pies2.childImageSharp.fluid}
            />
            <Img
              className="rowGalleryImage"
              fadeIn
              fluid={data.pies3.childImageSharp.fluid}
            />
            <Img
              className="rowGalleryImage"
              fadeIn
              fluid={data.pies4.childImageSharp.fluid}
            />
        </StyledDogShow>
        <Button to='/gallery' className="centered" nomargin="true">
            Zobacz nasze szczeniaki
        </Button>
        </>
    )
};

export default DogShow;