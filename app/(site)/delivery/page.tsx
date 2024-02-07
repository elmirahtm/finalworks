import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CgFacebook } from 'react-icons/cg'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaAnglesRight } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { TbMapPin } from 'react-icons/tb'

const Çatdırılma = () => {
  return (
    <div>
    <Header/>
      <HeaderRoutes/>  

      <div className='bg-[url("/temirimage.png")] bg-no-repeat w-full h-[23rem]'>
<div>
  <h1 className='font-bold text-white text-2xl text-center pt-20'>Çatdırılma</h1>
<div className='flex gap-1 text-white justify-center pt-3'>
<Link  href="/">Əsas səhifə</Link>
<p>/</p>
<Link href={"/delivery"}>Çatdırılma</Link>
</div>
</div>
      </div> 

      <div className='bg-[url("/bg.png")] w-full -mt-28 h-[79rem] mb-10 max-sm:h-[80rem]'>
<div className='bg-white w-[1060px] h-[840px] m-auto shadow-xl p-5 max-sm:w-[20rem] max-sm:pt-3'>
  <Image className='m-auto ' src="/solitoncar.png" alt='car' width={944} height={489}/>
 <div className=' p-2 ml-5 '>
 <h1 className='font-bold text-2xl mt-2'>Çatdırılma</h1>
  <p className='w-[63rem] mt-3 max-sm:w-[15rem]'>"Soliton Service"  Soliton mağazalar şəbəkəsindən satılan məişət əşyalarının Bakı və Abşeron 
    yarımadasina 72 saat ərzində çatdırılasını təmin edir.</p>
    <p className='w-[65rem] mt-5  max-sm:w-[15rem]'>Çatdırılma xidməti həftənin bütün günləri fəaliyyət göstərir."Soliton Service" əməkdaşları müştərilərlə əlaqə saxlayaraq uyğun zaman ərzində məhsulu ünvana çatdırırlar.Alınan məhsulların
       qəbulu alıcıların iştirakı ilə tam yoxlanılaraq həyata keçirilir.</p>
 </div>
 <div>
                  <Link href="/phone">
                    {" "}
                    <div className="bg-blue-600 text-slate-50 rounded-lg w-52 h-12 text-center m-auto pt-2 mt-7">
                      Əlaqə
                    </div>{" "}
                  </Link>
                </div>
</div>
      </div>
      
      <div className=" mb-4  bg-slate-50 -mt-52 ">
        <div className="flex justify-evenly items-center -mt-32 m-auto max-sm:flex-wrap max-sm:text-center p-8 
        max-sm:mt-40
        ">
          <div>
            <span >
              <Image src="/logo.png" alt="logo" width={174} height={60} />
            </span>
            <div className="mt-5">
              <p className="w-[15rem]">
                "Lider Service" 
                təcrübəli mütəxəssislər və konsultantlar
                komandasıdır
              </p>
            </div>
            <div className="flex gap-6 mt-4 max-sm:ml-10">
              <span className="border-2 border-blue-600 rounded-lg  w-9 h-7">
                <CgFacebook className="m-auto mt-1" />
              </span>
              <span className="border-2 border-blue-600 rounded-lg  w-9 h-7">
                <FaInstagram className="m-auto mt-1" />
              </span>
              <span className="border-2 border-blue-600 rounded-lg  w-9 h-7">
                <FaWhatsapp className="m-auto mt-1" />
              </span>
            </div>
          </div>

          <div>
          <div className="max-sm:mt-10">
              <h1 className="mb-4 ml text-2xl font-bold max-sm:-ml-5 ">Saytın xəritəsi</h1>
            </div>
            <div className="flex gap-8">
              <div className="">
               <Link href={"/"}> <span className="flex gap-2 mb-4">
                  <FaAnglesRight className="mt-1 text-blue-500" />
                  <h3>Əsas səhifə </h3>
                </span></Link>
               <Link href={"/repair"}> <span className="flex gap-2 mb-4">
                  <FaAnglesRight className="mt-1  text-blue-500" />
                  <h3>Təmir </h3>
                </span></Link>
               <Link href={"/install"}> <span className="flex gap-2 mb-4">
                  <FaAnglesRight className="mt-1  text-blue-500" />
                  <h3>Quraşdırma </h3>
                </span></Link>
              <Link href={"/masterorder"}>  <span className="flex gap-2">
                  <FaAnglesRight className="mt-1  text-blue-500" />
                  <h3>Usta sifarişi </h3>
                </span></Link>
              </div>
              <div>
              <Link href={"/delivery"}>  <span className="flex gap-2 mb-4">
                  <FaAnglesRight className="mt-1  text-blue-500" />
                  <h3>Çatdırılma </h3>
                </span></Link>
             <Link href={"/reference"}>   <span className="flex gap-2 mb-4">
                  <FaAnglesRight className="mt-1  text-blue-500" />
                  <h3>Zəmanət </h3>
                </span></Link>
               <Link href={"/about"}> <span className="flex gap-2 mb-4">
                  <FaAnglesRight className="mt-1  text-blue-500" />
                  <h3>Haqqımızda </h3>
                </span></Link>
               <Link href={"/connect"}> <span className="flex gap-2">
                  <FaAnglesRight className="mt-1  text-blue-500" />
                  <h3>Əlaqə </h3>
                </span></Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center  text-sky-700 gap-14">
            <div>
              <div>
                <div>
                  <h1 className="text-2xl font-bold text-black p-6 -mt-16 max-sm:mt-10">Əlaqə</h1>
                </div>
                <div className="flex">
                  <span>
                    {" "}
                    <BsTelephone />
                  </span>
                  <span>
                    <Link href={"#"}>
                      {" "}
                      <p className="text-black ml-2">(+994 12) 565-1-565</p>
                    </Link>
                  </span>
                </div>
                <div className="flex">
                  <span>
                    <BsTelephone />
                  </span>
                  <span>
                    <Link href={"#"}>
                      {" "}
                      <p className="text-black ml-2">(+994 12) 565-2-565</p>
                    </Link>
                  </span>
                </div>

                <div className="flex">
                  <span>
                    <BsTelephone />
                  </span>
                  <span>
                    <Link href={"#"}>
                      {" "}
                      <p className="text-black ml-2">(+994 55) 222-34-19</p>
                    </Link>
                  </span>
                </div>

                <div className="flex">
                  <span>
                    <BsTelephone />
                  </span>
                  <span>
                    <Link href={"#"}>
                      <p className="text-black ml-2">(+994 55) 222-32-46</p>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="flex m-5 gap-3 ">
              <TbMapPin className=" text-sky-700 mt-0.5" />
              <p>Bakı ş., Şamaxı yolu 15-ci km.</p>
            </span>
            <div>
              <span className="flex ml-5 mt-3 gap-3">
                <span className="mt-1">
                  {" "}
                  <HiOutlineMail className=" text-sky-700" />{" "}
                </span>
                <span>
                  {" "}
                  <h4>office@solitonservice.com</h4>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="border w-[1300px] m-auto mt-6">
        </div>
      <div className="flex justify-between mt-3 max-sm:gap-2">
      <div className="ml-24">
          <p> © Lider Service - 2022. Müəllif hüquqları qorunur.</p>
        </div>
        <div className="mr-24">
          <p>Sayt Jedai tərəfindən yaradılmışdır.</p>
        </div>
      </div>
      </div>


    </div>
  )
}

export default Çatdırılma