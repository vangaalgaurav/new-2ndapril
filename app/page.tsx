import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import ChartList from './components/ChartList/ChartList'
import Featured from './components/Featured/Featured'
import CTA from './components/CTA/CTA'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container">
        <h1 className="main-title">The Official Voice Agent Charts</h1>
        <ChartList />
      </div>
      <Hero />
      <div className="container">
        <Categories />
      </div>
      <Featured />
      <CTA />
    </main>
  )
} 