import { useI18n } from "./i18n";

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer id="contact" className="bg-[#0B1324] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <h4 className="text-xl font-semibold">{t("footer.stayUpdated")}</h4>
            <p className="text-white/60 text-sm mt-2">
              {t("footer.stayDesc")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              placeholder={t("footer.placeholder")}
              className="flex-1 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button className="bg-amber-400 text-[#0B1324] px-5 py-2 rounded-full font-semibold text-sm">
              {t("footer.subscribe")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 text-sm">
          <div>
            <h5 className="font-semibold mb-4">{t("footer.quickLinks")}</h5>
            <ul className="space-y-2 text-white/60">
              <li><a href="#about" className="hover:text-white">{t("nav.about")}</a></li>
              <li><a href="#admissions" className="hover:text-white">{t("nav.admissions")}</a></li>
              <li><a href="#faculties" className="hover:text-white">{t("nav.academics")}</a></li>
              <li><a href="#campus-life" className="hover:text-white">{t("nav.campusLife")}</a></li>
              <li><a href="#research" className="hover:text-white">{t("nav.research")}</a></li>
              <li><a href="#news" className="hover:text-white">{t("nav.news")}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">{t("footer.contact")}</h5>
            <ul className="space-y-2 text-white/60">
              <li><a href="mailto:info@academic.edu" className="hover:text-white">{t("footer.email")}</a></li>
              <li><a href="tel:+998710000000" className="hover:text-white">{t("footer.phone")}</a></li>
              <li>{t("footer.location")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-white/40 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span>(c) 2026 Academic University. All rights reserved.</span>
          <span>Privacy Policy - Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
