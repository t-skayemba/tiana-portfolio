import styles from './arkive.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'Arkive - Tiana Kayemba',
    description: 'An enterprise-ready RAG knowledge base that lets you upload documents and ask natural language questions — getting accurate, cited answers grounded in your files.',
}

export default function Arkive() {
    return (
        <main className={styles.page}>

            {/* --- Nav --- */}
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLogo}>Tiana Kayemba</Link>
                <Link href="/#projects" className={styles.navBack}>← Back to Work</Link>
            </nav>

            {/* --- Hero --- */}
            <section className={styles.hero}>
                <div className={styles.eyebrow}>
                    <span className={`${styles.tag} ${styles.tagAi}`}>AI · Enterprise Tools</span>
                    <span className={`${styles.tag} ${styles.tagLive}`}>
                        <span className={styles.liveDot} />
                        Live
                    </span>
                </div>
                <h1 className={styles.title}>Arkive</h1>
                <p className={styles.subtitle}>
                    An enterprise-ready RAG knowledge base that lets you upload documents and ask natural language questions — getting accurate, cited answers grounded in your actual files.
                </p>
                <div className={styles.metaRow}>
                    <div className={styles.meta}>
                        <span className={styles.metaLabel}>Year</span>
                        <span className={styles.metaVal}>2026</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.metaLabel}>Role</span>
                        <span className={styles.metaVal}>Solo — design & engineering</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.metaLabel}>Type</span>
                        <span className={styles.metaVal}>Portfolio Project</span>
                    </div>
                </div>
            </section>

            {/* --- Screenshot --- */}
            <div className={styles.screenshotArea}>
                <div className={styles.screenshotMock}>
                    <div className={styles.screenshotDots}>
                        <span className={styles.dot} />
                        <span className={styles.dot} />
                        <span className={styles.dot} />
                    </div>
                    <Image
                        src="/screenshot-arkive.png"
                        alt="Arkive App Screenshot"
                        fill
                        className={styles.screenshot}
                    />
                </div>
            </div>

            {/* --- Stats --- */}
            <div className={styles.statsRow}>
                {[
                    { num: 'RAG', desc: 'Retrieval-Augmented Generation — answers grounded in your documents, not hallucinated' },
                    { num: '3', desc: 'File types supported — PDF, DOCX, and TXT including tables and structured data' },
                    { num: '↗', desc: 'Every answer cited with the exact source document and passage it came from' },
                    { num: 'Live', desc: 'Fully deployed on Railway with a custom subdomain' },
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
                    <h2 className={styles.secH}>What is Arkive?</h2>
                    <p className={styles.bodyT}>
                        Arkive is an enterprise-ready knowledge base powered by Retrieval-Augmented Generation (RAG). Upload any PDF, DOCX, or TXT file and ask questions about it in plain English — Arkive retrieves the most relevant passages and uses Claude to synthesize a clear, cited answer.
                    </p>
                    <p className={styles.bodyT}>
                        Every answer includes source cards showing exactly which document and passage the information came from. A document preview lets you click into the original file with relevant passages highlighted in context — built specifically for enterprise clients who need to trust and verify AI output.
                    </p>
                </div>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarBlock}>
                        <p className={styles.sidebarLabel}>Tech Stack</p>
                        {[
                            'Python', 'FastAPI', 'ChromaDB',
                            'sentence-transformers', 'Anthropic Claude API',
                            'React', 'Vite', 'Tailwind CSS v4', 'Railway'
                        ].map(t => (
                            <span key={t} className={styles.stackPill}>{t}</span>
                        ))}
                    </div>
                    <div className={styles.sidebarBlock}>
                        <p className={styles.sidebarLabel}>Links</p>
                        <a href="https://arkive.tianakayemba.dev" className={styles.sidebarLink} target="_blank" rel="noopener noreferrer">↗ Live App</a>
                        <a href="https://github.com/t-skayemba/arkive" className={styles.sidebarLink} target="_blank" rel="noopener noreferrer">↗ GitHub</a>
                    </div>
                </aside>
            </div>

            {/* --- Problem / Solution --- */}
            <div className={styles.problemSolution}>
                <div className={styles.psBox}>
                    <p className={`${styles.psLabel} ${styles.psLabelProblem}`}>The Problem</p>
                    <p className={styles.psText}>
                        Companies spend hours manually searching through documents for specific information. A 50-page policy handbook, a contract, a technical spec — finding one answer means reading the whole thing. Existing AI tools either hallucinate or can't point you to where the answer came from, which makes them unusable in professional settings.
                    </p>
                </div>
                <div className={`${styles.psBox} ${styles.psBoxRight}`}>
                    <p className={`${styles.psLabel} ${styles.psLabelSolution}`}>The Solution</p>
                    <p className={styles.psText}>
                        Upload the document once, ask anything in plain English. Arkive retrieves the exact relevant passages using semantic vector search, sends them to Claude as grounded context, and returns a cited answer — with source cards and a document preview so users can verify every claim directly in the original file.
                    </p>
                </div>
            </div>

            {/* --- Learnings --- */}
            <div className={styles.learnings}>
                <p className={styles.secLabel}>What I Learned</p>
                <div className={styles.learningGrid}>
                    {[
                        {
                            num: '01',
                            text: 'Chunking strategy is everything in RAG. Character-based splitting destroys table structure — a grade breakdown becomes meaningless fragments. Real documents need smarter extraction that understands the difference between paragraphs and tables.',
                        },
                        {
                            num: '02',
                            text: 'Semantic search alone is not enough. For small documents, retrieving all chunks and letting Claude reason over the full context consistently outperformed retrieval tuning. Knowing when to search vs. when to just send everything is a real design decision.',
                        },
                        {
                            num: '03',
                            text: 'The gap between local and production exposed things I wouldn\'t have caught otherwise — Vite environment variables are baked in at build time, not runtime, and CORS behaves differently across services. Deploying early is part of building correctly.',
                        },
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
                <a href="https://arkive.tianakayemba.dev" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                    Try Arkive Live →
                </a>
                <a href="https://github.com/t-skayemba/arkive" className={styles.btnGhost} target="_blank" rel="noopener noreferrer">
                    View source on GitHub
                </a>
            </div>

            {/* --- Next Project --- */}
            <Link href="/projects/cadence" className={styles.nextProject}>
                <div>
                    <p className={styles.nextLabel}>Next Project</p>
                    <p className={styles.nextTitle}>Cadence</p>
                </div>
                <span className={styles.nextArrow}>→</span>
            </Link>

        </main>
    )
}