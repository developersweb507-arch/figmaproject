import axios from 'axios'
const baseUrl="http://127.0.0.1:8000"

export const getData=async()=>{
const users=await axios.get(`${baseUrl}/api/register/`)
return users
}