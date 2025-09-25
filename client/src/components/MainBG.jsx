const MainBG = () => {
  return (
    <div className="fixed flex pointer-events-none top-0 left-0 h-[100vh] w-[100vw] bg-[url(/pexels-hero-image.jpg)] bg-cover bg-top">
      <div className="relative h-auto w-[33vw] bg-gradient-to-r from-transparent to-slate-900/60 backdrop-blur-xs "></div>
      <div className="relative h-auto w-[33vw] bg-slate-900/60 backdrop-blur-xs "></div>
      <div className="relative h-auto w-[33vw] bg-gradient-to-l from-transparent to-slate-900/60 backdrop-blur-xs "></div>
    </div>
  );
};

export default MainBG;
