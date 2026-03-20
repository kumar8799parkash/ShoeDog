import React,{useState , useEffect} from 'react'
import Navbar from '../components/Navbar.jsx'
import PageImage from '../components/pageImage.jsx'

import BottomNavigation from '../components/BottomNavigation.jsx'
import ProductGrid from '../components/ProductGrid.jsx'


const men = () => {

  return (
    <>
      <Navbar/>
      <PageImage category='men'/>
      <BottomNavigation/>
      <ProductGrid category='men'/>
    </>
  )
}

export default men
