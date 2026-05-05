const Newsletter = () => {
  return (
    <section className="py-24 bg-[#F9F8F6] text-center px-6">
      <span className="text-[10px] uppercase tracking-[0.1em] text-stone-500 mb-2 block">Sign up for emails</span>
      <h2 className="text-2xl font-serif text-stone-800 uppercase tracking-[0.2em] mb-10">
        For News, Collections & More
      </h2>
      <form className="max-w-md mx-auto flex flex-col items-center gap-6">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="w-full bg-transparent border-b border-stone-300 py-2 px-1 text-center text-sm outline-none focus:border-stone-800 transition"
          required
        />
        <button 
          type="submit"
          className="mt-4 border border-stone-800 px-10 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-stone-800 hover:text-white transition cursor-pointer"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Newsletter