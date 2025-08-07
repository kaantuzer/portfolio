import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import CV from './components/Cv.jsx';
import Social from './components/Social.jsx';




function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <Social></Social>
      <CV></CV>
      <Contact></Contact>

    </>
  )
}

export default App
