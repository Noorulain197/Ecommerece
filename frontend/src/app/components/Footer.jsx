export default function Footer() {
  return (
    <footer className="bg-white text-center py-3 sm:py-4 shadow-inner mt-6 sm:mt-10 px-2">
  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
    All rights reserved by <span className="text-primary font-semibold">NoorTech</span> © {new Date().getFullYear()}
  </p>
</footer>

  )
}
