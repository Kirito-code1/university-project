const FacultyTabs = () => {
  const tabs = ["Undergraduate", "Graduate", "Doctoral", "Professional"];
  
  return (
    <div className="flex justify-center gap-4 mb-16">
      {tabs.map((tab, i) => (
        <button 
          key={tab}
          className={`px-8 py-3 rounded-xl font-bold text-[16px] transition-colors ${
            i === 0 
              ? "bg-[#1D2939] text-white" 
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FacultyTabs;