import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Card4 = () => {
  return (
    <div>
        <div className="flex justify-center  items-center gap-5 mt-14   max-sm:flex-wrap ">

      <div className=" bg-slate-300 w-60 h-64  flex flex-col relative items-center rounded-md">
      <h2 className="mt-5 text-xl">Paltaryuyan</h2>
      <Image className="mt-5"  src="/paltaryuyan.png" alt="paltaryuyan" width={150} height={157} />
      <Link
        className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
        href={"#"}
      >
        <FaArrowRight  className='text-blue-500' />
      </Link>
    </div>



    <div className=" bg-slate-300 w-60 h-64  flex flex-col relative items-center rounded-md">
      <h2 className="mt-5 text-xl">QABYUYAN</h2>
      <Image className="mt-5"  src="/qabyuyan.png" alt="qabyuyan" width={140} height={152} />
      <Link
        className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
        href={"#"}
      >
        <FaArrowRight  className='text-blue-500' />
      </Link>
    </div>

    <div className=" bg-slate-300 w-60 h-64  flex flex-col relative items-center rounded-md">
         <h2 className="mt-5 text-xl">ELEKTRİK SOBASI</h2>
         <Image className="mt-5 "  src="/elektrik.png" alt="soyud" width={145} height={144} />
         <Link
           className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
           href={"#"}
         >
           <FaArrowRight  className='text-blue-500' />
         </Link>
       </div> 


    <div className=" bg-slate-300 w-60 h-64 flex flex-col relative items-center rounded-md ">
      <h2 className="mt-5 text-xl">KONDİSİONER</h2>
      <Image className="mt-5 " src="/kondisioner.png" alt="kondisioner" width={200} height={150} />
      <Link
        className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] hover:bg-blue-600 bg-slate-100 absolute bottom-0 flex justify-center items-center  "
        href={"#"}
      >
        <FaArrowRight className="hover:text-slate-50 text-blue-600" />
      </Link>
    </div>


   </div>

   <div>
   <div>
    <div className="flex justify-center items-center gap-5 mt-14   max-sm:flex-wrap ">
<div className=" bg-slate-200 w-60 h-64  flex flex-col relative items-center rounded-md">
         <h2 className="mt-5 text-xl">Qaz Sobası</h2>
         <Image className="mt-5"  src="/qazsobasi.png" alt="qazsobasi" width={90} height={90} />
         <Link
           className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
           href={"#"}
         >
           <FaArrowRight className='text-blue-500' />
         </Link>
       </div>
    <div className=" bg-slate-200 w-60 h-64  flex flex-col relative items-center rounded-md">
         <h2 className="mt-5 text-xl">QAZ SU QIZDIRICISI</h2>
         <Image className="mt-5"  src="/qazsu.png" alt="qazsu" width={100} height={130} />
         <Link
           className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
           href={"#"}
         >
           <FaArrowRight className='text-blue-600' />
         </Link>
       </div>
  

   
        <div className=" bg-slate-200 w-60 h-64  flex flex-col relative items-center rounded-md">
         <h2 className="mt-5 text-xl">ASPİRATOR</h2>
         <Image className="mt-5 "  src="/aspirator.png" alt="aspirator" width={145} height={144} />
         <Link
           className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
           href={"#"}
         >
           <FaArrowRight  className='text-blue-500' />
         </Link>
       </div> 
   
        <div className=" bg-slate-200 w-60 h-64  flex flex-col relative items-center rounded-md">
         <h2 className="mt-5 text-xl">Peyk</h2>
         <Image className="mt-5 "  src="/peyk.png" alt="peyk" width={135} height={144} />
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


   <div>
   <div className="flex justify-center items-center gap-5 mt-14   max-sm:flex-wrap ">
<div className=" bg-slate-200 w-60 h-64  flex flex-col relative items-center rounded-md">
         <h2 className="mt-5 text-xl text-center">PALTARQURUDAN MAŞIN</h2>
         <Image className=""  src="/paltarqurudan.png" alt="paltarqurudan" width={100} height={90} />
         <Link
           className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
           href={"#"}
         >
           <FaArrowRight className='text-blue-500' />
         </Link>
       </div>
<div className=" bg-slate-200 w-60 h-64  flex flex-col relative items-center rounded-md">
         <h2 className="mt-5 text-xl">Soyuducu</h2>
         <Image className="mt-5"  src="/soyud.png" alt="soyud" width={140} height={90} />
         <Link
           className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
           href={"#"}
         >
           <FaArrowRight className='text-blue-500' />
         </Link>
       </div>
<div className=" bg-slate-200 w-60 h-64  flex flex-col relative items-center rounded-md">
         <h2 className="mt-1 text-xl">ELEKTRİK SU QIZDIRICISI</h2>
         <Image className="mt-5"  src="/elektriksu.png" alt="elektriksu" width={135} height={90} />
         <Link
           className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
           href={"#"}
         >
           <FaArrowRight className='text-blue-500' />
         </Link>
       </div>


       </div>
   </div>
    </div>
  )
}

export default Card4