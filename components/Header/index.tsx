"use client";
import Image from "next/image";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className=" bg-gray-800 text-cyan-50 p-4">
        <div className="container m-auto">
          <div className="flex justify-between  max-sm:flex-wrap max-sm:flex-col  ">
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
                  <Link href={"https://www.facebook.com/"} target="_blank"><CgFacebook /></Link>
                </span>
                <span>
                  <Link href={"https://www.instagram.com/"} target="_blank"><FaInstagram /></Link>
                </span>
                <span>
                  <Link href={"https://web.whatsapp.com/"} target="_blank"><FaWhatsapp /></Link>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-slate-100 ">
        <div className="container m-auto">
          <div className="flex justify-between items-center max-sm:flex-wrap max-sm:text-center max-sm:justify-center ">
            <div>
              <Link href={"/"}><span>
                <Image src="/logo.png" alt="logo" width={174} height={60} />
              </span></Link>
            </div>

            <div className="flex justify-center  text-sky-700 gap-14 max-sm:mt-4">
              <div>
                <div className="flex ">
                  <span>

                    <BsTelephone />
                  </span>
                  <Link href={"tel:+994 12 565-1-565"} className="text-black ml-2">(+994 12) 565-1-565
                  </Link>
                </div>
                <div className="flex">
                  <span>
                    <BsTelephone />
                  </span>
                  <Link href={"tel:+994 12 565-2-565"} className="text-black ml-2">(+994 12) 565-2-565
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex">
                  <span>
                    <BsTelephone />
                  </span>
                  <Link href={"tel:+994 55 222-34-19"} className="text-black ml-2">(+994 55) 222-34-19
                  </Link>
                </div>
                <div className="flex">
                  <span>
                    <BsTelephone />
                  </span>
                  <Link href={"tel:+994 55 222-32-46 "} className="text-black ml-2">(+994 55) 222-32-46  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <span>
                <Image src="/daire.png" alt="daire" width={113} height={51} />
                <div className="-mt-2 -ml-2">
                  <span className="relative -top-9 left-5">

                    <Image src="/call.png" alt="daire" width={31} height={29} />
                  </span>
                  <span className="relative -top-16 left-12 ">

                    <Image src="/180.png" alt="180" width={51} height={28} />
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
