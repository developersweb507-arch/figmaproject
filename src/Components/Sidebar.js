import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Sidebar() {
  return (
    <div><li><Link to='/'>Home</Link></li>
<li><Link to='/employe'>Emplooys</Link></li>
<li><Link to='/employe'> + add Employee</Link></li>
<li><Link to='/sidebar'> sidebar</Link></li>

<Outlet/>

</div>



  )
}

export default Sidebar