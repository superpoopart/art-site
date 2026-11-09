import { Outlet } from 'react-router-dom'
import BackgroundIllustration from './components/BackgroundIllustration.jsx'
import './App.css'

function App() {
  return (
    <div className="shell">
      <BackgroundIllustration type="pattern" variant="default" />
      <Outlet />
    </div>
  )
}

export default App
