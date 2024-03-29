"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Aos from 'aos';
import "aos/dist/aos.css";

const Card3 = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div>
         <div>
    <div className="flex justify-center items-center gap-5 mt-14   max-sm:flex-wrap max-md:flex-wrap max-lg:flex-wrap max-xl:flex-wrap ">
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=" bg-slate-300 w-60 h-64  flex flex-col relative items-center rounded-md">
         <h2 className="mt-5 text-xl ">Televizor</h2>
         <Image className="mt-9"  src="/televizor.png" alt="televizor" width={150} height={157} />
         <Link
           className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] hover:bg-blue-600 bg-slate-100 absolute bottom-0  flex justify-center items-center  "
           href={"#"}
         >
           <FaArrowRight className='hover:text-slate-50 text-blue-600' />
         </Link>
       </div>
  

<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="  bg-slate-300 w-60 h-64  flex flex-col relative items-center rounded-md">
         <h2 className="mt-5 text-xl">Qaz Sobası</h2>
         <Image className="mt-5"  src="/qazsobasi.png" alt="qazsobasi" width={90} height={90} />
         <Link
           className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
           href={"#"}
         >
           <FaArrowRight className='text-blue-500' />
         </Link>
       </div>
   
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=" bg-slate-300 w-60 h-64  flex flex-col relative items-center rounded-md">
         <h2 className="mt-5 text-xl">ELEKTRİK SOBASI</h2>
         <Image className="mt-5 "  src="/elektrik.png" alt="soyud" width={145} height={144} />
         <Link
           className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
           href={"#"}
         >
           <FaArrowRight  className='text-blue-500' />
         </Link>
       </div> 
   
   
   
   
    
   
      </div>
   
   
   
   
     </div>
    </div>
  )
}

export default Card3