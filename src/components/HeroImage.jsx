import React from 'react'
import HeroImage1 from '../assets/site-images/shoedog-hero-image1.webp'
import HeroImage2 from '../assets/site-images/shoedog-hero-image2.webp'
import './HeroImage.css'

const HeroImage = () => {
  return (
    <div>
      <div className="hero-image-cont h-[88vh] w-full box-border">
        <img src={HeroImage1} className='h-full w-full object-cover' alt="Hero Image-1" />
      </div>
    </div>
  )
}

export default HeroImage
