import React from 'react';

const Title: React.FC = () => {
  return (

    <div className="relative w-full flex items-start pt-10 md:pt-20">

      <div className="ml-4 md:ml-10 lg:ml-20">

            
        <h1 className="text-4xl md:text-6xl lg:text-[70px] font-bold text-white leading-tight">
          Shaping
        </h1>
        
        <h1 className="text-4xl md:text-6xl lg:text-[70px] font-bold text-white leading-tight">
          Tomorrow's
        </h1>
        
        <div className="flex flex-wrap items-center gap-x-3 md:gap-x-4 leading-tight">
          <h1 className="text-4xl md:text-6xl lg:text-[70px] font-bold bg-gradient-to-r from-[#D4E157] to-[#66BB6A] bg-clip-text text-transparent">
            Leaders
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-[70px] font-bold text-white">
            Today
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Title;