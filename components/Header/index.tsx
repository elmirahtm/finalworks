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
    <div>
      <div className="flex justify-around bg-gray-800 text-cyan-50 p-4  max-sm:flex-wrap max-sm:flex-col  ">
        <div className="flex gap-14  max-sm:justify-center">
          <h4>Servis məntəqələrimiz</h4>
          <h4>Tez-tez verilən suallar</h4>
        </div>

        <div className="flex gap-7 max-sm:justify-center">
          <div className="flex gap-3">
            <span className="mt-1">
              <HiOutlineMail />
            </span>
            <h4>office@solitonservice.com</h4>
          </div>

          <div className="w-6">
            <Image src="/Line.png" alt="line" width={1} height={0.5} />
          </div>

          <div className="flex gap-6 mt-1 ">
            <span>
              <CgFacebook />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaWhatsapp />
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center bg-slate-100 m-auto max-sm:flex-wrap max-sm:text-center ">
        <div>
          <Link href={"/"}><span>
            <Image src="/logo.png" alt="logo" width={174} height={60} />
          </span>{" "}</Link>
        </div>

        <div className="flex justify-center  text-sky-700 gap-14">
          <div>
            <div className="flex ">
              <span>
                {" "}
                <BsTelephone />
              </span>
              <Link href={"#"}>
                {" "}
                <p className="text-black ml-2">(+994 12) 565-1-565</p>
              </Link>
            </div>
            <div className="flex">
              <span>
                <BsTelephone />
              </span>
              <Link href={"#"}>
                {" "}
                <p className="text-black ml-2">(+994 12) 565-2-565</p>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex">
              <span>
                <BsTelephone />
              </span>
              <Link href={"#"}>
                {" "}
                <p className="text-black ml-2">(+994 55) 222-34-19</p>
              </Link>
            </div>
            <div className="flex">
              <span>
                <BsTelephone />
              </span>
              <Link href={"#"}>
                <p className="text-black ml-2">(+994 55) 222-32-46</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <span>
            <Image src="/daire.png" alt="daire" width={113} height={51} />
            <div className="-mt-2 -ml-2">
              <span className="relative -top-9 left-5">
                {" "}
                <Image src="/call.png" alt="daire" width={31} height={29} />
              </span>
              <span className="relative -top-16 left-12 ">
                {" "}
                <Image src="/180.png" alt="180" width={51} height={28} />
              </span>{" "}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
