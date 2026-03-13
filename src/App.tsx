import Title from "./components/Title";
import Navigation from "./components/Navigation";
import Language from "./components/Language";
import ApplyButton from "./components/ApplyButton";
import GlassBlock from "./components/GlassBlock";

export default function App() {
  return (
    <div className="w-full h-screen">
      <header className="flex items-center p-5 w-full space-x-5">
        <Title />
        <Navigation />
        <Language />
      </header>
      <GlassBlock/>
    </div>
  );
}