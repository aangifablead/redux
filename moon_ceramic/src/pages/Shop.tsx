import React, { useState, useMemo } from 'react';
import { SHOP } from '../data/products';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const ShopPage: React.FC = () => {
    const [sortBy, setSortBy] = useState('Name');

    // State for all filters
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);

    // Advanced Filter Logic
    const filteredProducts = useMemo(() => {
        let result = [...SHOP];

        // 1. Filter by Category
        if (selectedCategories.length > 0) {
            result = result.filter(product => selectedCategories.includes(product.category));
        }

        // 2. Filter by Price Range

        if (selectedPriceRange.length > 0) {
            result = result.filter(p => {
                // Check if the product matches ANY of the selected ranges
                return selectedPriceRange.some(range => {
                    if (range === "> ₹999") {
                        return p.price > 999;
                    } else {
                        const [min, max] = range
                            .replace(/[₹\s]/g, '')
                            .split('-')
                            .map(Number);
                        return p.price >= min && p.price <= max;
                    }
                });
            });
        }

        // 3. Filter by Color (Ensure your data has a 'color' hex property)
        if (selectedColor) {
            result = result.filter(product => product.color === selectedColor);
        }

        // 4. Sorting Logic
        if (sortBy === 'Price: Low to High') result.sort((a, b) => a.price - b.price);
        if (sortBy === 'Price: High to Low') result.sort((a, b) => b.price - a.price);
        if (sortBy === 'Name') result.sort((a, b) => a.name.localeCompare(b.name));

        return result;
    }, [selectedCategories, selectedPriceRange, selectedColor, sortBy]);

    return (
        <div className="bg-[#F9F8F6] pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <nav className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Home / Shop</nav>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400">
                            Showing {filteredProducts.length} items
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="text-[10px] uppercase font-bold tracking-widest">Sort by:</label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-transparent border-b border-stone-300 text-[10px] uppercase tracking-widest py-1 outline-none cursor-pointer"
                        >
                            <option>Name</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-12">
                    <aside className="w-64 hidden lg:block">
                        <FilterSidebar
                            selectedCategories={selectedCategories}
                            setSelectedCategories={setSelectedCategories}
                            selectedPriceRange={selectedPriceRange}
                            setSelectedPriceRange={setSelectedPriceRange}
                            selectedColor={selectedColor}
                            setSelectedColor={setSelectedColor}
                        />
                    </aside>

                    <main className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20 text-stone-400 uppercase tracking-widest text-xs">
                                No items match your filters.
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;