const AboutText = () => {
  return (
    <div className="flex-1 max-w-[600px]">
      <h5 className="text-[#00C9A7] font-bold uppercase tracking-[0.2em] text-sm mb-6">
        Welcome to Academic University
      </h5>
      <h2 className="text-[56px] font-bold text-[#1D2939] leading-[1.1] mb-8">
        Where <span className="text-[#A4B43B]">Tradition</span> Meets Innovation
      </h2>
      <div className="space-y-6 text-[#475467] text-[18px] leading-relaxed mb-10">
        <p>
          Founded with a vision to become Central Asia's leading institution of higher learning, 
          <span className="font-bold text-[#1D2939]"> Academic University</span> has grown into a vibrant academic community that attracts students and scholars from around the globe.
        </p>
        <p>
          Our commitment to <span className="text-[#00C9A7] font-medium">research excellence</span>, innovative teaching, and community engagement creates an environment where students don't just learn — they <span className="text-[#00C9A7] font-bold">lead, discover, and create.</span>
        </p>
      </div>
      <button className="flex items-center gap-2 text-[#00C9A7] font-bold text-lg hover:gap-4 transition-all group">
        Learn More About Us 
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
};

export default AboutText;