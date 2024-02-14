"use client"
import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'
import Carousel from '@/components/Carousel'
import Home1 from '@/components/Home1'
import Home2 from '@/components/Home2'



const Home = () => {
  return (
    <div>
         <Header/>
      <HeaderRoutes/> 
     
        <Carousel/>
      <Home1/> 
      <Home2/> 
    



    </div>
  )
}

export default Home