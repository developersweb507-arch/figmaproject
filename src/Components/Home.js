import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

function Home() {
  return (
    <div style={{display:"flex"}}>

<Outlet/>

    </div>
  )
}

export default Home