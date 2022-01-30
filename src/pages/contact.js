import React from "react";
import Article from "../components/article";
import styled from "styled-components";

const StyledMap = styled.div`
  display: inline-block;
  width: 600px;
  height: 500px;
  margin: 1rem;
`;

const Contact = () => {
    return (
        <div>
            <Article>
                Kontakt
                <br />
                <br />
                Woj. Śląskie, Rybnik
                <br />
                <br />
                Telefon:
                <br />
                (+48) 728 851 465
                <br />
                <StyledMap>
                    <div>
                        <iframe width="600" height="500"
                                title="Rybnik"
    src="https://maps.google.com/maps?q=Rybnik&t=&z=11&ie=UTF8&iwloc=&output=embed"
    frameBorder="4" scrolling="no" marginHeight="0" marginWidth="0"/>
                    </div>
                </StyledMap>
            </Article>
        </div>
    );
}

export default Contact;
