import FacultyCard from "./components/FacultyCard";
import FacultyTabs from "./components/FacultyTabs";

import iconIT from "./assets/it.png";
import iconBusiness from "./assets/business.png";
import iconScience from "./assets/science.png";
import iconMedicine from "./assets/medicine.png";
import iconLaw from "./assets/law.png";
import iconArts from "./assets/arts.png";

const facultiesData = [
  { 
    title: "Information Technologies", 
    desc: "Cutting-edge programs in AI, cybersecurity, and software engineering.", 
    count: "12 Programs", 
    color: "bg-[#E0F7F9] text-[#00C9A7]",
    icon: iconIT 
  },
  { 
    title: "Business & Management", 
    desc: "Develop strategic thinking and leadership skills for the global market.", 
    count: "9 Programs", 
    color: "bg-[#EBF5EE] text-[#A4B43B]",
    icon: iconBusiness 
  },
  { 
    title: "Natural Sciences", 
    desc: "Explore physics, chemistry, and biology through research-driven learning.", 
    count: "8 Programs", 
    color: "bg-[#F0F9F6] text-[#00C9A7]",
    icon: iconScience 
  },
  { 
    title: "Medicine & Health", 
    desc: "Prepare for careers in healthcare with world-class clinical training.", 
    count: "7 Programs", 
    color: "bg-[#E0F7F9] text-[#00C9A7]",
    icon: iconMedicine 
  },
  { 
    title: "Law & Governance", 
    desc: "Master international law, human rights, and public administration.", 
    count: "6 Programs", 
    color: "bg-[#EBF5EE] text-[#A4B43B]",
    icon: iconLaw 
  },
  { 
    title: "Arts & Humanities", 
    desc: "Cultivate creativity across literature, design, and cultural studies.", 
    count: "10 Programs", 
    color: "bg-[#F0F9F6] text-[#00C9A7]",
    icon: iconArts 
  },
];

const Faculties = () => {
  return (
    <section className="py-24 px-20 bg-white font-about">
      <div className="max-w-7xl mx-auto text-center">
        {/* Хедер блока */}
        <h5 className="text-[#00C9A7] font-bold uppercase tracking-[0.2em] text-sm mb-4">
          Academic Excellence
        </h5>
        <h2 className="text-[48px] font-bold text-[#1D2939] mb-4">
          Explore Our <span className="text-[#00C9A7]">Faculties</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-[18px]">
          Choose from over 200 programs across diverse disciplines, each designed to prepare you for a meaningful career.
        </p>

        <FacultyTabs />

        {/* Сетка */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facultiesData.map((f, i) => (
            <FacultyCard key={i} {...f} />
          ))}
        </div>

        {/* Кнопка внизу */}
        <button className="border-2 border-[#1D2939] text-[#1D2939] px-10 py-4 rounded-xl font-bold text-[16px] hover:bg-[#1D2939] hover:text-white transition-all">
          View All Programs →
        </button>
      </div>
    </section>
  );
};

export default Faculties;