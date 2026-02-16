import React from 'react';
import HomepageCallToAction from '../components/Home/HomepageCallToAction';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Welcome Section */}
      <div className="flex items-center justify-center h-[50vh] w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 text-center px-4">
          Welcome to Lifeline Canada!
        </h1>
      </div>
      
      {/* Full Width CTA Section */}
      <div className="w-full">
        <HomepageCallToAction />
      </div>
    </div>
  );
};

export default Home;