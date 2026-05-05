const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#F9F8F6] z-50">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute h-full w-full animate-ping rounded-full bg-stone-200 opacity-75"></div>
        <div className="relative h-12 w-12 rounded-full border-t-2 border-stone-800 animate-spin"></div>
      </div>
      
      <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-stone-500 animate-pulse">
        Moon Ceramic Studio
      </p>
    </div>
  );
};

export default LoadingScreen;