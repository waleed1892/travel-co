import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className="container z-30 flex items-center justify-between py-5">
      <Link href={'/'}>
        <Image
          width={150}
          height={80}
          src={'/assets/images/logo.svg'}
          alt="TravelCo"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {navLinks.map((link) => (
          <li key={link.label} className="flex h-full items-center">
            <Link
              className="flex items-center justify-center pb-1.5 text-base text-gray-500 transition-all hover:font-bold"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Button
          className="gap-3 rounded-full bg-green-900 text-white"
          size={'lg'}
        >
          <Image
            src={'/assets/images/user.svg'}
            height={24}
            width={24}
            alt="user"
          />
          Login
        </Button>
      </div>
      <Button
        variant={'ghost'}
        className="inline-block hover:bg-transparent lg:hidden"
      >
        <Image
          src={'/assets/images/menu.svg'}
          height={32}
          width={32}
          alt="menu"
        />
      </Button>
    </nav>
  )
}

export default Navbar
