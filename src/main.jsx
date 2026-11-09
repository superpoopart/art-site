import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Sketches from './pages/Sketches.jsx'
import Renders from './pages/Renders.jsx'
import Game from './pages/Game.jsx'
import Commissions from './pages/Commissions.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.PROD ? '/art-site' : '/'}>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sketches" element={<Sketches />} />
          <Route path="renders" element={<Renders />} />
          <Route path="game" element={<Game />} />
          <Route path="commissions" element={<Commissions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
