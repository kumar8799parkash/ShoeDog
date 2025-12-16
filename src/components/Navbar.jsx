import React from 'react'
import logo from '../assets/logo.png'
import searchLogo from '../assets/svgs/search.svg'
import userProfileLogo from '../assets/svgs/user-profile.svg'
import cartLogo from '../assets/svgs/cart.svg'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <div className="main-navbar-cont w-full h-12 bg-green-900 flex px-20 justify-between">

        <div className="left-nav-cont h-full flex">
          <div className="brand-logo-cont h-full flex justify-center items-center mr-3 p-2 shrink-0"> <img className='h-full cursor-pointer' src={logo} alt="Brand Logo" /> </div>

          <div className="left-nav-item-cont">
            <div className="left-nav-item left-nav-item1 cursor-pointer">Men</div>
          </div>
          <div className="left-nav-item-cont">
            <div className="left-nav-item left-nav-item2 cursor-pointer">Women</div>
          </div>
          <div className="left-nav-item-cont">
            <div className="left-nav-item left-nav-item2 cursor-pointer">Woods</div>
          </div>
          <div className="left-nav-item-cont">
            <div className="left-nav-item left-nav-item3 cursor-pointer">Sale</div>
          </div>
          <div className="left-nav-item-cont">
            <div className="left-nav-item left-nav-item5 cursor-pointer">Exclusive</div>
          </div>
        </div>

        <div className="right-nav-cont h-full flex">

          <div className="main-input-cont w-full h-full flex items-center mr-3">
            <div className="input-cont rounded-[5px] flex items-center h-3/4 pr-2 w-full">
              <div className="search-cont h-full p-2"><img className='h-full invert-100' src={searchLogo} alt="" /></div>
              <input className='text-white border-none outline-none text-[14px] w-full' type="text" placeholder='Search and press enter...' autoFocus />
            </div>
          </div>


          <div className="user-profile-cont h-full p-2.5 mr-2 cursor-pointer"> <img className='h-full invert-100' src={userProfileLogo} alt="" /> </div>
          <div className="cart-cont h-full p-1.5 cursor-pointer"> <img className='h-full invert-100' src={cartLogo} alt="" /> </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
