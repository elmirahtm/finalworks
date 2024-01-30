import Image from 'next/image';
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const BodyList2 = () => {
  return (
    <div>

<div>
    <div><h1 className='translate-y-12 text-center font-bold text-xl max-sm:w-72 max-sm:m-auto'>Bütün brendlərin məişət texnikasını təmir edirik</h1></div>
</div>

<div>
    <span className='translate-y-16 flex justify-center gap-10'>
    <span className='translate-y-6 max-sm:-mt-6' ><IoIosArrowBack /></span>
   

<span > <Image src="/beko.png" alt='beko' width={83} height={65}/></span>
<span > <Image src="/blomberg.png" alt='blomberg' width={144} height={65}/></span>
<span > <Image src="/grundig.png" alt='grundig' width={182} height={65}/></span>
<span > <Image src="/riffel.png" alt='riffel' width={126} height={65}/></span>
<span className='mt-1.5 '> <Image src="/lg.png" alt='lg' width={72} height={65}/></span>
<span> <Image src="/samsung.png" alt='samsung' width={146} height={65}/></span>


<span className='translate-y-6 max-sm:-mt-6'><IoIosArrowForward /></span>
    </span>
</div>

<div>
<div >
<span className='relative'>
<h1 className=' translate-y-64 text-center text-black'>Təmir</h1>
  
   <Image className='translate-y-36 ' src="/bg.png" alt='bg' width={1490} height={1100}/>

</span>
</div>


</div>

    </div>
  )
}

export default BodyList2