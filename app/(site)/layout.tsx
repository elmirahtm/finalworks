import React from 'react'
import { Iprops } from '../interface'
import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'

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