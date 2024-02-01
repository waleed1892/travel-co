import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mb-24 flex place-items-center">
      <div className="container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link className="mb-10" href={'/'}>
            <Image
              width={150}
              height={80}
              src={'/assets/images/logo.svg'}
              alt="TravelCo"
            />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="flex flex-col gap-4 text-sm text-gray-300">
                  {columns.links.map((link) => (
                    <li key={link}>
                      <Link href={'/'}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    className="flex gap-4 md:flex-col lg:flex-row"
                    href={'/'}
                    key={link.label}
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="whitespace-nowrap text-sm font-medium text-blue-700">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4 text-sm text-gray-300">
                  {SOCIALS.links.map((link) => (
                    <li key={link}>
                      <Link href={'/'}>
                        <Image src={link} width={24} height={24} alt="logo" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-200"></div>
        <p className="w-full text-center text-sm text-gray-300">
          {new Date().getFullYear()} Travel Co. | All rights reserved
        </p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  children: React.ReactNode
}
const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="whitespace-nowrap text-lg font-bold">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
