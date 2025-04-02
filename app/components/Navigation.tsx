'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LoginModal from './LoginModal';

const Navigation: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Voice Agent CHART BUSTERS</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500">
                Home
              </Link>
              <Link href="/charts" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500">
                Charts
              </Link>
              <Link href="/categories" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500">
                Categories
              </Link>
              <Link href="/submit" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500">
                Submit
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>
  );
};

export default Navigation; 