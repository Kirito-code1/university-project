import { useI18n } from "../i18n";

const GlassBlock = () => {
  const { t } = useI18n();

  return (
    <div className="
      inline-flex items-center 
      bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl 
      px-4 py-3 md:px-6 
      gap-3 shadow-sm 
      w-fit max-w-[90%] 
      mt-6 md:mt-10
    ">
      <div className="relative flex h-3 w-3 shrink-0">
        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></div>
        <div className="relative inline-flex rounded-full h-3 w-3 bg-teal-400"></div>
      </div>
      
      <span className="text-white text-xs md:text-sm font-medium leading-tight">
        {t("hero.applications")}
      </span>
    </div>
  );
};

export default GlassBlock;
