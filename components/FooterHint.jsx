'use client'

export default function FooterHint() {
    return (
        <p
            style={{
                fontSize: '0.7rem',
                color: 'var(--cream)',
                opacity: 0.12,
                fontStyle: 'italic',
                transition: 'opacity 0.4s',
                cursor: 'default',
            }}
            onMouseEnter={e => e.target.style.opacity = 0.5}
            onMouseLeave={e => e.target.style.opacity = 0.12}
        >
            Have a nice day 🙂
        </p>
    )
}