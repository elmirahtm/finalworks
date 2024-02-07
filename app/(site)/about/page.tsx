import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CgFacebook } from 'react-icons/cg'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaAnglesRight, FaRegCirclePlay } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi'
import { TbMapPin } from 'react-icons/tb'


const Haqqımızda = () => {
  return (
    <div>
     <Header/>
      <HeaderRoutes/> 

      <div className='bg-[url("/temirimage.png")] bg-no-repeat w-full h-[23rem]'>
<div>
  <h1 className='font-bold text-white text-2xl text-center pt-20'>Haqqımızda</h1>
<div className='flex gap-1 text-white justify-center pt-3'>
<Link  href="/">Əsas səhifə</Link>
<p>/</p>
<Link href={"/about"}>Haqqımızda</Link>
</div>
</div>
      </div> 

      
      <div className='bg-[url("/bg.png")] w-full -mt-28 h-[209rem] mb-10 max-sm:h-[240rem]'>
 <div className='bg-white w-[1060px] h-[1140px] max-sm:h-[1190px] mb-20  m-auto shadow-xl p-5 max-sm:mb-20 max-sm:w-[30rem] max-sm:m-auto max-sm:pt-3'>
<span> <Image className='m-auto ' src="/ismaster.png" alt='ismaster' width={944} height={489}/>
<Link href={"/about"}><FaRegCirclePlay className='w-28 h-12 -mt-60 max-sm:-mt-32 m-auto ' /></Link></span>


                <div className="ml-6 mt-44 max-sm:mt-0">
            <h1 className="text-2xl pt-24 font-bold max-sm:ml-12">"Lider Service" haqqında</h1>
            <p className="w-[44rem] max-sm:w-80 max-sm:text-justify max-sm:ml-8">
              "Lider Service" təcrübəli mutəxəssislər və konsultantlar
              komandasıdır ki, hər bir texniki problemdə sizə köməklik
              göstərməyə hazırdılar. Aldığınız malda istənilən nasazlıq
              olduğunda bizim servis mərkəzi ilə əlaqə saxlaya bilərsiniz. Bizim
              məhsullarımız davamlıdırlar. Uzun müddətli iş və zəmanət
              keyfiyyəti bizim vacib meyarlarımızdandır. Bütün məhsullarımız
              satışa buraxılmamışdan qabaq kompüter testindən keçirilir. Zəmanət
              müddəti ərzində hər hansı bir detal çatışmamazlığı ilə yaranan
              problemlər servis tərəfindən pulsuz həll olunur.{" "}
            </p>
            <span className='flex justify-around mt-20 max-sm:block'>
              <div className="flex max-sm:mt-8 ">
                <span className="mr-7 max-sm:hidden">
                  <Image
                    className="bg-slate-300  p-2 w-10 h-10 rounded-xl mt-3 "
                    src="/setting.png"
                    alt="setting"
                    width={36}
                    height={36}
                  />
                </span>
                <div className="mt-3 mb-2">
                  <h4 className="text-xl font-bold max-sm:ml-10 ">
                    Ehtiyyat hissələri və aksesuarlar{" "}
                  </h4>
                  <p className="w-[22rem] max-sm:w-[20rem] max-sm:text-justify max-sm:ml-8">
                    Bilavasitə servisimiz tərəfindən əldə olunan orijinal
                    detallar tam əminlik yaradır. Çünki, bu detallar alınan
                    məhsula tam uyğundur və istənilən keyfiyyəti təmin edə
                    bilərlər. Lazım olan hissələri əldə etmək üçün servisə
                    müraciət edə bilərsiniz.
                  </p>
                </div>
              </div>
              <div className="flex max-sm:mt-8 ">
                <span className="mr-7 max-sm:hidden">
                  <Image
                    className="bg-slate-300 p-2 w-10 h-10 rounded-xl mt-3  "
                    src="/tamamlan.png"
                    alt="tamamlan"
                    width={36}
                    height={36}
                  />
                </span>
                <div className="">
                  <h4 className="text-xl mt-3 font-bold  max-sm:ml-24">
                    Zəmanət qüvvəsi
                  </h4>
                  <p className="w-[30rem] max-sm:w-[22rem] max-sm:text-justify max-sm:ml-8 ">
                    Soliton mağazalar şəbəkəsi öz məhsullarına yüksək keyfiyyət
                    verir və bütün məhsullarına 1 ildən 3 ilədək zəmanət təklif
                    edir. Biz sizə pulsuz çatdırılma və quraşdırılmanı təklif
                    edirik. Çatdırılma həftənin bütün günləri həyata keçirilir.
                  </p>
                </div>
              </div>
            </span>
          </div>


          

          

</div>

<div className='flex max-sm:block max-sm:bg-white max-sm:h-[110rem] '>
<div className='bg-white w-[70rem] mb-20 shadow-xl py-10 '>
  <div>
    <h1 className='font-bold text-2xl ml-20'>Servis Mərkəzi</h1>
    <h5 className='font-bold m-20 max-sm:w-[26rem]'>Bu gün bizim Call Center bir neçə funksiya həyata keçirir:</h5>
  </div>
  <ul className='ml-16'>
    <li className='mb-7'>Korporativ daxili zənglərin yönəldilməsi.</li>
    <li className='mb-7 max-sm:w-[26rem]'>Məlumat-soraq dəstəyi, yeni müştərilərə mövcud olan məhsul xətti üzrə məsləhət verilməsi.</li>
    <li className='mb-7 max-sm:w-[26rem]'>Müştəri məmuniyyətinin yüksək şəkildə təmin olunması.</li>
  </ul>
  <div>
    <h3 className='text-3xl w-[60rem] ml-14 max-sm:w-[26rem]'>Call Center-də bu mövzular haqqında ətraflı məlumat əldə etmək mümkündür.</h3>
  </div>
  <ul className='ml-16'>
    <li className="mt-9 mb-7">Servislərin ünvanları</li>
    <li className="mb-7">Keçirilən kompaniya və aksiyalar, onların şərtləri</li>
    <li className="mb-7">Məsləhətləşmə</li>
    <li className="mb-7">Mal və marka çeşidi haqqında məlumat</li>
  </ul>
  <p className='ml-16 w-[40rem] max-sm:w-[26rem] '>Call Center-dən alınmlş məlumatların əsasında hesabatlar hazırlanır, bu hesabatlar sonradan kompaniyanın rəqabət qabiliyyətini dəyərlindirməyə və lazım  olduqda məhsul xəttinə dəyişiklikləri irəli sürməyə kömək edir. Çoxlu miqdarda telefon xətləri,güclü elektron avtomat telefon stansiyası, xüsusi proqram təminatı - bunlar hamısı kompleks şəkildə gün ərzində yüzlərlə zənglərin qəbul edilməsinə və işin rahat görülməsinə imkan yaradır.</p>
<p className='mt-10 ml-16 w-[35rem] max-sm:w-[26rem]'>"Soliton Service" Call Center-i həftənin bütün günləri saat 09:30 - 18:00 kimi fəaliyyət göstərir.</p>
</div>
<div className='relative'>
  <div className='border-2 border-blue-300 absolute right-32 top-12 w-[370px] h-[438px] max-sm:h-[538px] max-sm:left-12 max-sm:-mt-20 '></div>
  <span><Image className='mt-20 -ml-24 ' src="/qulaqliq.png" alt='qulaqliq' width={459} height={542}/></span>
</div>
</div>


<div className="max-sm:mt-40">
        <div className="bg-cyan-900 w-full h-[42rem] max-sm:h-[21rem]">
          <h1 className=" text-center text-2xl text-slate-50 p-4 ">
            Servis Məntəqələrimiz
          </h1>
          <span>
            <span>
              {" "}
              <Image
                className="m-auto"
                src="/Screen.png"
                alt="screen"
                width={1270}
                height={600}
              />
            </span>
          </span>
        </div>
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

export default Haqqımızda