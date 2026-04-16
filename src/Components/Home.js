import { Button, Card,Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import IMG1 from './img/img1.png'
import IMG2 from './img/img2.jpg'
import IMG3 from './img/img3.jpg'
import IMG4 from './img/img4.jpg'
import IMG5 from './img/img5.jpg'
import './Home.css'

function Home() {

   const data = [
      { name: 'Shutter Island', age: 27, url: IMG1, genre:'Hindi  ' },
      { name: 'Night Always Comes', age: 26, url: IMG2, genre:'  English' },
      { name: 'Carry-On 2024', age: 24, url: IMG3, genre:'  Hollwood' },
      { name: 'Love Again', age: 26, url: IMG4 , genre:' Bollwood '},
      { name: 'Adam 65', age: 24, url: IMG5, genre:' SouthMovie ' }]

   const navigate = useNavigate()
   function handlechange(user) {
   navigate('/header', { state: [user] })

   }

   const [viewoutput, setView] = useState(data)

   function handleChange(usedata){

   const filterData = data.filter(i=>(i.name.includes(usedata.target.value)) || (i.genre.includes(usedata.target.value)))
      setView(filterData)

   }



   return (

      <div>

         <h1 >HD Movie</h1>
         <Input placeholder='search Movies' onChange={handleChange} style={{ width: '800px', marginLeft: "500px ", height: "40px" }}></Input>

         <div className='main-div'>


            <br />

            {viewoutput .map(i => (
               <div className='showdiv'>
                  <Card hoverable className='cardstyle'>

                     {<img src={i.url} alt={i.name} width={100} />}
                     <h3>{i.name}</h3>
                     <p>{i.genre}</p>
                     <Button onClick={() => handlechange(i)}>view Details</Button>
                  </Card>
               </div>
            ))}

         </div>

      </div>
   )
}

export default Home