import React from 'react';

interface FilterSidebarProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedPriceRange: string[];
  setSelectedPriceRange: React.Dispatch<React.SetStateAction<string[]>>;
  selectedColor: string | null;
  setSelectedColor: (color: string | null) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategories,
  setSelectedCategories,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedColor,
  setSelectedColor
}) => {
  const colors = ["#FFFFFF", "#D9B8A9", "#E1E8E1", "#A55D5D", "#9EA7B1"];

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };
  const handlePriceToggle = (range: string) => {
    setSelectedPriceRange(prev =>
      prev.includes(range) ? prev.filter(c => c !== range) : [...prev, range]
    );
  }

  return (
    <div className="sticky top-28">
      {/* Category Section */}
      <div className="mb-10">
        <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] mb-6 border-b border-stone-200 pb-2">Category</h3>
        <div className="space-y-3">
          {["Dinnerware", "Ceramic", "Furniture", "Decor Art", "Gifts sets"].map(cat => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryToggle(cat)}
                className="w-4 h-4 border-stone-300 rounded-none accent-stone-800"
              />
              <span className="text-[11px] uppercase tracking-widest text-stone-500 group-hover:text-stone-900 transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Section */}
      <div className="mb-10">
        <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] mb-6 border-b border-stone-200 pb-2">Price Range</h3>
        <div className="space-y-3">
          {["₹0 - ₹199", "₹199 - ₹399", "₹399 - ₹799", "₹799 - ₹999", "> ₹999"].map(range => (
            <label key={range} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="price"
                checked={selectedPriceRange.includes(range)}
                onChange={() => handlePriceToggle(range)}
                className="w-4 h-4 accent-stone-800"
              />
              <span className="text-[11px] uppercase tracking-widest text-stone-500 group-hover:text-stone-900">
                {range}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-10">
        <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] mb-6 border-b border-stone-200 pb-2">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(selectedColor === color ? null : color)}
              style={{ backgroundColor: color }}
              className={`w-6 h-6 border transition-all cursor-pointer ${selectedColor === color ? 'border-stone-800 scale-125 z-10' : 'border-stone-200 hover:scale-110'
                }`}
              title={color}
            />
          ))}
        </div>
        {selectedColor && (
          <button onClick={() => setSelectedColor(null)} className="text-[9px] uppercase underline text-stone-400 mt-4 block">
            Clear Color
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;