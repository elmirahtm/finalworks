import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { TbMapPin } from "react-icons/tb";

const Footer = () => {
  return (
    <div>
      <div className=" mb-4  bg-slate-50 -mt-52 ">
        <div className="container m-auto">
          <div
            className="flex justify-evenly items-center -mt-32 m-auto max-sm:flex-wrap max-sm:text-center p-8 
        max-sm:mt-40
        "
          >
            <div>
              <span>
                <Image src="/logo.png" alt="logo" width={174} height={60} />
              </span>
              <div className="mt-5">
                <p className="w-[15rem]">
                  "Lider Service" təcrübəli mütəxəssislər və konsultantlar
                  komandasıdır
                </p>
              </div>
              <div className="flex gap-6 mt-4 max-sm:ml-10">
                <span className="border-2 border-blue-600 rounded-lg  w-9 h-7">
                  <Link href={"https://www.facebook.com/"} target="_blank">
                    <CgFacebook className="m-auto mt-1" />
                  </Link>
                </span>
                <span className="border-2 border-blue-600 rounded-lg  w-9 h-7">
                  <Link href={"https://www.instagram.com/"} target="_blank">
                    <FaInstagram className="m-auto mt-1" />
                  </Link>
                </span>
                <span className="border-2 border-blue-600 rounded-lg  w-9 h-7">
                  <Link href={"https://web.whatsapp.com/"} target="_blank">
                    <FaWhatsapp className="m-auto mt-1" />
                  </Link>
                </span>
              </div>
            </div>

            <div>
              <div className="max-sm:mt-10">
                <h1 className="mb-4 ml text-2xl font-bold max-sm:-ml-5 ">
                  Saytın xəritəsi
                </h1>
              </div>
              <div className="flex gap-8">
                <div className="">
                  <Link href={"/"}>
                    {" "}
                    <span className="flex gap-2 mb-4">
                      <FaAnglesRight className="mt-1 text-blue-500" />
                      <h3>Əsas səhifə </h3>
                    </span>
                  </Link>
                  <Link href={"/repair"}>
                    {" "}
                    <span className="flex gap-2 mb-4">
                      <FaAnglesRight className="mt-1  text-blue-500" />
                      <h3>Təmir </h3>
                    </span>
                  </Link>
                  <Link href={"/install"}>
                    {" "}
                    <span className="flex gap-2 mb-4">
                      <FaAnglesRight className="mt-1  text-blue-500" />
                      <h3>Quraşdırma </h3>
                    </span>
                  </Link>
                  <Link href={"/masterorder"}>
                    {" "}
                    <span className="flex gap-2">
                      <FaAnglesRight className="mt-1  text-blue-500" />
                      <h3>Usta sifarişi </h3>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link href={"/delivery"}>
                    {" "}
                    <span className="flex gap-2 mb-4">
                      <FaAnglesRight className="mt-1  text-blue-500" />
                      <h3>Çatdırılma </h3>
                    </span>
                  </Link>
                  <Link href={"/reference"}>
                    {" "}
                    <span className="flex gap-2 mb-4">
                      <FaAnglesRight className="mt-1  text-blue-500" />
                      <h3>Zəmanət </h3>
                    </span>
                  </Link>
                  <Link href={"/about"}>
                    {" "}
                    <span className="flex gap-2 mb-4">
                      <FaAnglesRight className="mt-1  text-blue-500" />
                      <h3>Haqqımızda </h3>
                    </span>
                  </Link>
                  <Link href={"/connect"}>
                    {" "}
                    <span className="flex gap-2">
                      <FaAnglesRight className="mt-1  text-blue-500" />
                      <h3>Əlaqə </h3>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center  text-sky-700 gap-14">
              <div>
                <div>
                  <div>
                    <h1 className="text-2xl font-bold text-black p-6 -mt-16 max-sm:mt-10">
                      Əlaqə
                    </h1>
                  </div>
                  <div className="flex">
                    <span>
                      {" "}
                      <BsTelephone />
                    </span>
                    <span>
                    <Link href={"tel:+994 12 565-1-565"} className="text-black ml-2">(+994 12) 565-1-565
                  </Link>
                    </span>
                  </div>
                  <div className="flex">
                    <span>
                      <BsTelephone />
                    </span>
                    <span>
                    <Link href={"tel:+994 12 565-2-565"} className="text-black ml-2">(+994 12) 565-2-565
                  </Link>
                    </span>
                  </div>

                  <div className="flex">
                    <span>
                      <BsTelephone />
                    </span>
                    <span>
                    <Link href={"tel:+994 55 222-34-19"} className="text-black ml-2">(+994 55) 222-34-19
                  </Link>
                    </span>
                  </div>

                  <div className="flex">
                    <span>
                      <BsTelephone />
                    </span>
                    <span>
                    <Link href={"tel:+994 55 222-32-46 "} className="text-black ml-2">(+994 55) 222-32-46  </Link>

                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="flex m-5 gap-3 ">
                <TbMapPin className=" text-sky-700 mt-0.5" />
                <Link href={"https://maps.app.goo.gl/KWS67w3JSZ6xxFLh7"} target="_blank">Bakı ş., Şamaxı yolu 15-ci km.</Link>
              </span>
              <div>
                <span className="flex ml-5 mt-3 gap-3">
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

          <div className="border w-[1300px] m-auto mt-6 "></div>
          <div className="flex justify-between mt-3 max-sm:gap-14">
            <div className="ml-24">
              <p> © Lider Service - 2022. Müəllif hüquqları qorunur.</p>
            </div>
            <div className="mr-24">
              <p>Sayt Jedai tərəfindən yaradılmışdır.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
