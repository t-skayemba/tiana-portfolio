import styles from '../arkive/arkive.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'NexaDesk - Tiana Kayemba',
    description: 'A white-label AI customer support widget that answers from a custom knowledge base, escalates to humans when needed, and logs every conversation.',
}

export default function NexaDesk() {
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
                    <span className={`${styles.tag} ${styles.tagAi}`}>AI · SaaS · White-Label</span>
                    <span className={`${styles.tag} ${styles.tagLive}`}>
                        <span className={styles.liveDot} />
                        Live
                    </span>
                </div>
                <h1 className={styles.title}>NexaDesk</h1>
                <p className={styles.subtitle}>
                    A white-label AI customer support widget that answers questions from a custom knowledge base, knows when to hand off to a human agent, and logs every conversation — deployable on any website with a single script tag.
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
                        src="/screenshot-nexadesk.png"
                        alt="NexaDesk App Screenshot"
                        fill
                        className={styles.screenshot}
                    />
                </div>
            </div>

            {/* --- Stats --- */}
            <div className={styles.statsRow}>
                {[
                    { num: 'RAG', desc: 'Answers grounded in the client\'s own knowledge base — not generic AI responses' },
                    { num: '2-tier', desc: 'Escalation logic — tries to resolve first, only hands off when genuinely needed' },
                    { num: '1 tag', desc: 'One script tag to embed on any website — WordPress, Webflow, Shopify, plain HTML' },
                    { num: 'Live', desc: 'Fully deployed on Railway with a live brand customizer demo' },
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
                    <h2 className={styles.secH}>What is NexaDesk?</h2>
                    <p className={styles.bodyT}>
                        NexaDesk is a complete, deployable AI customer support system built for businesses that want to automate the majority of their support volume without losing the human touch. The bot answers questions by reading the client's own knowledge base — FAQs, policies, product documentation — so every response is accurate and specific to their business.
                    </p>
                    <p className={styles.bodyT}>
                        When a conversation needs a human, NexaDesk escalates intelligently. Rather than immediately handing off the moment someone mentions a person, it attempts to resolve the issue first and only escalates when the user insists or the issue genuinely requires it. On escalation, the support team is notified instantly via Slack or email with the full conversation transcript attached.
                    </p>
                    <p className={styles.bodyT}>
                        The demo includes a live brand customizer — prospects can enter their company name, pick their brand colours, and upload their logo to see the widget styled to their brand in real time, before committing to anything.
                    </p>
                </div>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarBlock}>
                        <p className={styles.sidebarLabel}>Tech Stack</p>
                        {[
                            'Node.js', 'Express', 'SQLite',
                            'Anthropic Claude API', 'Nodemailer',
                            'Slack Webhooks', 'Vanilla JS', 'HTML/CSS', 'Railway'
                        ].map(t => (
                            <span key={t} className={styles.stackPill}>{t}</span>
                        ))}
                    </div>
                    <div className={styles.sidebarBlock}>
                        <p className={styles.sidebarLabel}>Links</p>
                        <a href="https://nexadesk.tianakayemba.dev" className={styles.sidebarLink} target="_blank" rel="noopener noreferrer">↗ Live Demo</a>
                        <a href="https://github.com/t-skayemba/nexadesk" className={styles.sidebarLink} target="_blank" rel="noopener noreferrer">↗ GitHub</a>
                    </div>
                </aside>
            </div>

            {/* --- Problem / Solution --- */}
            <div className={styles.problemSolution}>
                <div className={styles.psBox}>
                    <p className={`${styles.psLabel} ${styles.psLabelProblem}`}>The Problem</p>
                    <p className={styles.psText}>
                        Small and mid-size businesses get buried in repetitive support tickets — the same 15 questions asked hundreds of times a week. Hiring more agents is expensive. Generic chatbots feel robotic and give wrong answers. And when a customer genuinely needs help, there's no clean way to get them to a real person without losing the context of the conversation.
                    </p>
                </div>
                <div className={`${styles.psBox} ${styles.psBoxRight}`}>
                    <p className={`${styles.psLabel} ${styles.psLabelSolution}`}>The Solution</p>
                    <p className={styles.psText}>
                        A widget that reads the company's own documentation to answer the 80% of tickets that are routine — and handles the other 20% by escalating to a human with the full conversation attached. White-label so it looks native to any brand. One script tag so any website can have it live in minutes. Slack and email notifications so no escalation ever gets missed.
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
                            text: 'Keyword search for knowledge base retrieval breaks the moment users paraphrase anything. Injecting the full knowledge base into every Claude request and letting the model find relevance itself is simpler, more accurate, and the right default until the KB grows large enough to warrant vector search.',
                        },
                        {
                            num: '02',
                            text: 'Escalation logic is a product decision, not just a technical one. Immediately handing off to a human whenever someone asks for one creates unnecessary load on support teams. A two-tier system — try to resolve first, escalate only when needed — is both better UX and a concrete business value to sell to clients.',
                        },
                        {
                            num: '03',
                            text: 'The embed script architecture matters more than it seems. Building the backend to serve a dynamic embed.js that self-bootstraps means clients genuinely only need one line of HTML. The difference between "add this script tag" and "follow these five setup steps" is the difference between a sale and a pass.',
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
                <a href="https://nexadesk.tianakayemba.dev" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                    Try NexaDesk Live →
                </a>
                <a href="https://github.com/t-skayemba/nexadesk" className={styles.btnGhost} target="_blank" rel="noopener noreferrer">
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