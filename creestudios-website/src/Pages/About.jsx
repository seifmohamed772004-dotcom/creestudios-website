import React from 'react';
import { HeroSection } from '../Common-About/HeroSection';
import FooterSection from '../Components/Footer';
import { IndustriesSection } from '../Common-About/IndustriesSection';
import { StartToFinishSection } from '../Common-About/StartToFinishSection';
import FeaturesSection from '../Common-Home/FeaturesSection';

const About = () => {
  return (
 <>
  <HeroSection/>
  <IndustriesSection/>
  <FeaturesSection/>
  <StartToFinishSection />
  <FooterSection/>
 </>
  );
};

export default About;
