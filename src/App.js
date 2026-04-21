import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Home from './Components/Landing/Home';
import About from './Components/Landing/About'
import Contact from './Components/Landing/Contact'
import Service from './Components/Landing/Services'
import Login from './Components/Landing/Login';

import Dashboard from './Components/Dashboard/Dashboard';
import Attendance from './Components/Dashboard/Attendance'
import Reports from './Components/Dashboard/Reports'
import Salary from './Components/Dashboard/Salary'
import Leave from './Components/Dashboard/Leave'
import RandomImg from './Components/Landing/RandomImg'
import AntdElement from './Components/Landing/AntdElement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/antdElement' element={<AntdElement />}></Route>
          {/*---------------- // add new-------------------------------------- */}
          <Route path='/randomImg' element={<RandomImg />}></Route>
         
        </Route>

        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Attendance />}></Route>
          <Route path='leave' element={<Leave />}></Route>
          <Route path='salary' element={<Salary />}></Route>
          <Route path='reports' element={<Reports />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App