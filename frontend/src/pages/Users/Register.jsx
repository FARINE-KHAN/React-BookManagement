import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

//rafce
export const Register = () => {
  const [inputs,setInputs]=useState({
    // title:"",
    name:"",
    phone:"",
    email:"",
    password:"",
    address:{
      street:"",
      city:"",
      pincode:""
    }
  })
  const [error,setError]=useState(null)
const handleSubmit=async (E)=>{
  E.preventDefault()
  try {
    await axios.post("/register",inputs)
  } catch (error) {
    setError(error.response.data)
  }
}
const handleChange =async(e)=>{
setInputs((prev)=>({
...prev,[e.target.name]:e.target.value
}))

}
  return (
    <div>
      <div>
        <form>
          <h1>
            Registeration
          </h1>
       <div>   
          {/* <select  name = "title" onChange={handleChange}>
            <option value = "Title" defaultValue></option>
            <option value = "Mr" >Mr</option>
            <option value = "Mrs">Mrs</option>
            <option value = "Miss">Miss</option>
         </select> */}
         </div>
    <input placeholder='Enter your Name' name="name" onChange={handleChange}/>
    <input type="number" placeholder='Enter your phone number' name="phone"onChange={handleChange}/>
    <input type="email" placeholder='Enter your email' name="email"onChange={handleChange}/>
    <input type="password" placeholder='Enter your password' name="password"onChange={handleChange}/>
        </form>
        <form>
  <h3>Address:</h3>
<input placeholder='Enter your street ' name="street"onChange={handleChange}/>
<input placeholder='Enter your city' name="city"onChange={handleChange}/>
<input placeholder='Enter your pincode' name="pincode"onChange={handleChange}/>
</form>
<div>
<Link to="/login">
<button onClick={handleSubmit}>
  Register
</button>
</Link>
{error && <p>
  {error}
  </p>}
</div>
      </div>
    </div>
    
  )
}
