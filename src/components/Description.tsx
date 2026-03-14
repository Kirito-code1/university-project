const Description = () => {
  return (
    /* max-w-[450px] — ограничивает ширину, заставляя текст переноситься.
       mt-2 — регулирует близость к Title.
    */
    <div className="max-w-[450px] mt-2 ml-15"> 
      <p className="text-gray-400 text-[20px] font-medium leading-relaxed">
        A world-class education experience in the heart of Central Asia. 
        Discover 200+ programs designed to transform your future.
      </p>
    </div>
  );
};

export default Description;