// import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
// import NavHeader from './components/header'

// Pages
import Home from '../src/pages/Home'
import RegistrationPage from '../src/pages/RegistrationPage'
import Fixture from '../src/pages/Fixturehome'
import Sports from '../src/pages/Sports'
import Countries from '../src/pages/Countries'
import MajorCountry from '../src/pages/MajorCountry'

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
