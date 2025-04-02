import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>The Official Voice Agent Charts</h1>
        <p>Discover the hottest voice agents, launch your own, and watch it climb the charts. The ultimate destination for voice agent rankings and discovery.</p>
        
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search for voice agents..." />
          <button>Search</button>
        </div>
      </div>
    </section>
  )
} 