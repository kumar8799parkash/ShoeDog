import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import configObject from '../config.js'
import { useNavigate } from 'react-router-dom'
import './login.css'
import Navbar from '../components/Navbar.jsx'


const login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [messageText, setMessagetext] = useState("");

  function handleChange(e) {
    /* const {name , value} = e.target; */
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });    /* this literally adds a new field name */
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${configObject.BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }


      //console.log(data);
      setMessagetext(data.message);
      localStorage.setItem('jwtToken', data.jwt);

      setTimeout(()=>{
        navigate('/', { replace: true });
      } , 2000)
      
    } catch (err) {
      //console.log("Error while login", err);
      setMessagetext(err);
    }

  }
  return (
    <>
      <Navbar/>
      <div className="canvas min-h-screen">   {/* min-h does not define the actual h to use h-full in child container we need fixed h in the parent container */}
        <div className="main-flex-box h-screen flex justify-center items-center bg-gray-100">
          <div className="login-cont w-3/12 flex flex-col py-5 px-5 rounded-xl bg-white  shadow-2xl">
            <div className="brand-cont flex justify-center mt-3 mb-3 text-xl">Log In to<b>&nbsp;ShoeDog</b></div>
            <form>

              <label htmlFor="email">Enter email : </label>
              <input type="email" name='email' id='email' className='emailInput' onChange={handleChange} value={formData.email} placeholder='type email here' />

              <label htmlFor="password">Enter password : </label>
              <input type="password" name='password' id='password' className='passwordInput' onChange={handleChange} value={formData.password} placeholder='type password here' />

              <div className="message-cont" >{messageText}</div>

              <button className='login-btn' onClick={handleSubmit}>Log In</button>

              <div className='flex justify-center'>Do not have an account? <Link className='text-blue-900' to='/signup'>Sign Up</Link></div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default login
