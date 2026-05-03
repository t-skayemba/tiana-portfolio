'use client'
import { useEffect, useRef } from 'react'

export default function CursorTrail() {
    const dotRef = useRef(null)
    const glowRef = useRef(null)
    const mouse = useRef({ x: 0, y: 0 })
    const glow = useRef({ x: 0, y: 0 })
    const raf = useRef(null)

    useEffect(() => {
        const dot = dotRef.current
        const glowEl = glowRef.current
        if (!dot || !glowEl) return

        function onMove(e) {
            mouse.current = { x: e.clientX, y: e.clientY }
            dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
        }

        function animate() {
            glow.current.x += (mouse.current.x - glow.current.x) * 0.08
            glow.current.y += (mouse.current.y - glow.current.y) * 0.08
            glowEl.style.transform = `translate(${glow.current.x - 16}px, ${glow.current.y -16}px)`
            raf.current=requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', onMove, { passive: true })
        raf.current = requestAnimationFrame(animate)

        return() => {
            window.removeEventListener('mousemove', onMove)
            cancelAnimationFrame(raf.current)
        }
    }, [])

    return (
        <>
            <div ref={dotRef} style={{
                position: 'fixed', top: 0, left: 0,
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--gold)',
                pointerEvents: 'none', zIndex: 9999,
                transition: 'opacity 0.2s',
                mixBlendMode: 'difference',
            }} />
            <div ref={glowRef} style={{
                position: 'fixed', top: 0, left: 0,
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(201,169,110,0.12)',
                border: '0.5px solid rgba(201,169,110,0.2)',
                pointerEvents: 'none', zIndex: 9998,
            }} />
        </>
    )
}