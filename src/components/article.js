import React from "react";
import styled from "styled-components";

const StyledArtice = styled.article`
  background-color: white;
  margin: 1rem 0;
  padding: 2rem;
  border-radius: 1rem;
  
  @media (max-width: 700px) {
    padding: 1rem;
  }
  
  h4, h5 {
    font-size: 1.6rem;
    margin: 0.1rem;
    margin-bottom: 0.7rem;
    text-indent: 0;
  }
  
  h5 {
    font-size: 1.3rem;
    font-weight: 500;
  }
  
  font-weight: 400;
  text-align: ${({center}) => center ? "center" : "justify"};
  text-indent: 2rem;
`;

const Article = ({children, center}) => {

    return (
        <StyledArtice center={center}>
            {children}
        </StyledArtice>
    )
}
export default Article;
