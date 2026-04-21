import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
function Landing() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Landing