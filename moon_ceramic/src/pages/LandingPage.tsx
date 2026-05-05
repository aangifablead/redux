import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import HistorySection from '../components/HistorySection';
import ProductSection from '../components/ProductGrid';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import PromoSection from '../components/PromoSection';

//images
import h9Image from '../assets/h9.png';
import h10Image from '../assets/h10.png';
import h11Image from '../assets/h11.png';
import h12Image from '../assets/h12.png';
import h13Image from '../assets/h13.png';
import h14Image from '../assets/h14.png';
import h15Image from '../assets/h15.png';
import h16Image from '../assets/h16.png';

const LandingPage: React.FC = () => {
  const bestSellers = [
    { id: 1, name: 'Small Ecru Ceramic Compote', price: 399, img: h9Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
    { id: 2, name: 'Warrick White Vase 14"', price: 699, img: h10Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
    { id: 3, name: 'Porcelain Dinner Plate', price: 499, img: h11Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
    { id: 4, name: 'Warrick White Vase 20', price: 899, img: h12Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
  ];

  const newArrivals = [
    { id: 5, name: 'Porcelain Dinner Plate', price: 399, img: h13Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
    { id: 6, name: 'Ophelia Matte Natural Vase', price: 999, img: h14Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur.' },
    { id: 7, name: 'Porcelain Dinner Plate', price: 599, img: h15Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
    { id: 8, name: 'Luana Bowl', price: 449, img: h16Image, desc: 'Lorem ipsum dolor sit amet conse.' },
  ];
  return (
    <div className="bg-[#F9F8F6] pt-20">
      <Hero />
      <Categories />
      <PromoSection />
      <ProductSection title="Best Sellers" products={bestSellers} />
      <HistorySection />
      {/* Reusable ProductSection for New Arrivals */}
      <ProductSection title="Discover New Arrivals" products={newArrivals} />
      <BlogSection />
      <Newsletter />
    </div>
  );
};

export default LandingPage;