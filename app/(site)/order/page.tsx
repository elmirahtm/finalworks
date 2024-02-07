import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

const Order = () => {
  return (
    <div>
          <div className="flex max-sm:block max-sm:-mt-20">
      <div className='bg-[url("/goy.jpg")] bg-no-repeat w-[40rem] h-[49rem]'>
        <Link href="/">
          <div className="flex text-white gap-4 ml-36 mt-20">
            <span>
              <FaArrowLeftLong className="mt-1" />
            </span>
            <p>Geri qayıt</p>
          </div>
        </Link>
        <div>
          <Image
            className="ml-24 mt-52"
            src="/service.png"
            alt="service"
            width={202}
            height={80}
          />
        </div>
      </div>

      <div className="bg-slate-200  w-[69rem] h-[49rem] max-sm:-mt-52 max-sm:pt-4">
        <div className="text-center mt-52 ml-44 pt-20  bg-white w-[32rem] h-[20rem] max-sm:ml-16">
          <span>
            <Image
              className="m-auto"
              src="/stroke.png"
              alt="stroke"
              width={73}
              height={73}
            />
          </span>
          <h1 className="font-bold text-2xl p-4">
            Sifarişiniz Yerinə Yetirildi!
          </h1>
          <p>Ən qısa zamanda sizinlə əlaqə saxlayacayıq.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Order