import { useI18n } from "../i18n";

const Description = () => {
  const { t } = useI18n();
  return (
    <div className="max-w-[90%] md:max-w-[520px] mt-4"> 
      <p className="text-gray-200/90 text-[16px] md:text-[18px] font-medium leading-relaxed text-left">
        {t("hero.description")}
      </p>
    </div>
  );
};

export default Description;
