import Image from 'next/image'
import React from 'react'

const Aboutfirst = () => {
  return (
    <div>
        <div className="ml-6 mt-32 max-sm:mt-0">
                <h1 className="text-2xl pt-24 font-bold max-sm:ml-12 max-lg:-mt-24">
                  "Lider Service" haqqında
                </h1>
                <p className="w-[44rem] max-sm:w-80 max-lg:w-80 max-sm:text-justify max-sm:ml-8">
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
                <span className="flex justify-around mt-20 max-sm:block max-lg:block">
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
                      <h4 className="text-xl mt-3 font-bold  max-sm:ml-24">
                        Zəmanət qüvvəsi
                      </h4>
                      <p className="w-[30rem] max-sm:w-[20rem] max-lg:w-[25rem] max-sm:text-justify max-sm:ml-8 ">
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
  )
}

export default Aboutfirst