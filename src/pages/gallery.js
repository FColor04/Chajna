import React from "react";
import Article from "../components/article";
import styled from "styled-components";

const Display = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 30vmin;
    max-height: 30vmin;
    border-radius: 1rem;
    margin: 1rem;
    :hover{
      transform: scale(1.1);
      cursor: pointer;
    }
    transition: transform 0.3s;
  }
`;

const Gallery = () => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('/public/images', true, /\.(png|jpe?g|svg)$/));
    let allImages = [];
    let i = 0;
    for(const [key, value] of Object.entries(images)) {
        allImages[i] = <a key={"img"+i} href={value}><img src={value} ></img></a>;
        i++;
    }

    return (
        <div>
            <Article>
                <h4>Galeria</h4>
                <Display>
                    {allImages}
                </Display>
            </Article>
        </div>
    );
}

export default Gallery;
