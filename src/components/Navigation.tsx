import { useState } from "react";
import arrowIcon from "../assets/arrow.png"; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "About", "Academics", "Research", "Admissions", "Campus Life", "News", "Contact"
  ];

  return (
    <div className="ml-4 md:ml-10">

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-md font-bold"
      >
        <span>{isOpen ? "Close Menu" : "Menu"}</span>
        <div className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <img src={arrowIcon} alt="" className="w-3 h-3 rotate-90" />
        </div>
      </button>

      <nav className="hidden lg:flex items-center text-[16px] font-semibold text-black lg:gap-x-[30px] xl:gap-x-[40px]">
        {menuItems.map((item) => (
          <div key={item} className="flex items-center space-x-1.5 cursor-pointer hover:text-[#00C9A7] transition-colors whitespace-nowrap">
            <span>{item}</span>
            {item !== "Contact" && (
              <img src={arrowIcon} alt="" className="w-2.5 h-2.5 object-contain mt-0.5" />
            )}
          </div>
        ))}
      </nav>

      {isOpen && (
        <div className="absolute left-0 top-[70px] w-full bg-white shadow-xl z-50 lg:hidden border-t">
          <div className="flex flex-col p-4 space-y-4">
            {menuItems.map((item) => (
              <div key={item} className="flex justify-between items-center border-b border-gray-50 pb-2">
                <span className="text-[18px] font-medium">{item}</span>
                <img src={arrowIcon} alt="" className="w-3 h-3 -rotate-90 opacity-40" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;