import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:category" element={<CategoryPage />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
    </Routes>
  )
}
