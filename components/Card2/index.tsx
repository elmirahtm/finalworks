import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Card2 = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-5 mt-14   max-sm:flex-wrap ">
        <div className=" bg-slate-200 w-[16.5rem] h-64  flex flex-col relative items-center rounded-md">
          <h2 className="mt-5 text-xl">Paltaryuyan</h2>
          <Image className="mt-5" src="/paltaryuyan.png" alt="paltaryuyan" width={150} height={157} />
          <Link
            className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] hover:bg-blue-600 bg-slate-100  absolute bottom-0  flex justify-center items-center  "
            href={"#"}
          >
            <FaArrowRight className='text-blue-600 hover:text-slate-100' />
          </Link>
        </div>


        <div className=" bg-slate-200 w-[16.5rem] h-64  flex flex-col relative items-center rounded-md">
          <h2 className="mt-5 text-xl">QABYUYAN</h2>
          <Image className="mt-5" src="/qabyuyan.png" alt="qabyuyan" width={140} height={152} />
          <Link
            className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
            href={"#"}
          >
            <FaArrowRight className='text-blue-500' />
          </Link>
        </div>

        <div className=" bg-slate-200 w-[16.5rem] h-64  flex flex-col relative items-center rounded-md">
          <h2 className="mt-5 text-xl">ELEKTRİK SOBASI</h2>
          <Image className="mt-5 " src="/elektrik.png" alt="soyud" width={145} height={144} />
          <Link
            className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0  flex justify-center items-center  "
            href={"#"}
          >
            <FaArrowRight className='text-blue-500' />
          </Link>
        </div>



        <div className=" bg-slate-200 w-[16.5rem] h-64 flex flex-col relative items-center rounded-md ">
          <h2 className="mt-5 text-xl">KONDİSİONER</h2>
          <Image className="mt-5 " src="/kondisioner.png" alt="kondisioner" width={200} height={150} />
          <Link
            className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-slate-100 absolute bottom-0 flex justify-center items-center  "
            href={"#"}
          >
            <FaArrowRight className='text-blue-500' />
          </Link>
        </div>


      </div>




    </div>
  )
}

export default Card2