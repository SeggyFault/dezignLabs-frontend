import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ContactsPage from './pages/ContactsPage'
import Footer from './components/Footer'

function AppRoutes() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
       </Router>
  )
}

export default AppRoutes