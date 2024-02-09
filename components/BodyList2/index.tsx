import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Card from "../Card";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Card2 from "../Card2";

const BodyList2 = () => {
  return (
    <div>
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
              <span className="flex  justify-between gap-10 mt-10">
                <span className="mt-6 max-sm:-mt-6">
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

                <span className=" mt-6 max-sm:-mt-6">
                  <IoIosArrowForward />
                </span>
              </span>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className='bg-[url("/bg.png")] bg-no-repeat w-full h-[65rem] mb-10 max-sm:h-[180rem]'>
          <div className="container m-auto">
            <div>
              <div className="">
                {/* <p className=" bg-red-600  w-16 h-2  "></p> */}
                <h5 className="pt-12  mb-8 relative text-center text-2xl font-bold ">

                  Təmir
                </h5>
                {/* <p className="  bg-red-600  w-16 h-2 absolute right-96 -mt-12  mr-56 "></p> */}
              </div>

              <div className="">
                <span className=" flex justify-between items-center gap-10 flex-wrap ">
                  <span className=" max-sm:-mt-6">
                    <IoIosArrowBack />
                  </span>
                  <div>
                    <Card />
                    <div>
                      <Link
                        className=" flex  justify-center items-center mt-10 m-auto border-2 rounded-md border-sky-700 w-40 h-10 p-1  text-sky-700"
                        href={"/cards"}
                      >
                        Hamisina bax <FaArrowRight className="pl-1" />
                      </Link>
                    </div>
                  </div>

                  <span className=" max-sm:-mt-6">
                    <IoIosArrowForward className="mb-6" />
                  </span>
                </span>
              </div>
            </div>

            <div>
              <h5 className="pt-12  mb-8 relative text-center text-2xl font-bold ">

                Quraşdırılma
              </h5>

              <span className=" flex justify-between items-center gap-10 flex-wrap ">
                <span className=" max-sm:-mt-6">
                  <IoIosArrowBack className="mt-5" />
                </span>
                <div>
                  <Card2 />
                  <div>
                    <Link
                      className=" flex  justify-center items-center mt-10 m-auto border-2 rounded-md border-sky-700 w-40 h-10 p-1  text-sky-700"
                      href={"/cards"}
                    >
                      Hamisina bax <FaArrowRight className="pl-1" />
                    </Link>
                  </div>
                </div>

                <span className=" max-sm:-mt-6">
                  <IoIosArrowForward />
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="container m-auto">
          <div className="flex justify-center m-6 gap-28  mt-7 mb-14   max-sm:gap-8  ">
            <span>
              <Image
                className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
                src="/beko.png"
                alt="beko"
                width={83}
                height={65}
              />
            </span>
            <span>
              <Image
                className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
                src="/blomberg.png"
                alt="blomberg"
                width={144}
                height={65}
              />
            </span>
            <span>
              <Image
                className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
                src="/grundig.png"
                alt="grundig"
                width={182}
                height={65}
              />
            </span>
            <span>
              <Image
                className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
                src="/riffel.png"
                alt="riffel"
                width={126}
                height={65}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyList2;
