import { useEffect, useState } from "react";
import mainBuilding from "./assets/mainBuilding.png";
import { useI18n } from "./i18n";

const stats = [
  { value: "25,000+", label: "Students" },
  { value: "200+", label: "Academic Programs" },
  { value: "50+", label: "Partner Countries" },
  { value: "800+", label: "Faculty Members" },
  { value: "150+", label: "Research Projects" },
  { value: "95%", label: "Graduate Employment" },
];

type CommunityProps = {
  onApply?: () => void;
};

const Community = ({ onApply }: CommunityProps) => {
  const { t } = useI18n();
  const facilities = [
    t("community.facilities.dorms"),
    t("community.facilities.sports"),
    t("community.facilities.library"),
    t("community.facilities.clubs"),
  ];
  const testimonials = [
    {
      name: "Jamshid Akbar",
      role: "PhD Researcher - Class of 2025",
      quote:
        "The research opportunities here are unparalleled. I co-authored three papers during my PhD and secured a position at a top research lab before graduating.",
    },
    {
      name: "Madina Karimova",
      role: "MBA Graduate - Class of 2024",
      quote:
        "Career services were exceptional. The mentorship program helped me land a leadership role right after graduation.",
    },
    {
      name: "Ivan Petrova",
      role: "Computer Science - Class of 2026",
      quote:
        "I love the balance between theory and real-world projects. The labs are world-class and the community is incredibly supportive.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-slate-500">
          {facilities.map((facility) => (
            <div key={facility} className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">
                AU
              </div>
              <span>{facility}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-emerald-50/60 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 font-semibold mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2939] mb-10">
            {t("community.testimonials")} <span className="text-emerald-500">{t("community.highlight")}</span>
          </h2>

          <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 px-8 py-10 relative">
            <span className="absolute top-6 left-6 text-emerald-100 text-5xl font-bold">
              "
            </span>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              {activeTestimonial.quote}
            </p>
            <div className="mt-6">
              <div className="mx-auto h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                {activeTestimonial.name[0]}
              </div>
              <p className="text-sm font-semibold text-[#1D2939] mt-2">
                {activeTestimonial.name}
              </p>
              <p className="text-xs text-slate-400">{activeTestimonial.role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
              <button
              type="button"
              onClick={prev}
              className="h-8 w-8 rounded-full border border-emerald-200 text-emerald-500 hover:bg-emerald-50"
              aria-label="Previous testimonial"
            >
              &lt;
            </button>
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === activeIndex ? "bg-emerald-500" : "bg-emerald-200"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="h-8 w-8 rounded-full border border-emerald-200 text-emerald-500 hover:bg-emerald-50"
              aria-label="Next testimonial"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative bg-[#0B1324] py-16 md:py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${mainBuilding})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#0B1324]/80"></div>
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300 font-semibold text-center mb-4">
            {t("community.impactEyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            {t("community.impact")} <span className="text-emerald-300">{t("community.impactHighlight")}</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="admissions" className="bg-gradient-to-r from-[#0B1324] via-[#12354A] to-[#0B1324] text-white py-14">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-4">
            AU
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            {t("community.startTitle")}
          </h3>
          <p className="text-white/70 text-sm sm:text-base mb-6">
            {t("community.startDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={onApply}
              className="bg-white text-[#0B1324] px-6 py-2.5 rounded-full font-semibold"
            >
              {t("community.apply")}
            </button>
            <button className="border border-white/30 text-white px-6 py-2.5 rounded-full font-semibold">
              {t("community.request")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
