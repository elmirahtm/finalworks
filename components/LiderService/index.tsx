import Image from "next/image";
import React from "react";

const LiderService = () => {
  return (
    <div>
      <div
        className='bg-[url("/bg2.png")] w-full h-[45rem] flex justify-center items-start max-sm:h-[75rem]  max-lg:h-[65rem]
        p-20 '
      >
        <div className="container m-auto">
          <div className="flex justify-center items-center max-sm:flex-wrap max-sm:text-center max-sm:text-sm  max-lg:flex-wrap max-lg:text-center max-lg:text-sm ">
            <div>
              <span>
                <Image
                  className="max-sm:w-[545px] max-sm:h-80 max-lg:w-96 max-lg:h-80 max-sm:m-auto max-lg:ml-12"
                  src="/haqqindaimage.png"
                  alt="image"
                  width={445}
                  height={545}
                />
              </span>
            </div>
            <div className="ml-6 flex flex-col text-wrap">
              <h1 className="text-2xl max-sm:ml-28
                max-sm:w-[12ch] font-bold">"Lider Service" haqqında</h1>
              <p className="w-[44rem] max-sm:w-80 max-sm:text-justify max-lg:w-80 max-lg:text-justify max-sm:ml-8 max-lg:ml-10">
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
                  <span className="mr-7 max-sm:hidden max-lg:hidden">
                    <Image
                      className="bg-slate-300  p-2 w-10 h-10 rounded-xl mt-3 "
                      src="/setting.png"
                      alt="setting"
                      width={36}
                      height={36}
                    />
                  </span>
                  <div className="mt-3 mb-2">
                    <h4 className="text-xl font-bold max-sm:w-[21ch] max-lg:ml-10  ">
                      Ehtiyyat hissələri və aksesuarlar{" "}
                    </h4>
                    <p className="w-[22rem] max-sm:w-[36ch] max-sm:text-justify max-lg:text-justify max-sm:ml-8 max-lg:ml-10">
                      Bilavasitə servisimiz tərəfindən əldə olunan orijinal
                      detallar tam əminlik yaradır. Çünki, bu detallar alınan
                      məhsula tam uyğundur və istənilən keyfiyyəti təmin edə
                      bilərlər. Lazım olan hissələri əldə etmək üçün servisə
                      müraciət edə bilərsiniz.
                    </p>
                  </div>
                </div>
                <div className="flex max-sm:mt-8 ">
                  <span className="mr-7 max-sm:hidden max-lg:hidden">
                    <Image
                      className="bg-slate-300 p-2 w-10 h-10 rounded-xl mt-3  "
                      src="/tamamlan.png"
                      alt="tamamlan"
                      width={36}
                      height={36}
                    />
                  </span>
                  <div className="">
                    <h4 className="text-xl font-bold max-sm:w-[36ch]  max-lg:m-auto max-sm:-ml-11 ">
                      Zəmanət qüvvəsi
                    </h4>
                    <p className="w-[30rem] max-sm:w-[36ch] max-sm:text-justify max-lg:w-[22rem] max-lg:text-justify max-sm:ml-8 max-lg:ml-10">
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
    </div>
  );
};

export default LiderService;
