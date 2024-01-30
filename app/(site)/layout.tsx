import React from 'react'
import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'
import { Iprops } from '@/interface'
import BodyList from '@/components/BodyList'
import BodyList2 from '@/components/BodyList2'

const layout = ({children}:Iprops) => {
  return (
    <div>
      <Header/>
      <HeaderRoutes/>
     

{children}
    </div>
  )
}

export default layout