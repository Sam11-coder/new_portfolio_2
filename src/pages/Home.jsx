import StatusBar from '../components/StatusBar'
import Hero from '../components/Hero'
import ProjectCards from '../components/ProjectCards'
import FleetSection from '../components/FleetSection'
import CloserSection from '../components/CloserSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', transition: 'background-color 0.2s ease' }}>
      <StatusBar />
      <Hero />
      <ProjectCards />
      <FleetSection />
      <CloserSection />
      <Footer />
    </div>
  )
}
