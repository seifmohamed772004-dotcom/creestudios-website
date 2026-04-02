import React from 'react';
import { HeroSection } from '../Common-About/HeroSection';
import FooterSection from '../Components/Footer';
import { IndustriesSection } from '../Common-About/IndustriesSection';
import { StartToFinishSection } from '../Common-About/StartToFinishSection';
import FeaturesSection from '../Common-Home/FeaturesSection';
import { WhoWeAreSection } from '../Common-About/WhoWeAreSection';

const About = () => {
  return (
 <>
  <HeroSection/>
  <WhoWeAreSection/>
  <IndustriesSection/>
  <FeaturesSection/>
  <StartToFinishSection />
  <FooterSection/>
 </>
  );
};

export default About;
