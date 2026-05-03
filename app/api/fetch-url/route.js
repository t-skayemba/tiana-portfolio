export async function POST(request) {
    try {
        const { url } = await request.json()

        if(!url || !url.startsWith('http')) {
            return Response.json({ error: 'Invalid URL' }, { status: 400 })
        }

        const res = await fetch(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (compatible; RAG-Demo/1.0' },
            signal: AbortSignal.timeout(10000),
        })

        if (!res.ok) {
            return Response.json({ error: `Failed to fetch URL: ${res.status}` }, { status: 400 })
        }

        const contentType = res.headers.get('content-type') || ''

        if (contentType.includes('text/html')) {
            const html = await res.text()
            // strip HTML tages and clean up whitespace
            const text = html
                .replace(/<script[\s\S]*?<\/script>/gi, '')
                .replace(/<style[\s\S]*?<\/style>/gi, '')
                .replace(/<[^>]+>/g, ' ')
                .replace(/\s+/g, ' ')
                .trim()
                .slice(0, 20000) //cap at 20k characters
            return Response.json({ text, source: url })
        }

        if (contentType.includes('text/plain')) {
            const text = (await res.text()).slice(0, 20000)
            return Response.json({ text, source: url })
        }

        return Response.json({ error: 'Unsuppoerted content type' }, { status: 400 })

    } catch (err) {
        return Response.json({ error: err.message || 'Failed to fetch URL' }, { status: 500 })
    }
}