import React from 'react'
import { useEffect, useState } from 'react'

function Attendance() {
  const [count, setCount] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setCount(data))
  }, [])

  
  return (
    <div>
      {count.map(i => (
        <div>
          <h2>{i.name}</h2>
          <p>{i.username}</p>
          <p>{i.email}</p>
        </div>
      ))}

    </div>
  )
}

export default Attendance