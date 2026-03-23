import React , {useState} from 'react'
import logo from '../assets/logo.png'
import searchLogo from '../assets/svgs/search.svg'
import userProfileLogo from '../assets/svgs/user-profile.svg'
import bagLogo from '../assets/svgs/bag.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import LoginButton from './LoginButton.jsx'
import SignupButton from './SignupButton.jsx'
import ProfileButton from './ProfileButton.jsx'


const Navbar = () => {
  //const [token , setToken] = useState("");
  const userToken = localStorage.getItem('jwtToken');
  
  
  const navigate = useNavigate();

  function handleBagClick() {
    if(!userToken){
      navigate("/signup");
    }
    else{
      navigate("/cart");
    }
  }

  function handleProfileClick() {
    navigate("/profile");
  }

  return (
    <>
      <div className="main-navbar-cont w-full h-12 bg-green-900 flex px-20 justify-between">

        <div className="left-nav-cont h-full flex">
          <div className="brand-logo-cont h-full flex justify-center items-center mr-3 p-2 shrink-0">
            <Link to='/' className='h-full'> <img className='h-full cursor-pointer' src={logo} alt="Brand Logo" /> </Link>  
          </div>
          {/* Link is inline element, so its default height is content height(or auto) but here we set its height to h-full(which makes its height parent height ie h-12 ie fixed height) so inside img tag, h-full will work fine, if we do not set the height of the Link tag then Link's height is auto and for img, h-full means '100% of auto' which is undefined */}

          <div className="left-nav-item-cont">
            <Link to='/' className="left-nav-item left-nav-item1 cursor-pointer">Home</Link>
            {/* <div className="left-nav-item left-nav-item1 cursor-pointer">Men</div> */}
          </div>

          <div className="left-nav-item-cont">
            <Link to='/men' className="left-nav-item left-nav-item2 cursor-pointer">Men</Link>
            {/* <div className="left-nav-item left-nav-item1 cursor-pointer">Men</div> */}
          </div>

          <div className="left-nav-item-cont">
            <Link to='/women' className="left-nav-item left-nav-item3 cursor-pointer">Women</Link>
            {/* <div className="left-nav-item left-nav-item2 cursor-pointer">Women</div> */}
          </div>

          <div className="left-nav-item-cont">
            <Link to='/woods' className="left-nav-item left-nav-item4 cursor-pointer">Woods</Link>
            {/* <div className="left-nav-item left-nav-item2 cursor-pointer">Woods</div> */}
          </div>

          <div className="left-nav-item-cont">
            <Link to='/sale' className="left-nav-item left-nav-item5 cursor-pointer">Sale</Link>
            {/* <div className="left-nav-item left-nav-item3 cursor-pointer">Sale</div> */}
          </div>

          <div className="left-nav-item-cont">
            <Link to='/exclusive' className="left-nav-item left-nav-item6 cursor-pointer">Exclusive</Link>
            {/* <div className="left-nav-item left-nav-item5 cursor-pointer">Exclusive</div> */}
          </div>
        </div>

        <div className="right-nav-cont h-full flex">

          <div className="main-input-cont w-full h-full flex items-center mr-3">
            <div className="input-cont rounded-[5px] flex items-center h-3/4 pr-2 w-full">
              <div className="search-cont h-full p-2"><img className='h-full invert-100' src={searchLogo} alt="" /></div>
              <input className='text-white border-none outline-none text-[14px] w-full' type="text" placeholder='Search and press enter...' autoFocus />
            </div>
          </div>


          {
            (userToken) ? (<ProfileButton/>) : (<div className='h-full flex gap-2 items-center'><SignupButton/><LoginButton/></div>)
          }
          {/* <div className="user-profile-cont h-full p-2.5 mr-2 cursor-pointer"> <img className='h-full invert-100' src={userProfileLogo} onClick={handleProfileClick} alt="" /> </div> */}
          <div className="cart-cont h-full  ml-4 cursor-pointer"> <img className='h-full invert-100' src={bagLogo} onClick={handleBagClick} alt="" /> </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
