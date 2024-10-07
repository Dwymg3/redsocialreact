import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import MyProfilePage from './components/pages/MyProfilePage';
import FeedPage from './components/pages/FeedPage';
import ProfilePage from './components/pages/ProfilePage';

function App() {
  return (
      <Router>
          <Routes> 
               <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/myprofile" element={<MyProfilePage />} />
                <Route path="/profile/:username" element={<ProfilePage />} />
              {/* Otras rutas aquí */}
          </Routes> 
      </Router>
  );
}

export default App;