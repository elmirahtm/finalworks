"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";


const Ustasifarişi = () => {
  const router = useRouter()
  const handlesubmit = (e:any) => {
      e.preventDefault()
      router.push("/order")
  }
  return (
  <div className="flex max-sm:block max-sm:-mt-20">
 <div className='bg-sky-600 w-[40rem] h-[49.1rem] max-sm:w-[60rem] max-md:w-[60rem] max-lg:w-[60rem] max-xl:w-[60rem]'>
        <Link href="/">
          <div className="flex text-white gap-4 rounded-md ml-36 mt-20">
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

     <div className=" bg-slate-100 w-[65rem] -ml-7 p-8 max-sm:[40rem] max-md:w[40rem] max-lg:w-[40rem] max-xl:w-[40rem]">
                <h1 className="text-3xl mb-5">Usta sifarişi</h1>
               
                <form onSubmit={handlesubmit} className="pt-5 ">
                  <div className=" mt-5   ">
                    
                   <div>
                   <input
                        className=" mb-5 w-80 h-12 ml-12 p-4 rounded-md "
                        type="text"
                        placeholder="*Adınız və Soyadınız"
                        required
                      />
                   </div>
                    
                   
                    <div>
                    <input
                        className=" mb-5 w-80 h-12 ml-12 p-4 rounded-md"
                        type="number"
                        placeholder="*Telefon nömrəniz"
                        name=""
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
                      />
                  
                      
                    </div>
                    <div>
                    <input
                        className=" w-80 h-12 ml-12 p-4 rounded-md"
                        type="text"
                        placeholder="Sifariş haqqında məlumat"
                        required
                      />
                    </div>
                   
                  </div>
                  <div>
                  <button className="bg-blue-600 text-slate-50  rounded-lg w-52 h-12 ml-14 text-center p-2 mt-7 max-sm:m-auto max-lg:m-auto ">
                          Sifariş et
                        </button>
                </div>
                </form>
             
              </div>
  </div>
  );
};

export default Ustasifarişi;
