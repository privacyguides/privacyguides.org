---
title: "Kesalahpahaman Umum"
icon: 'material/robot-confused'
description: Privasi bukanlah topik yang mudah, dan mudah sekali terjebak dalam klaim pemasaran dan disinformasi lainnya.
schema:
  - 
    "@context": https://schema.org
    "@type": FAQPage
    mainEntity:
      - 
        "@type": Question
        name: Is open source software inherently secure?
        acceptedAnswer:
          "@type": Answer
          text: |
            Whether the source code is available and how software is licensed does not inherently affect its security in any way. Open-source software has the potential to be more secure than proprietary software, but there is absolutely no guarantee this is the case. When you evaluate software, you should look at the reputation and security of each tool on an individual basis.
      - 
        "@type": Question
        name: Can shifting trust to another provider increase privacy?
        acceptedAnswer:
          "@type": Answer
          text: |
            Kami banyak membicarakan tentang "pergeseran kepercayaan" saat membahas solusi seperti VPN (yang menggeser kepercayaan yang Anda tempatkan pada ISP Anda ke penyedia VPN). While this protects your browsing data from your ISP specifically, the VPN provider you choose still has access to your browsing data: Your data isn't completely secured from all parties.
      - 
        "@type": Question
        name: Are privacy-focused solutions inherently trustworthy?
        acceptedAnswer:
          "@type": Answer
          text: |
            Berfokus hanya pada kebijakan privasi dan pemasaran sebuah alat atau penyedia layanan bisa membutakan Anda terhadap kelemahannya. Ketika Anda mencari solusi yang lebih pribadi, Anda harus menentukan apa masalah yang mendasarinya dan menemukan solusi teknis untuk masalah tersebut. Sebagai contoh, Anda mungkin ingin menghindari Google Drive, yang memberikan akses ke semua data Anda kepada Google. The underlying problem in this case is lack of E2EE, so you should make sure that the provider you switch to actually implements E2EE, or use a tool (like Cryptomator) which provides E2EE on any cloud provider. Beralih ke penyedia yang "berfokus pada privasi" (yang tidak menerapkan E2EE) tidak akan menyelesaikan masalah Anda: ini hanya mengalihkan kepercayaan dari Google ke penyedia tersebut.
      - 
        "@type": Question
        name: How complicated should my threat model be?
        acceptedAnswer:
          "@type": Answer
          text: |
            Kami sering melihat orang menggambarkan model ancaman privasi yang terlalu rumit. Sering kali, solusi ini mencakup masalah seperti banyak akun email yang berbeda atau pengaturan yang rumit dengan banyak bagian dan kondisi yang bergerak. The replies are usually answers to "What is the best way to do X?"
            Menemukan solusi "terbaik" untuk diri Anda sendiri tidak selalu berarti Anda mencari solusi yang sempurna dengan lusinan kondisi—solusi ini sering kali sulit untuk diterapkan secara realistis. Seperti yang telah kami bahas sebelumnya, keamanan sering kali mengorbankan kenyamanan.
---

## "Perangkat lunak sumber terbuka selalu aman" atau "Perangkat lunak sumber tertutup lebih aman"

Mitos-mitos ini berasal dari sejumlah prasangka, tetapi apakah kode sumber tersedia dan bagaimana perangkat lunak dilisensikan tidak secara inheren memengaruhi keamanannya dengan cara apa pun. ==Perangkat lunak sumber terbuka memiliki *potensi* untuk lebih aman daripada perangkat lunak sumber tertutup, tetapi sama sekali tidak ada jaminan bahwa hal ini benar adanya.== Ketika Anda mengevaluasi perangkat lunak, Anda harus melihat reputasi dan keamanan setiap alat secara individu.

Perangkat lunak sumber terbuka *dapat* diaudit oleh pihak ketiga, dan sering kali lebih transparan mengenai potensi kerentanan daripada perangkat lunak sumber tertutup. Ini juga memungkinkan Anda untuk meninjau kode dan menonaktifkan fungsionalitas yang mencurigakan yang Anda temukan. Namun, *kecuali jika Anda melakukannya*, tidak ada jaminan bahwa kode pernah dievaluasi, terutama dengan proyek perangkat lunak yang lebih kecil. Proses pengembangan terbuka juga terkadang dieksploitasi untuk memperkenalkan kerentanan baru ke dalam proyek-proyek besar sekalipun.[^1]

Di sisi lain, perangkat lunak sumber tertutup itu kurang transparan, tetapi bukan berarti tidak aman. Proyek-proyek perangkat lunak sumber tertutup utama dapat diaudit secara internal dan oleh lembaga pihak ketiga, dan para peneliti keamanan independen masih bisa menemukan kerentanan dengan teknik seperti rekayasa balik.

Untuk menghindari keputusan yang memiliki bias, ini sangat *penting* bagi Anda untuk mengevaluasi standar privasi dan keamanan perangkat lunak yang Anda gunakan.

## "Menggeser kepercayaan dapat meningkatkan privasi"

Kami banyak membicarakan tentang "pergeseran kepercayaan" saat membahas solusi seperti VPN (yang menggeser kepercayaan yang Anda tempatkan pada ISP Anda ke penyedia VPN). Meskipun ini melindungi data penjelajahan Anda dari ISP Anda *secara khusus*, penyedia VPN yang Anda pilih masih memiliki akses ke data penjelajahan Anda: Data Anda tidak sepenuhnya aman dari semua pihak. Ini berarti bahwa:

1. Anda harus berhati-hati saat memilih penyedia untuk mengalihkan kepercayaan.
2. Anda tetap harus menggunakan teknik lain, seperti E2EE, untuk melindungi data Anda sepenuhnya. Hanya dengan tidak mempercayai satu penyedia layanan untuk mempercayai penyedia layanan lainnya tidak akan mengamankan data Anda.

## "Solusi yang berfokus pada privasi pada dasarnya dapat dipercaya"

Berfokus hanya pada kebijakan privasi dan pemasaran sebuah alat atau penyedia layanan bisa membutakan Anda terhadap kelemahannya. Ketika Anda mencari solusi yang lebih pribadi, Anda harus menentukan apa masalah yang mendasarinya dan menemukan solusi teknis untuk masalah tersebut. Sebagai contoh, Anda mungkin ingin menghindari Google Drive, yang memberikan akses ke semua data Anda kepada Google. Masalah yang mendasari dalam kasus ini adalah kurangnya E2EE, jadi Anda harus memastikan bahwa penyedia yang Anda pilih benar-benar mengimplementasikan E2EE, atau menggunakan alat bantu (seperti [Cryptomator](../encryption.md#cryptomator-cloud)) yang menyediakan E2EE pada penyedia cloud mana pun. Beralih ke penyedia yang "berfokus pada privasi" (yang tidak menerapkan E2EE) tidak akan menyelesaikan masalah Anda: ini hanya mengalihkan kepercayaan dari Google ke penyedia tersebut.

Kebijakan privasi dan praktik bisnis penyedia yang Anda pilih sangat penting, tetapi harus dianggap nomor dua setelah jaminan teknis privasi Anda: Anda seharusnya tidak boleh mengalihkan kepercayaan ke penyedia lain ketika mempercayai penyedia sama sekali tidak menjadi persyaratan.

## "Rumit itu lebih baik"

Kami sering melihat orang menggambarkan model ancaman privasi yang terlalu rumit. Sering kali, solusi ini mencakup masalah seperti banyak akun email yang berbeda atau pengaturan yang rumit dengan banyak bagian dan kondisi yang bergerak. Balasan biasanya berupa jawaban atas pertanyaan "Apa cara terbaik untuk melakukan *X*?"

Menemukan solusi "terbaik" untuk diri Anda sendiri tidak selalu berarti Anda mencari solusi yang sempurna dengan lusinan kondisi—solusi ini sering kali sulit untuk diterapkan secara realistis. Seperti yang telah kami bahas sebelumnya, keamanan sering kali mengorbankan kenyamanan. Di bawah ini, kami memberikan beberapa kiat:

1. ==Tindakan harus memiliki tujuan tertentu:== Pikirkan tentang cara melakukan apa yang Anda inginkan dengan tindakan yang paling sedikit.
2. ==Menghilangkan titik-titik kegagalan manusia:== Kita gagal, lelah, dan melupakan hal-hal. Untuk menjaga keamanan, hindari mengandalkan kondisi dan proses manual yang harus Anda ingat.
3. ==Gunakan tingkat perlindungan yang tepat untuk apa yang Anda inginkan.== Kami sering melihat rekomendasi yang disebut sebagai solusi penegakan hukum atau solusi antisomasi. Hal ini sering kali membutuhkan pengetahuan khusus dan umumnya tidak sesuai dengan keinginan banyak orang. Tidak ada gunanya membangun model ancaman yang rumit untuk anonimitas jika Anda dapat dengan mudah dibocorkan identitasnya hanya karena sebuah kesalahan.

Jadi, bagaimana ini terlihat?

Salah satu model ancaman yang paling jelas adalah model di mana orang *tahu siapa Anda* dan model di mana mereka tidak tahu. Di situ akan selalu ada situasi di mana Anda harus menyatakan nama resmi Anda dan ada situasi lain di mana Anda tidak perlu melakukannya.

1. **Identitas yang diketahui** - Identitas yang diketahui digunakan untuk hal-hal yang mengharuskan Anda untuk menyatakan nama Anda. Ada banyak dokumen hukum dan kontrak yang memerlukan identitas hukum. Hal ini dapat berkisar dari membuka rekening bank, menandatangani sewa properti, mendapatkan paspor, deklarasi bea cukai saat mengimpor barang, atau berurusan dengan pemerintah Anda. Hal-hal ini biasanya akan mengarah pada kredensial seperti kartu kredit, pemeriksaan peringkat kredit, nomor rekening, dan mungkin alamat fisik.

    Kami tidak menyarankan menggunakan VPN atau Tor untuk hal-hal ini, karena identitas Anda sudah diketahui melalui cara lain.

    !!! tip
   
        Saat berbelanja secara daring, penggunaan [loker paket] (https://en.wikipedia.org/wiki/Parcel_locker) dapat membantu menjaga kerahasiaan alamat fisik Anda.

2. **Identitas tidak dikenal** - Identitas yang tidak dikenal dapat berupa nama samaran yang stabil yang sering Anda gunakan. Ini tidak anonim karena tidak berubah. Jika Anda adalah bagian dari komunitas daring, Anda mungkin ingin mempertahankan persona yang dikenal orang lain. Nama samaran ini tidak anonim karena—jika dipantau cukup lama—rincian tentang pemiliknya dapat mengungkapkan informasi lebih lanjut, seperti cara mereka menulis, pengetahuan umum mereka tentang topik yang diminati, dll.

    Anda mungkin ingin menggunakan VPN untuk hal ini, untuk menyembunyikan alamat IP Anda. Transaksi keuangan lebih sulit untuk disamarkan: Anda dapat mempertimbangkan untuk menggunakan mata uang kripto anonim, seperti [Monero](https://www.getmonero.org/). Menggunakan pengalihan altcoin juga dapat membantu menyamarkan dari mana mata uang Anda berasal. Biasanya, bursa memerlukan KYC (kenali pelanggan Anda) untuk diselesaikan sebelum mereka mengizinkan Anda menukar mata uang fiat ke mata uang kripto apa pun. Opsi pertemuan lokal juga dapat menjadi solusi; namun, biasanya lebih mahal dan terkadang juga memerlukan KYC.

3. **Identitas anonim** - Bahkan dengan pengalaman, identitas anonim sulit untuk dipertahankan dalam jangka waktu yang lama. Identitas tersebut haruslah identitas jangka pendek dan berumur pendek yang dirotasi secara teratur.

    Menggunakan Tor dapat membantu dalam hal ini. Perlu juga dicatat bahwa anonimitas yang lebih baik dimungkinkan melalui komunikasi asinkron: Komunikasi waktu nyata rentan terhadap analisis pola pengetikan (misalnya lebih dari satu paragraf teks, didistribusikan di forum, melalui surel, dll.)

[^1]: Salah satu contoh penting dari hal ini adalah [insiden pada 2021 di mana para peneliti Universitas Minnesota memperkenalkan tiga kerentanan ke dalam proyek pengembangan kernel Linux](https://cse.umn.edu/cs/linux-incident).
