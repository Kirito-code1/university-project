interface FacultyProps {
  title: string;
  desc: string;
  count: string;
  color: string;
  icon: string;
}

const FacultyCard = ({ title, desc, count, color, icon }: FacultyProps) => {
  return (
    <div className="p-10 bg-[#F9FAFB] rounded-[32px] text-left relative flex flex-col h-full">
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6`}>
        <img src={icon} alt="" className="w-7 h-7 object-contain" />
      </div>

      <h3 className="text-2xl font-bold text-[#1D2939] mb-4">
        {title}
      </h3>
      <p className="text-gray-500 mb-8 leading-relaxed flex-grow">
        {desc}
      </p>

      <div className="flex justify-between items-center mt-auto">
        <span className="bg-[#FFF4E5] text-[#D4A14C] px-4 py-1.5 rounded-full text-[14px] font-bold">
          {count}
        </span>
        <span className="text-gray-300 text-xl font-light">
          →
        </span>
      </div>
    </div>
  );
};

export default FacultyCard;