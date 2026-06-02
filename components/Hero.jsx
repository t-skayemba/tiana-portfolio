'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const headlineWords1 = [
    { text: 'I',               gold: false},
    { text: 'build',           gold: false},
    { text: 'AI',              gold: true},
    { text: 'systems',         gold: false},
    { text: 'for',             gold: false},
    { text: 'regulated',       gold: true},
    { text: 'industries',      gold: false},
]

const headlineWords2 = [
    { text: 'Also:',           gold: false},
    { text: '4th',             gold: false},
    { text: 'year',            gold: false},
    { text: 'CS',              gold: true},
    { text: '@',               gold: true},
    { text: 'UofT',            gold: true},
]

const tags = [
  { label: 'Document Processing',         sage: true },
  { label: 'Workflow Automation',         sage: false },
  { label: 'Canadian Data Residency',     sage: true  },
  { label: 'AWS Canada Central',          sage: false },
]

export default function Hero() {
    return (
    <section className={styles.hero} id="hero">
        <div className={styles.heroLeft}>
        <motion.div className={styles.nameBlock}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
            <div className={styles.nameFirst}>Tiana</div>
            <div className={styles.nameLast}>Kayemba</div>
        </motion.div>

        <motion.h1 className={styles.heading}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            
            <div className={styles.headingLine}>
                {headlineWords1.map((w, i) => (
                <motion.span key={i}
                    className={`${styles.headingWord} ${w.gold ? styles.headingWordGold : ''}`}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.35 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}>
                    {w.text}{' '}
                </motion.span>
                ))}
            </div>

            <div className={styles.headingLine}>
                {headlineWords2.map((w, i) => (
                <motion.span key={i}
                    className={`${styles.headingWord} ${w.gold ? styles.headingWordGold : ''}`}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.7 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}>
                    {w.text}{' '}
                </motion.span>
                ))}
            </div>
        </motion.h1>
        </div>

        <div className={styles.heroRight}>
        <motion.p className={styles.eyebrow}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            Founder & AI Systems Engineer · Refraxis
        </motion.p>

        <motion.p className={styles.sub}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}>
            AI Systems Engineer and Founder of Refraxis.
            I build production document processing and workflow automation for Canadian regulated industries.
        </motion.p>

        <motion.div className={styles.tagRow}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}>
            {tags.map(t => (
            <span key={t.label}
                className={`${styles.tag} ${t.sage ? styles.tagSage : ''}`}>
                {t.label}
            </span>
            ))}
        </motion.div>

        <motion.div className={styles.btnRow}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}>
            <MagneticButton href="#projects" className={styles.btnPrimary}>
            See my work
            </MagneticButton>
            <a href="#contact" className={styles.btnGhost}>Get in touch</a>
        </motion.div>

        <motion.div className={styles.statRow}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}>
            {[
            { num: '5', label: 'Systems deployed' },
            { num: '4', label: 'Industry specialties' },
            ].map((s, i) => (
            <div key={i} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
            </div>
            ))}
        </motion.div>
        </div>
    </section>
    )
}

function MagneticButton({ href, className, children }) {
  const ref = useRef(null)

  function onMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.05)`
  }

  function onMouseLeave() {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <a href={href} ref={ref} className={className}
      onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      style={{ transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.2s' }}>
      {children}
    </a>
  )
}