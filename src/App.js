import './App.css';

import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Homepage from "./pages/homepage";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

const Main = styled.main`
  min-height: 83vh;
  background-color: rgba(255,255,255,0.1);
  padding: 2rem;
  margin: 1rem auto;
  width: 70vw;
  border-radius: 4rem;
  backdrop-filter: blur(5px);

  @media (max-width: 700px) {
    padding: 1rem;
    width: 100%;
    border-radius: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Main>
              <Routes>
                  <Route path={"/"} element={<Homepage/>}/>
                  <Route path={"/gallery"} element={<Gallery/>}/>
                  <Route path={"/contact"} element={<Contact/>}/>
              </Routes>
          </Main>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
