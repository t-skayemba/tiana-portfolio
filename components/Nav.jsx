'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Nav.module.css'

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [time, setTime] = useState('')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Live Time
    useEffect(() => {
        function update() {
            const t = new Date().toLocaleTimeString('en-CA', {
                timeZone: 'America/Toronto',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            })
            setTime(t)
        }
        update()
        const id = setInterval(update, 1000)
        return() => clearInterval(id)
    }, [])

    return (
        <motion.nav
            className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
    >
      <div className={styles.navLeft}>
        <span className={styles.logo}>Tiana Kayemba</span>
        <span className={styles.available} style={{ fontFamily: 'var(--font-sans', fontStyle: 'normal'}}>
          <span className={styles.availDot} />
          Available for contracts
        </span>
      </div>
      <ul className={styles.links}>
        {time && <li><span className={styles.timeDisplay}>Toronto · {time}</span></li>}
        <li><a href="#projects">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact" className={styles.cta}>Let's talk →</a></li>
      </ul>
    </motion.nav>
  )
}