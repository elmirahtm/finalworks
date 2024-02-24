import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const NotFound = () => {
  return (
    <div className="container m-auto mt-16 max-sm:mt-40">
        <div>
            <h1 className='text-center font-bold text-2xl'>Axtardığınız Səhifə Tapılmadı</h1>
        </div>
        <div>
            <Image className='m-auto' src={"/404.png"} alt='404error' width={930} height={430}/>
        </div>
     <Link href="/"> 
       <div className='w-44 h-12 bg-blue-600 m-auto rounded-md '>
            <button className=' text-slate-50  '>
             <div className='flex gap-2 py-3 justify-evenly ml-6'>
              <div><MdOutlineKeyboardBackspace className='mt-1 ' /></div> 
               <div>  Geri Qayıt </div>
             </div>

            </button>
        </div></Link>
    </div>
  )
}

export default NotFound