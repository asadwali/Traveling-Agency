import React from 'react';
import '../../App.css';
import Cards from '../card-items/Cards';
import HeroSection from '../hero-section/HeroSection';
import Footer from '../footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
