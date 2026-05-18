import styles from '../arkive/arkive.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'DocAgent - Tiana Kayemba',
    description: 'An AI document processing agent that extracts structured data from any PDF, flags risks and discrepancies, and delivers plain-English summaries — invoices, contracts, legal filings, and scanned documents via OCR.',
}

export default function DocAgent() {
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
                    <span className={`${styles.tag} ${styles.tagAi}`}>AI · Document Intelligence · Python</span>
                    <span className={`${styles.tag} ${styles.tagLive}`}>
                        <span className={styles.liveDot} />
                        Live
                    </span>
                </div>
                <h1 className={styles.title}>DocAgent</h1>
                <p className={styles.subtitle}>
                    An AI document processing agent that extracts structured data from any PDF, flags risks and discrepancies, and delivers plain-English summaries — supporting invoices, contracts, legal filings, and scanned documents via OCR.
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
                        <span className={styles.metaVal}>Portfolio Project · Client-Ready</span>
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
                        src="/screenshot-docagent.png"
                        alt="DocAgent App Screenshot"
                        fill
                        className={styles.screenshot}
                    />
                </div>
            </div>

            {/* --- Stats --- */}
            <div className={styles.statsRow}>
                {[
                    { num: 'OCR', desc: 'Scanned PDFs auto-detected and routed through Tesseract — no manual steps needed' },
                    { num: 'Multi-signal', desc: 'Scanned document detection uses image presence, text objects, and character density — not just word count' },
                    { num: 'Chunk+', desc: 'Large documents split at natural boundaries, each section summarised independently — nothing gets dropped' },
                    { num: 'Live', desc: 'Fully deployed on Railway with a custom subdomain and SQLite job queue for processing history' },
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
                    <h2 className={styles.secH}>What is DocAgent?</h2>
                    <p className={styles.bodyT}>
                        DocAgent is a complete, deployable AI document processing tool built for legal, finance, and real estate workflows. Drop in any PDF and it extracts structured data — parties, dates, amounts, obligations, clauses — validates it against strict Pydantic schemas, and returns a plain-English summary alongside a ranked list of flagged issues.
                    </p>
                    <p className={styles.bodyT}>
                        The pipeline handles the full range of real-world document problems. Scanned documents are detected using multiple signals and automatically routed through Tesseract OCR. Password-protected and corrupted files are rejected early with clear error messages. Large documents are split at natural boundaries, each section summarised independently, then combined — so nothing gets dropped or truncated.
                    </p>
                    <p className={styles.bodyT}>
                        When the LLM returns malformed output, the system retries with a progressively stricter prompt rather than failing silently. Every processing job is logged to a SQLite queue with full status tracking, so failed jobs are always recoverable. The UI stores session history so past documents are instantly accessible from the sidebar without reprocessing.
                    </p>
                </div>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarBlock}>
                        <p className={styles.sidebarLabel}>Tech Stack</p>
                        {[
                            'Python', 'Streamlit', 'Anthropic Claude API',
                            'pdfplumber', 'Tesseract OCR', 'Pydantic v2',
                            'SQLite', 'pikepdf', 'pdf2image', 'Railway'
                        ].map(t => (
                            <span key={t} className={styles.stackPill}>{t}</span>
                        ))}
                    </div>
                    <div className={styles.sidebarBlock}>
                        <p className={styles.sidebarLabel}>Links</p>
                        <a href="https://docagent.tianakayemba.dev" className={styles.sidebarLink} target="_blank" rel="noopener noreferrer">↗ Live Demo</a>
                        <a href="https://github.com/t-skayemba/document-processor" className={styles.sidebarLink} target="_blank" rel="noopener noreferrer">↗ GitHub</a>
                    </div>
                </aside>
            </div>

            {/* --- Problem / Solution --- */}
            <div className={styles.problemSolution}>
                <div className={styles.psBox}>
                    <p className={`${styles.psLabel} ${styles.psLabelProblem}`}>The Problem</p>
                    <p className={styles.psText}>
                        Legal and finance teams spend hours manually reviewing contracts and invoices — checking for math errors, flagging risky clauses, extracting key dates and parties into spreadsheets. Scanned documents make it worse. And when something is missed — a liability cap buried in section 4, a payment term that compounds at 60% annually — the cost is real.
                    </p>
                </div>
                <div className={`${styles.psBox} ${styles.psBoxRight}`}>
                    <p className={`${styles.psLabel} ${styles.psLabelSolution}`}>The Solution</p>
                    <p className={styles.psText}>
                        A document agent that reads the entire file — text or scanned — extracts every material field into structured JSON, and surfaces issues ranked by severity before a human ever opens the document. Critical flags like arithmetic errors or asymmetric termination clauses appear immediately, with the exact location and a specific recommendation attached.
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
                            text: 'Scanned PDF detection cannot rely on character count alone. A single-page cover sheet with one line of text would be misidentified as scanned. The right approach combines image presence, text object count, and character density relative to page area — multiple independent signals that all need to agree before routing to OCR.',
                        },
                        {
                            num: '02',
                            text: 'LLMs return bad JSON more often than expected in production, and retrying with the same prompt produces the same result. A two-prompt strategy — friendly initial prompt, then a strict retry that explicitly forbids every formatting mistake observed — solves 95% of failures. The retry prompt is a product decision, not just error handling.',
                        },
                        {
                            num: '03',
                            text: 'Truncating large documents is the wrong default. The middle of a contract often contains the most material clauses — liability caps, IP ownership, indemnification. Chunking at natural boundaries (page breaks → paragraphs → sentences) and summarising each section independently preserves everything while staying within the model\'s context window.',
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
                <a href="https://docagent.tianakayemba.dev" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                    Try DocAgent Live →
                </a>
                <a href="https://github.com/t-skayemba/document-processor" className={styles.btnGhost} target="_blank" rel="noopener noreferrer">
                    View source on GitHub
                </a>
            </div>

            {/* --- Next Project --- */}
            <Link href="/projects/cadence" className={styles.nextProject}>
                <div>
                    <p className={styles.nextLabel}>Next Project</p>
                    <p className={styles.nextTitle}><Cadence></Cadence></p>
                </div>
                <span className={styles.nextArrow}>→</span>
            </Link>

        </main>
    )
}