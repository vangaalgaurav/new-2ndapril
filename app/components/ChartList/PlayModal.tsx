'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ChartList.module.css';

interface PlayModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
  title: string;
}

const PlayModal: React.FC<PlayModalProps> = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button
            onClick={onClose}
            className={styles.closeButton}
          >
            ✕
          </button>
        </div>
        {imageUrl && (
          <div className={styles.modalImage}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className={styles.image}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayModal; 