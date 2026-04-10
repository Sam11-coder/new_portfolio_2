import StatusBar from '../components/StatusBar'
import Hero from '../components/Hero'
import SkillsSection from '../components/SkillsSection'
import ProjectCards from '../components/ProjectCards'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', transition: 'background-color 0.2s ease' }}>
      <StatusBar />
      <Hero />
      <SkillsSection />
      <ProjectCards />
      <Footer />
    </div>
  )
}
