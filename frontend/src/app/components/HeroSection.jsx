export default function HeroSection() {
  return (
   <section className="py-10 sm:py-16 text-center px-4">
  <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">
    Welcome to NoorCommerce
  </h2>
  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
    Shop the latest products with ease & confidence.
  </p>
  <a
    href="/products"
    className="inline-block bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 text-sm sm:text-base"
  >
    Explore Products
  </a>
</section>

  )
}
