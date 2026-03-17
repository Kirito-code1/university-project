const NumbersPanel = () => {
  const stats = [
    { value: "15,000+", label: "Students" },
    { value: "200+", label: "Programs" },
    { value: "50+", label: "Countries" },
    { value: "95%", label: "Employment" },
  ];

  return (
    <div className="w-full max-w-5xl bg-[#0A1628D9] items-center justify-between px-6 sm:px-10 py-6 rounded-2xl backdrop-blur-md border border-white/10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-white leading-tight">
              {stat.value}
            </h1>
            <span className="text-xs sm:text-sm text-white/70 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumbersPanel;
