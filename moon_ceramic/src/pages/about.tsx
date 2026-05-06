import React from 'react';
import h19Image from '../assets/h19.png';
import h20Image from '../assets/h20.png';
import h21Image from '../assets/h21.png';
import h22Image from '../assets/h22.png';
import h23Image from '../assets/h23.png';
import h24Image from '../assets/h24.png';
import h25Image from '../assets/h25.png';
import h26Image from '../assets/h26.png';
import Newsletter from '../components/Newsletter';

const TEAM = [
  { name: "Duane Patterson", role: "CEO & Founder", image: h23Image },
  { name: "Ophelia Tifus", role: "Creative Director", image: h24Image },
  { name: "Corbin Monnery", role: "Master Potter", image: h25Image },
  { name: "Seren Difne", role: "Designer", image: h26Image },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F6] pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- PAGE HEADER --- */}
        <div className="text-center mb-20">
          <h1 className="text-3xl font-serif uppercase tracking-[0.3em] text-stone-800 mb-4">About Moon</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
            Moon's handmade ceramic products have been around since 1650.
          </p>
        </div>

        {/* --- HISTORY TIMELINE GRID --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 bg-white">
          {/* 1910 Section */}
          <div className="p-16 md:p-24 flex flex-col justify-center text-center items-center">
            <span className="text-lg font-serif text-stone-800 mb-4">1910</span>
            <p className="text-[11px] text-stone-500 leading-relaxed max-w-xs uppercase tracking-widest">
              Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus sit aliquam sit nullam.
            </p>
          </div>
          <div className="h-[300px] overflow-hidden">
            <img src={h19Image} alt="Moon History 1910" className="w-full h-full object-cover" />
          </div>

          {/* 1990 Section - Reversed on MD */}
          <div className="h-[300px] overflow-hidden order-3 md:order-3">
            <img src={h20Image} alt="Moon History 1990" className="w-full h-full object-cover" />
          </div>
          <div className="p-16 md:p-24 flex flex-col justify-center text-center items-center order-4 md:order-4">
            <span className="text-lg font-serif text-stone-800 mb-4">1990</span>
            <p className="text-[11px] text-stone-500 leading-relaxed max-w-xs uppercase tracking-widest">
              Mattis sit phasellus sit aliquam sit nullam. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          {/* 2010 Section */}
          <div className="p-16 md:p-24 flex flex-col justify-center text-center items-center order-5 md:order-5">
            <span className="text-lg font-serif text-stone-800 mb-4">2010</span>
            <p className="text-[11px] text-stone-500 leading-relaxed max-w-xs uppercase tracking-widest">
              Aliquam sit nullam. Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus.
            </p>
          </div>
          <div className="h-[300px] overflow-hidden order-6 md:order-6">
            <img src={h21Image} alt="Moon History 2010" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* --- HOW WE WORKS SECTION --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 py-32">
          <div className="h-[400px] overflow-hidden">
            <img src={h22Image} alt="Process" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-md">
            <h2 className="text-xl font-serif uppercase tracking-[0.2em] text-stone-800 mb-8">How We Works</h2>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-stone-800 mb-2">Product Design</h4>
                <p className="text-[11px] text-stone-500 leading-loose">Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis.</p>
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-stone-800 mb-2">Crafted</h4>
                <p className="text-[11px] text-stone-500 leading-loose">Sit aliquam sit nullam. Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-stone-800 mb-2">Sell Product</h4>
                <p className="text-[11px] text-stone-500 leading-loose">Mattis sit phasellus mollis. Lorem ipsum dolor sit amet consectetur adipiscing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- MEET OUR TEAM SECTION --- */}
        <section className="py-24 border-t border-stone-200">
          <div className="text-center mb-20">
            <h2 className="text-2xl font-serif uppercase tracking-[0.3em] text-stone-800">Meet Our Team</h2>
            <div className="w-12 h-[1px] bg-stone-300 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-full aspect-[3/4] bg-stone-200 mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-[9px] uppercase tracking-widest text-stone-400 italic">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- NEWSLETTER --- */}
        <Newsletter />
      </div>
    </div>
  );
};

export default AboutPage;