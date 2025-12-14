import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import ReadingProgress from '../components/ReadingProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Paguyuban Penghayat Kapribaden',
    description: 'Website resmi Paguyuban Penghayat Kapribaden - Laku Kasampurnan Manunggal Kinantenan Sarwo Mijil',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id">
            <body className={inter.className}>
                <ReadingProgress />
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <BackToTop />
            </body>
        </html>
    )
}
