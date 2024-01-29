import React from 'react'
import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'
import { Iprops } from '@/interface'

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