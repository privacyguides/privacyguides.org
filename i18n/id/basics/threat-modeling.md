---
title: "Threat Modeling"
icon: 'material/target-account'
description: Menyeimbangkan keamanan, privasi, dan kegunaan adalah salah satu tugas pertama dan paling sulit yang akan Anda hadapi dalam perjalanan privasi Anda.
---

Menyeimbangkan keamanan, privasi, dan kegunaan adalah salah satu tugas pertama dan paling sulit yang akan Anda hadapi dalam perjalanan privasi Anda. Everything is a trade-off: The more secure something is, the more restricting or inconvenient it generally is, etc. Sering kali, orang menemukan bahwa masalah dengan alat yang mereka lihat direkomendasikan adalah bahwa alat tersebut terlalu sulit untuk mulai digunakan!

Jika Anda ingin menggunakan **sebagian besar** alat aman yang tersedia, Anda harus mengorbankan *banyak* kegunaan. And, even then, ==nothing is ever fully secure.== There's **high** security, but never **full** security. Itulah mengapa model ancaman itu penting.

**Jadi, apa saja model ancaman ini?**

==A threat model is a list of the most probable threats to your security and privacy endeavors.== Since it's impossible to protect yourself against **every** attack(er), you should focus on the **most probable** threats. Dalam keamanan komputer, ancaman adalah peristiwa yang dapat merusak upaya Anda untuk tetap pribadi dan aman.

Focusing on the threats that matter to you narrows down your thinking about the protection you need, so you can choose the tools that are right for the job.

## Creating Your Threat Model

Untuk mengidentifikasi apa yang dapat terjadi pada hal-hal yang Anda hargai dan menentukan siapa yang perlu Anda lindungi, Anda harus menjawab lima pertanyaan berikut:

1. Apa yang ingin saya lindungi?
2. Dari siapa saya ingin melindunginya?
3. Seberapa besar kemungkinan saya perlu melindunginya?
4. Seberapa buruk konsekuensinya jika saya gagal?
5. Seberapa besar masalah yang ingin saya hadapi untuk mencoba mencegah konsekuensi yang mungkin terjadi?

### Apa yang ingin saya lindungi?

"Aset" adalah sesuatu yang Anda hargai dan ingin Anda lindungi. Dalam konteks keamanan digital, ==aset biasanya berupa beberapa jenis informasi.== Misalnya, email, daftar kontak, pesan instan, lokasi, dan file Anda adalah aset yang mungkin. Perangkat Anda sendiri juga bisa menjadi aset.

*Buatlah daftar aset Anda: data yang Anda simpan, di mana data tersebut disimpan, siapa yang memiliki akses ke data tersebut, dan apa yang mencegah orang lain untuk mengaksesnya.*

### Dari siapa saya ingin melindunginya?

Untuk menjawab pertanyaan ini, penting untuk mengidentifikasi siapa yang mungkin ingin menargetkan Anda atau informasi Anda. ==Seseorang atau entitas yang menjadi ancaman bagi aset Anda adalah "musuh".== Contoh musuh potensial adalah atasan Anda, mantan mitra Anda, pesaing bisnis Anda, pemerintah Anda, atau peretas di jaringan publik.

*Buatlah daftar musuh Anda atau mereka yang mungkin ingin mendapatkan aset Anda. Daftar Anda dapat mencakup individu, lembaga pemerintah, atau perusahaan.*

Tergantung pada siapa musuh Anda, dalam beberapa keadaan, daftar ini mungkin sesuatu yang ingin Anda hancurkan setelah Anda selesai merencanakan keamanan.

### Seberapa besar kemungkinan saya perlu melindunginya?

==Risiko adalah kemungkinan bahwa ancaman tertentu terhadap aset tertentu akan benar-benar terjadi.== Hal ini sejalan dengan kemampuan. Meskipun penyedia ponsel Anda memiliki kemampuan untuk mengakses semua data Anda, risiko mereka memposting data pribadi Anda secara online untuk merusak reputasi Anda adalah rendah.

Penting untuk membedakan antara apa yang mungkin terjadi dan probabilitas yang mungkin terjadi. Misalnya, ada ancaman bahwa bangunan Anda mungkin runtuh, tetapi risiko ini terjadi jauh lebih besar di San Francisco (di mana gempa bumi biasa terjadi) daripada di Stockholm (di mana mereka tidak).

Menilai risiko adalah proses pribadi dan subjektif. Banyak orang yang menganggap ancaman tertentu tidak dapat diterima, tidak peduli seberapa besar kemungkinannya, karena keberadaan ancaman tersebut tidak sebanding dengan biayanya. Dalam kasus lain, orang mengabaikan risiko tinggi karena mereka tidak melihat ancaman tersebut sebagai masalah.

*Tuliskan ancaman mana yang akan Anda anggap serius, dan mana yang mungkin terlalu jarang atau tidak berbahaya (atau terlalu sulit untuk dilawan) untuk dikhawatirkan.*

### Seberapa buruk konsekuensinya jika saya gagal?

Ada banyak cara yang dapat dilakukan oleh musuh untuk mendapatkan akses ke data Anda. Misalnya, musuh dapat membaca komunikasi pribadi Anda saat mereka melewati jaringan, atau mereka dapat menghapus atau merusak data Anda.

==Motif pihak-pihak yang berseteru sangat beragam, begitu pula taktik mereka.== Pemerintah yang berusaha mencegah penyebaran video yang menunjukkan kekerasan polisi mungkin akan puas dengan menghapus atau mengurangi ketersediaan video tersebut. Sebaliknya, lawan politik mungkin ingin mendapatkan akses ke konten rahasia dan mempublikasikan konten itu tanpa Anda sadari.

Perencanaan keamanan melibatkan pemahaman tentang seberapa buruk konsekuensi yang bisa terjadi jika musuh berhasil mendapatkan akses ke salah satu aset Anda. Untuk menentukan ini, Anda harus mempertimbangkan kemampuan lawan Anda. Misalnya, penyedia ponsel Anda memiliki akses ke semua catatan telepon Anda. Peretas di jaringan Wi-Fi terbuka dapat mengakses komunikasi Anda yang tidak terenkripsi. Pemerintah Anda mungkin memiliki kemampuan yang lebih kuat.

*Tuliskan apa yang mungkin ingin dilakukan lawan Anda dengan data pribadi Anda.*

### Seberapa besar masalah yang ingin saya hadapi untuk mencoba mencegah konsekuensi yang mungkin terjadi?

==Tidak ada pilihan yang sempurna untuk keamanan.== Tidak semua orang memiliki prioritas, kekhawatiran, atau akses yang sama ke sumber daya. Penilaian risiko Anda akan memungkinkan Anda untuk merencanakan strategi yang tepat untuk Anda, dengan menyeimbangkan kenyamanan, biaya, dan privasi.

For example, an attorney representing a client in a national security case may be willing to go to greater lengths to protect communications about that case, such as using encrypted email, than a mother who regularly emails her daughter funny cat videos.

*Tuliskan pilihan apa saja yang tersedia bagi Anda untuk membantu mengurangi ancaman unik Anda. Perhatikan jika Anda memiliki kendala keuangan, kendala teknis, atau kendala sosial.*

### Cobalah sendiri: Melindungi Barang Milik Anda

Pertanyaan-pertanyaan ini dapat diterapkan pada berbagai situasi, baik online maupun offline. Sebagai demonstrasi umum tentang bagaimana pertanyaan-pertanyaan ini bekerja, mari kita buat rencana untuk menjaga rumah dan harta benda Anda tetap aman.

**Apa yang ingin Anda lindungi? (Atau, *apa yang Anda miliki yang layak dilindungi?*)**
:

Aset Anda mungkin termasuk perhiasan, barang elektronik, dokumen penting, atau foto.

**Anda ingin melindunginya dari siapa?**
:

Musuh Anda mungkin termasuk pencuri, teman sekamar, atau tamu.

**Seberapa besar kemungkinan Anda perlu melindunginya?**
:

Apakah lingkungan Anda memiliki riwayat pencurian? Seberapa tepercaya teman sekamar atau tamu Anda? Apa saja kemampuan musuh Anda? Apa saja risiko yang harus Anda pertimbangkan?

**Seberapa buruk konsekuensinya jika Anda gagal?**
:

Apakah Anda memiliki sesuatu di rumah Anda yang tidak dapat Anda ganti? Apakah Anda punya waktu atau uang untuk mengganti barang-barang tersebut? Apakah Anda memiliki asuransi yang menanggung barang yang dicuri dari rumah Anda?

**Seberapa besar masalah yang ingin Anda hadapi untuk mencegah konsekuensi ini?**
:

Apakah Anda bersedia membeli brankas untuk dokumen sensitif? Apakah Anda mampu membeli kunci berkualitas tinggi? Apakah Anda memiliki waktu untuk membuka kotak penyimpanan di bank setempat dan menyimpan barang berharga Anda di sana?

Hanya setelah Anda mengajukan pertanyaan-pertanyaan ini kepada diri Anda sendiri, Anda akan dapat menilai tindakan apa yang harus diambil. Jika harta benda Anda berharga, tetapi kemungkinan pembobolan rendah, maka Anda mungkin tidak ingin menginvestasikan terlalu banyak uang untuk sebuah kunci. Namun, jika kemungkinan terjadinya pembobolan cukup besar, Anda sebaiknya membeli kunci terbaik di pasaran dan mempertimbangkan untuk menambahkan sistem keamanan.

Membuat rencana keamanan akan membantu Anda memahami ancaman yang unik bagi Anda dan mengevaluasi aset Anda, musuh Anda, dan kemampuan musuh Anda, serta kemungkinan risiko yang Anda hadapi.

## Bacaan Lebih Lanjut

Bagi orang-orang yang ingin meningkatkan privasi dan keamanan daring mereka, kami telah menyusun daftar ancaman umum yang dihadapi pengunjung kami atau tujuan yang dimiliki pengunjung kami, untuk memberi Anda beberapa inspirasi dan menunjukkan dasar rekomendasi kami.

- [Tujuan dan Ancaman Umum :material-arrow-right-drop-circle:](common-threats.md)

## Sumber

- [Ef Surveillance Self Defense: Rencana Keamanan Anda](https://ssd.eff.org/en/module/your-security-plan)
