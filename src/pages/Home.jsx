import React from 'react'
import Banner from '../components/Banner'
import FeaturesSection from '../components/FeaturesSection'
import Service from '../components/Service'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectSection'

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <Service />
      <AboutSection />
      <ProjectsSection />
    </div>
  )
}

export default Home
