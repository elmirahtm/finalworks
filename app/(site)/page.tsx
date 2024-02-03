"use client"
import BodyList2 from '@/components/BodyList2'
import BodyList3 from '@/components/BodyList3'
import Carousel from '@/components/Carousel'
import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'



const Home = () => {
  return (
    <div>
         <Header/>
      <HeaderRoutes/> 
     
        <Carousel/>
      <BodyList2/> 
      <BodyList3/> 
    



    </div>
  )
}

export default Home