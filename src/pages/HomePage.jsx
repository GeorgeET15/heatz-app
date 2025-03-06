import React from "react";
import Hero from "./Hero";
import Navbar from "../components/Navbar";
import BoostSection from "./BoostSection";
import ItemsSection from "./ItemsSection";
import MediaSection from "./MediaSection";
import HorizontalVideoSection from "./HorizontalVideoSection";
import ContactSection from "./ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <BoostSection />
      <ItemsSection />
      <MediaSection />
      <BoostSection />
      <ItemsSection />
      <MediaSection />
      <HorizontalVideoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
