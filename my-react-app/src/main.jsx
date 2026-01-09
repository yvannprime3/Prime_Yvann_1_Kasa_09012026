import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error404 from './pages/Error404'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </Router>
  </StrictMode>,
)
