import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ContactSection from './components/ContactSection'
import CremationGrounds from './components/CremationGrounds'
import FloatingActions from './components/FloatingActions'
import Footer from './components/Footer'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import Services from './components/Services'
import WhyUsSection from './components/WhyUsSection'
import './App.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')

    if (!hash) return

    const element = document.getElementById(hash)
    if (element) {
      window.setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location])

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#4a1f0e]">
      <Navbar />

      <main>
        <Hero />
        <IntroSection />
        <Services />
        <CremationGrounds />
        <WhyUsSection />
        <PricingSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  )
}

export default App
