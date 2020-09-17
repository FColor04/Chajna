import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

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
    min-width: 240px;
`
const LinkedImg = (props) => (
    <ImageLink href={props.fluid.src} target="_blank">
        <GalleryImg fadeIn {...props}>
        </GalleryImg>
    </ImageLink>
)

const ImagesGallery = () => {
    const data = useStaticQuery(graphql`
        query {
          allImageSharp {
              edges {
                  node {
                      id
                      fluid(maxWidth: 900) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
        }
    `)
    return (
        <GalleryWrapper>
            {data.allImageSharp.edges.map((image) => (
                <LinkedImg fluid={image.node.fluid} key={image.node.fluid.src}/>
            ))}
        </GalleryWrapper>
    )
};

export default ImagesGallery;