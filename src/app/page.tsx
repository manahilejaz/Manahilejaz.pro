import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}