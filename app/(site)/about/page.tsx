import Aboutfirst from "@/components/Aboutfirst";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderRoutes from "@/components/HeaderRoutes";
import MapItem from "@/components/MapItem";
import Serviccenter from "@/components/Serviccenter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const Haqqımızda = () => {
  return (
    <div>
      <Header />
      <HeaderRoutes />

      <div className='bg-[url("/temirimage.png")] bg-no-repeat w-full h-[23rem]'>
        <div>
          <h1 className="font-bold text-white text-2xl text-center pt-20">
            Haqqımızda
          </h1>
          <div className="flex gap-1 text-white justify-center pt-3">
            <Link href="/">Əsas səhifə</Link>
            <p>/</p>
            <Link href={"/about"}>Haqqımızda</Link>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div className="container m-auto max-sm:ml-0 ">
              <div className="bg-white w-[1060px] h-[1150px] max-sm:h-[1222px] mb-20 -mt-10  m-auto shadow-xl p-5 max-sm:mb-20 max-sm:w-[30rem] max-lg:w-[30rem] max-xl:w-[1007px] max-sm:m-auto max-sm:pt-3">
                <span>
                  <div>
                    <Image
                      className="m-auto "
                      src="/ismaster.png"
                      alt="ismaster"
                      width={944}
                      height={489}
                    />
                    <Link href={"/"}>
                      <FaRegCirclePlay className="w-28 h-12 -mt-60  max-sm:-mt-32 m-auto max-lg:-mt-36 " />
                    </Link>
                  </div>
                </span>

                <div>
                  <Aboutfirst />
                </div>
              </div>
            </div>
            <div className="container  max-sm:ml-0  ">
              <div>
                <Serviccenter />
              </div>
            </div>

            <div className="max-sm:-mt-48 mb-20">
              <div className="bg-cyan-900 w-full h-[42rem] max-sm:h-[21rem]">
                <h1 className=" text-center text-2xl text-slate-50 p-4 ">
                  Servis Məntəqələrimiz
                </h1>
                <span>
                  <MapItem />
                </span>
              </div>
            </div>

            <div>
              <Link href={"tel:+994 12 565-1-565"}>
                {" "}
                <div className="bg-blue-600 text-slate-50 rounded-lg w-52 h-12 text-center m-auto pt-2 mt-7">
                  Əlaqə
                </div>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-48 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Haqqımızda;
