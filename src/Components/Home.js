import { Button, Descriptions } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import IMG1 from './img/img1.png'
import IMG2 from './img/img2.jpg'
import IMG3 from './img/img3.jpg'

function Home() {

  const navigate = useNavigate()

  function handlechange(user) {
    navigate('/header', { state: [user] })

  }


  const data = [
    { name: 'Shutter Island', 
      descriptions: 'Shutter Island action-thriller film that premiered on Netflix on December 13, 2024. Directed by Jaume Collet-Serra, it follows a high-stakes standoff at an airport on Christmas Eve. ',
       age: 27, url: IMG1 },
    { name: 'Night Always Comes',
       descriptions: 'Night Always Comes action-thriller film that premiered on Netflix on December 13, 2024. Directed by Jaume Collet-Serra, it follows a high-stakes standoff at an airport on Christmas Eve. ',
        age: 26, url: IMG2 },
    { name: 'Carry-On 2024',
       descriptions: 'Carry-On is a 2024 action-thriller film that premiered on Netflix on December 13, 2024. Directed by Jaume Collet-Serra, it follows a high-stakes standoff at an airport on Christmas Eve. ', 
       age: 24, url: IMG3 }
  ]

  return (

       <div style={{display:"flex", justifyContent:"space-evenly"}}>

{data.map(i=>(
  <div>
    
    {<img src={i.url} alt={i.name} width={100} />}
    <h3>{i.name}</h3> 
    <Button onClick={()=>handlechange(i)}>view Details</Button>
  </div>
))}

       </div>
      )
}

      export default Home