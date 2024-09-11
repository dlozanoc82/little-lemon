import React from 'react'
import Hero from '../components/HeroSection/Hero';
import Specials from '../components/MenuSection/Specials';
import Testimonial from '../components/TestimonialSection/Testimonial';
import About from '../components/AboutSection/About';

const Home = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonial />
      <About />
    </main>
  )
}

export default Home;
