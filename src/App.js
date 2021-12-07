// import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components
import NavHeader from './components/header';

// Pages
import Home from './pages/home';
import RegistrationPage from './pages/RegistrationPage';
import Fixture from './pages/fixturehome'
import Sports from './pages/sports';

function App () {
  return (
    <Router>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<RegistrationPage />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </Router>
  )
}

export default App;
