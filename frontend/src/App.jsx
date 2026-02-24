import { useState } from 'react'
import reactLogo from './assets/svgs/react.svg'
import viteLogo from '/vite.svg'
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
