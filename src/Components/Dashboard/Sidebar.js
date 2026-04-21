import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div style={{border:'2px solid red',width:'200px',height:'99vh'}}>
      <li><Link to='/dashboard'>Attendance</Link></li>
      <li><Link to='/dashboard/leave'>Leave</Link></li>
      <li><Link to='/dashboard/salary'>Salary</Link></li>
      <li><Link to='/dashboard/reports'>Reports</Link></li>
    </div>
  )
}

export default Sidebar