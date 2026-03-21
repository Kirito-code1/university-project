import HeaderTitle from "./components/HeaderTitle";
import Navigation from "./components/Navigation";
import Language from "./components/Language";
import ApplyButton from "./components/ApplyButton";
import ApplyModal from "./components/ApplyModal";
import GlassBlock from "./components/GlassBlock";
import Title from "./components/Title";
import Description from "./components/Description";
import bgImage from "./assets/Container.svg";
import NumbersPanel from "./components/NumberPanel";
import About from "./About";
import Faculties from "./Faculties";
import Research from "./Research";
import WhyUs from "./WhyUs";
import NewsEvents from "./NewsEvents";
import CampusLife from "./CampusLife";
import Community from "./Community";
import Footer from "./Footer";
import AdminPanel from "./components/AdminPanel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { useI18n } from "./i18n";

export default function App() {
  const [applyOpen, setApplyOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      <header className="relative z-30 w-full bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-5 max-w-7xl">
          <HeaderTitle />
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
            <Language />
            <Navigation />
            <div className="hidden lg:flex items-center gap-4">
              <ApplyButton onClick={() => setApplyOpen(true)} />
            </div>
          </div>
        </div>
      </header>

      <section
        className="relative w-full min-h-[calc(100svh-80px)] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <main
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-20 pb-12 flex flex-col"
        >
          <GlassBlock />
          <Title />
          <Description />

          <div className="flex flex-wrap gap-3 mt-8">
            <button className="bg-white text-black px-7 py-3 rounded-full font-bold hover:bg-gray-200 transition">
              {t("hero.explore")}
            </button>
            <button className="border border-white text-white px-7 py-3 rounded-full font-bold bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
              {t("hero.tour")}
            </button>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className="mt-10">
            <NumbersPanel />
          </div>
        </main>
      </section>

      <div className="relative w-full bg-white" data-aos="fade-up">
        <About />
      </div>

      <div className="relative w-full bg-white" data-aos="fade-up">
        <Faculties />
      </div>

      <div className="relative w-full" data-aos="fade-up">
        <Research />
      </div>

      <div className="relative w-full" data-aos="fade-up">
        <WhyUs />
      </div>

      <div className="relative w-full" data-aos="fade-up">
        <NewsEvents />
      </div>

      <div className="relative w-full" data-aos="fade-up">
        <CampusLife />
      </div>

      <div className="relative w-full" data-aos="fade-up">
        <Community onApply={() => setApplyOpen(true)} />
      </div>

      <Footer />

      <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />
      <AdminPanel />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/30 transition-all ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}
