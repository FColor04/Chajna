import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import StyledContent from "../components/content"
import StyledParagraph from "../components/paragraph"
import StyledRow from "../components/row"

const Contact = () => (
    <Layout>
    <SEO title="Kontakt" />
    <Navbar />
    <StyledContent>
        <StyledRow>
            <StyledParagraph>
                <h1 className="underlined">Kontakt</h1><br />
                (+48) 728851465
                <br />
                Chajna (FCI) BETSY
            </StyledParagraph>
        </StyledRow>
    </StyledContent>
    </Layout>
)

export default Contact