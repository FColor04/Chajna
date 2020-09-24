import React from "react"
import renderer from "react-test-renderer"
import StyledParagraph from "../paragraph"
describe("StyledParagraph", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<StyledParagraph>Test Paragraph</StyledParagraph>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})