import React from 'react';
import HomepageCallToAction from '../components/Home/HomepageCallToAction';
import MentalHealthHero from '../components/Home/MentalHealthHero';
import MentalHealthResources from '../components/MentalHealthResources/MentalHealthResources';
import CrisisSupportBanner from '../components/MentalHealthResources/CrisisSupportBanner';
import CompanionPawsCanada from '../components/CompanyPaws/CompanionPawsCanada';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Welcome Section */}
      <div className="flex flex-col items-center justify-center w-full">
       <MentalHealthHero/>
       <MentalHealthResources/>
       <CrisisSupportBanner/>
       <CompanionPawsCanada/>
      </div>
      
      {/* Full Width CTA Section */}
      <div className="w-full">
        <HomepageCallToAction />
      </div>
import Homepage from '../components/Homepage/Homepage';

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      {/* <h1 className="text-4xl font-bold text-blue-900">
        Mental Health Resources At Your Fingertips
      </h1> */}

      {/* <div className="flex items-center justify-center h-screen w-full">
        <h1>test</h1>
      </div> */}
      <Homepage></Homepage>
    </div>
  );
};

export default Home;