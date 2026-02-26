import React from 'react';
import aboutImage from '../../assets/about-image.jpg'; // Replace with actual image path
const AboutUs: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#faf8f6] font-sans antialiased overflow-hidden">
      {/* Full width container with generous breathing room */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        
        {/* Two column layout with gentle gap */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left column - text content with warm spacing */}
          <div className="flex-1 space-y-12 md:space-y-16">
            {/* About Us - soft and welcoming */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#1a2e3b] leading-[1.1]">
                About Us
              </h1>
              
              <p className="text-xl md:text-2xl text-[#4a5c66] leading-relaxed max-w-2xl">
                The LifeLine Canada Foundation (or TLC) is a registered nonprofit, committed to positive mental health and suicide prevention & awareness and is constantly developing new initiatives in support of these goals.
              </p>
            </div>

            {/* Crisis information - gentle but clear */}
            <div className="bg-[#f1ede8] rounded-3xl p-8 md:p-10 max-w-2xl">
              <p className="text-xl md:text-2xl text-[#3d5663] leading-relaxed">
                <span className="text-[#1e3b4a] font-medium">The LifeLine Canada Foundation is not a crisis hotline.</span>{' '}
                If in Crisis, call or text <span className="text-[#1e3b4a] font-medium">988</span> for Canada's new suicide prevention hotline. If you or someone you know is in danger of hurting themselves or others,
                 call <span className="text-[#1e3b4a] font-medium">911</span> immediately. See our directory of mental health  <a 
                  href="#" 
                  className="text-[#2b5f6b] border-b border-dotted border-[#9fb7c0] hover:border-solid hover:border-[#1a3f48] transition-all duration-300 inline-flex items-center gap-1 group"
                >
                  crisis support
                  
                </a>{' '}
                in your area. in your area.
              </p>
            </div>

            {/* Mission section */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#2b4b5a]">
                Mission
              </h2>
              
              <p className="text-xl md:text-2xl text-[#4a626e] leading-relaxed max-w-2xl">
                To aid in suicide reduction across Canada by raising awareness of risk factors, delivering programs for positive mental health development, providing access to available resource options, and promoting local programs to build mental health resilience for all.
              </p>
            </div>

            
          </div>

          {/* Right column - image with soft presence */}
          <div className="flex-1 lg:mt-24">
            <div className="sticky top-24">
              <div className="relative">
                {/* Gentle gradient overlay for warmth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f6]/20 to-transparent rounded-3xl pointer-events-none z-10"></div>
                
                <img 
                  src={aboutImage}
                  alt="Peaceful landscape representing mental wellness and hope" 
                  className="w-full h-auto rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
                />
                
                {/* Soft caption */}
                <p className="text-sm text-[#8fa3ad] mt-4 text-center font-light tracking-wide">
                  — a moment of calm —
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;