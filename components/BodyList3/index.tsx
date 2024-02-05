"use client";
import Image from "next/image";
import Carousel2 from "../Carousel2";
import { FaInstagram, FaPlus, FaWhatsapp } from "react-icons/fa";
import Carousel3 from "../Carousel3";
import Link from "next/link";
import { TbMapPin } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaAnglesRight } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";

const BodyList3 = () => {
  return (
    <div>
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

      <div
        className='bg-[url("/bg2.png")] w-full h-[45rem] flex justify-center items-start max-sm:h-[60rem]
        p-20 '
      >
        <div className="flex justify-center items-center max-sm:flex-wrap max-sm:text-center max-sm:text-sm  ">
          <div>
            <span>
              <Image
                className="max-sm:w-80 max-sm:h-80"
                src="/haqqindaimage.png"
                alt="image"
                width={445}
                height={545}
              />
            </span>
          </div>
          <div className="ml-6">
            <h1 className="text-2xl font-bold">"Lider Service" haqqında</h1>
            <p className="w-[44rem] max-sm:w-80 max-sm:m-auto">
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
            <span>
              <div className="flex ">
                <span className="mr-7">
                  <Image
                    className="bg-slate-300 p-2 w-10 h-10 rounded-xl mt-3 "
                    src="/setting.png"
                    alt="setting"
                    width={36}
                    height={36}
                  />
                </span>
                <div className="mt-3 mb-2">
                  <h4 className="text-xl font-bold max-sm:m-auto max-sm:ml-10">
                    Ehtiyyat hissələri və aksesuarlar{" "}
                  </h4>
                  <p className="w-[30rem] max-sm:w-96 max-sm:m-auto max-sm:ml-10">
                    Bilavasitə servisimiz tərəfindən əldə olunan orijinal
                    detallar tam əminlik yaradır. Çünki, bu detallar alınan
                    məhsula tam uyğundur və istənilən keyfiyyəti təmin edə
                    bilərlər. Lazım olan hissələri əldə etmək üçün servisə
                    müraciət edə bilərsiniz.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <span className="mr-7">
                  <Image
                    className="bg-slate-300 p-2 w-10 h-10 rounded-xl mt-3  "
                    src="/tamamlan.png"
                    alt="tamamlan"
                    width={36}
                    height={36}
                  />
                </span>
                <div>
                  <h4 className="text-xl font-bold max-sm:m-auto">
                    Zəmanət qüvvəsi
                  </h4>
                  <p className="w-[30rem] max-sm:w-[35rem] max-sm:m-auto">
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
      </div>

      <div>
        <Carousel2 />
      </div>

      <div>
        <div className="bg-[url('/bg.png')] w-full h-[45rem] mt-8 mb-10 max-sm:mb-96">
          <div className="flex justify-evenly  max-sm:block max-sm:p-5 ">
            <div>
              <span>
                <Image
                  className=" relative mt-10 "
                  src="/usta7.png"
                  alt="usta7"
                  width={323}
                  height={379}
                />
                <Image
                  className=" absolute ml-20 -mt-60 "
                  src="/usta8.png"
                  alt="usta8"
                  width={275}
                  height={323}
                />
              </span>
            </div>

            <div className="">
              <div>
                <h1 className="font-bold text-3xl mb-5 mt-10  max-sm:pt-16 ">
                  Tez-tez verilən suallar
                </h1>
              </div>
              <div className="border-2 rounded-md bg-white p-5">
                <div className="flex gap-2 justify-between mb-2  ">
                  {" "}
                  <p className="text-blue-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <span className="text-blue-400 ">
                    <FaPlus />
                  </span>
                </div>
                <div>
                  <p className="w-[32rem] ml-5 max-sm:ml-0 max-sm:w-[22rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    nunc felis ultrices vitae iaculis at eu. Tincidunt
                    pellentesque lobortis enim morbi nulla tortor tristique in.
                    Massa semper quis imperdiet cursus egestas. Nulla eget purus
                    et phasellus vehicula feugiat. Quam dictumst diam id
                    tincidunt est.
                  </p>
                </div>
              </div>
              <div className="mt-7">
                <div className="flex gap-2 justify-between mb-2 border-2 rounded-md bg-white p-5">
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <span className="">
                    <FaPlus />
                  </span>
                </div>
                <div className="flex gap-2 justify-between mb-2 border-2 rounded-md bg-white p-5">
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <span className="">
                    <FaPlus />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Carousel3 />
      </div>

      <div>
        <div className="bg-[url('/image.jpg')] bg-no-repeat ml-5  w-full h-[45rem] mt-8  ">
          <div className="flex max-sm:block  ">
            <div className="bg-[url('/sifarisbg.jpg')] bg-no-repeat  w-[145rem] h-[29rem] ml-64 mt-10 max-sm:ml-0 max-sm:mb-0  ">
              <div className="ml-4 mt-7 ">
                <h1 className="text-3xl mb-5">Usta sifarişi</h1>
                <p className="w-[30rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                  est nulla tellus pharetra egestas.
                </p>
                <form>
                  <div className="flex gap-9 mt-5 ">
                    <div>
                      <input
                        className="border-b-2 border-slate-300 bg-transparent w-[18rem]"
                        type="text"
                        placeholder="*Adınız və Soyadınız"
                      />
                    </div>
                    <div>
                      <input
                        className="border-b-2 border-slate-300 bg-transparent"
                        type="number"
                        placeholder="*Telefon nömrəniz"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="flex gap-9 mt-10">
                    <div>
                      {" "}
                      <input
                        className="border-b-2 border-slate-300 bg-transparent w-[18rem]"
                        type="text"
                        placeholder="Sifariş etmək istədiyiniz xidməti seçin"
                      />
                    </div>
                    <div>
                      {" "}
                      <input
                        className="border-b-2 border-slate-300 bg-transparent"
                        type="text"
                        placeholder="Sifariş haqqında məlumat"
                      />
                    </div>
                  </div>
                </form>
                <div>
                  <Link href="/order">
                    {" "}
                    <div className="bg-blue-600 text-slate-50 rounded-lg w-52 h-12 text-center p-2 mt-7">
                      Sifariş et
                    </div>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-[url('/elaqebg.jpg')] bg-no-repeat  w-[160rem] h-[29rem] mr-72 mt-10 text-white max-sm:-mt-28">
              <h1 className="text-3xl p-5">Əlaqə</h1>
              <span className="flex m-5 ">
                <TbMapPin className="mt-0.5" />
                <p>Bakı ş., Şamaxı yolu 15-ci km.</p>
              </span>
              <span className="flex ml-5 gap-3">
                <span>
                  <BsTelephone />
                </span>
                <span>
                  <p>(+994 12) 565-1-565</p>
                  <p>(+994 12) 565-2-565</p>
                  <p>(+994 55) 222-34-19</p>
                  <p>(+994 55) 222-32-46</p>
                </span>
              </span>
              <span className="flex ml-5 mt-3 gap-5">
                <span className="mt-1">
                  {" "}
                  <HiOutlineMail />{" "}
                </span>
                <span>
                  {" "}
                  <h4>office@solitonservice.com</h4>
                </span>
              </span>
            </div>
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
              <h1 className="mb-4 text-2xl font-bold ">Saytın xəritəsi</h1>
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
      <div className="flex justify-between mt-3">
      <div className="ml-24">
          <p> © Lider Service - 2022. Müəllif hüquqları qorunur.</p>
        </div>
        <div className="mr-24">
          <p>Sayt Jedai tərəfindən yaradılmışdır.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BodyList3;
