import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  return (
      <Router>
          <Routes> 
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* Otras rutas aquí */}
          </Routes> 
      </Router>
  );
}

export default App;