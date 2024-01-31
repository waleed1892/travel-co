import { PEOPLE_IMAGE_URL } from '@/constants'
import Image from 'next/image'

type CampSiteProps = {
  title: string
  subtitle: string
  peopleJoined: number
  backgroundImageClassname: string
}
const CampSite = ({
  title,
  subtitle,
  peopleJoined,
  backgroundImageClassname,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ${backgroundImageClassname}`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-green-500 p-4">
            <Image
              src={'/assets/images/folded-map.svg'}
              width={28}
              height={28}
              alt="map"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-bold text-white">{title}</h4>
            <p className="text-sm text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_IMAGE_URL.map((url, i) => (
              <Image
                key={i}
                src={url}
                width={10}
                height={10}
                alt="people"
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="text-base font-bold text-white md:text-xl">
            {peopleJoined}+ Joined
          </p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="relative flex flex-col py-10 2xl:container lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          title="Camping"
          subtitle="Camping in the wild"
          peopleJoined={198}
          backgroundImageClassname="bg-bg-img-1"
        />
        <CampSite
          title="Hiking"
          subtitle="Hiking in the wild"
          peopleJoined={198}
          backgroundImageClassname="bg-bg-img-2"
        />
      </div>

      <div className="mt-10 flex items-end justify-end px-6 lg:-mt-60 lg:mr-6">
        <div className="relative w-full overflow-hidden rounded-3xl bg-green-500 p-8 lg:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20">
          <h2 className="text-2xl capitalize text-white md:text-[32px] 2xl:text-[64px] 2xl:leading-[120%]">
            <strong>Find your next</strong> adventure
          </h2>
          <p className="mt-5 text-sm text-white xl:text-base">
            Starting from a small group of friends, we are now a community of
            500 people who love to travel and explore the world. We are a group
            of people who love to travel and explore the world.
          </p>
          <Image
            width={186}
            height={219}
            className="camp-quote"
            src={'/assets/images/quote.svg'}
            alt="camp quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp
