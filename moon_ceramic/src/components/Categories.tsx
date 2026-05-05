import { categories } from "../data/products";

const Categories = () => (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
            <div key={cat.id} className="text-center group cursor-pointer">
                <div className="aspect-square bg-stone-200 mb-4 overflow-hidden">
                    <img 
                      src={cat.img} 
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-700">
                  {cat.name}
                </h3>
            </div>
        ))}
    </section>
);

export default Categories;