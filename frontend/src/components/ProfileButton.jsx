import React from 'react'
import userProfileLogo from '../assets/svgs/user-profile.svg'
import { useNavigate } from 'react-router-dom';

const ProfileButton = () => {
    const navigate = useNavigate();
    function handleProfileClick() {
        navigate("/profile");
    }
    return (
        <div className="user-profile-cont h-full p-1.5 mr-2 cursor-pointer"> <img className='h-full invert-100' src={userProfileLogo} onClick={handleProfileClick} alt="" /> </div>
    )
}

export default ProfileButton
