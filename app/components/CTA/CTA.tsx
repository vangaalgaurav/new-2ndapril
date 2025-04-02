import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2>Launch Your Voice Agent Today</h2>
          <p>Join the ranks of the top voice agents and let users discover your innovative solution. Enter your voice agent URL, set your launch date, and watch your agent climb the charts.</p>
          <div className={styles.ctaForm}>
            <input 
              type="url" 
              placeholder="Enter your voice agent URL" 
              className={styles.urlInput}
            />
            <button className={styles.ctaButton}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  )
} 