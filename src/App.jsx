import React from 'react'
import { AU } from './Components/Assets'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About-us/About'
import Service from './Components/Services/Service'
import Team from './Components/Our_Team/Team'
import Projects from './Components/Our_Projects/Projects'
import Client from './Components/Clients/Client'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>  
      <Team/>
      <Projects/>
      <Client/>
      <Footer/>
    </div>
  )
}

export default App
