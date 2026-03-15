import mainBuilding from "../assets/mainBuilding.png";
import water from "../assets/water.png";
import laboratory from "../assets/labaratory.png";

const AboutImages = () => {
  return (
    <div className="relative w-full max-w-[600px] mx-auto h-[350px] md:h-[520px]">
      
      <div className="absolute top-[10%] right-[5%] md:right-[10%] w-[80%] md:w-[440px] h-[70%] md:h-[380px] rounded-[30px] md:rounded-[40px] overflow-hidden z-10 shadow-2xl">
        <img 
          src={mainBuilding} 
          alt="Main Building"
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="absolute top-0 right-0 w-[35%] md:w-[180px] h-[25%] md:h-[160px] rounded-[16px] md:rounded-[24px] overflow-hidden z-20 border-4 border-white shadow-lg">
        <img 
          src={water} 
          alt="Water"
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="absolute bottom-0 left-0 w-[45%] md:w-[240px] h-[45%] md:h-[260px] rounded-[24px] md:rounded-[32px] overflow-hidden z-20 border-4 border-white shadow-lg">
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