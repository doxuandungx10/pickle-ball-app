import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Trophy, DollarSign, BarChart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg flex justify-between items-center">
      <h1 className="font-bold text-xl">🎾 Pickleball Pro</h1>
      <div className="flex gap-4">
        <Link to="/" className="flex items-center gap-1"><Users size={18}/> Players</Link>
        <Link to="/matches" className="flex items-center gap-1"><Trophy size={18}/> Matches</Link>
      </div>
    </nav>
  );
}