import { useI18n } from "../i18n";

const Language = () => {
  const { language, setLanguage } = useI18n();
  const languages = [
    { label: "En", value: "en" },
    { label: "Uz", value: "uz" },
    { label: "Ru", value: "ru" },
  ];

  return (
    <div className="flex border border-slate-200 rounded-full overflow-hidden w-max bg-slate-50"> 
      {languages.map((lang) => (
        <button
          key={lang.value}
          onClick={() => setLanguage(lang.value as "en" | "ru" | "uz")}
          className={`px-3 py-1 text-[12px] font-bold leading-none transition-all text-center min-w-[36px] whitespace-nowrap ${
            language === lang.value
              ? "bg-[#00C9A7] text-white" 
              : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default Language;
