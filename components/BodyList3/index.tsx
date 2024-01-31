import Image from 'next/image'
import React from 'react'

const BodyList3 = () => {
  return (
    <div>
<div>
<h1 className='translate-y-20 text-center text-2xl text-slate-50'>Servis Məntəqələrimiz</h1>
<div>
<span>  <Image src="/mavi.png" alt='mavi' width={1490} height={738}/>
<span> <Image className='m-auto -translate-y-96 -mt-64 ' src="/Screen.png" alt='screen' width={1270} height={600}/></span>
</span>
</div>
</div>
        
    </div>
  )
}

export default BodyList3