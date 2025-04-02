'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

interface ChartItem {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  category: string;
  position: number;
  change: string;
}

const ChartList: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ChartItem | null>(null);

  const chartItems: ChartItem[] = [
    {
      id: 1,
      name: "FinanceBuddy Pro",
      imageUrl: "/images/finance-buddy.jpg",
      rating: 5,
      reviews: 482,
      category: "Financial",
      position: 1,
      change: "NEW"
    },
    // ... other items
  ];

  return (
    <div className="space-y-4">
      {chartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-bold">{item.position}</span>
            <span className="text-sm text-gray-500">{item.change}</span>
            <span className="text-xl">{item.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-yellow-500">{'★'.repeat(item.rating)}</span>
            <span className="text-gray-500">{item.reviews} reviews</span>
            <button
              onClick={() => setSelectedItem(item)}
              className="p-2 text-blue-500 hover:text-blue-700"
            >
              ▶
            </button>
          </div>
        </div>
      ))}
      
      <Modal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        imageUrl={selectedItem?.imageUrl}
        title={selectedItem?.name}
      />
    </div>
  );
};

export default ChartList;