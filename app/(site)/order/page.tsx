import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const Order = () => {
  return (
    <div>
      <div className="flex max-sm:flex-col">
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

        <div className="bg-slate-200 w-[1000px] max-sm:w-[480px] h-[695px]">
          <div className="text-center mt-52 ml-44 pt-20 max-sm:-ml-6 ">
            <span>
              <Image
                className="m-auto"
                src="/stroke.png"
                alt="stroke"
                width={73}
                height={73}
              />
            </span>
            <h1 className="font-bold text-2xl p-4">
              Sifarişiniz Yerinə Yetirildi!
            </h1>
            <p>Ən qısa zamanda sizinlə əlaqə saxlayacayıq.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
