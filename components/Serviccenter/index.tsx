"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
const Serviccenter = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div>
         <div className="flex justify-center max-sm:block max-sm:bg-white max-sm:h-[110rem] max-sm:ml-0">
              <div className="bg-white w-[70rem] max-sm:w-[35rem] max-md:w-[40rem] max-lg:w-[47rem] mb-20 shadow-xl py-10 m-auto max-sm:-ml-24  ">
                <div className="px-32 max-sm:px-36 max-lg:px-12">
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
                    <p className="ml-16 max-sm:ml-0 w-[40rem] max-sm:w-[22rem] max-md:w-[30rem] ">
                      Call Center-dən alınmlş məlumatların əsasında hesabatlar
                      hazırlanır, bu hesabatlar sonradan kompaniyanın rəqabət
                      qabiliyyətini dəyərlindirməyə və lazım olduqda məhsul
                      xəttinə dəyişiklikləri irəli sürməyə kömək edir. Çoxlu
                      miqdarda telefon xətləri,güclü elektron avtomat telefon
                      stansiyası, xüsusi proqram təminatı - bunlar hamısı
                      kompleks şəkildə gün ərzində yüzlərlə zənglərin qəbul
                      edilməsinə və işin rahat görülməsinə imkan yaradır.
                    </p>
                    <p className="mt-10 ml-16 max-sm:ml-0 w-[35rem] max-sm:w-[26rem] max-md:w-[30rem]">
                      "Soliton Service" Call Center-i həftənin bütün günləri
                      saat 09:30 - 18:00 kimi fəaliyyət göstərir.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in"  className="relative  ">
                <div  className="border-2 border-blue-300 absolute right-32  top-12 w-[350px] h-[438px] max-sm:hidden max-lg:hidden max-xl:hidden max-sm:left-12 max-sm:-mt-20 "></div>
                <div >
                  <Image
                    className="mt-20  -ml-24 max-sm:ml-4 max-lg:hidden max-xl:hidden"
                    src="/qulaqliq.png"
                    alt="qulaqliq"
                    width={459}
                    height={542}
                  />
                </div>
              </div>
            </div>
    </div>
  )
}

export default Serviccenter