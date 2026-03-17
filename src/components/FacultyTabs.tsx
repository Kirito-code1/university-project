type FacultyTab = {
  id: string;
  label: string;
};

type FacultyTabsProps = {
  tabs: FacultyTab[];
  activeTab: string;
  onChange: (tab: string) => void;
};

const FacultyTabs = ({ tabs, activeTab, onChange }: FacultyTabsProps) => {
  
  return (
    <div className="
      flex
      overflow-x-auto flex-nowrap justify-start 
      md:justify-center md:overflow-x-visible 
      gap-3 md:gap-4 
      mb-10 md:mb-14 
      px-4 md:px-0 
      scrollbar-hide
    ">
      {tabs.map((tab) => (
        <button 
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`
            px-5 py-2.5 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-colors
            ${tab.id === activeTab 
              ? "bg-[#1D2939] text-white" 
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default FacultyTabs;
