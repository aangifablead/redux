import React, { Suspense } from 'react';
import { BEST_SELLERS, NEW_ARRIVALS } from '../data/products';

const Hero = React.lazy(() => import("../components/Hero"))
const Categories = React.lazy(() => import("../components/Categories"))
const HistorySection = React.lazy(() => import("../components/HistorySection"))
const ProductSection = React.lazy(() => import("../components/ProductGrid"))
const BlogSection = React.lazy(() => import("../components/BlogSection"))
const Newsletter = React.lazy(() => import("../components/Newsletter"))
const PromoSection = React.lazy(() => import("../components/PromoSection"))

const LandingPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading Chart...</div>}>
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
    </Suspense>
  );
};

export default LandingPage;