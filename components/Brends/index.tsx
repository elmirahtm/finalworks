import Image from 'next/image'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Brends = () => {
  return (
    <div>
          <div className="container m-auto">
          <div className="mt-14">
            <div>
              <div>
                <h1 className=" text-center font-bold text-xl max-sm:w-72 max-sm:m-auto">
                  Bütün brendlərin məişət texnikasını təmir edirik
                </h1>
              </div>
            </div>

            <div>
              <span className="flex  justify-between gap-10 mt-10 max-sm:gap-2">
                <span className="mt-6 max-sm:mt-0">
                  <IoIosArrowBack />
                </span>

                <span>
                  <Image src="/beko.png" alt="beko" width={83} height={65} />
                </span>
                <span>
                  <Image
                    src="/blomberg.png"
                    alt="blomberg"
                    width={144}
                    height={65}
                  />
                </span>
                <span>
                  <Image
                    src="/grundig.png"
                    alt="grundig"
                    width={182}
                    height={65}
                  />
                </span>
                <span>
                  <Image src="/riffel.png" alt="riffel" width={126} height={65} />
                </span>
                <span className="mt-1.5 ">
                  <Image src="/lg.png" alt="lg" width={72} height={65} />
                </span>
                <span>
                  <Image
                    src="/samsung.png"
                    alt="samsung"
                    width={146}
                    height={65}
                  />
                </span>

                <span className=" mt-6 max-sm:mt-0">
                  <IoIosArrowForward />
                </span>
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Brends