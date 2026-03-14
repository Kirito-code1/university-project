import React from 'react';

const Title: React.FC = () => {
  return (
  
    <div className="relative w-full flex items-start pt-15">
      <div className="ml-15">
        <h1 className="text-[70px] font-bold text-white leading-tight">
          Shaping
        </h1>
        
        <h1 className="text-[70px] font-bold text-white leading-tight">
          Tomorrow's
        </h1>
        
        <div className="flex items-center space-x-4 leading-tight">
          <h1 className="text-[70px] font-bold bg-gradient-to-r from-[#D4E157] to-[#66BB6A] bg-clip-text text-transparent">
            Leaders
          </h1>
          <h1 className="text-[70px] font-bold text-white">
            Today
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Title;