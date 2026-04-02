import React from 'react';
import ArticlesSection from '../Common-Home/ArticlesSection';
import CommunitySection from '../Common-Home/CommunitySection';
import FeaturesSection from '../Common-Home/FeaturesSection';
import { ResultsSection } from '../Common-Home/ResultsSection';
import { PartnersSection } from '../Common-Home/PartnersSection';
import { HeroSection } from '../Common-Home/HeroSection';
import { LeadersSection } from '../Common-Home/Leaders';

const Home = () => {
  return (<>
   <HeroSection/>
   <PartnersSection/>
   <CommunitySection/>
   <FeaturesSection/>
   <ArticlesSection/>
   <LeadersSection/>
   <ResultsSection/>
   <footer/>
  </>
  );
};

export default Home;
