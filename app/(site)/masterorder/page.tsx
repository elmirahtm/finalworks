"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const Ustasifarişi = () => {
  // const router = useRouter();
  // const handlesubmit = (e: any) => {
  //   e.preventDefault();
  //   router.push("/order");
  // };
  return (
    <div className="flex max-sm:flex-col ">
      <div className="bg-sky-600  w-[800px] max-sm:w-[480px] h-[695px] ">
        <Link href="/">
          <div className="flex text-white gap-4 rounded-md ml-36 mt-10">
            <span>
              <FaArrowLeftLong className="mt-1 max-sm:mt-6" />
            </span>
            <p className="max-sm:mt-5">Geri qayıt</p>
          </div>
        </Link>
        <div>
          <Image
            className="ml-24 mt-52"
            src="/service.png"
            alt="service"
            width={202}
            height={80}
          />
        </div>
      </div>

      <div className=" bg-slate-200 w-[1000px] max-sm:w-[480px] h-[695px]">
        <div className="container ">
          <div>
            {" "}
            <h1 className="text-3xl text-center pt-5">Usta sifarişi</h1>
          </div>
          <form action={"https://getform.io/f/zaxmkdob"} method="POST" className="pt-2 text-center ">
            <div className=" mt-5   ">
              <div>
                <input
                  className=" mb-5 w-80 h-12 ml-12 p-4 rounded-md "
                  type="text"
                  placeholder="*Adınız və Soyadınız"
                  required
                  name="name"
                />
              </div>

              <div>
                <input
                  className=" mb-5 w-80 h-12 ml-12 p-4 rounded-md"
                  type="number"
                  placeholder="*Telefon nömrəniz"
                  name="number"
                  id=""
                  required
                  
                />
              </div>

              <div>
                <input
                  className="mb-5 w-80 h-12 ml-12 p-4 rounded-md "
                  type="text"
                  placeholder="Sifariş etmək istədiyiniz xidməti seçin"
                  required
                  name="message"
                />
              </div>
              <div>
                <input
                  className=" w-80 h-12 ml-12 p-4 rounded-md"
                  type="text"
                  placeholder="Sifariş haqqında məlumat"
                  required
                  name="message"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="bg-blue-600 text-slate-50  rounded-lg w-52 h-12  text-center p-2 mt-7 max-sm:m-auto max-lg:m-auto ">
                Sifariş et
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ustasifarişi;
