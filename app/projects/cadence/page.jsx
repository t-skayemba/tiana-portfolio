import styles from './cadence.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'Cadence - Tiana Kayemba',
    description: 'AN AI-powered circadian rythm predictor that analyses your Apple Health data to map your body clock.',
}

export default function Cadence() {
    return (
        <main className={styles.page}>

            {/* --- Nav --- */}
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLogo}>Tiana Kayemba</Link>
                <Link href="/#projects" className={styles.navBack}>← Back to Work</Link>
            </nav>

            {/* --- Hero ---*/}
            <section className={styles.hero}>
                <div className={styles.eyebrow}>
                    <span className={`${styles.tag} ${styles.tagAi}`}>AI · Health Tech</span>
                    <span className={`${styles.tag} ${styles.tagLive}`}>
                        <span className={styles.liveDot} />
                        Live
                    </span>
                </div>
                <h1 className={styles.title}>Cadence</h1>
                <p className={styles.subtitle}>
                    An AI-powered circadian rhythm predictor that analyses your Apple Health data - or a short quiz - to map your body clock and deliver personalized sleep, energy, and productivity suggestions.
                </p>
                <div className={styles.metaRow}>
                    <div className={styles.meta}>
                        <span className={styles.metaLabel}>Year</span>
                        <span className={styles.metaVal}>2026</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.metaLabel}>Role</span>
                        <span className={styles.metaVal}>Solo - design & engineering</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.metaLabel}>Type</span>
                        <span className={styles.metaVal}>Hackathon Project</span>
                    </div>
                </div>
            </section>

            {/* --- Screenshot ---*/}
            <div className={styles.screenshotArea}>
                <div className={styles.screenshotMock}>
                    <div className={styles.screenshotDots}>
                        <span className={styles.dot} />
                        <span className={styles.dot} />
                        <span className={styles.dot} />
                    </div>

                    <Image
                        src="/screenshot-cadence.png"
                        alt="Cadence App Screenshot"
                        fill
                        className={styles.screenshot}
                    />
                </div>
            </div>

            {/* --- Stats ---*/}
            <div className={styles.statsRow}>
                {[
                    { num: '2', desc: 'Input Methods - Apple Health export of guided quiz' },
                    { num: 'AI', desc: 'Powered circadian analysis and personalized recommedations' },
                    { num: '∞', desc: 'Follow-up questions via built-in AI chatbot' },
                    { num: 'Live', desc: 'Fully deployed and accessible to anyone' },
                ].map(s => (
                    <div key={s.num} className={styles.statBox}>
                        <div className={styles.statNum}>{s.num}</div>
                        <div className={styles.statDesc}>{s.desc}</div>
                    </div>
                ))}
            </div>

            {/* --- Overview + Sidebar --- */}
            <div className={styles.content}>
                <div>
                    <p className={styles.secLabel}>Overview</p>
                    <h2 className={styles.secH}>What is Cadence?</h2>
                    <p className={styles.bodyT}>
                        Cadence analyzes your Apple Health data to discover your chronotype - your biological sleep-wake preference - and builds a personalized profile showing when your body is primed to focus, rest, and recover.
                    </p>
                    <p className={styles.bodyT}>
                        The built-in AI chatbot means you can ask follow-up questions about your results, dig into the science, or get specific advice for your schedule - all without leaving the app.
                    </p>
                </div>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarBlock}>
                        <p className={styles.sidebarLabel}>Tech Stack</p>
                        {['Python', 'Flask', 'SQLAlchemy', 'SQLLite / PostgreSQL', 'Groq API', 'Vanilla HTML/CSS/JS', 'Chart.js', 'Tailwind CSS'].map(t => (
                            <span key={t} className={styles.stackPill}>{t}</span>
                        ))}
                    </div>
                    <div className={styles.sidebarBlock}>
                        <p className={styles.sidebarLabel}>Links</p>
                        <a href="https://cadence-chronotype.up.railway.app/" className={styles.sidebarLink} target="_blank" rel="noopener noreferrer">↗ Live App</a>
                        <a href="https://github.com/t-skayemba/cadence" className={styles.sidebarLink} target="_blank" rel="noopener noreferrer">↗ GitHub</a>
                    </div>
                </aside>
            </div>

            {/* --- Problem / Solution --- */}
            <div className={styles.problemSolution}>
                <div className={styles.psBox}>
                    <p className={`${styles.psLabel} ${styles.psLabelProblem}`}>The Problem</p>
                    <p className={styles.psText}>
                        Sleep advice online is generic. "Go to bed earlier" doesn't account for the fact that every person's circadian rhythm is different. There weren't many easy ways to get a personalized, data-driven picture of your own body and optimized sleep pattern without expensive lab tests.
                    </p>
                </div>
                <div className={`${styles.psBox} ${styles.psBoxRight}`}>
                    <p className={`${styles.psLabel} ${styles.psLabelSolution}`}>The Solution</p>
                    <p className={styles.psText}>
                        Use the health data people already have on their phones - or a quick quiz for those without - and an AI model to surface genuinely personalized insights.
                    </p>
                </div>
            </div>

            {/* --- Learnings --- */}
            <div className={styles.learnings}>
                <p className={styles.secLabel}> What I Learned</p>
                <div className={styles.learningGrid}>
                    {[
                        { num: '01', text: 'When working under a time constraint like I did, it is important to make decisions and execute quickly and efficiently.' },
                        { num: '02', text: 'Prompt engineering for health data requires careful framing to get consistent and responsible output.' },
                        { num: '03', text: 'Building a fallback (the quiz) for users without health data was a decision I added at the end, but the right call - it greatly expanded the addressable audience.' },
                    ].map(l => (
                        <div key={l.num} className={styles.learningCard}>
                            <div className={styles.learningNum}>{l.num}</div>
                            <p className={styles.learningText}>{l.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- CTA --- */}
            <div className={styles.ctaRow}>
                <a href="https://cadence-chronotype.up.railway.app/" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                    Try Cadence Live →
                </a>
                <a href="https://github.com/t-skayemba/cadence" className={styles.btnGhost} target="_blank" rel="noopener noreferrer">
                    View source on GitHub
                </a>
            </div>

            {/* --- Next Project --- */}
            <Link href="/projects/rag-demo" className={styles.nextProject}>
                <div>
                    <p className={styles.nextLabel}>Next Project</p>
                    <p className={styles.nextTitle}>RAG Document Demo</p>
                </div>
                <span className={styles.nextArrow}>→</span>
            </Link>
        </main>
    )
}