import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import EpaperPage from './pages/EpaperPage'
import ContactsPage from './pages/ContactsPage'
import Footer from './components/Footer'

function AppRoutes() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/epaper" element={<EpaperPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
       </Router>
  )
}

export default AppRoutes