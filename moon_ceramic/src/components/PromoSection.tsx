import h17Image from '../assets/h17.png';

const PromoSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row bg-[#f8f8f8]">
        <div className="flex-1 p-16 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-serif text-stone-800 uppercase tracking-widest mb-4">
            Up to 40% Off Our <br /> Christmas Collection
          </h2>
          <p className="text-sm text-stone-500 max-w-xs mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis.
          </p>
          <button className="border-b border-stone-800 pb-1 text-[10px] uppercase tracking-[0.2em] font-bold cursor-pointer">
            Shop Now
          </button>
        </div>
        <div className="flex-1 h-[400px]">
          <img src={h17Image} />
        </div>
      </div>
    </section>
  );
};

export default PromoSection