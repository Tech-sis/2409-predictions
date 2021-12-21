// import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

// Components
// import NavHeader from './components/header'

// Pages
import Home from './pages/home'
import RegistrationPage from './pages/RegistrationPage'
import Fixture from './pages/fixturehome'
import Sports from './pages/sports'
import Countries from './pages/Countries'
import MajorCountry from './pages/MajorCountry'

function App() {

  return (
    <div>
      <Router>
        {/* <NavHeader /> */}
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/landing" element={<Home />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/country" element={<MajorCountry />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
