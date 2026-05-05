
import h8Image from '../assets/h8.png';

const BlogSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-center text-xl font-serif uppercase tracking-[0.3em] text-stone-800 mb-12">Our Blog</h2>
      <div className="flex flex-col md:flex-row bg-[#f8f8f8] overflow-hidden">
        <div className="flex-1 p-12 md:p-20 flex flex-col justify-center items-center text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-4">Tableware</span>
          <h3 className="text-2xl font-serif text-stone-800 uppercase tracking-widest leading-tight mb-6">
            The Secrets to a <br /> Kitchen Room
          </h3>
          <p className="text-xs text-stone-500 max-w-xs mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <button className="border-b border-stone-800 pb-1 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-stone-500 transition cursor-pointer">
            Read More
          </button>
        </div>
        <div className="flex-1 h-[400px] md:h-auto">
          <img 
            src={h8Image} 
            className="w-full h-full object-cover" 
            alt="Kitchen Tableware" 
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection