// import React from 'react'
// import { Row, Col } from 'antd'
// function Login() {
//   return (
//     <div>
//       <Row>
//         <Col span={6}>
//           <div style={{ border: '2px solid red', width: '200px' }}>
//             <h2>HTML</h2>
//             <p>this is a html section</p>
//           </div>
//         </Col>
//         <Col span={6}>
//           <div style={{ border: '2px solid red', width: '200px' }}>
//             <h2>HTML</h2>
//             <p>this is a html section</p>
//           </div>
//         </Col>
//         <Col span={6}>
//           <div style={{ border: '2px solid red', width: '200px' }}>
//             <h2>HTML</h2>
//             <p>this is a html section</p>
//           </div>
//         </Col>

//         <Col span={6}>
//           <div style={{ border: '2px solid red', width: '200px' }}>
//             <h2>HTML</h2>
//             <p>this is a html section</p>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default Login




import React from 'react'
import { Modal, Button } from 'antd';
import { useState } from 'react';
function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  function handleOpen(){
    setIsModalOpen(true)
  }
   function handlCancle(){
    setIsModalOpen(false)
  }
  return (
    <div>
      <Button onClick={handleOpen}>OPEN</Button>
      <Modal open={isModalOpen} onCancel={handlCancle} footer={null}>
        <input placeholder='name please'/><br /><br />
        <input placeholder='pass please'/> <br /> <br />
        <Button>Submit</Button>
      </Modal>
    </div>
  )
}

export default Login