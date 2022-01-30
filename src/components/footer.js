import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 3rem;
  color: #9568ff;
`;

const Footer = () => {
    return (
        <StyledFooter>
            Made by Marcin Smoła © FCI Chajna 2022
        </StyledFooter>
    )
}

export default Footer;
