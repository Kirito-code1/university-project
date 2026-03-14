import mainBuilding from "../assets/mainBuilding.png";
import water from "../assets/water.png";
import laboratory from "../assets/labaratory.png";

const AboutImages = () => {
  return (
    <div className="flex-1 relative h-[520px] min-w-[550px]">

      <div className="absolute top-10 right-12 w-[440px] h-[380px] rounded-[40px] overflow-hidden z-10">
        <img 
          src={mainBuilding} 
          className="w-full h-full object-cover block" 
        />
      </div>

      <div className="absolute top-0 right-0 w-[180px] h-[160px] rounded-[24px] overflow-hidden z-20">
        <img 
          src={water} 
          className="w-full h-full object-cover block" 
        />
      </div>

      <div className="absolute bottom-0 left-0 w-[240px] h-[260px] rounded-[32px] overflow-hidden z-20">
        <img 
          src={laboratory} 
          className="w-full h-full object-cover block" 
        />
      </div>
    </div>
  );
};

export default AboutImages;