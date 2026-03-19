import React,{useState , useEffect} from 'react'
import Navbar from '../components/Navbar.jsx'
import PageImage from '../components/pageImage.jsx'

import BottomNavigation from '../components/BottomNavigation.jsx'
import productGrid from '../components/productGrid.jsx'

import configObject from '../config.js'


const men = () => {

  return (
    <>
      <Navbar/>
      <PageImage category='men'/>
      <productGrid category='men'/>
      <BottomNavigation/>
    </>
  )
}

export default men
