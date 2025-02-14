import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const products = [
  {
    name: 'Lakban Pita Pengemasan',
    image: 'https://www.kingco.co.id/wp-content/uploads/2023/03/Untitled-1-scaled.jpg',
    description: 'lakban pita pengemasan berkualitas tinggi.',
    features: ['Daya rekat kuat', 'Jelas', 'Tahan cuaca']
  },
  {
    name: 'Selotip',
    image: 'https://www.kingco.co.id/wp-content/uploads/2023/03/48-MM-X-90-YARD-CORE-BIRU-1-scaled.jpg',
    description: 'Selotip kelas profesional untuk melukis dan mendekorasi.',
    features: ['Penghapusan bersih', 'Tidak ada residu', 'Tepi sempurna']
  },
  {
    name: 'Double Tape',
    image: 'https://www.kingco.co.id/wp-content/uploads/2023/03/double-tape-48mm-scaled.jpg',
    description: 'Perekat dua sisi yang kuat untuk pemasangan dan pengikatan.',
    features: ['Sangat kuat', 'Penggunaan serbaguna', 'Dalam/Luar Ruangan']
  }
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">GALERI Lakban TAPE</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}