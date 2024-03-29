import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Brends2 = () => {
  return (
    <div>
         <div className="container m-auto">
          <div className="flex justify-center m-6 gap-48  mt-7 mb-14   max-sm:gap-8 max-sm:mt-28 max-sm:w-80 max-lg:gap-8 max-lg:mt-28 m  ">
            <span>
            <Link href={"https://www.beko.com/az-az"} target='_blank'>
              <Image
                className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
                src="/beko.png"
                alt="beko"
                width={83}
                height={65}
              /></Link>
            </span>
            <span>
            <Link href={"https://www.soliton.az/en/meiset-texnikasi/paltaryuyan-masinlar/blomberg"} target='_blank'> 
              <Image
                className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
                src="/blomberg.png"
                alt="blomberg"
                width={144}
                height={65}
              /></Link>
            </span>
            <span>
            <Link href={"https://www.soliton.az/az/tv-ve-audio/televizorlar/grundig"} target='_blank'> 
              <Image
                className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
                src="/grundig.png"
                alt="grundig"
                width={182}
                height={65}
              /></Link>
            </span>
            <span>
            <Link href={"https://riffel.az/az"} target='_blank'> 
              <Image
                className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
                src="/riffel.png"
                alt="riffel"
                width={126}
                height={65}
              /></Link>
            </span>
          </div>
        </div>
    </div>
  )
}

export default Brends2