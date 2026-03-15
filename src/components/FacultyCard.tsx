interface FacultyProps {
  title: string;
  desc: string;
  count: string;
  color: string;
  icon: string;
}

const FacultyCard = ({ title, desc, count, color, icon }: FacultyProps) => {
  return (
    <div className="p-6 md:p-10 bg-[#F9FAFB] rounded-[24px] md:rounded-[32px] text-left flex flex-col h-full">
      <div className={`w-12 h-12 md:w-14 md:h-14 ${color} rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6 shrink-0`}>
        <img src={icon} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-[#1D2939] mb-3 md:mb-4">
        {title}
      </h3>
      
      <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base leading-relaxed flex-grow">
        {desc}
      </p>

      <div className="flex justify-between items-center mt-auto pt-2">
        <span className="bg-[#FFF4E5] text-[#D4A14C] px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[12px] md:text-[14px] font-bold whitespace-nowrap">
          {count}
        </span>
        <span className="text-gray-300 text-xl md:text-2xl font-light">
          →
        </span>
      </div>
    </div>
  );
};

export default FacultyCard;