import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderRoutes from "@/components/HeaderRoutes";
import MapItem from "@/components/MapItem";
import Link from "next/link";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbMapPin } from "react-icons/tb";

const Əlaqə = () => {
  return (
    <div>
      <Header />
      <HeaderRoutes />

      <div className='bg-[url("/temirimage.png")] bg-no-repeat w-full h-[23rem]'>
        <div>
          <h1 className="font-bold text-white text-2xl text-center pt-20">
            Əlaqə
          </h1>
          <div className="flex gap-1 text-white justify-center pt-3">
            <Link href="/">Əsas səhifə</Link>
            <p>/</p>
            <Link href={"/connect"}>Əlaqə</Link>
          </div>
        </div>
      </div>

      <div className='bg-[url("/bg.png")] w-full -mt-28 h-[79rem] mb-10 max-sm:h-[80rem]'>
        <div className="flex justify-center p-10  gap-14 max-sm:block">
          <div>
            <div className="bg-slate-100 w-72 p-2 pb-8 max-sm:mb-5 ">
              <div className="flex ml-4">
                <span className="mt-8">
                  <BsTelephone className="text-blue-600 max-sm:mt-10" />
                </span>
                <h1 className="text-2xl font-bold text-black p-6  max-sm:mt-10">
                  Telefon
                </h1>
              </div>

              <div className="flex ml-7 mb-2">
                <span>
                  <Link
                    href={"tel:+994 12 565-1-565"}
                    className="text-black ml-2"
                  >
                    (+994 12) 565-1-565
                  </Link>
                </span>
              </div>
              <div className="flex ml-7 mb-2">
                <span>
                  <Link
                    href={"tel:+994 12 565-2-565"}
                    className="text-black ml-2"
                  >
                    (+994 12) 565-2-565
                  </Link>
                </span>
              </div>

              <div className="flex ml-7 mb-2">
                <span>
                  <Link
                    href={"tel:+994 55 222-34-19"}
                    className="text-black ml-2"
                  >
                    (+994 55) 222-34-19
                  </Link>
                </span>
              </div>

              <div className="flex ml-7 ">
                <span>
                  <Link
                    href={"tel:+994 55 222-32-46 "}
                    className="text-black ml-2"
                  >
                    (+994 55) 222-32-46{" "}
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="block mt-3">
            <div className=" bg-slate-100 h-32 p-5">
              <div className="flex gap-3 ">
                <TbMapPin className=" mt-0.5 text-blue-600" />
                <h2 className=" text-2xl">Ünvan</h2>
              </div>
              <div>
                <span className=" m-5  ">
                  <Link
                    href={"https://maps.app.goo.gl/KWS67w3JSZ6xxFLh7"}
                    target="_blank"
                  >
                    Bakı ş., Şamaxı yolu 15-ci km.
                  </Link>
                </span>
              </div>
            </div>
            <div className="bg-slate-100 h-16 mt-6">
              <span className="flex  mt-3 gap-3 p-5">
                <span className="mt-1">
                  {" "}
                  <HiOutlineMail className=" text-sky-700" />{" "}
                </span>
                <span>
                  {" "}
                  <Link href={"mailto:"}>office@solitonservice.com</Link>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="max-sm:mt-40">
          <div className=" ">
            <h1 className=" text-center text-2xl p-4 font-bold mt-12">
              Servis Məntəqələrimiz
            </h1>
            <span className="">
              <MapItem />
            </span>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Əlaqə;
