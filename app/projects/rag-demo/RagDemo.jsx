'use client'
import { useState, useRef, useEffect} from 'react'
import styles from './rag-demo.module.css'

const TABS = ['Text', 'PDF', 'URL']

const SYSTEM_PROMPT = `You are a document assistant. The user has provided a document for you to analyze.

RULES:
- Answer questions based ONLY on the content of the provided document.
- If the answer is not in the document, say so clearly: "I couldn't find that in the document."
- When referencing specific information, indifact where in the document it came from (e.g. "According to th document..." or "In the section about...").
- Be concise and direct.
- Do not make up of infer infromation that isn't explicitly in the document.

The document content follows.
`

export default function RagDemo() {
    const [tab, setTab] = useState('Text')
    const [textInput, setTextInput] = useState('')
    const [urlInput, setUrlInput] = useState('')
    const [document, setDocument] = useState(null) // {content, source }
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [ingesting, setIngesting] = useState(false)
    const [error, setError] = useState(null)
    const [dragging, setDragging] = useState(false)
    const chatEndRef = useRef(null)
    const fileRef = useRef(null)

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, [messages])

    // --- Ingest text ---
    function handleTextIngest() {
        if (!textInput.trim()) return
        setDocument({ content: textInput.trim(), source: 'Pasted text' })
        setMessages([])
        setError(null)
    }

    // --- Ingest PDF ---
    async function handlePdfUpload(e) {
        const file = e.target.files?.[0]
        if (!file) return
        setIngesting(true)
        setError(null)
        try {
            const arrayBuffer = await file.arrayBuffer()
            const base64 = btoa(
                new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
            )

            // Use Antropic API to extract text from PDF
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    system: 'Extract all text from the provided document.',
                    messages: [{
                        role: 'user',
                        content: [
                            {
                                type: 'document',
                                source: { type: 'base64', media_type: 'application/pdf', data: base64 },
                            },
                            { type: 'text', text: 'Extract all the text content from this PDF. Return only the raw text, preserving the strucutre where possible.' },
                        ],
                    }],
                }),
            })
            const data = await res.json()
            const text = data.content?.find(b => b.type === 'text')?.text
            if (!text) throw new Error('Could not extract text from PDF')
                setDocument({ content: text, source: file.name })
            setMessages([])
        } catch(err) {
            setError(err.message)
        } finally {
            setIngesting(false)
        }
    }

    // --- Ingest URL ---
    async function handleUrlIngest() {
        if (!urlInput.trim()) return
        setIngesting(true)
        setError(null)
        try {
            const res = await fetch('/api/fetch-url', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ url: urlInput.trim()  }),
            })
            const data = await res.json()
            if (data.error) throw new Error(data.error)
            setDocument({ content: data.text, source: urlInput.trim() })
            setMessages([])
        } catch (err) {
            setError(err.message)
        } finally {
            setIngesting(false)
        }
    }

    // --- Send message ---
    async function handleSend() {
        if (!input.trim() || !document || loading) return
        const userMsg = { role: 'user', content: input.trim() }
        const newMessages = [...messages, userMsg]
        setMessages(newMessages)
        setInput('')
        setLoading(true)
        setError(null)

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    system: `${SYSTEM_PROMPT}\n\n---\n\n${document.content}`,
                    messages: newMessages,
                }),
            })
            const data = await res.json()
            console.log('API response:', data)  // DEBUG
            const reply = data.content?.find(b => b.type === 'text')?.text
            if (!reply) throw new Error('No response from API')
                setMessages(prev => [...prev, { role: 'assistant', content: reply }])
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    function handleKeyDown(e) {
        if (e.key == 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    function reset() {
        setDocument(null)
        setMessages([])
        setTextInput('')
        setUrlInput('')
        setInput('')
        setError(null)
    }

    // --- Render: input phase ---
    if (!document) {
        return (
            <div className={styles.demo}>
                <div className={styles.demoTabs}>
                    {TABS.map(t => (
                        <button
                            type="button"
                            key={t}
                            className={`${styles.demoTab} ${tab === t ? styles.demoTabActive : ''}`}
                            onClick={() => setTab(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                <div className={styles.demoInputArea}>
                    {tab === 'Text' && (
                        <>
                            <textarea
                                className={styles.demoTextarea}
                                placeholder="Past any text here - an article, a contract, meeting notes, research paper..."
                                value={textInput}
                                onChange={e => setTextInput(e.target.value)}
                                rows={8}
                            />
                            <button
                                type="button"
                                className={styles.demoIngestBtn}
                                onClick={handleTextIngest}
                                disabled={!textInput.trim()}
                            >
                                Load Document →
                            </button>
                        </>
                    )}

                    {tab === 'PDF' && (
                        <div
                            className={`${styles.demoPdfArea} ${dragging ? styles.demoPdfDragging : ''}`}
                            onClick={() => fileRef.current?.click()}
                            onDragOver={e => { e.preventDefault(); setDragging(true) }}
                            onDragLeave={e => { e.preventDefault(); setDragging(false) }}
                            onDrop={e => {
                                e.preventDefault()
                                setDragging(false)
                                const file = e.dataTransfer.files?.[0]
                                if (file) handlePdfUpload({ target: { files: [file] } })
                            }}
                        >
                            <input
                                ref={fileRef}
                                type="file"
                                accept=".pdf"
                                style={{ display: 'none' }}
                                onChange={handlePdfUpload}
                            />
                            {ingesting ? (
                                <div className={styles.demoIngesting}>
                                    <div className={styles.spinner} />
                                    <span> Extracting text from PDF...</span>
                                </div>
                            ) : (
                                <>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                                        <path d="M14 2v6h6M12 18v-6M9 15l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Click to upload a PDF</span>
                                    <span className={styles.demoHint}>or drag and drop</span>
                                </>
                            )}
                        </div>
                    )}

                    {tab == 'URL' && (
                        <>
                            <input
                                className={styles.demoUrlInput}
                                type="url"
                                placeholder="https://example.come/article"
                                value={urlInput}
                                onChange={e => setUrlInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handleUrlIngest()}
                            />
                            <p className={styles.demoHint}>Works with articles, blog posts, Wikipedia pages, and plain text files.</p>
                            <button
                                type="button"
                                className={styles.demoIngestBtn}
                                onClick={handleUrlIngest}
                                disabled={!urlInput.trim() || ingesting}
                            >
                                {ingesting ? 'Fetching...' : 'Load URL →'}
                            </button>
                        </>
                    )}

                    {error && <p className={styles.demoError}>{error}</p>}
                </div>
            </div>
        )
    }

    // --- Render: chat phase ---
    return (
        <div className={styles.demo}>
            <div className={styles.chatHeader}>
                <div className={styles.chatSource}>
                    <span className={styles.chatSourceDot} />
                    <span className={styles.chatSourceLabel}>
                        {document.source.length > 60
                            ? document.source.slice(0, 60) + '...'
                            : document.source}
                    </span>
                </div>
                <button type="button" className={styles.chatReset} onClick={reset}>← New Document</button>
            </div>

            <div className={styles.chatMessages}>
                {messages.length === 0 && (
                    <div className={styles.chatEmpty}>
                        <p className={styles.chatEmptyTitle}>Document loaded.</p>
                        <p className={styles.chatEmptyHint}>Ask anything about it below.</p>
                        <div className={styles.chatSuggestions}>
                            {[
                                'Summarize this document in 3 bullet points',
                                'What are the key takeaways?',
                                'What questions does this raise?'
                            ].map(s => (
                                <button type="button" key={s} className={styles.chatSuggestion} onClick={() => setInput(s)}>
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {messages.map((m, i) => (
                    <div key={i} className={`${styles.chatMsg} ${m.role === 'user' ? styles.chatMsgUser : styles.chatMsgAssistant}`}>
                        <div className={styles.chatMsgRole}>
                            {m.role === 'user' ? 'You' : 'Claude'}
                        </div>
                        <div className={styles.chatMsgContent}>{m.content}</div>
                    </div>
                ))}

                {loading && (
                    <div className={`${styles.chatMsg} ${styles.chatMsgAssistant}`}>
                        <div className={styles.chatMsgRole}>Claude</div>
                        <div className={styles.chatMsgContent}>
                            <div className={styles.typingDots}>
                                <span /><span /><span />
                            </div>
                        </div>
                    </div>
                )}

                {error && <p className={styles.demoError}>{error}</p>}
                <div ref={chatEndRef} />
            </div>

            <div className={styles.chatInputRow}>
                <textarea
                    className={styles.chatInput}
                    placeholder="Ask anything about the document..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                />
                <button
                    type="button"
                    className={styles.chatSend}
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                >
                    →
                </button>
            </div>
        </div>
    )
}