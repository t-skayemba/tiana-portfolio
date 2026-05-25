'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Contact.module.css'

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

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    const form = e.target
    try {
      const res = await fetch('https://formspree.io/f/xdajwzjd', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setSent(true)
        form.reset()
      } else {
        throw new Error('Something went wrong.')
      }
    } catch (err) {
      setError('Failed to send — please email me directly at tiana@tianakayemba.dev')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid}>
        <FadeUp delay={0}>
          <p className={styles.label}>Contact</p>
          <h2 className={styles.heading}>Let's build something.</h2>
          <p className={styles.body}>
            Open to AI implementation contracts, consulting, internships, and
            interesting collaborations. If you have a project in mind, I'd love
            to hear about it.
          </p>
          <a href="mailto:tiana@tianakayemba.dev" className={styles.link}>✉ tiana@tianakayemba.dev</a>
          <a href="https://linkedin.com/in/tiana-kayemba" className={styles.link} target="_blank" rel="noopener noreferrer">↗ LinkedIn</a>
          <a href="https://github.com/t-skayemba" className={styles.link} target="_blank" rel="noopener noreferrer">↗ GitHub</a>
        </FadeUp>

        <FadeUp delay={0.15} className={styles.form}>
          {sent ? (
            <div className={styles.thanks}>
              <p className={styles.thanksTitle}>Message sent ✦</p>
              <p className={styles.thanksSub}>Thanks — I'll be in touch soon.</p>
              <button
                type="button"
                className={styles.sendAnother}
                onClick={() => setSent(false)}
              >
                ← Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'contents' }}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." required />
              </div>
              {error && <p className={styles.formError}>{error}</p>}
              <button type="submit" className={styles.submit} disabled={submitting}>
                {submitting ? 'Sending...' : 'Send message →'}
              </button>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  )
}