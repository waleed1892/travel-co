import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="container z-30 flex justify-between py-5">
      <Link href={'/'}>
        <Image width={150} height={80} src={'/logo.svg'} alt="TravelCo" />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {navLinks.map((link) => (
          <li key={link.name} className="flex h-full items-center">
            <Link
              className="flex items-center justify-center pb-1.5 text-base text-gray-500 transition-all hover:font-bold"
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
