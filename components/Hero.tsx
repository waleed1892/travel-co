import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src={'/assets/images/camp.svg'}
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="text-[52px] font-bold leading-[120%] lg:text-[88px]">
          Travel the world with us
        </h1>
        <p className="text-base text-gray-300 xl:max-w-[520px]">
          We provide bundle of services to make your trip enjoyable and
          memorable.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src={'/assets/images/star.svg'}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className="text-base font-bold text-blue-700 lg:text-xl">
            198k
            <span className="ml-1 text-base font-normal lg:text-xl">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Button
            size={'lg'}
            className="rounded-full border-green-50 bg-green-50"
          >
            Download App
          </Button>
          <Button
            size={'lg'}
            className="gap-3 hover:bg-transparent"
            variant={'ghost'}
          >
            <Image
              src={'/assets/images/play.svg'}
              width={24}
              height={24}
              alt="play"
            />
            How we work?
          </Button>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-900 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="text-base text-gray-200">Location</p>
              <Image
                src={'/assets/images/close.svg'}
                width={24}
                height={24}
                alt="close"
              />
            </div>
            <p className="text-xl font-bold text-white">London, UK</p>

            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="block text-base text-gray-200">Distance</p>
                <p className="text-xl font-bold text-white">173.28 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="block text-base text-gray-200">Elevation</p>
                <p className="text-xl font-bold text-white">2.040 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
