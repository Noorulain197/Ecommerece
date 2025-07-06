import Link from 'next/link'
import HeroSection from './components/HeroSection'
import ProductCard from './components/ProductCard'
import ProductSectionsPage from './products/page'

export default function HomePage() {
  const featuredProducts = [
    // ... your products array remains the same
  ]

  return (
    <>
  <HeroSection />
  <section className="py-6 sm:py-12 container mx-auto px-4">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary text-center">
      Featured Products
    </h2>

    <ProductSectionsPage />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {featuredProducts.map((item) => (
        <ProductCard key={item._id} {...item} />
      ))}
    </div>

    <div className="text-center mt-8 sm:mt-10">
      <Link
        href="/products"
        className="inline-block bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-indigo-700 text-sm sm:text-base"
      >
        Explore All Products
      </Link>
    </div>
  </section>
</>

  )
}