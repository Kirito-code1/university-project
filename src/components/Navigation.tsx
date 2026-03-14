import arrowIcon from "../assets/arrow.png"; 

const Navigation = () => {
  const menuItems = [
    "About",
    "Academics",
    "Research",
    "Admissions",
    "Campus Life",
    "News",
    "Contact"
  ];

  return (
    <nav className="flex items-center space-x-6 text-[16px] font-semibold ml-10 text-black gap-x-[40px]">
      {menuItems.map((item) => (
        <div key={item} className="flex items-center space-x-1.5 cursor-pointer hover:opacity-80 transition-opacity">
          <span>{item}</span>
          
          {item !== "Contact" && (
            <img 
              src={arrowIcon} 
              alt="" 
              className="w-2.5 h-2.5 object-contain mt-0.5" 
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;