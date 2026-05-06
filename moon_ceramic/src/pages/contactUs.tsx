import React from 'react';
import h27Image from '../assets/h27.png'; // Make sure to save the hero image as h27.png

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F6] pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <section className="relative h-[450px] flex items-center overflow-hidden mb-24">
          <div className="absolute inset-0 z-0">
            <img src={h27Image} alt="Contact Hero" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-10 ml-0 md:ml-12 bg-stone-800 text-white p-12 md:p-16 max-w-md text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-10 h-10 border border-stone-500 rounded-full flex items-center justify-center italic font-serif text-stone-400">
                M
              </div>
            </div>
            <h1 className="text-3xl font-serif uppercase tracking-[0.3em] mb-8">Contact Us</h1>
            <div className="w-8 h-[1px] bg-stone-500 mx-auto mb-8"></div>
            <p className="text-[10px] uppercase tracking-[0.2em] mb-6 text-stone-400">Follow us on social media</p>
            <div className="flex justify-center gap-4">
              {['FB', 'TW', 'IG', 'LI', 'PI'].map((social) => (
                <a key={social} href="#" className="text-[10px] hover:text-stone-400 transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center mb-24">
          <h2 className="text-2xl font-serif uppercase tracking-[0.3em] text-stone-800 mb-4">Get In Touch With Us</h2>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest max-w-lg mx-auto leading-relaxed mb-16">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-stone-200 pb-24">
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-stone-800 mb-3">Office Hours</h4>
              <p className="text-[11px] text-stone-500 tracking-widest">Monday - Friday</p>
              <p className="text-[11px] text-stone-500 tracking-widest">8:00 AM to 5:00 PM</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-stone-800 mb-3">Email</h4>
              <p className="text-[11px] text-stone-500 tracking-widest lowercase">contact@moonstudio.com</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-stone-800 mb-3">Phone</h4>
              <p className="text-[11px] text-stone-500 tracking-widest">+91 000 - 0000</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-stone-800 mb-3">Location</h4>
              <p className="text-[11px] text-stone-500 tracking-widest">123 Studio Street,</p>
              <p className="text-[11px] text-stone-500 tracking-widest">Surat, Gujarat 395000</p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-32">
          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-stone-800">Name</label>
                <input type="text" placeholder="Your Name" className="bg-transparent border border-stone-300 p-4 text-[11px] outline-none focus:border-stone-800 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-stone-800">Email</label>
                <input type="email" placeholder="Your Email" className="bg-transparent border border-stone-300 p-4 text-[11px] outline-none focus:border-stone-800 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-stone-800">Phone</label>
                <input type="text" placeholder="+91 000 - 0000" className="bg-transparent border border-stone-300 p-4 text-[11px] outline-none focus:border-stone-800 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-stone-800">Company</label>
                <input type="text" placeholder="Company Name" className="bg-transparent border border-stone-300 p-4 text-[11px] outline-none focus:border-stone-800 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-stone-800">Message</label>
              <textarea placeholder="How can we help?" rows={6} className="bg-transparent border border-stone-300 p-4 text-[11px] outline-none focus:border-stone-800 transition-colors resize-none" />
            </div>
            <div className="flex justify-center">
              <button className="bg-stone-800 text-white px-12 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-stone-700 transition-colors cursor-pointer">
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>

      {/* --- GOOGLE MAP SECTION --- */}
      <section className="w-full h-[500px] bg-stone-200">
        <iframe 
          title="Moon Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230407!2d72.75058034335938!3d21.15914250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715000000000" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default ContactPage;