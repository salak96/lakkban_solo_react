import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
'Standar kendali mutu terdepan di industri',
  'Pengembangan produk yang inovatif',
  'Praktik manufaktur berkelanjutan',
  'Harga kompetitif',
  'Dukungan teknis ahli'
];

const testimonials = [
  {
    text: "Produk-produk Lakban Solo secara konsisten melampaui ekspektasi kami. Perhatian mereka terhadap kualitas tidak tertandingi.",
    author: "Budi Santoso",
    company: "PT KIKY"
  },
  {
    text: "Kualitas produk yang luar biasa. Layanan pelanggan yang ramah dan profesional.",
    author: "Joko Widodo",
    company: "Industrial Supplies Co."
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
        Mengapa Memilih Kami</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Komitmen Kami terhadap Keunggulan</h3>
            <div className="space-y-4">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">
            Apa Kata Klien Kami</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-600 italic mb-2">"{testimonial.text}"</p>
                  <p className="text-sm font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}