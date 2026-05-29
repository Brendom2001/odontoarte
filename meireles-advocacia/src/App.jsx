import { ThemeProvider } from './context/ThemeContext'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Dores from './components/Dores'
import Servicos from './components/Servicos'
import Counters from './components/Counters'
import ComoFunciona from './components/ComoFunciona'
import Depoimentos from './components/Depoimentos'
import CTACentral from './components/CTACentral'
import Sobre from './components/Sobre'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileFloatingCTA from './components/MobileFloatingCTA'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Dores />
          <Servicos />
          <Counters />
          <ComoFunciona />
          <Depoimentos />
          <CTACentral />
          <Sobre />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <MobileFloatingCTA />
      </div>
    </ThemeProvider>
  )
}
