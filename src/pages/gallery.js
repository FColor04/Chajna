import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import StyledContent from "../components/content"
import StyledParagraph from "../components/paragraph"
import StyledRow from "../components/row"

const Gallery = () => (
    <Layout>
    <SEO title="Galeria" />
    <Navbar />
    <StyledContent>
        <StyledRow>
            <StyledParagraph>
                <h1 className="underlined">Galeria</h1>
            </StyledParagraph>
        </StyledRow>
    </StyledContent>
    </Layout>
)

export default Gallery