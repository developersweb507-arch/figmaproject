import React from 'react'
import { useLocation } from 'react-router-dom'




function Header() {

  

  const location =useLocation()
  console.log(location.state)



  return (
    <div>
       
<h1>Header</h1>


{
location.state.map(i=>(
  <div style={{textAlign:'center'}}>
    <h1>{i.name}</h1>
   {<img src={i.url} alt={i.name} width={100} />}
   <p>{i.descriptions}</p>
    
  
  </div>
))}
</div>
  )
}

export default Header




