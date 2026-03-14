import HeaderTitle from "./components/HeaderTitle";
import Navigation from "./components/Navigation";
import Language from "./components/Language";
import ApplyButton from "./components/ApplyButton";
import GlassBlock from "./components/GlassBlock";
import Title from "./components/Title";
import Description from "./components/Description";

export default function App() {
  return (
    <div className="w-full h-screen bg-black">
      <header className="flex items-center p-5 w-full space-x-5 bg-white">
        <HeaderTitle />
        <Navigation />
        <Language />
        <ApplyButton />
      </header>
      <GlassBlock/>
      <Title/>
      <Description />
    </div>
  );
}