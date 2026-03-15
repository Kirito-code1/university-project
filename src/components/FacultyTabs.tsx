const FacultyTabs = () => {
  const tabs = ["Undergraduate", "Graduate", "Doctoral", "Professional"];
  
  return (
    <div className="
      flex
      overflow-x-auto flex-nowrap justify-start 
      md:justify-center md:overflow-x-visible 
      gap-3 md:gap-4 
      mb-10 md:mb-16 
      px-4 md:px-0 
      scrollbar-hide
    ">
      {tabs.map((tab, i) => (
        <button 
          key={tab}
          className={`
            ${i === 0 
              ? "bg-[#1D2939] text-white" 
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FacultyTabs;