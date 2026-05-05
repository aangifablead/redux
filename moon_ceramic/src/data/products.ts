import h2Image from '../assets/h2.png';
import h3Image from '../assets/h3.png';
import h4Image from '../assets/h4.png';
import h5Image from '../assets/h5.png';
import h9Image from '../assets/h9.png';
import h10Image from '../assets/h10.png';
import h11Image from '../assets/h11.png';
import h12Image from '../assets/h12.png';
import h13Image from '../assets/h13.png';
import h14Image from '../assets/h14.png';
import h15Image from '../assets/h15.png';
import h16Image from '../assets/h16.png';

export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  desc: string;
}
export interface category {
  id: number;
  name: string;
  img: string;
}
export const categories: category[] = [
  { id: 1, name: "Tableware", img: h2Image },
  { id: 2, name: "Home Decor", img: h3Image },
  { id: 3, name: "Holiday", img: h4Image },
  { id: 4, name: "Collection", img: h5Image },
];
export const BEST_SELLERS: Product[] = [
  { id: 1, name: 'Small Ecru Ceramic Compote', price: 399, img: h9Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
  { id: 2, name: 'Warrick White Vase 14"', price: 699, img: h10Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
  { id: 3, name: 'Porcelain Dinner Plate', price: 499, img: h11Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
  { id: 4, name: 'Warrick White Vase 20', price: 899, img: h12Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
];

export const NEW_ARRIVALS: Product[] = [
  { id: 5, name: 'Porcelain Dinner Plate', price: 399, img: h13Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
  { id: 6, name: 'Ophelia Matte Natural Vase', price: 999, img: h14Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur.' },
  { id: 7, name: 'Porcelain Dinner Plate', price: 599, img: h15Image, desc: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.' },
  { id: 8, name: 'Luana Bowl', price: 449, img: h16Image, desc: 'Lorem ipsum dolor sit amet conse.' },
];

export const ALL_PRODUCTS = [...BEST_SELLERS, ...NEW_ARRIVALS];