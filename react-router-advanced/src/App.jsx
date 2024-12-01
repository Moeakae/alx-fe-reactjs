import React from 'react';
import { BrowserRouter as Router, Routes, ProtectedRoute, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './components/Profile';
import Login from './pages/Login';
function App() {
  retun (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

  

export default App;
