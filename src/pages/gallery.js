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
    <ImagesGallery />
    <Footer/>
    </Layout>
)

export default Gallery