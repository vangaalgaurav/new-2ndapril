import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import ChartList from './components/ChartList/ChartList'
import Featured from './components/Featured/Featured'
import CTA from './components/CTA/CTA'

export default function Home() {
  return (
    <main className="main-content">
      <Header />
      <Hero />
      <section className="charts-section">
        <div className="container">
          <h1 className="main-title">The Official Voice Agent Charts</h1>
          <p className="section-description">Discover the top performing voice agents in the industry</p>
          <ChartList />
        </div>
      </section>
      <section className="categories-section">
        <div className="container">
          <Categories />
        </div>
      </section>
      <section className="featured-section">
        <div className="container">
          <Featured />
        </div>
      </section>
      <CTA />
    </main>
  )
} 