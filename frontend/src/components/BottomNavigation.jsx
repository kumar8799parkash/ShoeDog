import React, { useState } from 'react'
import './BottomNavigation.css'
import { Link } from 'react-router-dom'
import homeSvg from '../assets/svgs/home.svg'
import menSvg from '../assets/svgs/men.svg'
import womenSvg from '../assets/svgs/women.svg'
import cartSvg from '../assets/svgs/cart.svg'
import userProfileSvg from '../assets/svgs/user-profile.svg'

const BottomNavigation = () => {

    const [bottomNavLinks, setBottomNavLinks] = useState([
        { src: homeSvg, text: "Home" , link : "/" },
        { src: menSvg, text: "Men" , link : "/men" },
        { src: womenSvg, text: "Women" , link : "/women" },
        { src: cartSvg, text: "Cart" , link : "/cart" },
        { src: userProfileSvg, text: "Profile" , link : "/profile" }
    ]);

    return (
        <>
            <div className="bottom-navigation-cont h-16 bg-white">

                {
                    bottomNavLinks.map((navItem, itemIndex) => {
                        return (
                            <div key={itemIndex} className="bottom-nav-item bottom-nav-item-home cursor-pointer">
                                <Link to={navItem.link} className='h-6 flex flex-col items-center'>  <img className='h-full' src={navItem.src} alt="" />
                                    <span className="bottom-nav-item-text text-gray-700">{navItem.text}</span>
                                </Link>
                            </div>
                        )
                    })
                }

                {/* <div className="bottom-nav-item bottom-nav-item-home cursor-pointer">
                    <Link className='h-6 flex flex-col items-center'>  <img className='h-full' src={homeSvg} alt="" />
                        <span className="bottom-nav-item-text text-sm text-gray-700">Home</span>
                    </Link>
                </div> */}

            </div>
        </>
    )
}

export default BottomNavigation
