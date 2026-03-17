import mainBuilding from "../assets/mainBuilding.png";
import water from "../assets/water.png";
import laboratory from "../assets/labaratory.png";

const AboutImages = () => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto h-[320px] sm:h-[420px] lg:h-[520px]">
      <div className="absolute top-[8%] right-[4%] sm:right-[8%] w-[78%] h-[72%] rounded-[26px] sm:rounded-[36px] overflow-hidden z-10 shadow-2xl">
        <img 
          src={mainBuilding} 
          alt="Main Building"
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="absolute top-0 right-0 w-[34%] h-[26%] rounded-[14px] sm:rounded-[22px] overflow-hidden z-20 border-4 border-white shadow-lg">
        <img 
          src={water} 
          alt="Water"
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="absolute bottom-0 left-0 w-[46%] h-[46%] rounded-[18px] sm:rounded-[28px] overflow-hidden z-20 border-4 border-white shadow-lg">
        <img 
          src={laboratory} 
          alt="Laboratory"
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
};

export default AboutImages;
