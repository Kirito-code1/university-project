import AboutText from "./components/AboutText";
import AboutImages from "./components/AboutImages";

const About = () => {
  return (
    <section className="font-about py-24 px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-16">
        <AboutText />
        <AboutImages />
      </div>
    </section>
  );
};

export default About;