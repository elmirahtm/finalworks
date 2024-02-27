import Card4 from '@/components/Card4'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'
import Link from 'next/link'
import React from 'react'


const Quraşdırma = () => {
  return (
    <div>
       <Header/>
      <HeaderRoutes/> 
      <div className='bg-[url("/temirimage.png")] bg-no-repeat w-full h-[23rem]'>
<div>
  <h1 className='font-bold text-white text-2xl text-center pt-20'>Məişət Əşyalarının Quraşdırılması</h1>
<div className='flex gap-1 text-white justify-center pt-3'>
<Link  href="/">Əsas səhifə</Link>
<p>/</p>
<Link href={"/install"}>Quraşdırma</Link>
</div>
</div>
      </div>  

      <div>
      <div className='bg-[url("/bg.png")] w-full -mt-28 h-[79rem]  max-sm:h-[205rem] max-md:h-[130rem] max-lg:h-[120rem] max-xl:h-[80rem]'>
          <div>
            <div>
          

              <div className="">
                <span className=" flex justify-center items-center mt-4 gap-10 flex-wrap ">
                
                  <div>
                    <Card4 />
                
                  </div>

                </span>
              </div>
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

export default Quraşdırma