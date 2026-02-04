import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <div className='px-5 sm:px-16 flex mt-20  flex-col gap-20'>
        <AboutMe />
        <WorkExperience />
        <Projects />
        <Skills />
        <Footer />
      </div>


    </>
  )
}

export default App
