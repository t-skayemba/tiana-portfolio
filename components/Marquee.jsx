import styles from './Marquee.module.css'

const items = [
  'Python', 'LangGraph', 'RAG Systems', 'Prompt Engineering',
  'Machine Learning', 'REST APIs', 'PostgreSQL', 'AWS',
  'Next.js', 'OpenAI API', 'Anthropic API', 'Refraxis · refraxis.ca',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}