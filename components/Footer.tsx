export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-kapribaden-purple-900 via-kapribaden-purple-950 to-black text-white mt-20 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-kapribaden-gold-900/10 to-transparent opacity-50"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* About */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-kapribaden-gold-300 to-kapribaden-gold-500 bg-clip-text text-transparent mb-4">
                            Paguyuban Penghayat Kapribaden
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Laku Kasampurnan Manunggal Kinantenan Sarwo Mijil -
                            Penghayatan spiritual yang bersifat universal untuk mencapai kebahagiaan sejati.
                        </p>
                        <div className="flex items-center space-x-2 text-kapribaden-gold-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                            <span className="text-sm">Didirikan 29 April 1978</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-kapribaden-gold-400 mb-4">
                            Menu Utama
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/romo', label: 'Romo Herucokro Semono' },
                                { href: '/kapribaden', label: 'Kapribaden' },
                                { href: '/buku-hidup-bahagia', label: 'Buku Hidup Bahagia' },
                                { href: '/album', label: 'Album' },
                                { href: '/pedoman', label: 'Pedoman' },
                                { href: '/pasaran', label: 'Jumlah Hari & Pasaran' },
                            ].map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="text-gray-300 hover:text-kapribaden-gold-300 transition-all duration-300 inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-kapribaden-gold-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-kapribaden-gold-400 mb-4">
                            Informasi
                        </h3>
                        <div className="space-y-3">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Website resmi Paguyuban Penghayat Kapribaden
                            </p>
                            <div className="bg-kapribaden-purple-800/50 backdrop-blur-sm p-4 rounded-lg border border-kapribaden-gold-500/20">
                                <p className="text-kapribaden-gold-300 text-xs font-semibold mb-1">Sabdho Honocoroko</p>
                                <p className="text-gray-400 text-xs italic">
                                    "ROMO Mangestoni, Putro-Putro Kudu Ngakoni Putro ROMO"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-kapribaden-purple-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            &copy; {new Date().getFullYear()} Paguyuban Penghayat Kapribaden.
                            <span className="text-kapribaden-gold-400 ml-1">Semua hak dilindungi.</span>
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>Made with</span>
                            <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span>for Kapribaden</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
