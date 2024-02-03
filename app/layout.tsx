import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TravelCo - Travel the world with ease',
  description:
    'TravelCo is a travel app that helps you plan your trips with ease',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
