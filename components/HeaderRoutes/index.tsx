"use client"
import Link from 'next/link'
import React from 'react'

const HeaderRoutes = () => {
const basliq=[
  {id:1, to:"/mainpage"  , title:"Əsas Səhifə"},
  {id:2, to:"/repair"  , title:"Təmir"},
    {id:3, to:"/install"  , title:"Quraşdırma"},
    {id:4, to:"/masterorder"  , title:"Usta Sifarişi"},
    {id:5, to:"/delivery"  , title:"Çatdırılma"},
    {id:6, to:"/reference"  , title:"Zəmanət"},
    {id:7, to:"/about"  , title:"Haqqımızda"},
    {id:8, to:"/connect"  , title:"Əlaqə"}
]

  return (
   <div>
 <div className=' flex justify-evenly p-4 bg-sky-700 text-slate-50'>
        {
            basliq.map(({id,to,title})=>{
                return(
                   <div key={id}>
                     <Link  href={to}>{title}</Link>
                   </div>
                    
                )
            })
        }
        
    </div>


   </div>
  )
}

export default HeaderRoutes