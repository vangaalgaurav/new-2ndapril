import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="#" className={styles.logo}>
          Voice Agent <span>CHART BUSTERS</span>
        </a>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Charts</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Submit</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 