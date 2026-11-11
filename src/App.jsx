import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
      {/* The old category pages (/projects/solo etc.) are gone. Send those links to the projects section. */}
      <Route path="/projects/*" element={<Navigate to={{ pathname: '/', hash: '#projects' }} replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
