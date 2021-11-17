import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components
// import Header from './components/header';

// Pages
import Home from './pages/home';
import Login from './pages/login';

function App () {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
