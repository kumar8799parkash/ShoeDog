import React from 'react'
import './SectionContainer.css'
import exclusiveImage from '../assets/site-images/exclusive-images/exclusive1.webp'
import cartLogo from '../assets/svgs/cart.svg'

const SectionContainer = () => {
  return (
    <div>
      <div className="section-cont m-auto w-[83vw] h-[54vh] mb-10">
        <div className="section-heading-cont font-bold text-2xl h-[12%]">Our Exclusives</div>
        <div className="section-content-cont h-[88%] flex justify-between">

          <div className="section-content-item h-full w-[19.5%] border-gray-200 overflow-hidden">
            <div className="exclusive-text-cont flex justify-center items-center h-[11%] text-[14px] font-bold ">EXCLUSIVE</div>
            <div className="item-image-cont h-[72%]"> <img className='h-full w-full object-cover' src={exclusiveImage} alt="Exclusive-image-1" /> </div>
            <div className="item-name-cont h-[8%] text-[15px] font-bold pl-2">Snaype sandal for Men</div>

            <div className="item-price-cart-cont h-[9%] flex">
              <div className="item-price-cont h-full w-[85%] text-green-950 text-[15px] font-bold pl-2">&#8377;2577</div>
              <div className="item-cart-cont h-full w-[15%] pr-2 pb-2"> <img className='h-full w-full object-cover' src={cartLogo} alt="Cart Image" /> </div>
            </div>
          </div>

          <div className="section-content-item h-full w-[19.5%] border-gray-200 overflow-hidden">
            <div className="exclusive-text-cont flex justify-center items-center h-[11%] text-[14px] font-bold ">EXCLUSIVE</div>
            <div className="item-image-cont h-[72%]"> <img className='h-full w-full object-cover' src={exclusiveImage} alt="Exclusive-image-1" /> </div>
            <div className="item-name-cont h-[8%] text-[15px] font-bold pl-2">Snaype sandal for Men</div>

            <div className="item-price-cart-cont h-[9%] flex">
              <div className="item-price-cont h-full w-[85%] text-green-950 text-[15px] font-bold pl-2">&#8377;2577</div>
              <div className="item-cart-cont h-full w-[15%] pr-2 pb-2"> <img className='h-full w-full object-cover' src={cartLogo} alt="Cart Image" /> </div>
            </div>
          </div>

          <div className="section-content-item h-full w-[19.5%] border-gray-200 overflow-hidden">
            <div className="exclusive-text-cont flex justify-center items-center h-[11%] text-[14px] font-bold ">EXCLUSIVE</div>
            <div className="item-image-cont h-[72%]"> <img className='h-full w-full object-cover' src={exclusiveImage} alt="Exclusive-image-1" /> </div>
            <div className="item-name-cont h-[8%] text-[15px] font-bold pl-2">Snaype sandal for Men</div>

            <div className="item-price-cart-cont h-[9%] flex">
              <div className="item-price-cont h-full w-[85%] text-green-950 text-[15px] font-bold pl-2">&#8377;2577</div>
              <div className="item-cart-cont h-full w-[15%] pr-2 pb-2"> <img className='h-full w-full object-cover' src={cartLogo} alt="Cart Image" /> </div>
            </div>
          </div>

          <div className="section-content-item h-full w-[19.5%] border-gray-200 overflow-hidden">
            <div className="exclusive-text-cont flex justify-center items-center h-[11%] text-[14px] font-bold ">EXCLUSIVE</div>
            <div className="item-image-cont h-[72%]"> <img className='h-full w-full object-cover' src={exclusiveImage} alt="Exclusive-image-1" /> </div>
            <div className="item-name-cont h-[8%] text-[15px] font-bold pl-2">Snaype sandal for Men</div>

            <div className="item-price-cart-cont h-[9%] flex">
              <div className="item-price-cont h-full w-[85%] text-green-950 text-[15px] font-bold pl-2">&#8377;2577</div>
              <div className="item-cart-cont h-full w-[15%] pr-2 pb-2"> <img className='h-full w-full object-cover' src={cartLogo} alt="Cart Image" /> </div>
            </div>
          </div>

          <div className="section-content-item h-full w-[19.5%] border-gray-200 overflow-hidden">
            <div className="exclusive-text-cont flex justify-center items-center h-[11%] text-[14px] font-bold ">EXCLUSIVE</div>
            <div className="item-image-cont h-[72%]"> <img className='h-full w-full object-cover' src={exclusiveImage} alt="Exclusive-image-1" /> </div>
            <div className="item-name-cont h-[8%] text-[15px] font-bold pl-2">Snaype sandal for Men</div>

            <div className="item-price-cart-cont h-[9%] flex">
              <div className="item-price-cont h-full w-[85%] text-green-950 text-[15px] font-bold pl-2">&#8377;2577</div>
              <div className="item-cart-cont h-full w-[15%] pr-2 pb-2"> <img className='h-full w-full object-cover' src={cartLogo} alt="Cart Image" /> </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SectionContainer
