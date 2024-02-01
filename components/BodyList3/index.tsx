"use client"
import Image from "next/image";
import Carousel2 from "../Carousel2";


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
        className='bg-[url("/bg2.png")] w-full h-[45rem] flex justify-center items-start max-sm:h-[50rem]
        p-20 '
      >
        <div className="flex justify-center items-center max-sm:flex-wrap max-sm:text-center max-sm:text-sm  ">
        <div>
          <span>
            <Image className="max-sm:w-80 max-sm:h-80"
              src="/haqqindaimage.png"
              alt="image"
              width={445}
              height={545}
            />
          </span>
        </div>
        <div className="ml-6">
          <h1 className="text-2xl font-bold">"Lider Service" haqqında</h1>
          <p className="w-[44rem]">
            "Lider Service" təcrübəli mutəxəssislər və konsultantlar
            komandasıdır ki, hər bir texniki problemdə sizə köməklik göstərməyə
            hazırdılar. Aldığınız malda istənilən nasazlıq olduğunda bizim
            servis mərkəzi ilə əlaqə saxlaya bilərsiniz. Bizim məhsullarımız
            davamlıdırlar. Uzun müddətli iş və zəmanət keyfiyyəti bizim vacib
            meyarlarımızdandır. Bütün məhsullarımız satışa buraxılmamışdan qabaq
            kompüter testindən keçirilir. Zəmanət müddəti ərzində hər hansı bir
            detal çatışmamazlığı ilə yaranan problemlər servis tərəfindən pulsuz
            həll olunur.{" "}
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
                <h4 className="text-xl font-bold">
                  Ehtiyyat hissələri və aksesuarlar </h4>
                  <p className="w-[30rem]">
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
                className="bg-slate-300 p-2 w-10 h-10 rounded-xl mt-3 "
                src="/tamamlan.png"
                alt="tamamlan"
                width={36}
                height={36}
              />
         </span>
              <div>
                <h4 className="text-xl font-bold">Zəmanət qüvvəsi</h4>
                <p className="w-[30rem]">
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

      <Carousel2 />
     
    </div>
  );
};

export default BodyList3;
