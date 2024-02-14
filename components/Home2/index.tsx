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
import MapItem from "../MapItem";
import AccordionUsage from "../Accordeon";
import Footer from "../Footer";
import { useRouter } from "next/navigation";

const Home2 = () => {
  const router = useRouter()
  const handlesubmit = (e:any) => {
      e.preventDefault()
      router.push("/order")
  }
  return (
    <div>
      <div>
        <div className="max-sm:mt-40">
          <div className="bg-cyan-900 py-4 w-full h-[42rem] max-sm:h-[21rem]">
            <h1 className=" text-center text-2xl text-slate-50 p-4 ">
              Servis Məntəqələrimiz
            </h1>
            <MapItem />
          </div>
        </div>

        <div
          className='bg-[url("/bg2.png")] w-full h-[45rem] flex justify-center items-start max-sm:h-[65rem]
        p-20 '
        >
          <div className="container m-auto">
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
                <span>
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
                      <h4 className="text-xl font-bold max-sm:m-auto  ">
                        Ehtiyyat hissələri və aksesuarlar{" "}
                      </h4>
                      <p className="w-[22rem] max-sm:w-96 max-sm:text-justify max-sm:ml-8">
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
                      <h4 className="text-xl font-bold max-sm:m-auto max-sm:-ml-11">
                        Zəmanət qüvvəsi
                      </h4>
                      <p className="w-[30rem] max-sm:w-[22rem] max-sm:text-justify max-sm:ml-8 ">
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
        </div>

        <div className="w-full">
          <Carousel2 />
        </div>

        <div>
          {/* <div className="bg-[url('/bg.png')] bg-no-repeat w-full h-[45rem] mt-8 mb-10 max-sm:mb-96"> */}
          <div className="container m-auto">
            <div className="flex justify-center items-center gap-32 mb-40  max-sm:block max-sm:p-5 ">
              <div>
                <span>
                  <Image
                    className=" relative mt-10 "
                    src="/usta7.png"
                    alt="usta7"
                    width={345}
                    height={379}
                  />
                  <Image
                    className=" absolute ml-20 -mt-60 "
                    src="/usta8.png"
                    alt="usta8"
                    width={295}
                    height={323}
                  />
                </span>
              </div>

              <div className="w-[49%]">
                <div className="">
                  <div>
                    <h1 className="font-bold text-3xl mb-5 mt-10  max-sm:pt-28 max-sm:w-[30rem]">
                      Tez-tez verilən suallar
                    </h1>
                  </div>
                  <div>
                    <AccordionUsage />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div>
          <Carousel3 />
        </div>

        <div>
          {/* <div className="bg-[url('/image.jpg')] bg-no-repeat ml-5  w-full h-[45rem] mt-8  "> */}
          <div className="bg-sky-900 h-[45rem]">
            <div className="container m-auto">
              <div className="flex max-sm:block max-sm:-ml-20 ">
                <div className="bg-[url('/sifarisbg.jpg')] bg-no-repeat  w-[145rem] h-[29rem] ml-64 mt-10 max-sm:ml-0 max-sm:mb-0  ">
                  <div className="ml-4 mt-7 ">
                    <h1 className="text-3xl mb-5">Usta sifarişi</h1>
                    <p className="w-[30rem]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ac est nulla tellus pharetra egestas.
                    </p>
                    <form onSubmit={handlesubmit}>
                      <div className="flex gap-9 mt-5 ">
                        <div>
                          <input
                          required
                            className="border-b-2 border-slate-300 bg-transparent w-[18rem]"
                            type="text"
                            placeholder="*Adınız və Soyadınız"
                          />
                        </div>
                        <div>
                          <input
                          required
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
                          required
                            className="border-b-2 border-slate-300 bg-transparent w-[18rem]"
                            type="text"
                            placeholder="Sifariş etmək istədiyiniz xidməti seçin"
                          />
                        </div>
                        <div>
                          {" "}
                          <input
                          required
                            className="border-b-2 border-slate-300 bg-transparent"
                            type="text"
                            placeholder="Sifariş haqqında məlumat"
                          />
                        </div>
                      </div>
                      
                        
                        <button className="bg-blue-600 text-slate-50 rounded-lg w-52 h-12 text-center p-2 mt-7">
                          Sifariş et
                        </button>{" "}
                      
                    </form>
                    <div>
                    </div>
                  </div>
                </div>

                <div className="bg-[url('/elaqebg.jpg')] bg-no-repeat  w-[160rem] h-[29rem] mr-72 mt-10 text-white max-sm:-mt-28">
                  <h1 className="text-3xl p-5">Əlaqə</h1>
                  <span className="flex m-5 ">
                    <TbMapPin className="mt-0.5" />
                    <Link href={"https://maps.app.goo.gl/KWS67w3JSZ6xxFLh7"} target="_blank">Bakı ş., Şamaxı yolu 15-ci km.</Link>
                  </span>
                  <span className="flex ml-5 gap-3">
                    <span>
                      <BsTelephone />
                    </span>
                    <span className="flex flex-col">
                    <Link href={"tel:+994 12 565-1-565"} >(+994 12) 565-1-565
                  </Link>
                  <Link href={"tel:+994 12 565-2-565"} >(+994 12) 565-2-565
                  </Link>
                  <Link href={"tel:+994 55 222-34-19"} >(+994 55) 222-34-19
                  </Link>
                  <Link href={"tel:+994 55 222-32-46 "} >(+994 55) 222-32-46  </Link>
                    </span>
                  </span>
                  <span className="flex ml-5 mt-3 gap-5">
                    <span className="mt-1">
                      {" "}
                      <HiOutlineMail />{" "}
                    </span>
                    <span>
                      {" "}
                      <Link href={"mailto:"}>office@solitonservice.com</Link>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

      <div>
        <Footer/>
      </div>
      </div>
    </div>
  );
};

export default Home2;
