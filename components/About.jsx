'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import styles from './About.module.css'

const skills = [
  'Python', 'JavaScript', 'HTML', 'LangGraph',
  'PostgreSQL', 'SQL', 'SQLAlchemy', 'REST APIs',
  'Chart.js', 'Tailwind CSS', 'React', 'Next.js',
  'OpenAI API', 'Anthropic API', 'RAG', 'Prompt Engineering',
  'Machine Learning', 'AWS', 'OOP', 'AWS Bedrock',
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
          <h2 className={styles.heading}>The person behind the work</h2>
          <p className={styles.lede}>
            "I'm an AI Systems Engineer and Founder of Refraxis - we build document processing and workflow automation systems for Canadian regulated industries"
          </p>
          <p className={styles.body}>
            I founded Refraxis to build AI document processing systems for Canadian 
            regulated industries — accounting firms, municipalities, legal practices, and crown corporations 
            that need their data kept in Canada and their workflows actually automated.
            The projects I work on are the technical foundation of what we do at Refraxis.
          </p>
          <p className={styles.body}>
            I'm also a fourth-year Computer Science student at University of Toronto
            with minors in Mathematics and History of Religions. My foundation in CS -
            data structures, algorithms, databases, systems - informs how I build.
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