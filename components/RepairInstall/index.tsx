import Card from "../Card";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card2 from "../Card2";

const RepairInstall = () => {
  return (
    <div>
      <div className='bg-[url("/bg.png")] bg-no-repeat w-full h-[65rem] mb-10 max-sm:h-[180rem] max-lg:h-[120rem] max-xl:h-[120rem] '>
        <div className="container m-auto">
          <div>
            <div className="">
              {/* <p className=" bg-red-600  w-16 h-2  "></p> */}
              <h5 className=" pt-12  mb-8 relative text-center text-2xl font-bold ">
                Təmir
              </h5>
              {/* <p className="  bg-red-600  w-16 h-2 absolute right-96 -mt-12  mr-56 "></p> */}
            </div>

            <div className="">
              <span className=" flex justify-evenly items-center gap-10 flex-wrap ">
                {/* <span className=" max-sm:m-auto max-lg:m-auto max-xl:m-auto">
                  <IoIosArrowBack />
                </span> */}
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

                {/* <span className=" max-sm:m-auto max-lg:m-auto max-xl:m-auto">
                  <IoIosArrowForward className="mb-6" />
                </span> */}
              </span>
            </div>
          </div>

          <div>
            <h5 className=" pt-12  mb-8 relative text-center text-2xl font-bold ">
              Quraşdırılma
            </h5>

            <span className=" flex justify-evenly items-center gap-10 flex-wrap ">
              {/* <span className=" max-sm:m-auto max-lg:m-auto max-xl:m-auto">
                <IoIosArrowBack className="mt-5" />
              </span> */}
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

              {/* <span className="max-sm:m-auto max-lg:m-auto max-xl:m-auto ">
                <IoIosArrowForward />
              </span> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairInstall;
