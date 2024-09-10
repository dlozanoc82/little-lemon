import React from 'react'
import Hero from '../components/HeroSection/Hero';
import Specials from '../components/MenuSection/Specials';
import Testimonial from '../components/TestimonialSection/Testimonial';

const Home = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonial />
    </main>
  )
}

export default Home;
