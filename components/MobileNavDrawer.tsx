import Image from 'next/image'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from './ui/drawer'
import { X } from 'lucide-react'
import { navLinks } from '@/constants'
import Link from 'next/link'

type MobileNavDrawerProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const MobileNavDrawer = ({ isOpen, onOpenChange }: MobileNavDrawerProps) => {
  return (
    <Drawer open={isOpen} direction="right" onOpenChange={onOpenChange}>
      <DrawerContent className="ml-auto min-h-screen w-4/5 rounded-none">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle className="text-center">
            <Image
              width={150}
              height={80}
              src={'/assets/images/logo.svg'}
              alt="TravelCo"
            />
          </DrawerTitle>
          <DrawerClose>
            <X size={24} />
          </DrawerClose>
        </DrawerHeader>
        <ul className="mt-4 flex flex-col gap-4 p-4">
          {navLinks.map((link) => (
            <li key={link.label} className="flex h-full items-center">
              <Link
                className="flex items-center justify-center pb-1.5 text-lg text-gray-500 transition-all hover:font-bold"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileNavDrawer
