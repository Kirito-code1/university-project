const NumbersPanel = () => {
  return (
    <div className="flex mt-15 bg-[#0A1628D9] w-[1100px] h-[120px] items-center justify-between px-20 rounded-2xl backdrop-blur-md border border-white/10 ml-80">
      
      <div className="flex flex-col items-center">
        <h1 className="text-[48px] font-bold text-white leading-tight">15 000+</h1>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-[48px] font-bold text-white leading-tight">200+</h1>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-[48px] font-bold text-white leading-tight">50+</h1>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-[48px] font-bold text-white leading-tight">95%</h1>
      </div>

    </div>
  );
};

export default NumbersPanel;