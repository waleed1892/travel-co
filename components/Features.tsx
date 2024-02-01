import { FEATURES } from '@/constants'
import Image from 'next/image'

const Features = () => {
  return (
    <section className="flex flex-col place-items-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="container relative flex w-full justify-end">
        <div className="flex min-h-[900px] flex-1">
          <Image
            src={'/assets/images/phone.png'}
            width={440}
            height={1000}
            className="feature-phone"
            alt="phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-3/5">
          <div className="relative">
            <Image
              alt="camp"
              width={50}
              height={50}
              src={'/assets/images/camp.svg'}
              className="absolute -left-[5px] -top-[28px] w-10 lg:w-[50px]"
            />
            <h2 className="text-[40px] font-bold leading-[120%] lg:text-[64px]">
              Our Features
            </h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItemProps = {
  title: string
  icon: string
  description: string
}
const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full bg-green-500 p-4 lg:p-7">
        <Image src={icon} width={28} height={28} alt="map" />
      </div>
      <h2 className="mt-5 text-xl font-bold capitalize lg:text-[32px] lg:leading-[120%]">
        {title}
      </h2>
      <p className="mt-5 bg-white/80 text-gray-300 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features
