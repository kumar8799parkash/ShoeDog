import React from 'react'
import './SectionContainer.css'
import exclusiveImage from '../assets/site-images/exclusive-images/exclusive1.webp'

const SectionContainer = () => {
  return (
    <div>
      <div className="section-cont border-2 border-black m-auto w-[83vw] h-[55vh]">
        <div className="section-heading-cont border-2 border-black font-bold text-2xl pb-3">Our Exclusives</div>
        <div className="section-content-cont border-2 border-black">

          <div className="section-content-item h-full ">
            <div className="exclusive-text-cont">EXCLUSIVE</div>
            <div className="item-image-cont h-"> <img className='h-full w-full object-cover' src={exclusiveImage} alt="Exclusive-image-1" /> </div>
            <div className="item-name-cont">Snaype sandal for Men</div>
            <div className="item-price-cont">2577</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SectionContainer
