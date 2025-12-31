import React from 'react';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import About from '../components/About';
import Focus from '../components/Focus';
import MentorsGrid from '../components/MentorsGrid';
import Volunteer from '../components/Volunteer';
const Home = () => {
  return (
    <main className="">
      <Hero />
      <Quote />
      <About />
      <Focus />
      <MentorsGrid />
      <Volunteer />
    </main>
  );
};

export default Home;
