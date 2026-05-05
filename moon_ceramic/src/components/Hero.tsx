import h1Image from '../assets/h1.png';

const Hero = () => (
  <section className="relative w-full h-[600px] flex items-center overflow-hidden">
    <img src={h1Image} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
    <div className="relative z-10 ml-12 md:ml-24 bg-[#8b7a71] p-10 text-white text-center max-w-xs shadow-xl">
      <p className="text-[10px] uppercase tracking-[0.2em] mb-2 opacity-80">Handcrafted in Viet Nam since 1650</p>
      <h2 className="text-3xl font-serif tracking-widest leading-tight mb-6 uppercase">Bat Trang Dinner Set</h2>
      <button className="bg-white text-stone-800 px-8 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-stone-100 transition cursor-pointer">
        Shop Now
      </button>
    </div>
  </section>
);

export default Hero;