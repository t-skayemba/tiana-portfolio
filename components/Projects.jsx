'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import styles from './Projects.module.css'

const projects = [
  {
    id: 'cadence',
    num: '01',
    tag: 'AI · Health Tech',
    title: 'Cadence',
    description: 'An AI-powered circadian rhythm predictor that maps your body clock using Apple Health data or a short quiz.',
  },
  {
    id: 'rag-demo',
    num: '02',
    tag: 'AI · RAG',
    title: 'Ask Anything',
    description: 'Drop in any document, PDF, or URL. Ask it anything. A live context-grounded Q&A pipeline powered by Claude.',
  },
  {
    id: 'arkive',
    num: '03',
    tag: 'AI · Enterprise Tools · RAG',
    title: 'Arkive',
    description: 'Upload any documents, ask it anything. An enterprise RAG knowledge base with source citations, document preview, and highlighted passages — powered by Claude.',
  },
  {
    id: 'nexadesk',
    num: '04',
    tag: 'AI · SaaS · White-Label',
    title: 'NexaDesk',
    description: 'A white-label AI customer support widget that answers from a custom knowledge base, escalates to humans when needed, and logs every conversation — deployable on any website with one script tag.'
  },
  {
    id: 'docagent',
    num: '05',
    tag: 'AI · Document Intelligence · Python',
    title: 'DocAgent',
    description: 'An AI document processing agent that extracts structured data from any PDF, flags risks and discrepancies, and delivers plain-English summaries — invoices, contracts, legal filings, and scanned documents via OCR.'
  }
]

const MotionLink = motion(Link)

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className={styles.section}>
      <motion.p className={styles.label}
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}>
        Selected work
      </motion.p>
      <motion.h2 className={styles.heading}
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.08 }}>
        Projects
      </motion.h2>
      <div className={styles.grid} ref={ref}>
        {projects.map((p, i) => (
          <MotionLink
            key={p.id}
            href={`/projects/${p.id}`}
            className={styles.card}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.cardNum}>{p.num}</span>
            <p className={styles.cardTag}>{p.tag}</p>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.description}</p>
            <span className={styles.cardLink}>View project →</span>
          </MotionLink>
        ))}
      </div>
    </section>
  )
}