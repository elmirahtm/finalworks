import Card from '@/components/Card'

import Card3 from '@/components/Card3'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CgFacebook } from 'react-icons/cg'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaAnglesRight } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { TbMapPin } from 'react-icons/tb'

const Təmir = () => {
  return (
    <div>
      <Header/>
      <HeaderRoutes/>
      <div className='bg-[url("/temirimage.png")] bg-no-repeat w-full h-[23rem]'>
<div>
  <h1 className='font-bold text-white text-2xl text-center pt-20'>Məişət Texnikalarının Təmiri</h1>
<div className='flex gap-1 text-white justify-center pt-3'>
<Link  href="/">Əsas səhifə</Link>
<p>/</p>
<Link href={"/repair"}>Təmir</Link>
</div>
</div>
      </div>
      
      <div>
      <div className='bg-[url("/bg.png")] w-full -mt-28 h-[55rem] mb-10  max-sm:h-[205rem] max-md:h-[80rem] max-lg:h-[80rem] max-xl:h-[80rem]'>
          <div>
            <div>
          

              <div className="">
                <span className=" flex justify-center items-center mt-4 gap-10 flex-wrap ">
                
                  <div>
                    <Card />
                
                  </div>

                </span>
              </div>
            </div>

            <div>
            

              <span className=" flex justify-center items-center mt-4 gap-10 flex-wrap ">
            
                <div>
                  <Card3 />
              
                </div>

             
              </span>
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

export default Təmir