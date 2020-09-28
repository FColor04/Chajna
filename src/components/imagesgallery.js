import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import StyledParagraph from "../components/paragraph"
import StyledRow from "../components/row"

const GalleryWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const GalleryImg = styled(Img)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const ImageLink = styled.a`
    flex-grow: ${props => props.flexGrow || 1};
    object-fit: contain;
    min-width: 300px;
    margin: 4px;
`
const LinkedImg = (props) => (
    <ImageLink href={props.fluid.src} target="_blank">
        <GalleryImg fadeIn {...props}>
        </GalleryImg>
    </ImageLink>
)
const GallerySection = styled.div`
    width: 80%;
    min-height: 60px;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.dark};
    padding: 4%;
    position: relative;
    margin: 2rem auto;
    z-index: 1;
    &::after {
        content: '';
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
        }
    `)
    return (
        <GalleryWrapper>
            <GallerySection>
                <h2>Galeria</h2>
                <FlexWrapper>
                    {data.allImageSharp.edges.map((image) => (
                        <LinkedImg fluid={image.node.fluid} key={image.node.fluid.src}/>
                    ))}
                </FlexWrapper>
            </GallerySection>
        </GalleryWrapper>
    )
};

export default ImagesGallery;