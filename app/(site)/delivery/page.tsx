import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


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

    <div className='container m-auto'>
    <div className='bg-[url("/bg.png")] w-full -mt-11 h-[79rem] mb-10 max-sm:h-[80rem] max-sm:w-[25rem]'>
<div className='bg-white w-[1060px] h-[840px] m-auto shadow-xl p-5 max-sm:w-[20rem]  max-lg:w-[30rem] max-sm:pt-3'>
  <Image className='m-auto ' src="/solitoncar.png" alt='car' width={944} height={489}/>
 <div className=' p-2 ml-5 '>
 <h1 className='font-bold text-2xl mt-2'>Çatdırılma</h1>
  <p className='w-[63rem] mt-3 max-sm:w-[15rem] max-sm:-ml-2 max-lg:w-[30rem] max-lg:text-center max-lg:-ml-10 max-xl:w-[50rem]'>"Soliton Service"  Soliton mağazalar şəbəkəsindən satılan məişət əşyalarının Bakı və Abşeron 
    yarımadasina 72 saat ərzində çatdırılasını təmin edir.</p>
    <p className='w-[65rem] mt-5  max-sm:w-[15rem] max-sm:-ml-2 max-lg:w-[30rem] max-lg:text-center max-lg:-ml-10 max-xl:w-[60rem]'>Çatdırılma xidməti həftənin bütün günləri fəaliyyət göstərir."Soliton Service" əməkdaşları müştərilərlə əlaqə saxlayaraq uyğun zaman ərzində məhsulu ünvana çatdırırlar.Alınan məhsulların
       qəbulu alıcıların iştirakı ilə tam yoxlanılaraq həyata keçirilir.</p>
 </div>
 <div>
                  <Link href={"tel:+994 12 565-1-565"} >
                    {" "}
                    <div className="bg-blue-600 text-slate-50 rounded-lg w-52 h-12 text-center m-auto pt-2 mt-7">
                      Əlaqə
                    </div>{" "}
                  </Link>
                </div>
</div>
      </div>
    </div>
      
      <div>
        <Footer/>
      </div>


    </div>
  )
}

export default Çatdırılma