import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import FooterHint from '@/components/FooterHint'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer style={{
        background: 'var(--black)',
        borderTop: '0.5px solid rgba(255,255,255,0.05)',
        padding: '1.25rem 2.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <p style={{ fontSize: '0.7rem', color: 'var(--cream)', opacity: 0.2 }}>
          © {new Date().getFullYear()} Tiana Kayemba
        </p>
        <FooterHint />
      </footer>
    </>
  )
}