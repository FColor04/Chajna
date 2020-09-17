import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ImagesGallery from "../components/imagesgallery";

const Gallery = () => (
    <Layout>
    <SEO title="Galeria" />
    <Navbar />
    <h1 className="underlined">Galeria zdjęć</h1><br />
    <ImagesGallery />
    <Footer/>
    </Layout>
)

export default Gallery