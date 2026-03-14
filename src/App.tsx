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

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      
      <div 
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <header className="relative z-20 flex items-center justify-between px-10 py-5 w-full bg-transparent bg-white">
          <HeaderTitle />
          <div className="flex items-center space-x-8">
            <Navigation />
            <div className="flex items-center space-x-4">
               <Language />
               <Search />
               <ApplyButton />
            </div>
          </div>
        </header>

        <main className="relative z-10 ml-40 mt-20 flex flex-col">
          <GlassBlock /> 
          <Title />
          <Description />
          
          <div className="flex space-x-4 mt-8 mr-7 ml-15">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
              Explore Programs
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-bold bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
              Virtual Tour
            </button>
          </div>
          <NumbersPanel />
        </main>
      </div>

      <div className="relative w-full bg-white">
        <About />
      </div>

<div className="relative w-full bg-white">
        <Faculties />
      </div>
    </div>
  );
}