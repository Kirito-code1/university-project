import mainBuilding from "./assets/mainBuilding.png";
import laboratory from "./assets/labaratory.png";
import { useI18n } from "./i18n";

const newsList = [
  {
    title: "Students Win International Robotics Championship",
    date: "March 18, 2025",
    image: laboratory,
  },
  {
    title: "New Innovation Hub Opens with $10M Investment",
    date: "March 12, 2025",
    image: mainBuilding,
  },
  {
    title: "University Launches 5 New Graduate Programs",
    date: "February 25, 2025",
    image: laboratory,
  },
];

const events = [
  "Open Day - Spring 2025",
  "AI & Data Science Conference",
  "Career Fair 2025",
  "Spring Graduation Ceremony",
];

const NewsEvents = () => {
  const { t } = useI18n();
  return (
    <section id="news" className="bg-[#F6F4EF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 font-semibold mb-3">
            {t("news.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D2939]">
            {t("news.title")} <span className="text-emerald-500">{t("news.highlight")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <img
              src={mainBuilding}
              alt="Academic University Signs Historic Agreement with MIT"
              className="h-[220px] sm:h-[260px] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#1D2939] mb-2">
                Academic University Signs Historic Agreement with MIT for Joint Research
              </h3>
              <p className="text-sm text-slate-500">
                A new partnership will unlock shared research labs, student exchanges,
                and collaborative innovations in AI and biotechnology.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-[#1D2939]">{t("news.upcoming")}</h4>
              <span className="text-emerald-500 text-xs font-semibold">{t("news.viewAll")}</span>
            </div>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50"
                >
                  <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
                    {event.split(" ")[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1D2939]">{event}</p>
                    <p className="text-xs text-slate-400">Campus Center</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {newsList.map((news) => (
            <div
              key={news.title}
              className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex gap-4"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h5 className="text-sm font-semibold text-[#1D2939]">{news.title}</h5>
                <p className="text-xs text-slate-400 mt-1">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
