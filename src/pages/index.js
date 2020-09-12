import React from "react"
//
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
//
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import StyledContent from "../components/content"
import StyledParagraph from "../components/paragraph"
import StyledRow from "../components/row"
import DogCarousel from "../components/carousel"
import Navbar from "../components/navbar"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sesja1: file(relativePath: { eq: "sesja1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      sesja2: file(relativePath: { eq: "sesja2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Strona Główna" />
      <Hero></Hero>
      <Navbar />
      <StyledContent>
        <DogCarousel></DogCarousel>
        <StyledRow>
          <StyledParagraph>
            <Img
              className="inlineImage floatLeft"
              fadeIn
              fluid={data.sesja1.childImageSharp.fluid}
            />
            <h2 className="underlined">O naszej hodowli</h2>
            <br />
            Chajna mała domowa hodowla piesków rasy Lhasa Apso powstała z
            miłości do tej rasy. Nasze pieski wychowywane są w domowych
            warunkach otoczone gronem kochających je właścicieli.
          </StyledParagraph>
        </StyledRow>
        <StyledRow>
          <StyledParagraph>
            <Img
              className="inlineImage floatRight"
              fadeIn
              fluid={data.sesja2.childImageSharp.fluid}
            />
            <h2 className="underlined">Nowe szczeniaczki</h2>
            <br />
            Nowe szczeniaki etc. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec est tortor, semper vel facilisis sed,
            suscipit eu eros. Sed fringilla dapibus nisl ac iaculis. Nunc mi
            mauris, convallis non lectus ac, tempus tincidunt neque. Suspendisse
            vitae lacinia magna, at maximus nunc. Donec ut quam tellus. In at
            euismod mauris. Curabitur luctus sodales maximus. Maecenas pulvinar
            a ex eu tincidunt. Donec blandit orci vitae enim ultrices aliquet.
            Vestibulum orci orci, malesuada non aliquam sed, dapibus in mauris.
            Proin sollicitudin massa mi, non pulvinar leo ullamcorper at. Aenean
            sit amet hendrerit risus. Aenean facilisis in felis in suscipit.
          </StyledParagraph>
        </StyledRow>
      </StyledContent>
    </Layout>
  )
}

export default IndexPage
