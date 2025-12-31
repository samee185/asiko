import React from 'react';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import About from '../components/About';
import Focus from '../components/Focus';
import MentorsGrid from '../components/MentorsGrid';
import Volunteer from '../components/Volunteer';
import Testimonials from '../components/Testimonials';
const Home = () => {
  return (
    <main className="">
      <Hero />
      <Quote />
      <About />
      <Focus />
      <MentorsGrid />
      <Volunteer />
      {/* <Testimonials /> */}
    </main>
  );
};

export default Home;
