import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
           LAKBAN KHINKO PREMIUM
          </h1>
          <p className="text-lg text-gray-600 mb-8">
          Produk ini merupakan salah satu produk unggulan milik kami. Dibuat dengan teknik dan kualitas bahan yang baik. Produk ini dijual dengan harga cukup terjangkau, sehingga produk ini mampu bersaing di kalangan masyarakat Indonesia yang bersifat konsumtif.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 flex items-center">
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition duration-300">
              <a href='#products'>Detail Produk</a> 
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.kingco.co.id/wp-content/uploads/2023/03/SUSUN-UNTUK-KATALOG-PDF-1-1024x809.jpg"
            alt="Adhesive tape rolls"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}