import React from 'react'
import userProfileLogo from '../assets/svgs/user-profile.svg'
import { useNavigate } from 'react-router-dom';

const ProfileButton = () => {
    const navigate = useNavigate();
    function handleProfileClick() {
        const userToken = localStorage.getItem('jwtToken');
        if(!userToken){
            navigate("/signup");
        }
        else{
            navigate("/profile");
        }
    }
    return (
        <div className="user-profile-cont h-full ml-3 mr-2 cursor-pointer"> <img className='h-full invert-100' src={userProfileLogo} onClick={handleProfileClick} alt="" /> </div>
    )
}

export default ProfileButton