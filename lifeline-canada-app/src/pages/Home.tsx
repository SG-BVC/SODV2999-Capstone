import React from 'react';
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
