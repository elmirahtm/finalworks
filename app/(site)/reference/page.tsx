import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CgCheckO, CgCloseO, CgFacebook } from "react-icons/cg";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaAnglesRight } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { TbMapPin } from 'react-icons/tb'


const  Zəmanət = () => {
  return (
    <div> 
      <Header/>
      <HeaderRoutes/>

      <div className='bg-[url("/temirimage.png")] bg-no-repeat w-full h-[23rem]'>
<div>
  <h1 className='font-bold text-white text-2xl text-center pt-20'>Zəmanət</h1>
<div className='flex gap-1 text-white justify-center pt-3'>
<Link  href="/">Əsas səhifə</Link>
<p>/</p>
<Link href={"/reference"}>Zəmanət</Link>
</div>
</div>
      </div> 

<div className='bg-slate-100 w-[64rem] p-5 m-auto mb-60 -mt-11 shadow-xl  '>
  <div className='ml-8 w-[92ch] max-sm:w-[30ch]  max-sm:text-center'>
    <div><h1 className='font-bold text-2xl'>Zəmanət Şərtləri</h1></div>
<div className='text-xl mt-8'>
<p className='text-lg font-bold' >HÖRMƏTLİ  ALICI ! ZƏMANƏT TALONUNU OXUDUQDAN SONRA İMZALAYIN !</p>
    <p className=' mt-7'>Aldığınız məhsulun quraşdırılması və istifadəsi üçün mütləq“SOLİTON SERVİCE ”
       təşkilatına müraciət etməyiniz məsləhət görülür.Əks halda düzgün olmayan quraşdırılmalar
        sizi pulsuz servis xidmətindən məhrum edə bilər . Servis mərkəzinə müraciət etmədən öncə
       istifadə qaydalarını oxuyun ! Məişət əşyaları qeyri məişət sahələrində istifadə olunarsa(kafe,restoran və s.) 
      , bu zaman zəmanət qüvvədən düşmüş hesab edilir !</p>
</div>
<div>
<p className='mt-8'><span className='font-bold text-xl'>ZƏMANƏT</span> – təqdim olunan dövrdə , sıradan çıxmış ehtiyat hissəsinin pulsuz şəkildə yenisi ilə əvəz olunması deməkdir .</p>
<p className='mt-8'><span className='font-bold text-xl'>ZƏMANƏT</span>-- şərtləri ilə satılan məhsullar , nasazlıq yarandığı halda satış tarixindən 14(on dörd) gün ərzində dəyişdirilə və ya qaytarıla bilər .
   Bu tarixdən sonra müştəri məhsul dəyişimini tələb edə bilməz .</p>
   <p className='mt-8'><span className='font-bold text-xl'>ZƏMANƏT</span>— məhsulun satış tarixi günündən başlayır .</p>
</div>
<div className=''>
  <span>
    <Image className='m-auto ' src="/zemanet.jpg" alt='zemanet' width={947} height={688} />
  </span>
</div>

<div>
<p className='mt-7'>Zəmanət müddətində təmir işlərinin Soliton Service  məntəqələrində aparılması daha məqsədə uyğundur.</p>
<p className='mt-7'>Zəmanət müddətində servis mərkəzinə  , müraciət olunan tarixdən etibarən ən gec 3 (üç) gün ərzində xidmət göstərilir.</p>
<p className='mt-7'>Təmir məqsədi ilə Servis Məntəqəsinə qəbul edilən məhsul 14(on dörd ) iş günü müddətində müştəriyə təhvil verilməlidir .( İstisna hallar xaric : sifariş olunan ehtiyat hissə gecikərsə ,fors major hallar yaranarsa ) . Əks halda məhsul yenisi ilə əvəz olunur .</p>
<p className='mt-7'>Üç qütblü  şəbəkə qoşulması olan məhsullar mütləq , digər məhsullar vaciblik dərəcəsinə torpaqlama olan şəbəkəyə qoşulmalıdır . Bütün birləşmələr birbaşa və ya bilavasitə qoruyucu avtomat ilə təchiz olunmakıdır . Əks halda məhsula dəyən zərər müştəri hesabına bərpa olunacaq . </p>
<p className='mt-7'>Zəmanət müddəti bitmiş məhsula “Soliton Servis “tərəfindən xidmət göstərilərsə əlavə 6(altı)ay zəmanət verilir.Bunun üçün servis çekini tələb edin!</p>
<p className='mt-7'>Zəmanət talonundakı nömrə silinərsə , cırılarsa və yaxud hər hansı bir yazı dəyişikliyi edilərsə zəmanət etibarsız sayılır .</p>
<p className='mt-7'>İri həcmli avadanlıqları elektrik tənzimləyicisi vasitəsi ilə , qaz ilə işləyən avadanlıqları qaz tənzimləyicisi ilə şəbəkəyə bağlayın !</p>

</div>
<div>
<div className='flex text-green-500 mt-4 '> 
<span><CgCheckO className=' w-12 h-5' /></span>
  <p>ZƏMANƏT  ŞƏRTLƏRİNƏ AİDDİR !</p>
</div>
<div className='max-sm:w-80'>
<p className='mt-4 max-sm:-ml-3'> İri həcmli məişət texnikalarının (Soyuducu,paltaryuyan,qabyuyan,paltarqurudan,qaz peçləri,soba,bişirmə paneli,aspirator,televizor,dondurucu,sərinləşdirici,elektrikli və qazlı su qızdırıcısı,kombi,kondisioner ) 3(üç) illik zəmanəti . Televizor panellərinin zəmanət müddəti isə 18 (on səkkiz) aydır (BEKO,BLOMBERG,GRUNDİG markalarında).</p>

  </div>
  <ul>
  <li className='mt-4'>Məhsulda yerləşən hissələrin ( istifadə qaydalarına riayət olunduğu , lazımi parametrlərin düzgün təmin edildiyi halda ) sıradan çıxanlarının yenisi ilə əvəz olunması .</li>
  <li className='mt-4'>Təmir məqsədi ilə məhsulun (iri həcmli ) servis məntəqəsinə gətirilməsi və geri qaytarılması .</li>
  <li className='mt-4'>1 (bir) dəfə pulsuz montaj və istifadə qaydalarının izahı .</li>
  <li className='mt-4'>Kiçik həcmli məişət texnikalarının (Kiçik mətbəx əşyaları,kiçik elektronik əşyalar,elektrikli qızdırıcı,fotoaparat və kamera,ütü,tozsoran,xüsusi baxım alətləri) 1(bir) illik zəmanəti . </li>
</ul>

</div>

<div className='flex text-red-700 mt-8 '> 
<span><CgCloseO  className=' w-12 h-5' /></span>
  <p>ZƏMANƏT  ŞƏRTLƏRİNƏ AİD DEYİL !</p>
</div>
  <div className='mt-5'>
    <p>1.    İstismar qaydalarına riayət edilməzsə yaranan nasazlıqlar.</p>
    <p>2.    Mexaniki zədələnmələr .</p>
    <p>3.    Periodik təmizləmələr (kondisionerlərin yuyulması,yuyucuların nasos və filtrlərinin təmizlənməsi,soyuducuların təmizlənməsi,audio və video başlıqların təmizlənməsi və sair) və tənzimləmə işləri .</p>
 <p>4.    Məsafədən idarəetmə pultları və akkumlyator batareyaları ,adaptorlar,televizorlarda modul kartlarının qoşulması zamanı yaranan nasazlıqlar.</p>
 <p>5.    Məhsullarda boya saralmaları və boya atmaları .</p>
 <p>6.    Şüşə və plastik hissələrin mexaniki zədələnmələri və qırılmaları .</p>
<p>7.    Nəmişliyin normadan yuxarı olmasından yaranan paslanma və elektronik nasazlıqlar.</p>
<p>8.    Elektrik , su , qaz parametrlərinin normadan kənara çıxması nəticəsində yaranan nasazlıqlar .</p>
<p>9.    Məhsulda servis mərkəzinin xəbəri olmadan istehsalçı konstruksiyasının dəyişdirilməsi , kabel sisteminə calaq verilməsi.</p>
<p>10.  Kənar şəxslərin müdaxiləsi olarsa.</p>
<p>11.  Təbii fəlakət nəticəsində yaranan nasazlıqlar .</p>
<p>12.  Məhsulun daxilinə kənar cisimlərin , həşəratların və ya maddələrin düşməsi nəticəsində yaranan nasazlıqlar .</p>
<p>13.  Müştərinin təkidi ilə düzgün və istifadəyə uyğun olmayan yerdən quraşdırmalar nəticəsində yaranan nasazlıqlar . </p>


  </div>
  <div className='text-xl font-bold mt-8'>
    <h1>Hörmətli Alıcı !</h1>
    <h2 className='mt-2'>Bizi seçdiyiniz üçün sizə təşəkkür edirik . Hər zaman sizə xidmət göstərmək bizim işimizdir !</h2>
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

export default  Zəmanət