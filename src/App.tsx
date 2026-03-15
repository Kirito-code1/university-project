import HeaderTitle from "./components/HeaderTitle";
import Navigation from "./components/Navigation";
import Language from "./components/Language";
import ApplyButton from "./components/ApplyButton";
import GlassBlock from "./components/GlassBlock";
import Title from "./components/Title";
import Description from "./components/Description";
import bgImage from "./assets/Container.svg";
import NumbersPanel from "./components/NumberPanel";
import Search from "./components/Search";
import About from "./About";
import Faculties from "./Faculties";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      
      <header className="relative z-30 flex items-center justify-between px-6 md:px-10 py-5 w-full bg-white shadow-sm">
        <HeaderTitle />
        <div className="hidden lg:flex items-center space-x-8">
          <Navigation />
          <div className="flex items-center space-x-4">
             <Language />
             <Search />
             <ApplyButton />
          </div>
        </div>
      </header>

      <div 
        className="relative w-full h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <main 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="relative z-10 px-6 md:ml-40 pt-10 md:pt-20 flex flex-col"
        >
          <GlassBlock /> 
          <Title />
          <Description />
          
          <div className="flex flex-wrap gap-4 mt-8 ml-0 md:ml-10 lg:ml-20">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
              Explore Programs
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-bold bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
              Virtual Tour
            </button>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="400" className="mt-10">
            <NumbersPanel />
          </div>
        </main>
      </div>

      <div className="relative w-full bg-white" data-aos="fade-up">
        <About />
      </div>

      <div className="relative w-full bg-white" data-aos="fade-up">
        <Faculties />
      </div>
    </div>
  );
}