import React from 'react';
import messageCircle from '../../assets/chatIcons/OnlineChat-1.png';
import phone from '../../assets/chatIcons/telephone.png';
import messageSquare from '../../assets/chatIcons/chat-room-icon-7-200x200.png'

const AdditionalCrisisResources: React.FC = () => {
  return (
    <div className="w-full bg-[#faf8f6] font-sans antialiased">
      <div className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1a2e3b] mb-12">
          Additional Crisis Resources
        </h2>

        <div className="flex flex-wrap items-center justify-between w-full gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-4 flex-1 min-w-[200px]">
            <div className="bg-[#e6f0fa] p-6 rounded-full">
              <img 
                src={messageCircle} 
                alt="Online Chat" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            <a 
              href="#" 
              className="text-xl md:text-2xl text-[#2b5f8b] font-light hover:text-[#1a3f6b] transition-colors duration-300 border-b border-dotted border-[#2b5f8b]/30 hover:border-solid"
            >
              OnLine Chat
            </a>
          </div>
          
          <div className="flex flex-col items-center gap-4 flex-1 min-w-[200px]">
            <div className="bg-[#e6f0fa] p-6 rounded-full">
              <img 
                src={phone} 
                alt="Call Lines" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            <a 
              href="#" 
              className="text-xl md:text-2xl text-[#2b5f8b] font-light hover:text-[#1a3f6b] transition-colors duration-300 border-b border-dotted border-[#2b5f8b]/30 hover:border-solid"
            >
              Call Lines
            </a>
          </div>
          
          <div className="flex flex-col items-center gap-4 flex-1 min-w-[200px]">
            <div className="bg-[#e6f0fa] p-6 rounded-full">
              <img 
                src={messageSquare} 
                alt="Text Chat" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            <a 
              href="#" 
              className="text-xl md:text-2xl text-[#2b5f8b] font-light hover:text-[#1a3f6b] transition-colors duration-300 border-b border-dotted border-[#2b5f8b]/30 hover:border-solid"
            >
              Text Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCrisisResources;