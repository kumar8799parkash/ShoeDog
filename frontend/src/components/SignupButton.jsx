import React from 'react'
import './SignupButton.css'
import { useNavigate } from 'react-router-dom'

const SignupButton = () => {
const navigate = useNavigate();

function handleSignUp(){
    navigate('/signup')
}

return (
    <>
      <button onClick={handleSignUp} className='signupBtn bg-gray-50 font-bold h-3/4 text-green-900 px-3 py-1 border-none outline-none text-sm cursor-pointer'>SignUp</button>
    </>
  )
}

export default SignupButton