import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import StyledContent from "../components/content"
import StyledParagraph from "../components/paragraph"
import StyledRow from "../components/row"
import Footer from "../components/footer"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Navbar />
    <StyledContent>
      <StyledRow>
        <StyledParagraph>
          <h1>:( Błąd 404</h1>
          <p>Strona lub element który szukasz, nie istnieje</p>
        </StyledParagraph>
      </StyledRow>
    </StyledContent>
    <Footer />
  </Layout>
)

export default NotFoundPage
