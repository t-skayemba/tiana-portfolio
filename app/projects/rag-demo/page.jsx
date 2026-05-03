import RagDemo from './RagDemo'
import styles from './rag-demo.module.css'
import Link from 'next/link'

export const metadata = {
    title: 'RAG Document Demo - Tiana Kayemba',
    description: 'Drop in any document, PDF, or URL and ask it anything. A live RAG pipeline built with the Anthropic API.',
}

export default function RagDemoPage() {
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
                    <span className={`${styles.tag} ${styles.tagAi}`}>AI · RAG</span>
                    <span className={`${styles.tag} ${styles.tagLive}`}>
                        <span className={styles.liveDot} />
                        Interactive
                    </span>
                </div>
                <h1 className={styles.title}>Ask Anything</h1>
                <p className={styles.subtitle}>
                    Drop in any document, PDF, or URL. Then ask it anything.
                    A live RAG pipeline - retrieval-augmented generation in your browser.
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
                        <span className={styles.metaVal}>Live Demo</span>
                    </div>
                </div>
            </section>

            {/* --- Live Demo --- */}
            <div className={styles.demoWrapper}>
                <div className={styles.demoLabel}>
                    <span className={styles.demoLabelDot} />
                    Live demo - try it now
                </div>
                <RagDemo />
            </div>

            {/* --- Stats --- */}
            <div className={styles.statsRow}>
                {[
                    { num: '3', desc: 'Input methods - text, PDF, or any URL' },
                    { num: 'RAG', desc: 'Retrieval-augmented generation pipeline' },
                    { num: 'Live', desc: 'Runs entirely in your browser, powered by Claude' },
                    { num: '∞', desc: 'Ask as many questions as you like' },
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
                    <h2 className={styles.secH}>What is RAG?</h2>
                    <p className={styles.bodyT}>
                        Retrieval-Augmented Generation (RAG) is one of the most practically useful patterns in applied AI. Instead of relying pureply on what a language model was trained on, RAG grounds the model's responses in a specific document of knowledge source you provide - making answers accurate, specific, and verifiable.
                    </p>
                    <p className={styles.bodyT}>
                        This demo lets you experience that pipeline directly. Paste in a contract, upload a research paper, drop in a news article URL - then ask qustions ang get answers grounded in that exact content. No allucinations about things not in the document. No generic responses.
                    </p>
                    <p className={styles.bodyT}>
                        Under the hood, the document is passes as context to Claude via the Anthropic API, with a system propmt engineered to keep responses grounded, cite specific sections, and flag when something isn't in the document.
                    </p>
                </div>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarBlock}>
                        <p className={styles.sidebarLabel}> Tech Stack</p>
                        {['Next.js', 'Anthropic API', 'Claude Sonnet', 'PDF.js', 'React'].map(t => (
                            <span key={t} className={styles.stackPill}>{t}</span>
                        ))}
                    </div>
                    <div className={styles.sidebarBlock}>
                        <p className={styles.sidebarLabel}>Links</p>
                        <a href="https://github.com/t-skayemba/rag-demo" className={styles.sidebarLink} target="_blank" rel="noopener noreferrer">↗ GitHub</a>
                    </div>
                </aside>
            </div>

            {/* --- How it Works --- */}
            <div className={styles.howItWorks}>
                <p className={styles.secLabel}>How It Works</p>
                <div className={styles.steps}>
                    {[
                        { num: '01', title: 'Ingest', desc: 'You provide a document - plan text, a PDF file, or any publically accessible URL. The content is extracted and cleaned.' },
                        { num: '02', title: 'Context', desc: 'The document is passed as context in the system prompt, with instructions to ground all answers in the provided content.' },
                        { num: '03', title: 'Retreive and Generate', desc: 'When you ask a question, Claude retrieves the relevant parts of the context and generate a grounded, cited response.' },
                        { num: '04', title: 'Converse', desc: 'The full conversation history is maintained so you can ask follow-up questions and dig deeper into teh document.' },
                    ].map(s => (
                        <div key={s.num} className={styles.step}>
                            <div className={styles.stepNum}>{s.num}</div>
                            <div>
                                <div className={styles.stepTitle}>{s.title}</div>
                                <p className={styles.stepDesc}>{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Learnings --- */}
            <div className={styles.learnings}>
                <p className={styles.secLabel}>What I Learned</p>
                <div className={styles.learningGrid}>
                    {[
                        { num: '01', text: 'Prompt engineering matters enormously for RAG - the difference between a grounded response and a hallucinated on is often just the system prompt.' },
                        { num: '02', text: 'PDF text extraction is messier than expected - tables, headers, and multi-column layouts all need special handeling to produce clean context.' },
                        { num: '03', text: 'Conversation history management is critical - including too much history bloats the context window, too little loses coherence.' },
                    ].map(l => (
                        <div key={l.num} className={styles.learningCard}>
                            <div className={styles.learningNum}>{l.num}</div>
                            <p className={styles.learningText}>{l.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Next Project --- */}
            <Link href="/projects/cadence" className={styles.nextProject}>
                    <div>
                        <p className={styles.nextLabel}>Previous Project</p>
                        <p className={styles.nextTitle}>Cadence</p>
                    </div>
                    <span className={styles.nextArrow}>←</span>
            </Link>
        </main>
    )
}