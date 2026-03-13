import { useState } from "react";

const Language = () => {
  const [language, setLanguage] = useState("En"); 
  const languages = ["En", "Uz", "Ru"]; 

  return (
    <div className="flex border border-gray-300 rounded-full overflow-hidden w-max">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)} 
          className={`px-4 py-2 ${
            language === lang
              ? "bg-sky-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default Language;