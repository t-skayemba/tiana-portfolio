'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import styles from './About.module.css'

const skills = [
  'Python', 'JavaScript', 'HTML', 'Flask',
  'PostgreSQL', 'SQL', 'SQLAlchemy', 'REST APIs',
  'Chart.js', 'Tailwind CSS', 'React', 'Next.js',
  'OpenAI API', 'Anthropic API', 'RAG', 'Prompt Engineering',
  'Machine Learning', 'AWS', 'OOP', 'Railway',
]

const aiSkills = ['RAG', 'Fine-tuning', 'LLMs']

function FadeUp({ children, delay = 0, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <p className={styles.label}>About</p>
      <div className={styles.grid}>

        {/* Column 1: Bio */}
        <FadeUp delay={0}>
          <h2 className={styles.heading}>A bit about me</h2>
          <p className={styles.lede}>
            "I'm a Fourth-year CS student at the University of Toronto -
            learning fast and building things that actually work."
          </p>
          <p className={styles.body}>
            I got into AI because I wanted to build things that felt like magic
            but worked like engineering. Cadence was my first real attempt at
            that — using health data and LLMs to give people something genuinely
            useful. I'm still early in that journey, but I build carefully and
            I'm obsessed with the details.
          </p>
          <p className={styles.body}>
            Outside of AI, I have a solid CS foundation — data structures,
            algorithms, databases, systems — and I've picked up full-stack
            skills along the way. I'm looking for projects and opportunities
            where I can keep growing while contributing something real. 
          </p>
        </FadeUp>

        {/* Column 2: Photo */}
        <FadeUp delay={0.1} className={styles.photoCol}>
          <div className={styles.photoWrap}>
            <Image
              src="/tiana-headshot.jpg"
              alt="Tiana Kayemba"
              fill
              className={styles.photo}
            />
          </div>
        </FadeUp>

      </div>

      {/* Full-width skills */}
      <FadeUp delay={0.2}>
        <div className={styles.skillsBox}>
          <p className={styles.skillsHeading}>Things I work with</p>
          <div className={styles.pillGrid}>
            {skills.map(s => (
              <span key={s}
                className={`${styles.pill} ${aiSkills.includes(s) ? styles.pillGold : ''}`}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  )
}