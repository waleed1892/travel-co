import Image from 'next/image'
import { Button } from './ui/button'

const GetApp = () => {
  return (
    <section className="flex w-full flex-col place-items-center pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="text-[40px] font-bold leading-[120%] lg:text-[64px] xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="text-base text-gray-100">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              size={'lg'}
              className="w-full gap-3 rounded-full bg-white text-green-500 hover:bg-white"
            >
              <Image
                src={'/assets/images/apple.svg'}
                alt="Download App"
                width={24}
                height={24}
              />
              Download App
            </Button>
            <Button
              size={'lg'}
              className="w-full gap-3 rounded-full border border-gray-200 bg-green-900 hover:bg-transparent"
            >
              <Image
                src={'/assets/images/android.svg'}
                alt="Download App"
                width={24}
                height={24}
              />
              Download App
            </Button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image
            src={'/assets/images/phones.png'}
            alt="phones"
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp
