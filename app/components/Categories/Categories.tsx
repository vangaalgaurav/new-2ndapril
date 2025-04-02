import styles from './Categories.module.css'

const categories = [
  { icon: '💰', title: 'Financial', description: 'Banking & Investment' },
  { icon: '🛒', title: 'Sales & Marketing', description: 'Lead generation & Sales' },
  { icon: '🏨', title: 'Travel & Hospitality', description: 'Hotel & Booking' },
  { icon: '🩺', title: 'Healthcare', description: 'Medical assistance' },
  { icon: '📚', title: 'Education', description: 'Learning & Tutoring' },
  { icon: '🤖', title: 'Productivity', description: 'Task management' },
]

export default function Categories() {
  return (
    <>
      <h2 className={styles.sectionTitle}>
        Browse Categories <a href="#" className={styles.viewAll}>View All</a>
      </h2>
      
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            <div className={styles.categoryIcon}>{category.icon}</div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </>
  )
} 