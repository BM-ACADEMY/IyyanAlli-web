import React from 'react'
import Navbar from './Components/Layout/Navbar'
import Homepage from './Components/Pages/Homepage'
import FounderSection from './Components/Pages/FounderSection'
import AboutUs from './Components/Pages/AboutUs'
import Brands from './Components/Pages/Brands'
import MissionVision from './Components/Pages/vission&missison'
import SuccessStories from './Components/Pages/SuccessStories'
import ContactSection from './Components/Pages/ContactSection'
import Footer from './Components/Layout/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <FounderSection/>
      <AboutUs/>
      <Brands/>
      <MissionVision/>
      <SuccessStories/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App  