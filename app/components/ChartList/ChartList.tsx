import { useState } from 'react';
import styles from './ChartList.module.css'
import PlayModal from './PlayModal';

const chartItems = [
  {
    position: 1,
    change: 'NEW',
    name: 'FinanceBuddy Pro',
    company: 'Financial Advisory Inc.',
    rating: 5,
    reviews: 482,
    icon: '🤖',
    imageUrl: '/images/voice-agents/finance-buddy.jpg'
  },
  {
    position: 2,
    change: 'UP',
    name: 'TravelEase',
    company: 'Global Bookings Ltd',
    rating: 4,
    reviews: 351,
    icon: '🏨',
    imageUrl: '/images/voice-agents/travel-ease.jpg'
  },
  {
    position: 3,
    change: 'DOWN',
    name: 'SalesGuru',
    company: 'Lead Conversion Systems',
    rating: 4,
    reviews: 298,
    icon: '🛒',
    imageUrl: '/images/voice-agents/sales-guru.jpg'
  },
  {
    position: 4,
    change: 'NEW',
    name: 'MediConnect',
    company: 'HealthTech Solutions',
    rating: 5,
    reviews: 187,
    icon: '🩺',
    imageUrl: '/images/voice-agents/medi-connect.jpg'
  },
  {
    position: 5,
    change: 'DOWN',
    name: 'TaskWizard',
    company: 'Productivity Tools Inc.',
    rating: 4,
    reviews: 243,
    icon: '💼',
    imageUrl: '/images/voice-agents/task-wizard.jpg'
  },
  {
    position: 6,
    change: 'UP',
    name: 'EduTutor',
    company: 'Learning Innovations',
    rating: 4,
    reviews: 178,
    icon: '📚'
  },
  {
    position: 7,
    change: 'DOWN',
    name: 'CustomerCare AI',
    company: 'ServiceFirst Technologies',
    rating: 4,
    reviews: 156,
    icon: '👨‍💼'
  },
  {
    position: 8,
    change: 'SAME',
    name: 'ShopAssist',
    company: 'Retail Solutions Group',
    rating: 3,
    reviews: 135,
    icon: '🛍️'
  },
  {
    position: 9,
    change: 'DOWN',
    name: 'InvestorHelper',
    company: 'FinTech Innovations',
    rating: 4,
    reviews: 124,
    icon: '💰'
  },
  {
    position: 10,
    change: 'NEW',
    name: 'VoiceConcierge',
    company: 'Luxury Services AI',
    rating: 5,
    reviews: 98,
    icon: '🤖'
  }
]

export default function ChartList() {
  const [selectedItem, setSelectedItem] = useState<typeof chartItems[0] | null>(null);

  return (
    <section className={styles.topCharts}>
      <h2 className={styles.sectionTitle}>
        Top 10 Voice Agents This Week <a href="#" className={styles.viewAll}>View Full Chart</a>
      </h2>
      
      <div className={styles.chartList}>
        <div className={styles.chartHeader}>
          <div>Position</div>
          <div>Change</div>
          <div>Agent</div>
          <div>Rating</div>
          <div>Controls</div>
        </div>
        
        {chartItems.map((item, index) => (
          <div key={index} className={styles.chartItem}>
            <div className={styles.chartPosition}>{item.position}</div>
            <div className={`${styles.positionChange} ${styles[item.change.toLowerCase()]}`}>
              {item.change === 'UP' ? '↑' : item.change === 'DOWN' ? '↓' : item.change}
            </div>
            <div className={styles.agentInfo}>
              <div className={styles.agentImage}>{item.icon}</div>
              <div className={styles.agentDetails}>
                <h3>{item.name}</h3>
                <p>{item.company}</p>
              </div>
            </div>
            <div className={styles.agentRating}>
              <div className={styles.stars}>{'★'.repeat(item.rating)}</div>
              <div className={styles.reviewCount}>{item.reviews} reviews</div>
            </div>
            <div className={styles.agentControls}>
              <button 
                className={styles.playButton}
                onClick={() => setSelectedItem(item)}
                aria-label={`Play ${item.name}`}
              >
                ▶
              </button>
              <button className={styles.stopButton}>■</button>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <PlayModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          imageUrl={selectedItem.imageUrl}
          title={selectedItem.name}
        />
      )}
    </section>
  )
} 