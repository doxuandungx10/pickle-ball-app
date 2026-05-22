import React from 'react';

export default function MatchPage() {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Ghi log trận đấu</h2>
      <img 
        src="https://images.pexels.com/photos/1036369/pexels-photo-1036369.jpeg" 
        alt="Pickleball court" 
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-600">Nhập kết quả các đội tham gia tại đây.</p>
    </div>
  );
}