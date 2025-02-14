import React from 'react';
import { Shield, Timer, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About LAKBAN KHINKO</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Dengan pengalaman lebih dari dua dekade, kami telah memantapkan diri sebagai produsen terkemuka
          solusi perekat premium, melayani industri di seluruh dunia.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">
            Kami hanya menggunakan bahan terbaik untuk memastikan kualitas dan kinerja yang konsisten.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <Timer className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
            Waktu penyelesaian yang cepat dan pengiriman yang andal untuk memenuhi tenggat waktu Anda.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certified Products</h3>
            <p className="text-gray-600">
            Semua produk kami memenuhi standar kualitas dan sertifikasi internasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}