import h6Image from '../assets/h6.png';
import h7Image from '../assets/h7.png';

const HistorySection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-20 flex flex-col justify-center items-center text-center bg-white order-1">
                <h2 className="text-xl font-serif uppercase tracking-[0.2em] mb-4 text-stone-800">Made in Viet Nam Since 1450</h2>
                <p className="text-xs text-stone-500 max-w-sm mb-6 leading-loose">Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus.</p>
                <button className="border-b border-stone-800 pb-1 text-[10px] uppercase font-bold tracking-widest cursor-pointer">Learn More</button>
            </div>
            <div className="h-[500px] order-2 overflow-hidden">
                <img src={h6Image} className="w-full h-full object-cover" />
            </div>
            <div className="h-[500px] order-4 md:order-3 overflow-hidden">
                <img src={h7Image} className="w-full h-full object-cover" />
            </div>
            <div className="p-20 flex flex-col justify-center items-center text-center bg-white order-3 md:order-4">
                <h2 className="text-xl font-serif uppercase tracking-[0.2em] mb-4 text-stone-800">Our History</h2>
                <p className="text-xs text-stone-500 max-w-sm mb-6 leading-loose">Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus.</p>
                <button className="border-b border-stone-800 pb-1 text-[10px] uppercase font-bold tracking-widest cursor-pointer">Learn More</button>
            </div>
        </section>
    );
};
export default HistorySection