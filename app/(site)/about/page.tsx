import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderRoutes from "@/components/HeaderRoutes";
import MapItem from "@/components/MapItem";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaAnglesRight, FaRegCirclePlay } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { TbMapPin } from "react-icons/tb";

const Haqqımızda = () => {
  return (
    <div>
      <Header />
      <HeaderRoutes />

      <div className='bg-[url("/temirimage.png")] bg-no-repeat w-full h-[23rem]'>
        <div>
          <h1 className="font-bold text-white text-2xl text-center pt-20">
            Haqqımızda
          </h1>
          <div className="flex gap-1 text-white justify-center pt-3">
            <Link href="/">Əsas səhifə</Link>
            <p>/</p>
            <Link href={"/about"}>Haqqımızda</Link>
          </div>
        </div>
      </div>

      <div>
        <div className='bg-[url("/bg.png")] w-full -mt-28 h-[209rem] mb-10 max-sm:h-[240rem]'>
        <div>
          <div className="container m-auto max-sm:ml-0 ">
            <div className="bg-white w-[1060px] h-[1140px] max-sm:h-[1215px] mb-20 -mt-10  m-auto shadow-xl p-5 max-sm:mb-20 max-sm:w-[30rem] max-sm:m-auto max-sm:pt-3">
              <span >
             <video  className="m-auto max-sm:w-[350px] " width={"944"} height={"190"} controls >
<source  src="/videomaster.mp4" type="video/mp4"/>
              
                {" "}
                {/* <Image
                  className="m-auto "
                  src="/ismaster.png"
                  alt="ismaster"
                  width={944}
                  height={489}
                /> */}
                {/* <Link href={"/about"}>
                  {/* <FaRegCirclePlay className="w-28 h-12 -mt-60 max-sm:-mt-32 m-auto " /> */}
                {/* </Link>  */}
             </video>
              </span>
             

              <div className="ml-6 -mt-12 max-sm:mt-0">
                <h1 className="text-2xl pt-24 font-bold max-sm:ml-12">
                  "Lider Service" haqqında
                </h1>
                <p className="w-[44rem] max-sm:w-80 max-sm:text-justify max-sm:ml-8">
                  "Lider Service" təcrübəli mutəxəssislər və konsultantlar
                  komandasıdır ki, hər bir texniki problemdə sizə köməklik
                  göstərməyə hazırdılar. Aldığınız malda istənilən nasazlıq
                  olduğunda bizim servis mərkəzi ilə əlaqə saxlaya bilərsiniz.
                  Bizim məhsullarımız davamlıdırlar. Uzun müddətli iş və zəmanət
                  keyfiyyəti bizim vacib meyarlarımızdandır. Bütün məhsullarımız
                  satışa buraxılmamışdan qabaq kompüter testindən keçirilir.
                  Zəmanət müddəti ərzində hər hansı bir detal çatışmamazlığı ilə
                  yaranan problemlər servis tərəfindən pulsuz həll olunur.{" "}
                </p>
                <span className="flex justify-around mt-20 max-sm:block">
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
                      <p className="w-[30rem] max-sm:w-[20rem] max-sm:text-justify max-sm:ml-8 ">
                        Soliton mağazalar şəbəkəsi öz məhsullarına yüksək
                        keyfiyyət verir və bütün məhsullarına 1 ildən 3 ilədək
                        zəmanət təklif edir. Biz sizə pulsuz çatdırılma və
                        quraşdırılmanı təklif edirik. Çatdırılma həftənin bütün
                        günləri həyata keçirilir.
                      </p>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="container  max-sm:ml-0  ">
            <div className="flex justify-center max-sm:block max-sm:bg-white max-sm:h-[110rem] max-sm:ml-0">
              <div className="bg-white w-[70rem] max-sm:w-[30rem] mb-20 shadow-xl py-10 m-auto max-sm:-ml-24  ">
                <div className="px-32">
                  <div>
                    <h1 className="font-bold text-2xl ml-20 max-sm:ml-0 ">Servis Mərkəzi</h1>
                    <h5 className="font-bold mx-16 max-sm:mx-0 my-8 max-sm:w-[20rem]">
                      Bu gün bizim Call Center bir neçə funksiya həyata keçirir:
                    </h5>
                  </div>
                  <ul className="ml-16  max-sm:ml-0 ">
                    <li className="mb-7">
                      Korporativ daxili zənglərin yönəldilməsi.
                    </li>
                    <li className="mb-7 w-[26rem] max-sm:w-[23rem]">
                      Məlumat-soraq dəstəyi, yeni müştərilərə mövcud olan məhsul
                      xətti üzrə məsləhət verilməsi.
                    </li>
                    <li className="mb-7 max-sm:w-[26rem]">
                      Müştəri məmuniyyətinin yüksək şəkildə təmin olunması.
                    </li>
                  </ul>
                  <div>
                    <h3 className="text-3xl w-[30rem] ml-14 max-sm:ml-0  max-sm:w-[26rem]">
                      Call Center-də bu mövzular haqqında ətraflı məlumat əldə
                      etmək mümkündür.
                    </h3>
                  </div>
                  <ul className="ml-16 max-sm:ml-0">
                    <li className="mt-9 mb-7">Servislərin ünvanları</li>
                    <li className="mb-7">
                      Keçirilən kompaniya və aksiyalar, onların şərtləri
                    </li>
                    <li className="mb-7">Məsləhətləşmə</li>
                    <li className="mb-7">
                      Mal və marka çeşidi haqqında məlumat
                    </li>
                  </ul>
                  <div>
                    <p className="ml-16 max-sm:ml-0 w-[40rem] max-sm:w-[22rem] ">
                      Call Center-dən alınmlş məlumatların əsasında hesabatlar
                      hazırlanır, bu hesabatlar sonradan kompaniyanın rəqabət
                      qabiliyyətini dəyərlindirməyə və lazım olduqda məhsul
                      xəttinə dəyişiklikləri irəli sürməyə kömək edir. Çoxlu
                      miqdarda telefon xətləri,güclü elektron avtomat telefon
                      stansiyası, xüsusi proqram təminatı - bunlar hamısı
                      kompleks şəkildə gün ərzində yüzlərlə zənglərin qəbul
                      edilməsinə və işin rahat görülməsinə imkan yaradır.
                    </p>
                    <p className="mt-10 ml-16 max-sm:ml-0 w-[35rem] max-sm:w-[26rem]">
                      "Soliton Service" Call Center-i həftənin bütün günləri
                      saat 09:30 - 18:00 kimi fəaliyyət göstərir.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative  ">
                <div className="border-2 border-blue-300 absolute right-32 top-12 w-[350px] max-sm:ml-4 max-sm:w-[320px] h-[438px] max-sm:h-[438px] max-sm:left-12 max-sm:-mt-20 "></div>
                <div>
                  <Image
                    className="mt-20 -ml-24 max-sm:ml-4 max-lg:w-[459px]"
                    src="/qulaqliq.png"
                    alt="qulaqliq"
                    width={459}
                    height={542}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-sm:mt-40 mb-20">
            <div className="bg-cyan-900 w-full h-[42rem] max-sm:h-[21rem]">
              <h1 className=" text-center text-2xl text-slate-50 p-4 ">
                Servis Məntəqələrimiz
              </h1>
              <span>
                <MapItem />
              </span>
            </div>
          </div>

          <div>
            <Link href={"tel:+994 12 565-1-565"}>
              {" "}
              <div className="bg-blue-600 text-slate-50 rounded-lg w-52 h-12 text-center m-auto pt-2 mt-7">
                Əlaqə
              </div>{" "}
            </Link>
          </div>
        </div>

        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Haqqımızda;
