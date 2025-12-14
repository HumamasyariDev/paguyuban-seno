'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.pageYOffset
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrollPercent = (scrollTop / docHeight) * 100
            setProgress(scrollPercent)
        }

        window.addEventListener('scroll', updateProgress)
        updateProgress()

        return () => {
            window.removeEventListener('scroll', updateProgress)
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
            <div
                className="h-full bg-gradient-to-r from-kapribaden-purple-600 via-kapribaden-purple-700 to-kapribaden-gold-500 transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}
