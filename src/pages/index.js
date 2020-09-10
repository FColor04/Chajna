import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import StyledContent from "../components/content"
import StyledParagraph from "../components/paragraph"
import StyledRow from "../components/row"
const IndexPage = () => (
  <Layout>
    <SEO title="Strona Główna" />
    <Hero></Hero>
    <StyledContent>
      <StyledRow>
        <img className="fixedImage" src="https://placekitten.com/400/400" />
        <StyledParagraph>
          <h2>Pjeski</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
          tortor, semper vel facilisis sed, suscipit eu eros. Sed fringilla
          dapibus nisl ac iaculis. Nunc mi mauris, convallis non lectus ac,
          tempus tincidunt neque. Suspendisse vitae lacinia magna, at maximus
          nunc. Donec ut quam tellus. In at euismod mauris. Curabitur luctus
          sodales maximus. Maecenas pulvinar a ex eu tincidunt. Donec blandit
          orci vitae enim ultrices aliquet. Vestibulum orci orci, malesuada non
          aliquam sed, dapibus in mauris. Proin sollicitudin massa mi, non
          pulvinar leo ullamcorper at. Aenean sit amet hendrerit risus. Aenean
          facilisis in felis in suscipit.
        </StyledParagraph>
      </StyledRow>
      <StyledRow>
        <StyledParagraph>
          <h2>Pjeski 2</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
          tortor, semper vel facilisis sed, suscipit eu eros. Sed fringilla
          dapibus nisl ac iaculis. Nunc mi mauris, convallis non lectus ac,
          tempus tincidunt neque. Suspendisse vitae lacinia magna, at maximus
          nunc. Donec ut quam tellus. In at euismod mauris. Curabitur luctus
          sodales maximus. Maecenas pulvinar a ex eu tincidunt. Donec blandit
          orci vitae enim ultrices aliquet. Vestibulum orci orci, malesuada non
          aliquam sed, dapibus in mauris. Proin sollicitudin massa mi, non
          pulvinar leo ullamcorper at. Aenean sit amet hendrerit risus. Aenean
          facilisis in felis in suscipit.
        </StyledParagraph>
        <img className="fixedImage" src="https://placekitten.com/700/700" />
      </StyledRow>
    </StyledContent>
  </Layout>
)

export default IndexPage
