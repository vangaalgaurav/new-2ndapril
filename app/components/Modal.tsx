'use client';

import React from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | undefined;
  title: string | undefined;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title || ''}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        {imageUrl && (
          <div className="relative w-full h-64">
            <Image
              src={imageUrl}
              alt={title || ''}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal; 