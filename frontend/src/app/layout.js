import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Providers from './providers'          // ⬅️ client-only wrapper
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'NoorCommerce',
  description: 'A modern ecommerce platform by Noor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Providers>
          <Navbar />
          <Banner />

          {/* 👉 flex‑col on mobile, row after md */}
          <div className="container mx-auto px-4 pt-4 flex flex-col md:flex-row gap-6">
            {/* Sidebar — stays hidden on mobile, pops in on md */}
            <aside className="hidden md:block w-64 p-4 bg-white rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-3 text-base text-gray-700">
                {[
                  'Clothing',
                  'Electronics',
                  'Home Appliances',
                  'Books',
                  'Beauty & Health',
                  'Toys & Games',
                ].map((item) => (
                  <li key={item} className="hover:text-primary cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/admin">
                <Button
                  type="submit"
                  className="w-[70px] bg-primary hover:bg-indigo-700 mt-10"
                >
                  Admin
                </Button>
              </Link>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-h-screen">{children}</main>
          </div>

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
