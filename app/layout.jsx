import "./globals.css";
import CursorTrail from '@/components/CursorTrail'
import ScrollProgress from "@/components/ScrollProgress"

export const metadata = {
  title: 'Tiana Kayemba - Computer Science',
  description: 'Forth-year CS student building real AI systems. Open to internships, contracts, and interesting problems.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <CursorTrail />
        {children}
      </body>
    </html>
  )
}
