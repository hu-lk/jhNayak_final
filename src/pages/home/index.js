import Hero from './components/hero';
import Intro from './components/intro';
import Roadmap from './components/roadmap';
import SocialMedia from './components/socialmedia';
import Navbar from  '../../common/Navbar';
import Footer from '../../common/Footer';
import React from 'react';

const Home = () => {
  return (

    <div>
    <Navbar/>
    <Hero/>
    <Intro/>
    <Roadmap/>
    <SocialMedia/>
    <Footer/>
    </div>

  )
}

export default Home