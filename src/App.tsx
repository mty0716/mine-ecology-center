import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NewsPage from './pages/NewsPage'
import PeoplePage from './pages/PeoplePage'
import ResearchPage from './pages/ResearchPage'
import AchievementsPage from './pages/AchievementsPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-slate-900">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/people" element={<PeoplePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
