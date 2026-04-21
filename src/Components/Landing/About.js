import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { Card } from 'antd';
function About() {
  const location = useLocation()
  const navigate=useNavigate()

  const data = [
    { id: 1, category: 'electronic', sucat: 'Mobile'},
    { id: 2, category: 'grocery', sucat: 'milk' },
    { id: 3, category: 'fashion', sucat: 'shoes' },
    { id: 4, category: 'electronic', sucat: 'TV' },
    { id: 5, category: 'grocery', sucat: 'pulse' },
    { id: 6, category: 'fashion', sucat: 'cloths' },
    { id: 7, category: 'fashion', sucat: 'watch' },
    { id: 8, category: 'fashion', sucat: 'nackless' },
  ]
  const filterData=data.filter(i=>(i.category===location.state))

  function handleOk(subategory){
      alert(subategory)
      navigate('/contact',{state:subategory})
  }
  return (
    <div style={{display:'flex',margin:'30px',justifyContent:'space-evenly'}}>
      {filterData.map(i => (
        <Card style={{width:'30%',textAlign:'center'}}>
            <h2>{i.category}</h2>
            <p style={{fontWeight:'900'}}>{i.sucat}</p>
            <button onClick={()=>handleOk(i.sucat)}>More Details</button>
        </Card>
      ))}

    </div>
  )
}

export default About