import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import HistorySection from '../components/HistorySection';
import ProductSection from '../components/ProductGrid';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import PromoSection from '../components/PromoSection';
import { BEST_SELLERS, NEW_ARRIVALS } from '../data/products';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F6] pt-20">
      <Hero />
      <Categories />
      <PromoSection />
      <ProductSection title="Best Sellers" products={BEST_SELLERS} />
      <HistorySection />
      <ProductSection title="Discover New Arrivals" products={NEW_ARRIVALS} />
      <BlogSection />
      <Newsletter />
    </div>
  );
};

export default LandingPage;