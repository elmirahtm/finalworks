import React from 'react'
import AccordionUsage from '../Accordeon'
import Image from 'next/image'

const QuickQuestion = () => {
  return (
    <div>
        <div>
          {/* <div className="bg-[url('/bg.png')] bg-no-repeat w-full h-[45rem] mt-8 mb-10 max-sm:mb-96"> */}
          <div className="container m-auto max-sm:ml-3">
            <div className="flex justify-center items-center gap-32 mb-40  max-sm:block max-sm:p-5 ">
              <div>
                <span>
                  <Image
                    className=" relative mt-10 "
                    src="/usta7.png"
                    alt="usta7"
                    width={345}
                    height={379}
                  />
                  <Image
                    className=" absolute ml-20 -mt-60 "
                    src="/usta8.png"
                    alt="usta8"
                    width={295}
                    height={323}
                  />
                </span>
              </div>

              <div className="w-[49%]">
                <div className="">
                  <div>
                    <h1 className="font-bold text-3xl mb-5 mt-10  max-sm:pt-28 max-sm:w-[15rem]">
                      Tez-tez verilən suallar
                    </h1>
                  </div>
                  <div>
                    <AccordionUsage />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
    </div>
  )
}

export default QuickQuestion