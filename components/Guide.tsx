import Image from 'next/image'

const Guide = () => {
  return (
    <section className="flex flex-col place-items-center">
      <div className="container w-full pb-24">
        <Image
          src={'/assets/images/camp.svg'}
          width={50}
          height={50}
          alt="camp"
        />
        <p className="-mt-1 mb-3 text-lg uppercase text-green-500">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="text-[40px] font-bold leading-[120%] lg:text-[64px] xl:max-w-[420px]">
            Guide for your next trip
          </h2>
          <p className="text-base text-gray-300 xl:max-w-[520px]">
            Only with Travel Co. you can get the best experience for your next
            trip and we will guide you to the right path. We will give you the
            best experience for your next trip and we will guide you to the
            right path.
          </p>
        </div>
      </div>

      <div className="container relative flex w-full place-items-center">
        <Image
          src={'/assets/images/boat.png'}
          width={1440}
          height={580}
          alt="boat"
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex gap-3 rounded-3xl border bg-white py-8 pl-5 pr-7 shadow-md md:left-[5%] lg:top-20">
          <Image
            src={'/assets/images/meter.svg'}
            width={16}
            height={158}
            className="h-full w-auto"
            alt="meter"
          />
          <div className="flex flex-col justify-between">
            <div className="flex w-full flex-col">
              <div className="flex w-full justify-between">
                <p className="text-base text-gray-200">Destintation</p>
                <p className="font-bold text-green-500">48 min</p>
              </div>
              <p className="mt-2 text-xl font-bold">London, UK</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="text-base text-gray-200">Start track</p>
              <h4 className="mt-2 whitespace-nowrap text-xl font-bold">
                London, UK
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
