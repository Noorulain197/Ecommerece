 'use client'

import Link from 'next/link'
import ProductCard from '../components/ProductCard'

const sections = [
  {
    name: 'Jewelry',
    tag: 'jewelry',
    products: [
      { _id: 'j1', title: 'Diamond Necklace', price: 499.99, image: '/j4.png' },
      { _id: 'j2', title: 'Gold Ring', price: 199.99, image: '/j5.png' },
      { _id: 'j3', title: 'Pearl Earrings', price: 149.99, image: '/j6.png' },
      { _id: 'j4', title: 'Silver Bracelet', price: 99.99, image: '/j1.png' },
      { _id: 'j5', title: 'Anklet', price: 79.99, image: '/j2.png' },
      { _id: 'j6', title: 'Choker Set', price: 299.99, image: '/j3.png' },
    ],
  },
  {
    name: 'Men',
    tag: 'men',
    products: [
      { _id: 'm1', title: 'Men Shirt', price: 29.99, image: '/m1.png' },
      { _id: 'm2', title: 'Men Watch', price: 89.99, image: '/m2.png' },
      { _id: 'm3', title: 'Leather Wallet', price: 39.99, image: '/m3.png' },
      { _id: 'm4', title: 'Sunglasses', price: 59.99, image: '/m4.png' },
      { _id: 'm5', title: 'Shoes', price: 99.99, image: '/m5.png' },
      { _id: 'm6', title: 'Belt', price: 24.99, image: '/m6.png' },
    ],
  },
  {
    name: 'Women',
    tag: 'women',
    products: [
      { _id: 'w1', title: 'Kurti', price: 35.99, image: '/w1.png' },
      { _id: 'w2', title: 'Handbag', price: 89.99, image: '/w2.png' },
      { _id: 'w3', title: 'Makeup Kit', price: 59.99, image: '/w3.png' },
      { _id: 'w4', title: 'Stilettos', price: 79.99, image: '/w4.png' },
      { _id: 'w5', title: 'Hijab Set', price: 39.99, image: '/w5.png' },
      { _id: 'w6', title: 'Jewelry Box', price: 49.99, image: '/w6.png' },
    ],
  },
  {
    name: 'All Products',
    tag: 'all',
    products: [
      { _id: 'a1', title: 'Organic Lotion', price: 19.99, image: '/p1.png' },
      { _id: 'a2', title: 'Aroma Oil', price: 12.99, image: '/p2.png' },
      { _id: 'a3', title: 'Face Mask', price: 14.99, image: '/p3.png' },
      { _id: 'a4', title: 'Hair Serum', price: 22.99, image: '/p4.png' },
      { _id: 'a5', title: 'Lip Balm', price: 5.99, image: '/p5.png' },
      { _id: 'a6', title: 'Nail Polish', price: 6.99, image: '/p1.png' },
    ],
  },
]

export default function ProductSectionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {sections.map((section) => (
        <section key={section.tag} className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            {section.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {section.products.map((product) => (
              <Link key={product._id} href={`/app/product/${product._id}`}>
                <ProductCard {...product} />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}