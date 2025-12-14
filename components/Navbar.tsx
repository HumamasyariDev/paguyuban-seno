'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/romo', label: 'Romo Herucokro Semono' },
        { href: '/kapribaden', label: 'Kapribaden' },
        { href: '/buku-hidup-bahagia', label: 'Buku Hidup Bahagia' },
        { href: '/album', label: 'Album' },
        { href: '/pedoman', label: 'Pedoman' },
        { href: '/pasaran', label: 'Jumlah Hari & Pasaran' },
    ]

    return (
        <nav className="bg-gradient-to-r from-kapribaden-purple-800 via-kapribaden-purple-900 to-kapribaden-purple-800 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/logo-kunci.png"
                                alt="Logo Kapribaden"
                                width={48}
                                height={48}
                                className="object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                                style={{ width: '100%', height: '100%' }}
                            />
                            <div className="absolute inset-0 bg-kapribaden-gold-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-kapribaden-gold-300 to-kapribaden-gold-500 bg-clip-text text-transparent">
                            Kapribaden
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-all duration-300 group overflow-hidden"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-kapribaden-purple-700 to-kapribaden-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-kapribaden-gold-400 to-kapribaden-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-kapribaden-purple-700 focus:outline-none focus:ring-2 focus:ring-kapribaden-gold-400 transition-all duration-300"
                    >
                        <svg
                            className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-kapribaden-purple-900/50 backdrop-blur-lg">
                    {menuItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-gradient-to-r hover:from-kapribaden-purple-700 hover:to-kapribaden-gold-600 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                            onClick={() => setIsOpen(false)}
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none',
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
