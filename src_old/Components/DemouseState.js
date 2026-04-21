import React from 'react'
import { Card, Input, Button } from 'antd'

import { useState } from 'react'

function DemouseState() {

  const data = [
   
    { name: 'tomesh', class: 'bca', age: 26, image: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?cs=srgb&dl=cascade-clouds-cool-wallpaper-210186.jpg&fm=jpg' },
    { name: 'dwarika', class: 'bsc', age: 24, image: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-images-of-nature-download.jpg' }
  ]
  
  const [interns,setInterns]=useState(data)


  function handleChange(e) {
    const filterData = data.filter(i => (i.class.includes(e.target.value))||(i.name.includes(e.target.value)))
    setInterns(filterData)
  }

  return (
    <div>
      <br /><br />
      <Input style={{ width: '200px' }} onChange={handleChange} />

      <br /> <br />
      {
        interns.map(i => (
          <Card style={{ width: '20%', textAlign: 'center' }} hoverable>
            <img src={i.image} height={100} />
            <h2>{i.name}</h2>
            <h2>{i.class}</h2>
          </Card>
        ))
      }
    </div>
  )
}

export default DemouseState