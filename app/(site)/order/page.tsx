import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

const Order = () => {
  return (
    <div>
          <div className="flex">
      <div className='bg-[url("/goy.jpg")] bg-no-repeat w-[40rem] h-[44.2rem]'>
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

      <div className="bg-slate-200  w-[60rem] h-[44.2rem]">
        <div className="text-center mt-52 ml-44 pt-20  bg-white w-[32rem] h-[20rem] ">
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