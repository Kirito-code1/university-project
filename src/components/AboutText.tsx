import { useI18n } from "../i18n";

const AboutText = () => {
  const { t } = useI18n();
  return (
    <div className="flex-1 max-w-[600px]">
      <h5 className="text-[#00C9A7] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">
        {t("about.eyebrow")}
      </h5>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D2939] leading-[1.1] mb-6">
        {t("about.title")}{" "}
        <span className="text-[#A4B43B]">{t("about.highlight")}</span>{" "}
        {t("about.titleRest")}
      </h2>
      <div className="space-y-5 text-[#475467] text-[16px] sm:text-[17px] leading-relaxed mb-8">
        <p>
          {t("about.paragraph1")}
        </p>
        <p>
          {t("about.paragraph2")}
        </p>
      </div>
      <button className="flex items-center gap-2 text-[#00C9A7] font-bold text-lg hover:gap-4 transition-all group">
        {t("about.cta")}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
};

export default AboutText;
