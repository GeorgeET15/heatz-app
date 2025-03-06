import React from "react";
import ContactSection from "./ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductHero from "../components/ProductHero";
import CardGrid from "../components/CardGrid";
import ImageCarousel from "../components/ImageCarousel";

const ProductPage = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <ProductHero />
      <CardGrid />
      <ImageCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ProductPage;
