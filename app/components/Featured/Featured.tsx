import styles from './Featured.module.css'

const featuredAgents = [
  {
    icon: '💰',
    name: 'FinanceBuddy Pro',
    rank: '#1',
    description: 'A comprehensive financial assistant that helps with budgeting, investment recommendations, and financial planning.',
    category: 'Financial',
    releaseDate: 'Mar 28, 2025'
  },
  {
    icon: '🏨',
    name: 'TravelEase',
    rank: '#2',
    description: 'Book hotels, flights, and discover travel destinations with personalized recommendations.',
    category: 'Travel & Hospitality',
    releaseDate: 'Mar 15, 2025'
  },
  {
    icon: '🛒',
    name: 'SalesGuru',
    rank: '#3',
    description: 'Generate leads, qualify prospects, and nurture client relationships with this sales automation assistant.',
    category: 'Sales & Marketing',
    releaseDate: 'Feb 20, 2025'
  }
]

export default function Featured() {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Voice Agents</h2>
        
        <div className={styles.featuredGrid}>
          {featuredAgents.map((agent, index) => (
            <div key={index} className={styles.featuredCard}>
              <div className={styles.featuredImage}>{agent.icon}</div>
              <div className={styles.featuredContent}>
                <div className={styles.featuredTitle}>
                  <span>{agent.name}</span>
                  <span className={styles.featuredRank}>{agent.rank}</span>
                </div>
                <p className={styles.featuredDescription}>{agent.description}</p>
                <div className={styles.featuredMeta}>
                  <span className={styles.featuredCategory}>{agent.category}</span>
                  <span className={styles.releaseDate}>Released: {agent.releaseDate}</span>
                </div>
                <div className={styles.agentControls}>
                  <button className={styles.playButton}>▶</button>
                  <button className={styles.stopButton}>■</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 