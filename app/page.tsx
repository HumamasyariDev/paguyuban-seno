import Image from 'next/image'

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16 pt-4">
                {/* Logo Kunci */}
                <div className="flex justify-center mb-8">
                    <div className="w-30 h-30">
                        <Image
                            src="/images/logo-kunci.png"
                            alt="Logo Kunci Kapribaden"
                            width={120}
                            height={120}
                            className="object-contain"
                            style={{ width: '100%', height: '100%' }}
                            priority
                        />
                    </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-kapribaden-purple-800 to-kapribaden-gold-600 bg-clip-text text-transparent mb-6 pb-2 leading-tight">
                    Paguyuban Penghayat Kapribaden
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Laku Kasampurnan Manunggal Kinantenan Sarwo Mijil
                </p>
                <div className="mt-8 h-1 w-32 bg-gradient-to-r from-kapribaden-purple-600 to-kapribaden-gold-500 mx-auto rounded-full"></div>
            </div>

            {/* Introduction */}
            <div className="content-section">
                <h2>Selamat Datang</h2>
                <div className="prose">
                    <p>
                        Paguyuban Penghayat Kapribaden adalah wadah yang SAH bagi semua Putro Romo dimanapun berada,
                        untuk melestarikan Panca Gaib dan wulang wuruk Romo M. Semono Sastrohadidjojo (Romo Herucokro Semono).
                    </p>
                    <p>
                        Kapribaden didirikan atas dasar Sabdho ROMO pada tanggal 29 April 1978, yang terkenal dengan
                        sabdho "Honocoroko" karena ditulis memakai huruf Jawa Honocoroko, dan ini merupakan satu-satunya
                        sabdho ROMO yang tertulis.
                    </p>
                </div>
            </div>

            {/* Sabdho Honocoroko */}
            <div className="content-section">
                <h2>Sabdho Honocoroko</h2>
                <div className="bg-kapribaden-purple-50 border-l-4 border-kapribaden-gold-500 p-6 rounded-r-lg mb-6">
                    <p className="text-2xl font-bold text-kapribaden-purple-800 text-center mb-4">
                        ROMO MANGESTONI,<br />
                        PUTRO PUTRO KUDU NGAKONI PUTRO ROMO
                    </p>
                    <p className="text-center text-gray-600 italic">
                        Tanggal 29 April 1978 di Sejiwan, Purworejo
                    </p>
                </div>
                <div className="prose">
                    <p>
                        Pada tanggal 29 April 1978, dihadapan 5 orang Putro, Romo menerbitkan satu-satunya Sabdo Tinulis,
                        dengan huruf Jawa (Honocoroko). Sabdho ini menjadi dasar berdirinya Paguyuban Penghayat Kapribaden.
                    </p>
                </div>
            </div>

            {/* Tujuan */}
            <div className="content-section">
                <h2>Tujuan Penghayatan</h2>
                <div className="prose">
                    <p>
                        Penghayatan Kapribaden bertujuan agar manusia dapat hidup bahagia (tentrem) di dunia ini,
                        dan pada akhir hayatnya bisa mencapai "Kasampurnan Jati" (Moksha).
                    </p>
                    <p>
                        Laku ini bersifat universal, tidak membeda-bedakan manusia dari segi apapun
                        (derajat-pangkat, kekayaan, status sosial, suku, bangsa, budaya, agama dan lain-lain).
                    </p>
                </div>
            </div>

            {/* Panca Gaib */}
            <div className="content-section">
                <h2>Panca Gaib</h2>
                <div className="prose">
                    <p>Paringan dari Romo Herucokro Semono berupa Panca Gaib, yaitu:</p>
                    <ol className="list-decimal ml-6 space-y-2">
                        <li className="text-lg"><strong className="text-kapribaden-purple-700">Kunci</strong> - Sarana untuk mengenal Hidup dalam diri kita</li>
                        <li className="text-lg"><strong className="text-kapribaden-purple-700">Asmo</strong> - Nama untuk Hidup kita</li>
                        <li className="text-lg"><strong className="text-kapribaden-purple-700">Mijil</strong> - Menyatukan Raga dengan Hidup</li>
                        <li className="text-lg"><strong className="text-kapribaden-purple-700">Singkir</strong> - Menipiskan "AKU" dalam diri</li>
                        <li className="text-lg"><strong className="text-kapribaden-purple-700">Paweling</strong> - Manunggal dengan Yang Maha Esa</li>
                    </ol>
                </div>
            </div>

            {/* Laku Pangumbahing Rogo */}
            <div className="content-section">
                <h2>Laku Pangumbahing Rogo</h2>
                <div className="prose">
                    <p>Lima laku untuk membersihkan raga:</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-gradient-to-br from-kapribaden-purple-50 to-white p-4 rounded-lg border border-kapribaden-purple-200">
                            <h3 className="text-lg font-bold text-kapribaden-purple-700 mb-2">1. Sabar</h3>
                            <p className="text-sm text-gray-600">Seperti ibu mengandung, penuh cinta kasih</p>
                        </div>
                        <div className="bg-gradient-to-br from-kapribaden-purple-50 to-white p-4 rounded-lg border border-kapribaden-purple-200">
                            <h3 className="text-lg font-bold text-kapribaden-purple-700 mb-2">2. Narimo</h3>
                            <p className="text-sm text-gray-600">Berusaha maksimal, Tuhan yang menentukan</p>
                        </div>
                        <div className="bg-gradient-to-br from-kapribaden-purple-50 to-white p-4 rounded-lg border border-kapribaden-purple-200">
                            <h3 className="text-lg font-bold text-kapribaden-purple-700 mb-2">3. Ngalah</h3>
                            <p className="text-sm text-gray-600">Mengalah dengan senang hati</p>
                        </div>
                        <div className="bg-gradient-to-br from-kapribaden-purple-50 to-white p-4 rounded-lg border border-kapribaden-purple-200">
                            <h3 className="text-lg font-bold text-kapribaden-purple-700 mb-2">4. Tresno Welas Asih</h3>
                            <p className="text-sm text-gray-600">Cinta kasih kepada apa dan siapa saja</p>
                        </div>
                        <div className="bg-gradient-to-br from-kapribaden-purple-50 to-white p-4 rounded-lg border border-kapribaden-purple-200 md:col-span-2">
                            <h3 className="text-lg font-bold text-kapribaden-purple-700 mb-2">5. Ikhlas</h3>
                            <p className="text-sm text-gray-600">Menyadari segala yang ada adalah milik Tuhan</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-kapribaden-purple-100 to-kapribaden-gold-100 rounded-lg">
                <h3 className="text-2xl font-bold text-kapribaden-purple-800 mb-4">
                    Pelajari Lebih Lanjut
                </h3>
                <p className="text-gray-700 mb-6">
                    Jelajahi halaman-halaman berikut untuk memahami lebih dalam tentang Kapribaden
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="/romo"
                        className="px-6 py-3 bg-kapribaden-purple-700 text-white rounded-lg hover:bg-kapribaden-purple-800 transition-colors duration-200 font-medium"
                    >
                        Tentang Romo
                    </a>
                    <a
                        href="/kapribaden"
                        className="px-6 py-3 bg-kapribaden-gold-600 text-white rounded-lg hover:bg-kapribaden-gold-700 transition-colors duration-200 font-medium"
                    >
                        Ajaran Kapribaden
                    </a>
                </div>
            </div>
        </div>
    )
}
