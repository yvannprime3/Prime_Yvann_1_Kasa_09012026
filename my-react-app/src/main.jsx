import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './App.scss'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error404 from './pages/Error404'
import Header from './components/Header'
import Logements from './pages/Logements'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/logements" element={<Logements />} />
          </Routes>
        <Footer />
    </Router>
  </StrictMode>
)
