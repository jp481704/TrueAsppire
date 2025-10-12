import React from 'react'
import HeroBanner from '../components/HeroBanner'
import OurService from '../components/OurService'
import OurValues from '../components/OurValues'
import AboutUs from '../components/AboutUs'
import OurStrategy from '../components/OurStrategy'
import Clients from '../components/Clients'

const Home = () => {
  return (
    <div>
          <HeroBanner />
  <OurService />
  <OurValues/>
  <AboutUs/>
  <OurStrategy/>
  <Clients/>
    </div>
  )
}

export default Home