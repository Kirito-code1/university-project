import React from 'react';
import { useI18n } from "../i18n";

const Title: React.FC = () => {
  const { t } = useI18n();
  return (
    <div className="relative w-full flex items-start pt-8 md:pt-12">
      <div className="space-y-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-bold text-white leading-tight">
          {t("hero.line1")}
        </h1>

        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-bold text-white leading-tight">
          {t("hero.line2")}
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 md:gap-x-4 leading-tight">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-bold bg-gradient-to-r from-[#D4E157] to-[#66BB6A] bg-clip-text text-transparent">
            {t("hero.line3")}
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-bold text-white">
            {t("hero.line4")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
