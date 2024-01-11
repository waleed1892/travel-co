import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className='container flex justify-between z-30 py-5'>
      <Link href={"/"}>
        <Image width={150} height={80} src={"/logo.svg"} alt='TravelCo' />
      </Link>
      <ul className='hidden lg:flex h-full gap-12'>
        {navLinks.map((link) => (
          <li key={link.name} className='flex items-center h-full'>
            <Link
              className='text-base text-gray-500 flex items-center justify-center pb-1.5 transition-all hover:font-bold'
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
