import React from 'react'
import Header from '@/components/Header'
import HeaderRoutes from '@/components/HeaderRoutes'
import { Iprops } from '@/interface'
import BodyList from '@/components/BodyList'

const layout = ({children}:Iprops) => {
  return (
    <div>
      <Header/>
      <HeaderRoutes/>
      <BodyList/>
{children}
    </div>
  )
}

export default layout