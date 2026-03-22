import React, { useRef, useState } from 'react'
import { Link, replace, useNavigate } from 'react-router-dom'
import configObject from '../config.js'
import './signup.css'
import Navbar from '../components/Navbar.jsx'


const signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [messageText , setMessageText] = useState();

  function handleChange(e) {
    //console.log(e.target);
    const changedFieldName = e.target.name;
    const newValue = e.target.value;
    setFormData({ ...formData, [changedFieldName]: newValue });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${configObject.BACKEND_URL}/auth/signup`, {
        method: 'POST',
        headers : {
          'content-Type' : 'application/json'
        },
        body: JSON.stringify(formData)    // Equivalent to  JSON.stringify({name : "pk" , email:"pk@gmail.com" , password:"8799"})
      })

      const data = await(res.json());

      if(!res.ok){
        alert(data.message);
        return;
      }

      console.log(data.message);
      setMessageText(data.message);


      localStorage.setItem('jwtToken' , data.jwtToken);
      navigate('/login' , {replace : true});
    }catch(err){
      console.log("Error while fetching");
    }

  }


  return (
    <>
      <Navbar/>
      <div className="canvas min-h-screen">
        <div className="main-flex-box h-screen flex justify-center items-center bg-gray-100">
          <div className="signup-cont w-3/12 flex flex-col py-5 px-5 rounded-xl bg-white  shadow-2xl">
            <div className="brand-cont flex justify-center mt-3 mb-3 text-xl">Sign Up to<b>&nbsp;ShoeDog</b></div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Enter name : </label>   {/* htmlFor matches the id of the input */}
              <input type="text" name='name' id='name' className='nameInput' onChange={handleChange} value={formData.name} placeholder='type name here' autoFocus />

              <label htmlFor="email">Enter email : </label>
              <input type="email" name='email' id='email' className='emailInput' onChange={handleChange} value={formData.email} placeholder='type email here' />

              <label htmlFor="password">Enter password : </label>
              <input type="password" name='password' id='password' className='passwordInput' onChange={handleChange} value={formData.password} placeholder='type password here' />

              <div className="message-cont">{messageText}</div>

              <button type='submit' className='signup-btn'>Sign Up</button>

              <div className='flex justify-center'>Already have an account? <Link className='text-blue-900' to='/login'>Log in</Link></div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default signup
