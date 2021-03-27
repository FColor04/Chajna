import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
const StyledLink = styled(Link)`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  position: relative;
  z-index: 1;
  margin: ${props => (props.nomargin ? "0px" : "50px")} 0;
  padding: 20px 16px 8px 16px;
  border: 2px ${({ theme }) => theme.colors.dark} solid;
  font-size: 1.5rem;
  font-weight: 700;
  &::after {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${({ theme }) => theme.colors.dark};
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s;
  }
  &:hover::after {
    opacity: 1;
  }
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.highlight};
  }
`
const Button = props => (
  <StyledLink to={props.to} {...props}>
    {props.children}
  </StyledLink>
)
Button.propTypes = {
  to: PropTypes.string,
}
Button.defaultProps = {
  to: "/",
}
export default Button
