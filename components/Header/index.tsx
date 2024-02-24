"use client";
import Image from "next/image";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

import {  BsTelephone } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className=" bg-gray-800 text-cyan-50 p-4">
        <div className="container m-auto">
          <div className="flex justify-evenly  max-sm:flex-wrap max-sm:flex-col  ">
            <div className="flex gap-14  max-sm:justify-center max-sm:m-auto max-sm:mb-4">
              <h4>Servis məntəqələrimiz</h4>
              <h4>Tez-tez verilən suallar</h4>
            </div>

            <div className="flex gap-7 max-sm:justify-center max-sm:gap-5 ">
              <div className="flex gap-3">
                <span className="mt-1">
                  <HiOutlineMail />
                </span>
                <Link href={"mailto:"}>office@solitonservice.com</Link>
              </div>

              <div className="w-6 max-sm:w-1">
                <Image src="/Line.png" alt="line" width={1} height={0.5} />
              </div>

              <div className="flex gap-6 mt-1 max-sm:gap-2 ">
                <span>
                  <Link href={"https://www.facebook.com/"} target="_blank">
                    <CgFacebook />
                  </Link>
                </span>
                <span>
                  <Link href={"https://www.instagram.com/"} target="_blank">
                    <FaInstagram />
                  </Link>
                </span>
                <span>
                  <Link href={"https://web.whatsapp.com/"} target="_blank">
                    <FaWhatsapp />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 max-sm:py-4">
        <div className="container m-auto">
          <div className="flex justify-evenly items-center max-sm:flex-wrap max-sm:text-center max-sm:justify-center ">
            <div>
              <Link href={"/"}>
                <span>
                  <Image src="/logo.png" alt="logo" width={174} height={60} />
                </span>
              </Link>
            </div>

            <div className="flex justify-center  text-sky-700 gap-14 max-sm:mt-4">
              <div>
                <div className="flex ">
                  <span>
                    <BsTelephone />
                  </span>
                  <Link
                    href={"tel:+994 12 565-1-565"}
                    className="text-black ml-2"
                  >
                    (+994 12) 565-1-565
                  </Link>
                </div>
                <div className="flex">
                  <span>
                    <BsTelephone />
                  </span>
                  <Link
                    href={"tel:+994 12 565-2-565"}
                    className="text-black ml-2"
                  >
                    (+994 12) 565-2-565
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex">
                  <span>
                    <BsTelephone />
                  </span>
                  <Link
                    href={"tel:+994 55 222-34-19"}
                    className="text-black ml-2"
                  >
                    (+994 55) 222-34-19
                  </Link>
                </div>
                <div className="flex">
                  <span>
                    <BsTelephone />
                  </span>
                  <Link
                    href={"tel:+994 55 222-32-46 "}
                    className="text-black ml-2"
                  >
                    (+994 55) 222-32-46{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8">
          <Link href={"tel:180"}>
          <span>
          <div className="w-[113px] h-[50px] rounded-md bg-red-600"></div>
                <div className="-mt-2 -ml-2  max-sm:absolute">
                  <div className="relative -top-8  left-5">
                 <div><BsFillTelephoneFill className="text-slate-100 text-xl" /></div>
                  </div>
                  <div className="relative -top-14 left-12 text-slate-100 text-2xl ">
               <h1>180</h1>
                  </div>
                </div>
              </span></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
