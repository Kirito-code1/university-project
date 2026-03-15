import logoIcon from "../assets/logo.png"; 

const HeaderTitle = () => {
  return (

    <div className="flex items-center space-x-4 cursor-pointer ml-4 md:ml-10 lg:ml-[200px] transition-all duration-300">
      
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-[#00C9A7] to-[#F5A623] shrink-0">
        <img 
          src={logoIcon} 
          alt="Logo" 
          className="w-6 h-6 md:w-7 md:h-7 object-contain"
        />
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-[18px] md:text-[20px] font-extrabold text-black leading-none tracking-tight">
          ACADEMIC
        </span>
        <span className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1.5 leading-none">
          University
        </span>
      </div>
    </div>
  );
};

export default HeaderTitle;