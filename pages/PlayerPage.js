import React, { useState } from 'react';

export default function PlayerPage() {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Quản lý người chơi</h2>
      <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-lg">
        <p className="text-gray-500">Danh sách người chơi trống</p>
      </div>
    </div>
  );
}