import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroImage from '../components/HeroImage.jsx'
import SectionContainer from '../components/SectionContainer.jsx'

const home = () => {
  return (
    <>
      <Navbar/>
      <HeroImage/>
      <SectionContainer heading="Our Exclusives" category="exclusive"/>
      <SectionContainer heading="Sale" category="sale"/>
      <SectionContainer heading="Woods" category="woods"/>
      <SectionContainer heading="For Men" category="men"/>
      <SectionContainer heading="For Women" category="women"/>
    </>
  )
}

export default home
