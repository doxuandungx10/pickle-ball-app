import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlayerPage from './pages/PlayerPage';
import MatchPage from './pages/MatchPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<PlayerPage />} />
            <Route path="/matches" element={<MatchPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;