import mainBuilding from "./assets/mainBuilding.png";
import laboratory from "./assets/labaratory.png";
import water from "./assets/water.png";
import { useI18n } from "./i18n";

const features = [
  {
    number: "01",
    title: "Global Recognition",
    text:
      "Our degrees are recognized by leading employers and institutions worldwide, opening doors to international careers.",
    bullets: [
      "Accredited by top education bodies",
      "Exchange programs with 50+ universities",
      "Alumni network in 80+ countries",
    ],
    image: mainBuilding,
  },
  {
    number: "02",
    title: "State-of-the-Art Facilities",
    text:
      "Our campus features world-class laboratories, digital libraries, and innovation spaces designed for breakthrough discoveries.",
    bullets: [
      "AI & robotics research labs",
      "24/7 campus learning facilities",
      "Collaborative maker spaces",
    ],
    image: laboratory,
  },
  {
    number: "03",
    title: "World-Class Faculty",
    text:
      "Learn from professors who are leaders in their fields, published researchers, and industry innovators.",
    bullets: [
      "Top faculty with global awards",
      "Industry partnerships on curriculum",
      "Mentorship for every student",
    ],
    image: water,
  },
  {
    number: "04",
    title: "Career Success",
    text:
      "Our dedicated career center, industry partnerships, and internships ensure graduates are ready from day one.",
    bullets: [
      "95% employment within 6 months",
      "Dedicated career mentoring",
      "Global internship programs",
    ],
    image: mainBuilding,
  },
];

const WhyUs = () => {
  const { t } = useI18n();
  return (
    <section className="bg-[#F7F7F4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 font-semibold mb-3">
            {t("whyUs.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D2939]">
            {t("whyUs.title")} <span className="text-emerald-500">{t("whyUs.highlight")}</span>
          </h2>
        </div>

        <div className="space-y-10 md:space-y-14">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={feature.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={`${isReversed ? "lg:order-2" : ""} relative`}>
                  <span className="absolute -top-6 right-2 text-[80px] sm:text-[110px] font-bold text-[#E6ECE6]">
                    {feature.number}
                  </span>
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1D2939]">
                      {feature.title}
                    </h3>
                    <p className="text-[#475467] text-sm sm:text-base">
                      {feature.text}
                    </p>
                    <div className="space-y-2">
                      {feature.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                          <p className="text-sm text-[#475467]">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`${isReversed ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-white">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[200px] sm:h-[260px] lg:h-[280px] object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
