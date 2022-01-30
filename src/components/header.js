import {NavLink} from "react-router-dom";
import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid black;
  background-color: rgba(255,255,255,0.8);
  backdrop-filter: blur(4px);
  top: 0px;
  position: sticky;
  z-index: 10;
  
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    li {
      margin-left: 2rem;
      @media (max-width: 700px) {
        margin-left: 0.5rem;
      }
      h3 {
        letter-spacing: 0.1rem;
        font-weight: bolder;
        font-size: 2rem;
        margin: 0.1rem;
        @media (max-width: 500px) {
          font-size: 0.7rem;
        }
      }
      
      a {
        display: block;
        position: relative;
        color: black;
        text-decoration: none;
        
        :hover {
          transform: translateY(-0.15rem);
          border-bottom: 2px solid black;
        }
        transition: transform 0.2s;
      }
    }
  }
`;

const Header = () => {
    return (
        <StyledHeader>
            <ul>
                <li>
                    <h3>FCI Chajna</h3>
                </li>
                <li>
                    <NavLink to={"/"}>
                        Strona główna <FontAwesomeIcon icon={["fas", "home"]}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/gallery"}>Galeria</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Kontakt</NavLink>
                </li>
            </ul>
        </StyledHeader>
    );
}

export default Header;
