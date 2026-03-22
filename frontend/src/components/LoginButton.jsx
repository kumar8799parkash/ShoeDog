import React from 'react'
import './LoginButton.css'
import { useNavigate } from 'react-router-dom'

const LoginButton = () => {
const navigate = useNavigate();

function handleLogIn(){
    navigate('/login')
}

return (
    <>
      <button onClick={handleLogIn} className='loginBtn bg-gray-50 font-bold h-3/4 text-green-900 px-3 py-1 border-none outline-none text-sm cursor-pointer'>LogIn</button>
    </>
  )
}

export default LoginButton
