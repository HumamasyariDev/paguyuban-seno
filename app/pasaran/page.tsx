export const metadata = {
    title: 'Jumlah Hari & Pasaran | Paguyuban Penghayat Kapribaden',
    description: 'Perhitungan Hari dan Pasaran dalam Kalender Jawa',
}

export default function PasaranPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-center mb-4">Jumlah Hari & Pasaran</h1>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Perhitungan hari dan pasaran dalam kalender Jawa untuk berbagai keperluan
            </p>

            {/* Nama Tahun Jawa */}
            <div className="content-section">
                <h2>NAMA TAHUN JAWA</h2>
                <div className="prose">
                    <p>Tahun Jawa memiliki 8 nama yang berputar, yaitu:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div className="bg-kapribaden-purple-50 p-4 rounded-lg text-center border border-kapribaden-purple-200">
                            <p className="font-bold text-kapribaden-purple-800">ALIF</p>
                            <p className="text-sm text-gray-600">1894, 1902, 1910...</p>
                        </div>
                        <div className="bg-kapribaden-purple-50 p-4 rounded-lg text-center border border-kapribaden-purple-200">
                            <p className="font-bold text-kapribaden-purple-800">HE</p>
                            <p className="text-sm text-gray-600">1895, 1903, 1911...</p>
                        </div>
                        <div className="bg-kapribaden-purple-50 p-4 rounded-lg text-center border border-kapribaden-purple-200">
                            <p className="font-bold text-kapribaden-purple-800">JIMAWAL</p>
                            <p className="text-sm text-gray-600">1896, 1904, 1912...</p>
                        </div>
                        <div className="bg-kapribaden-purple-50 p-4 rounded-lg text-center border border-kapribaden-purple-200">
                            <p className="font-bold text-kapribaden-purple-800">JE</p>
                            <p className="text-sm text-gray-600">1897, 1905, 1913...</p>
                        </div>
                        <div className="bg-kapribaden-purple-50 p-4 rounded-lg text-center border border-kapribaden-purple-200">
                            <p className="font-bold text-kapribaden-purple-800">DAL</p>
                            <p className="text-sm text-gray-600">1898, 1906, 1914...</p>
                        </div>
                        <div className="bg-kapribaden-purple-50 p-4 rounded-lg text-center border border-kapribaden-purple-200">
                            <p className="font-bold text-kapribaden-purple-800">BE</p>
                            <p className="text-sm text-gray-600">1899, 1907, 1915...</p>
                        </div>
                        <div className="bg-kapribaden-purple-50 p-4 rounded-lg text-center border border-kapribaden-purple-200">
                            <p className="font-bold text-kapribaden-purple-800">WAU</p>
                            <p className="text-sm text-gray-600">1900, 1908, 1916...</p>
                        </div>
                        <div className="bg-kapribaden-purple-50 p-4 rounded-lg text-center border border-kapribaden-purple-200">
                            <p className="font-bold text-kapribaden-purple-800">JEMAKIR</p>
                            <p className="text-sm text-gray-600">1901, 1909, 1917...</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Jumlah Neptu */}
            <div className="content-section">
                <h2>JUMLAH NEPTU HARI & PASARAN</h2>
                <div className="prose">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl text-kapribaden-purple-700 mb-4">Hari</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Minggu</span>
                                    <span className="text-kapribaden-purple-700 font-bold">5</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Senin</span>
                                    <span className="text-kapribaden-purple-700 font-bold">4</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Selasa</span>
                                    <span className="text-kapribaden-purple-700 font-bold">3</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Rabu</span>
                                    <span className="text-kapribaden-purple-700 font-bold">7</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Kamis</span>
                                    <span className="text-kapribaden-purple-700 font-bold">8</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Jum'at</span>
                                    <span className="text-kapribaden-purple-700 font-bold">6</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Sabtu</span>
                                    <span className="text-kapribaden-purple-700 font-bold">9</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl text-kapribaden-purple-700 mb-4">Pasaran</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Legi</span>
                                    <span className="text-kapribaden-gold-700 font-bold">5</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Pahing</span>
                                    <span className="text-kapribaden-gold-700 font-bold">9</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Pon</span>
                                    <span className="text-kapribaden-gold-700 font-bold">7</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Wage</span>
                                    <span className="text-kapribaden-gold-700 font-bold">4</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Kliwon</span>
                                    <span className="text-kapribaden-gold-700 font-bold">8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Naga Dino */}
            <div className="content-section">
                <h2>NAGA DINO (Baik Buruknya Hari)</h2>
                <div className="prose">
                    <p>Perhitungan baik buruknya hari berdasarkan kombinasi hari dan pasaran:</p>
                    <div className="bg-gradient-to-r from-kapribaden-purple-50 to-kapribaden-gold-50 p-6 rounded-lg mt-4">
                        <h3 className="text-lg font-bold text-kapribaden-purple-800 mb-3">Keterangan:</h3>
                        <ul className="space-y-2">
                            <li><span className="font-semibold text-green-700">X = Halangan</span> - Hari yang memiliki halangan</li>
                            <li><span className="font-semibold text-blue-700">O = Gedong</span> - Hari yang baik untuk membangun</li>
                            <li><span className="font-semibold text-yellow-700">4 = Pangan</span> - Hari yang baik untuk mencari rezeki</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Boyongan */}
            <div className="content-section">
                <h2>BOYONGAN (Pindah Rumah)</h2>
                <div className="prose">
                    <p>Jumlah hari dan pasaran untuk pindah rumah, pasang kuda-kuda dan buat pondasi:</p>
                    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                        <h3 className="text-lg font-bold text-kapribaden-purple-800 mb-3">Hari yang Baik (Neptu 13 dan 17):</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Minggu Kliwon (5 + 8 = 13)</li>
                            <li>Senin Pahing (4 + 9 = 13)</li>
                            <li>Kamis Legi (8 + 5 = 13)</li>
                            <li>Kamis Pahing (8 + 9 = 17)</li>
                            <li>Jum'at Pon (6 + 7 = 13)</li>
                            <li>Sabtu Kliwon (9 + 8 = 17)</li>
                            <li>Sabtu Wage (9 + 4 = 13)</li>
                        </ul>
                    </div>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mt-4">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Hitungan:</h4>
                        <p>Jumlah neptu dibagi 4 dan sisanya menunjukkan keadaan rumah dan penghuninya:</p>
                        <ol className="list-decimal ml-6 mt-2 space-y-1">
                            <li><strong>Guna</strong> - Migunani / bermanfaat</li>
                            <li><strong>Reso</strong> - Resani / Ngresiki</li>
                            <li><strong>Rogoh</strong> - Ngrogoh / Akeh Malinge</li>
                            <li><strong>Sentoyong</strong> - Ngadeg tapi rubohan / Rejekine angel</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* 7 Bulanan */}
            <div className="content-section">
                <h2>TUJUH BULANAN (Ngrujaki)</h2>
                <div className="prose">
                    <p>Jumlah hari dan pasaran untuk tujuh bulanan:</p>
                    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                        <h3 className="text-lg font-bold text-kapribaden-purple-800 mb-3">Hari yang Baik (Neptu 8, 11, 14, dan 17):</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Senin Wage (4 + 4 = 8)</li>
                            <li>Selasa Legi (3 + 5 = 8)</li>
                            <li>Senin Pon (4 + 7 = 11)</li>
                            <li>Minggu Pahing (5 + 9 = 14)</li>
                            <li>Rabu Pon (7 + 7 = 14)</li>
                            <li>Jum'at Kliwon (6 + 8 = 14)</li>
                            <li>Sabtu Legi (9 + 5 = 14)</li>
                            <li>Kamis Pahing (8 + 9 = 17)</li>
                            <li>Sabtu Kliwon (9 + 8 = 17)</li>
                        </ul>
                    </div>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mt-4">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Hitungan:</h4>
                        <p>Jumlah neptu dibagi 3 dan sisanya menunjukkan hari baik untuk ngrujaki:</p>
                        <ol className="list-decimal ml-6 mt-2 space-y-1">
                            <li><strong>Wiji</strong> - Wujud anak ga tau sifatnya</li>
                            <li><strong>Dadi</strong> - Wujud anak yang sifatnya sesuai dengan keinginan (terbaik)</li>
                            <li><strong>Wurung</strong> - Tidak jadi atau keguguran</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Poso 40 Dino */}
            <div className="content-section">
                <h2>PUASA 3 HARI BERJUMLAH 40</h2>
                <div className="prose">
                    <p>
                        Perhitungan khusus untuk puasa 3 hari yang berjumlah 40 berdasarkan kombinasi hari dan pasaran.
                        Puasa dilakukan selama 3 hari berturut-turut dengan jumlah neptu tertentu.
                    </p>
                    <div className="bg-gradient-to-r from-kapribaden-purple-50 to-white p-6 rounded-lg mt-4">
                        <p className="text-sm text-gray-700">
                            Contoh: Minggu Legi (5+5=10), Senin Pahing (4+9=13), Selasa Pon (3+7=10) = Total 33<br />
                            Kombinasi lain dapat mencapai jumlah mendekati atau sama dengan 40.
                        </p>
                    </div>
                </div>
            </div>

            {/* Taliwangke */}
            <div className="content-section">
                <h2>TALIWANGKE</h2>
                <div className="prose">
                    <p className="font-semibold text-kapribaden-purple-700">
                        Hari yang tidak bisa digunakan untuk apa saja
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                        <h3 className="text-lg font-bold text-kapribaden-purple-800 mb-3">Daftar Taliwangke:</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Suro: Rabu Pahing</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Sapar: Kamis Pon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Mulud: Jum'at Wage</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Bakda Mulut: Sabtu Kliwon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Jumadil Awal: Senin Kliwon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Jumadil Akhir: Selasa Legi</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Redjeb: Rabu Pahing</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Ruwah: Kamis Pon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Poso: Jum'at Wage</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Syawal: Sabtu Kliwon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Selo: Senin Kliwon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Besar: Selasa Legi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Catatan */}
            <div className="mt-12 p-8 bg-gradient-to-r from-kapribaden-purple-50 to-kapribaden-gold-50 rounded-lg border-l-4 border-kapribaden-purple-600">
                <h3 className="text-2xl font-bold text-kapribaden-purple-800 mb-3">Catatan Penting</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Perhitungan hari dan pasaran ini merupakan pedoman umum. Untuk keperluan khusus, selalu minta petunjuk dan ikuti dawuh yang diterima.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Perhitungan neptu dilakukan dengan menjumlahkan nilai hari dan pasaran, kemudian hasilnya diinterpretasikan sesuai dengan keperluan
                    (boyongan, ngrujaki, dll).
                </p>
            </div>
        </div>
    )
}
