import AboutText from "./components/AboutText";
import AboutImages from "./components/AboutImages";

const About = () => {
  return (
    <section id="about" className="font-about py-16 md:py-24 px-6 sm:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <AboutText />
        <AboutImages />
      </div>
    </section>
  );
};

export default About;
