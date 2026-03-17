import laboratory from "./assets/labaratory.png";
import { useI18n } from "./i18n";

const researchCards = [
  {
    tag: "Biotechnology",
    title: "Gene Therapy Advances in Rare Disease Treatment",
    date: "February 28, 2025",
  },
  {
    tag: "Sustainability",
    title: "Renewable Energy Integration in Urban Planning",
    date: "February 10, 2025",
  },
  {
    tag: "Quantum Computing",
    title: "Error Correction in Topological Qubits",
    date: "January 22, 2025",
  },
];

const stats = [
  { value: "150+", label: "Research Projects" },
  { value: "45M+", label: "Funding (USD)" },
  { value: "320+", label: "Publications" },
  { value: "28", label: "Research Centers" },
];

const partners = [
  "Stanford",
  "Oxford",
  "ETH Zurich",
  "Cambridge",
  "Tokyo University",
  "Sorbonne",
  "TU Munich",
];

const Research = () => {
  const { t } = useI18n();
  return (
    <section id="research" className="bg-[#0B1324] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80 font-semibold mb-3">
            {t("research.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("research.title")} <span className="text-emerald-300">{t("research.highlight")}</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            {t("research.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 md:mb-14">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="relative h-[240px] sm:h-[300px] lg:h-[340px]">
              <img
                src={laboratory}
                alt="Neural networks visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1324] via-[#0B1324]/30 to-transparent"></div>
              <span className="absolute top-4 left-4 text-[11px] uppercase tracking-widest bg-emerald-400/15 text-emerald-200 px-3 py-1 rounded-full border border-emerald-300/20">
                Artificial Intelligence
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                Neural Networks for Climate Prediction Models
              </h3>
              <p className="text-white/60 text-sm mb-4">
                March 15, 2025
              </p>
              <button className="text-emerald-300 text-sm font-semibold hover:text-emerald-200 transition-colors">
                {t("research.readMore")}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {researchCards.map((card) => (
              <div
                key={card.title}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
              >
                <span className="text-[11px] uppercase tracking-widest text-amber-200/80">
                  {card.tag}
                </span>
                <h4 className="text-sm sm:text-base font-semibold mt-2 mb-2">
                  {card.title}
                </h4>
                <p className="text-white/50 text-xs">{card.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
              <div className="text-xs text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
            {t("research.partners")}
          </p>
          <div className="relative overflow-hidden py-2">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#0B1324] to-transparent"></div>
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0B1324] to-transparent"></div>
            <div className="partner-marquee text-white/50 text-lg sm:text-xl font-semibold">
              {[...partners, ...partners].map((partner, index) => (
                <span key={`${partner}-${index}`} className="px-6">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
