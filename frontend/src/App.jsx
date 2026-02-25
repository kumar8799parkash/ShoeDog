import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroImage from './components/HeroImage'
import SectionContainer from './components/SectionContainer'

function App() {

  return (
    <>
      <Navbar/>
      <HeroImage/>
      <SectionContainer/>
    </>
  )
}

export default App
