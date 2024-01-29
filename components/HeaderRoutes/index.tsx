"use client"
import Link from 'next/link'
import React from 'react'

const HeaderRoutes = () => {
const basliq=[
  {id:1, to:"/əsassəhifə"  , title:"Əsas Səhifə"},
  {id:2, to:"/təmir"  , title:"Təmir"},
    {id:3, to:"/quraşdırma"  , title:"Quraşdırma"},
    {id:4, to:"/ustasifarişi"  , title:"Usta Sifarişi"},
    {id:5, to:"/çatdırılma"  , title:"Çatdırılma"},
    {id:6, to:"/zəmanət"  , title:"Zəmanət"},
    {id:7, to:"/haqqımızda"  , title:"Haqqımızda"},
    {id:8, to:"/əlaqə"  , title:"Əlaqə"}
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