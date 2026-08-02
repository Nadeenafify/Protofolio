import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className='max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 divide-y divide-purple-100'>
          <AboutMe />
          <Education />
          <WorkExperience />
          <Projects />
          <Skills />
        </div>
      </main>
      <div className='max-w-6xl mx-auto px-5 sm:px-8 lg:px-12'>
        <Footer />
      </div>
    </>
  )
}

export default App
