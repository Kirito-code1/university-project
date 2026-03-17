import mainBuilding from "./assets/mainBuilding.png";
import laboratory from "./assets/labaratory.png";
import water from "./assets/water.png";
import { useI18n } from "./i18n";

const CampusLife = () => {
  const { t } = useI18n();
  return (
    <section id="campus-life" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 font-semibold mb-3">
            {t("campus.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D2939]">
            {t("campus.title")} <span className="text-emerald-500">{t("campus.highlight")}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3">
            {t("campus.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={mainBuilding}
              alt="Campus main building"
              className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={laboratory}
              alt="Library"
              className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={water}
              alt="Campus life"
              className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
