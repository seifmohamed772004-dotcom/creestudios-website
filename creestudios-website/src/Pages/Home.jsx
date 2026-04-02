import React from 'react';
import ArticlesSection from '../Common-Home/ArticlesSection';
import CommunitySection from '../Common-Home/CommunitySection';
import FeaturesSection from '../Common-Home/FeaturesSection';
import { ResultsSection } from '../Common-Home/ResultsSection';
import { PartnersSection } from '../Common-Home/PartnersSection';
import { HeroSection } from '../Common-Home/HeroSection';

const Home = () => {
  return (<>
   <ArticlesSection/>
   <CommunitySection/>
   <FeaturesSection/>
   <ResultsSection/>
   <PartnersSection/>
   <HeroSection/>
  </>
  );
};

export default Home;
