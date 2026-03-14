import { useState } from "react";

const Language = () => {
  const [language, setLanguage] = useState("En");
  const languages = ["En", "Uz", "Ru"];

  return (
    <div className="flex border border-white/20 rounded-full overflow-hidden w-max bg-white/5 backdrop-blur-sm ml-[80px]"> 
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1 text-[13px] font-bold transition-all ${
            language === lang
              ? "bg-[#00C9A7] text-white" 
              : "text-gray-400 hover:text-white hover:bg-white/10"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default Language;