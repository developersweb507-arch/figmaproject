// import React from 'react'
// import { Modal, Button } from 'antd';
// import { useState } from 'react';
// function Login() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   function handleOpen(){
//     setIsModalOpen(true)
//   }
//    function handlCancle(){
//     setIsModalOpen(false)
//   }
//   return (
//     <div>
//       <Button onClick={handleOpen}>OPEN</Button>
//       <Modal open={isModalOpen} onCancel={handlCancle} footer={null}>
//         <input placeholder='name please'/><br /><br />
//         <input placeholder='pass please'/> <br /> <br />
//         <Button>Submit</Button>
//       </Modal>
//     </div>
//   )
// }

// export default Login

import { Button } from 'antd'
import React from 'react'
import { useState } from 'react'

function Demo21() {





const [count, setCount]=useState(0)




// function handle(){
//     setCount(count+1)
// }


const handlechange = (rdata) => {
   alert(rdata)
}


  return (

    <div>
<h1>{count} </h1>
{/* <Button onClick={()=>setCount(count +1)}>+1</Button> */}
<Button onClick={()=>handlechange("radha")}>+1</Button>

    </div>
  )
}

export default Demo21


// import React from 'react'
// import { Button } from 'antd';
// import { useState } from 'react';

// function Login() {
//   const [count, setCount] = useState(0)

//   // function Demo() {
//   //   setCount(count + 1)
//   // }

//   // const handleChange = () => {
//   //    setCount(count + 1)
//   // }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <Button onClick={() => setCount(count + 1)}>call</Button>
//     </div>
//   )
// }

// export default Login