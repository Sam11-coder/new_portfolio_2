import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import StatusBar from '../components/StatusBar'
import Hero from '../components/Hero'
import About from '../components/About'
import SkillsSection from '../components/SkillsSection'
import ProjectCards from '../components/ProjectCards'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import useReveal from '../hooks/useReveal'

export default function Home() {
  const location = useLocation()
  useReveal(location.pathname)

  // Links like /#projects from other pages land here, so scroll to that section.
  useEffect(() => {
    document.title = 'Sameer Ahmadi | IT, Cloud and Security'
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView()
    }
  }, [location.hash, location.key])

  return (
    <div className="min-h-screen">
      <StatusBar />
      <main id="main">
        <Hero />
        <About />
        <SkillsSection />
        <ProjectCards />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
