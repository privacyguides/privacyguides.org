---
title: "Layanan VPN"
icon: material/vpn
description: Ini adalah layanan VPN terbaik untuk melindungi privasi dan keamanan daring Anda. Temukan penyedia di sini yang tidak memata-matai Anda.
---

Jika Anda mencari **privasi tambahan** dari ISP Anda, pada jaringan Wi-Fi publik, atau saat melakukan torrent file, VPN bisa jadi solusi untuk Anda selama Anda memahami risiko yang ada. Menurut kami, penyedia layanan ini adalah yang terbaik di antara yang lain:

<div class="grid cards" markdown>

- ![Logo IVPN](assets/img/vpn/mini/ivpn.svg){ .twemoji } [IVPN](#ivpn)
- ![Logo Mullvad](assets/img/vpn/mullvad.svg){ .twemoji } [Mullvad](#mullvad)
- ![Logo Proton VPN](assets/img/vpn/protonvpn.svg){ .twemoji } [Proton VPN](#proton-vpn)

</div>

!!! danger "VPN tidak menyediakan anonimitas"

    Menggunakan VPN **tidak** akan menjaga kebiasaan jelajah Anda tetap anonim, dan juga tidak akan menambah keamanan tambahan pada lalu lintas yang tidak aman (HTTP).
    
    Jika Anda membutuhkan **anonimitas**, Anda sebaiknya menggunakan Tor Browser **daripada** menggunakan VPN.
    
    Jika Anda membutuhkan **keamanan** tambahan, Anda harus selalu memastikan bahwa Anda terhubung ke situs web menggunakan HTTPS. VPN bukanlah pengganti praktik keamanan yang baik.
    
    [Unduh Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Mitos Tor & Soal Sering Ditanya](advanced/tor-overview.md){ .md-button }

[Ikhtisar VPN Terperinci :material-arrow-right-drop-circle:](basics/vpn-overview.md ""){.md-button}

## Penyedia yang Direkomendasikan

Penyedia yang kami rekomendasikan menggunakan enkripsi, menerima Monero, mendukung WireGuard & OpenVPN, dan memiliki kebijakan tanpa pencatatan. Baca [daftar lengkap kriteria kami](#criteria) untuk informasi lebih lanjut.

### IVPN

!!! recommendation

    ![Logo IVPN](assets/img/vpn/ivpn.svg){ align=right }
    
    **IVPN** adalah penyedia VPN premium, dan mereka telah beroperasi sejak 2009. IVPN berbasis di Gibraltar.
    
    [:octicons-home-16: Laman Beranda](https://www.ivpn.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.ivpn.net/privacy/){ .card-link title="Kebijakan Privasi" }
    [:octicons-info-16:](https://www.ivpn.net/knowledgebase/general/){ .card-link title=Dokumentasi}
    [:octicons-code-16:](https://github.com/ivpn){ .card-link title="Kode Sumber" }
    
    ??? downloads
    
        - [:simple-android: Android](https://www.ivpn.net/apps-android/)
        - [:simple-appstore: App Store](https://apps.apple.com/app/ivpn-serious-privacy-protection/id1193122683)
        - [:simple-windows11: Windows](https://www.ivpn.net/apps-windows/)
        - [:simple-apple: macOS](https://www.ivpn.net/apps-macos/)
        - [:simple-linux: Linux](https://www.ivpn.net/apps-linux/)

#### :material-check:{ .pg-green } 35 Negara

IVPN memiliki server [di 35 negara](https://www.ivpn.net/server-locations).(1) Memilih penyedia VPN dengan server terdekat dengan Anda akan mengurangi latensi lalu lintas jaringan yang Anda kirim. Ini karena rute yang lebih pendek (lebih sedikit loncatan) ke tempat tujuan.
{ .annotate }

1. Terakhir diperiksa: 2022-09-16

Kami juga berpikir akan lebih baik untuk keamanan kunci pribadi penyedia VPN jika mereka menggunakan [server khusus](https://en.wikipedia.org/wiki/Dedicated_hosting_service), daripada solusi berbagi pakai yang lebih murah (dengan pelanggan lain) seperti [peladen pribadi virtual](https://id.wikipedia.org/wiki/Peladen_pribadi_virtual).

#### :material-check:{ .pg-green } Diaudit Secara Independen

IVPN telah menjalani [audit tanpa pencatatan dari Cure53](https://cure53.de/audit-report_ivpn.pdf) yang menyimpulkan bahwa klaim tanpa pencatatan dari IVPN disetujui. IVPN juga telah menyelesaikan [laporan pentest komprehensif Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) pada Januari 2020. IVPN juga mengatakan bahwa mereka berencana untuk memiliki [laporan tahunan](https://www.ivpn.net/blog/independent-security-audit-concluded) di masa depan. Tinjauan lebih lanjut dilakukan [pada bulan April 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) dan diproduksi oleh Cure53 [di situs web mereka](https://cure53.de/pentest-report_IVPN_2022.pdf).

#### :material-check:{ .pg-green } Klien Sumber Terbuka

Pada Februari 2020 [aplikasi IVPN sekarang menjadi sumber terbuka](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Kode sumber dapat diperoleh dari [organisasi GitHub](https://github.com/ivpn) mereka.

#### :material-check:{ .pg-green } Menerima Uang Tunai dan Monero

Selain menerima kartu kredit/debit dan PayPal, IVPN menerima Bitcoin, **Monero** dan **uang tunai/mata uang lokal** (pada paket tahunan) sebagai bentuk pembayaran anonim.

#### :material-check:{ .pg-green } Dukungan WireGuard

IVPN mendukung protokol WireGuard®. [WireGuard](https://www.wireguard.com) adalah protokol yang lebih baru yang menggunakan kriptografi [yang canggih](https://www.wireguard.com/protocol/). Selain itu, WireGuard bertujuan untuk menjadi lebih sederhana dan lebih berkinerja.

IVPN [merekomendasikan](https://www.ivpn.net/wireguard/) penggunaan WireGuard dengan layanan mereka dan, dengan demikian, protokol ini merupakan standar pada semua aplikasi IVPN. IVPN juga menawarkan generator konfigurasi WireGuard untuk digunakan dengan [aplikasi resmi](https://www.wireguard.com/install/) WireGuard.

#### :material-check:{ .pg-green } Penerusan Porta Jarak Jauh

[Penerusan porta jarak jauh](https://en.wikipedia.org/wiki/Port_forwarding) dimungkinkan dengan paket Pro. Port forwarding [dapat diaktifkan](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) melalui area klien. Penerusan porta jarak kauh hanya tersedia di IVPN ketika menggunakan protokol WireGuard atau OpenVPN dan [dinonaktifkan di server AS](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

#### :material-check:{ .pg-green } Klien Ponsel

Selain menyediakan berkas konfigurasi OpenVPN standar, IVPN memiliki klien ponsel untuk [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), dan [GitHub](https://github.com/ivpn/android-app/releases) yang memungkinkan koneksi yang mudah ke server mereka.

#### :material-information-outline:{ .pg-blue } Fungsionalitas Tambahan

Klien IVPN mendukung autentikasi dua faktor (klien Mullvad tidak). IVPN juga menyediakan fungsionalitas "[AntiTracker](https://www.ivpn.net/antitracker)", yang memblokir jaringan iklan dan pelacak dari tingkat jaringan.

### Mullvad

!!! recommendation

    ![Logo Mullvad](assets/img/vpn/mullvad.svg){ align=right }
    
    **Mullvad** adalah VPN yang cepat dan murah dengan fokus serius pada transparansi dan keamanan. Mereka telah beroperasi sejak **2009**. Mullvad berbasis di Swedia dan tidak memiliki uji coba gratis.
    
    [:octicons-home-16: Laman Beranda](https://mullvad.net){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion){ .card-link title="Layanan Onion" }
    [:octicons-eye-16:](https://mullvad.net/en/help/privacy-policy/){ .card-link title="Kebijakan Privasi" }
    [:octicons-info-16:](https://mullvad.net/en/help/){ .card-link title=Dokumentasi}
    [:octicons-code-16:](https://github.com/mullvad){ .card-link title="Kode Sumber" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows](https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS](https://mullvad.net/en/download/macos/)
        - [:simple-linux: Linux](https://mullvad.net/en/download/linux/)

#### :material-check:{ .pg-green } 41 Negara

Mullvad memiliki server [di 41 negara](https://mullvad.net/servers/).(1) Memilih penyedia VPN dengan server terdekat dengan Anda akan mengurangi latensi lalu lintas jaringan yang Anda kirim. Ini karena rute yang lebih pendek (lebih sedikit loncatan) ke tempat tujuan.
{ .annotate }

1. Terakhir diperiksa: 2023-01-19

Kami juga berpikir akan lebih baik untuk keamanan kunci pribadi penyedia VPN jika mereka menggunakan [server khusus](https://en.wikipedia.org/wiki/Dedicated_hosting_service), daripada solusi berbagi pakai yang lebih murah (dengan pelanggan lain) seperti [peladen pribadi virtual](https://id.wikipedia.org/wiki/Peladen_pribadi_virtual).

#### :material-check:{ .pg-green } Diaudit Secara Independen

Klien VPN Mullvad telah diaudit oleh Cure53 dan Assured AB dalam laporan pentest [yang diterbitkan di cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). Para peneliti keamanan menyimpulkan:

> Cure53 dan Assured AB senang dengan hasil audit dan perangkat lunak ini meninggalkan kesan positif secara keseluruhan. Dengan dedikasi keamanan dari tim internal di kompleks VPN Mullvad, para penguji tidak meragukan proyek ini berada di jalur yang benar dari sudut pandang keamanan.

Pada tahun 2020, audit kedua [diumumkan](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) dan laporan audit akhir [](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) tersedia di situs web Cure53:

> Hasil dari proyek Mei-Juni 2020 yang menargetkan kompleks Mullvad ini cukup positif. [...] Keseluruhan ekosistem aplikasi yang digunakan oleh Mullvad meninggalkan kesan yang baik dan terstruktur. Struktur keseluruhan aplikasi memudahkan untuk meluncurkan patch dan perbaikan secara terstruktur. Lebih dari segalanya, temuan yang ditemukan oleh Cure53 menunjukkan pentingnya untuk terus mengaudit dan menilai ulang vektor kebocoran saat ini, untuk selalu memastikan privasi pengguna akhir. Dengan demikian, Mullvad melakukan pekerjaan yang sangat baik dalam melindungi pengguna akhir dari kebocoran PII yang umum terjadi dan risiko terkait privasi.

Pada tahun 2021, audit kedua [diumumkan](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) dan laporan audit akhir [](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) tersedia di situs web Cure53. Laporan lain ditugaskan [pada bulan Juni 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) dan tersedia di situs web [Assured](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

#### :material-check:{ .pg-green } Klien Sumber Terbuka

Mullvad menyediakan kode sumber untuk klien desktop dan seluler mereka di [organisasi GitHub](https://github.com/mullvad/mullvadvpn-app) mereka.

#### :material-check:{ .pg-green } Menerima Uang Tunai dan Monero

Mullvad, selain menerima kartu kredit/debit dan PayPal, juga menerima Bitcoin, Bitcoin Cash, **Monero** dan **uang tunai/mata uang lokal** sebagai bentuk pembayaran anonim. Mereka juga menerima transfer Swish dan transfer bank.

#### :material-check:{ .pg-green } Dukungan WireGuard

Mullvad mendukung protokol WireGuard®. [WireGuard](https://www.wireguard.com) adalah protokol yang lebih baru yang menggunakan kriptografi [yang canggih](https://www.wireguard.com/protocol/). Selain itu, WireGuard bertujuan untuk menjadi lebih sederhana dan lebih berkinerja.

Mullvad [merekomendasikan](https://mullvad.net/en/help/why-wireguard/) penggunaan WireGuard dengan layanan mereka. Ini adalah protokol default atau satu-satunya protokol pada aplikasi Mullvad di Android, iOS, macOS, dan Linux, tetapi pada Windows Anda harus [secara manual mengaktifkan](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad juga menawarkan generator konfigurasi WireGuard untuk digunakan dengan [aplikasi resmi](https://www.wireguard.com/install/) WireGuard.

#### :material-check:{ .pg-green } Dukungan IPv6

Mullvad mendukung masa depan jaringan [IPv6](https://id.wikipedia.org/wiki/IPv6). Jaringan mereka memungkinkan Anda untuk [mengakses layanan yang dihosting pada IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) dibandingkan dengan penyedia lain yang memblokir koneksi IPv6.

#### :material-check:{ .pg-green } Penerusan Porta Jarak Jauh

[Penerusan porta jarak jauh](https://en.wikipedia.org/wiki/Port_forwarding) diperbolehkan untuk orang yang melakukan pembayaran satu kali, tetapi tidak diperbolehkan untuk akun dengan metode pembayaran berulang/berlangganan. Hal ini untuk mencegah Mullvad mengidentifikasi Anda berdasarkan penggunaan porta dan informasi langganan yang tersimpan. Lihat [Penerusan porta dengan Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) untuk informasi lebih lanjut.

#### :material-check:{ .pg-green } Klien Ponsel

Mullvad telah menerbitkan klien [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) dan [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn), keduanya mendukung antarmuka yang mudah digunakan dan tidak mengharuskan Anda untuk mengkonfigurasi koneksi WireGuard secara manual. Klien Android juga tersedia di [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

#### :material-information-outline:{ .pg-blue } Fungsionalitas Tambahan

Mullvad sangat transparan tentang node mana yang mereka [miliki atau sewa](https://mullvad.net/en/servers/). Mereka menggunakan [ShadowSocks](https://shadowsocks.org/) dalam konfigurasi ShadowSocks + OpenVPN mereka, membuat mereka lebih tahan terhadap tembok api dengan [Inspeksi Paket Dalam](https://en.wikipedia.org/wiki/Deep_packet_inspection) yang mencoba memblokir VPN. Seharusnya, [Cina harus menggunakan metode yang berbeda untuk memblokir server ShadowSocks](https://github.com/net4people/bbs/issues/22). Situs web Mullvad juga dapat diakses melalui Tor di [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

### Proton VPN

!!! recommendation annotate

    ![Logo Proton VPN](assets/img/vpn/protonvpn.svg){ align=right }
    
    **Proton VPN** adalah pesaing kuat dalam bidang VPN, dan mereka telah beroperasi sejak 2016. Proton AG berbasis di Swiss dan menawarkan tingkat gratis terbatas, serta opsi premium yang lebih berfitur.
    
    [:octicons-home-16: Laman Beranda](https://protonvpn.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="Kebijakan Privasi" }
    [:octicons-info-16:](https://protonvpn.com/support/){ .card-link title=Dokumentasi}
    [:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="Kode Sumber" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1437005085)
        - [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows](https://protonvpn.com/download-windows)
        - [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup/)

#### :material-check:{ .pg-green } 67 Negara

Proton VPN memiliki server [di 67 negara](https://protonvpn.com/vpn-servers).(1) Memilih penyedia VPN dengan server terdekat dengan Anda akan mengurangi latensi lalu lintas jaringan yang Anda kirim. Ini karena rute yang lebih pendek (lebih sedikit loncatan) ke tempat tujuan.
{ .annotate }

1. Terakhir diperiksa: 2022-09-16

Kami juga berpikir akan lebih baik untuk keamanan kunci pribadi penyedia VPN jika mereka menggunakan [server khusus](https://en.wikipedia.org/wiki/Dedicated_hosting_service), daripada solusi berbagi pakai yang lebih murah (dengan pelanggan lain) seperti [peladen pribadi virtual](https://id.wikipedia.org/wiki/Peladen_pribadi_virtual).

#### :material-check:{ .pg-green } Diaudit Secara Independen

Pada Januari 2020, Proton VPN telah menjalani audit independen oleh SEC Consult. SEC Consult menemukan beberapa kerentanan berisiko sedang dan rendah di aplikasi Proton VPN di Windows, Android, dan iOS, yang semuanya telah "diperbaiki dengan benar" oleh Proton VPN sebelum laporan diterbitkan. Tidak satu pun dari masalah yang diidentifikasi akan memberikan penyerang akses jarak jauh ke perangkat atau lalu lintas Anda. Anda dapat melihat laporan individual untuk setiap platform di [protonvpn.com](https://protonvpn.com/blog/open-source/). Pada bulan April 2022, Proton VPN menjalani [audit lagi](https://protonvpn.com/blog/no-logs-audit/) dan laporannya [dibuat oleh Securitum](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). [Surat pengesahan ](https://proton.me/blog/security-audit-all-proton-apps) diberikan untuk aplikasi Proton VPN pada tanggal 9 November 2021 oleh [Securitum](https://research.securitum.com).

#### :material-check:{ .pg-green } Klien Sumber Terbuka

Proton VPN menyediakan kode sumber untuk klien desktop dan seluler mereka di [organisasi GitHub](https://github.com/ProtonVPN) mereka.

#### :material-check:{ .pg-green } Menerima Uang Tunai

Proton VPN, selain menerima kartu kredit/debit, PayPal, dan [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc), juga menerima **uang tunai/mata uang lokal** sebagai bentuk pembayaran anonim.

#### :material-check:{ .pg-green } Dukungan WireGuard

Proton VPN sebagian besar mendukung protokol WireGuard®. [WireGuard](https://www.wireguard.com) adalah protokol yang lebih baru yang menggunakan kriptografi [yang canggih](https://www.wireguard.com/protocol/). Selain itu, WireGuard bertujuan untuk menjadi lebih sederhana dan lebih berkinerja.

Proton VPN [merekomendasikan](https://protonvpn.com/blog/wireguard/) penggunaan WireGuard dengan layanan mereka. Pada aplikasi Proton VPN di Windows, macOS, iOS, Android, Android, ChromeOS, dan Android TV, WireGuard merupakan protokol bawaan; namun, [dukungan](https://protonvpn.com/support/how-to-change-vpn-protocols/) untuk protokol ini tidak ada pada aplikasi Linux mereka.

#### :material-alert-outline:{ .pg-orange } Penerusan Porta Jarak Jauh

Proton VPN saat ini hanya mendukung penerusan porta [jarak jauh](https://protonvpn.com/support/port-forwarding/) di Windows, yang mungkin berdampak pada beberapa aplikasi. Terutama aplikasi peer-to-peer seperti klien Torrent.

#### :material-check:{ .pg-green } Klien Ponsel

Selain menyediakan file konfigurasi OpenVPN standar, Proton VPN memiliki klien seluler untuk [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US), dan [GitHub](https://github.com/ProtonVPN/android-app/releases) yang memungkinkan koneksi yang mudah ke server mereka.

#### :material-information-outline:{ .pg-blue } Fungsionalitas Tambahan

Klien Proton VPN mendukung autentikasi dua faktor di semua platform kecuali Linux saat ini. Proton VPN memiliki server dan pusat data mereka sendiri di Swiss, Islandia, dan Swedia. Mereka menawarkan pemblokiran iklan dan pemblokiran domain malware yang dikenal dengan layanan DNS mereka. Selain itu, Proton VPN juga menawarkan server "Tor" yang memungkinkan Anda untuk dengan mudah terhubung ke situs-situs onion, tetapi kami masih sangat menyarankan untuk menggunakan [Tor Browser resmi](https://www.torproject.org/) untuk tujuan ini.

#### :material-alert-outline:{ .pg-orange } Fitur killswitch rusak pada Mac berbasis Intel

Kerusakan sistem [dapat terjadi](https://protonvpn.com/support/macos-t2-chip-kill-switch/) pada Mac berbasis Intel saat menggunakan killswitch VPN. Jika Anda memerlukan fitur ini, dan Anda menggunakan Mac dengan chipset Intel, Anda sebaiknya mempertimbangkan untuk menggunakan layanan VPN lain.

## Kriteria

!!! danger

    Penting untuk dicatat bahwa menggunakan penyedia VPN tidak akan membuat Anda menjadi anonim, tetapi akan memberi Anda privasi yang lebih baik dalam situasi tertentu. VPN bukanlah alat untuk aktivitas ilegal. Jangan bergantung pada kebijakan "tanpa pencatatan".

**Harap diperhatikan bahwa kami tidak berafiliasi dengan penyedia yang kami rekomendasikan. Hal ini memungkinkan kami untuk memberikan rekomendasi yang sepenuhnya objektif.** Selain [kriteria standar kami](about/criteria.md), kami telah mengembangkan serangkaian persyaratan yang jelas untuk setiap penyedia VPN yang ingin direkomendasikan, termasuk enkripsi yang kuat, audit keamanan independen, teknologi modern, dan banyak lagi. Kami menyarankan Anda membiasakan diri dengan daftar ini sebelum memilih penyedia VPN, dan melakukan penelitian sendiri untuk memastikan penyedia VPN yang Anda pilih dapat dipercaya.

### Teknologi

Kami mewajibkan semua penyedia VPN yang kami rekomendasikan untuk menyediakan berkas konfigurasi OpenVPN untuk digunakan pada klien mana pun. **Jika** VPN menyediakan klien khusus mereka sendiri, kami memerlukan killswitch untuk memblokir kebocoran data jaringan saat terputus.

**Minimum untuk Memenuhi Syarat:**

- Dukungan untuk protokol yang kuat seperti WireGuard & OpenVPN.
- Killswitch yang terpasang pada klien.
- Dukungan multihop. Multihopping penting untuk menjaga kerahasiaan data jika terjadi kompromi pada satu node.
- Jika klien VPN disediakan, klien tersebut seharusnya [perangkat lunak sumber terbuka](https://id.wikipedia.org/wiki/Perangkat_lunak_sumber_terbuka), seperti perangkat lunak VPN yang umumnya sudah terpasang di dalamnya. Kami percaya bahwa ketersediaan [kode sumber](https://id.wikipedia.org/wiki/Kode_sumber) memberikan transparansi yang lebih besar tentang apa yang sebenarnya dilakukan oleh perangkat Anda.

**Kasus Terbaik:**

- Dukungan WireGuard dan OpenVPN.
- Killswitch dengan opsi yang sangat mudah dikonfigurasi (aktifkan/nonaktifkan pada jaringan tertentu, saat boot, dll.)
- Klien VPN yang mudah digunakan
- Mendukung [IPv6](https://id.wikipedia.org/wiki/IPv6). Kami berharap server akan mengizinkan koneksi masuk melalui IPv6 dan memungkinkan Anda untuk mengakses layanan yang dihosting pada alamat IPv6.
- Kemampuan [penerusan porta jarak jauh](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) membantu dalam membuat koneksi ketika menggunakan perangkat lunak berbagi file P2P ([Peer-to-Peer](https://id.wikipedia.org/wiki/Peer-to-peer)) atau hosting server (misalnya, Mumble).

### Privasi

Kami lebih memilih penyedia yang kami rekomendasikan untuk mengumpulkan data sesedikit mungkin. Tidak mengumpulkan informasi pribadi pada saat pendaftaran, dan tidak menerima bentuk pembayaran anonim.

**Minimum untuk Memenuhi Syarat:**

- [Mata uang kripto anonim](cryptocurrency.md) **atau** opsi pembayaran tunai.
- Tidak ada informasi pribadi yang diperlukan untuk mendaftar: Hanya nama pengguna, kata sandi, dan surel.

**Kasus Terbaik:**

- Menerima beberapa opsi [pembayaran anonim](advanced/payments.md).
- Tidak ada informasi pribadi yang diterima (nama pengguna yang dibuat secara otomatis, tidak perlu surel, dll.).

### Keamanan

VPN tidak ada gunanya jika tidak bisa menyediakan keamanan yang memadai. Kami mewajibkan semua penyedia yang kami rekomendasikan untuk mematuhi standar keamanan saat ini untuk koneksi OpenVPN mereka. Secara ideal, mereka akan menggunakan skema enkripsi yang lebih tahan terhadap masa depan secara bawaan. Kami juga mewajibkan pihak ketiga yang independen untuk mengaudit keamanan penyedia layanan, secara ideal dengan cara yang sangat komprehensif dan secara berulang (tahunan).

**Minimum untuk Memenuhi Syarat:**

- Skema enkripsi yang kuat: OpenVPN dengan autentikasi SHA-256; RSA-2048 atau jabat tangan yang lebih baik; enkripsi data AES-256-GCM atau AES-256-CBC.
- Kerahasiaan Maju Sempurna (PFS).
- Audit keamanan yang dipublikasikan dari perusahaan pihak ketiga yang memiliki reputasi baik.

**Kasus Terbaik:**

- Enkripsi terkuat: RSA-4096.
- Kerahasiaan Maju Sempurna (PFS).
- Audit keamanan yang dipublikasikan secara komprehensif dari perusahaan pihak ketiga yang memiliki reputasi baik.
- Program bug-bounty dan/atau proses pengungkapan kerentanan yang terkoordinasi.

### Kepercayaan

Anda tidak akan mempercayakan keuangan Anda pada seseorang dengan identitas palsu, jadi mengapa mempercayakan data internet Anda pada mereka? Kami mewajibkan penyedia layanan yang kami rekomendasikan untuk terbuka mengenai kepemilikan atau kepemimpinan mereka. Kami juga ingin melihat laporan transparansi yang lebih sering, terutama dalam hal bagaimana permintaan pemerintah ditangani.

**Minimum untuk Memenuhi Syarat:**

- Kepemimpinan atau kepemilikan yang berhadapan dengan publik.

**Kasus Terbaik:**

- Kepemimpinan yang berhadapan dengan publik.
- Laporan transparansi yang sering.

### Pemasaran

Dengan penyedia VPN yang kami rekomendasikan, kami ingin melihat pemasaran yang bertanggung jawab.

**Minimum untuk Memenuhi Syarat:**

- Harus menyediakan analitik sendiri (yaitu, tanpa Google Analytics). Situs penyedia juga harus mematuhi [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) untuk orang-orang yang ingin menolak pelacakan.

Tidak boleh melakukan pemasaran yang tidak bertanggung jawab:

- Menjamin perlindungan anonimitas 100%. Ketika seseorang membuat klaim bahwa sesuatu itu 100%, itu berarti tidak ada kepastian untuk gagal. Kami tahu bahwa orang dapat dengan mudah menyamarkan nama mereka dengan beberapa cara, misalnya:
    - Menggunakan kembali informasi pribadi (misalnya, akun surel, nama samaran unik, dll.) yang mereka akses tanpa perangkat lunak anonimitas (Tor, VPN, dll.)
    - [Sidik jari peramban](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- Klaim bahwa VPN sirkuit tunggal "lebih anonim" daripada Tor, yang merupakan sirkuit tiga atau lebih loncatan yang secara teratur berubah.
- Gunakan bahasa yang bertanggung jawab: misalnya, tidak masalah untuk mengatakan bahwa VPN "terputus" atau "tidak tersambung", namun mengklaim bahwa seseorang "terpapar", "rentan", atau "terkompromi" merupakan penggunaan bahasa yang tidak perlu dan tidak benar. Sebagai contoh, orang tersebut mungkin saja menggunakan layanan penyedia VPN lain atau menggunakan Tor.

**Kasus Terbaik:**

Pemasaran yang bertanggung jawab yang mendidik dan bermanfaat bagi konsumen dapat mencakup:

- Perbandingan yang akurat dengan kapan [Tor](tor.md) harus digunakan sebagai gantinya.
- Ketersediaan situs web penyedia VPN melalui [layanan .onion](https://id.wikipedia.org/wiki/.onion)

### Fungsionalitas Tambahan

Meskipun tidak sepenuhnya merupakan persyaratan, ada beberapa faktor yang kami pertimbangkan ketika menentukan penyedia mana yang akan direkomendasikan. Ini termasuk fungsionalitas pemblokiran iklan/pelacak, kenari surat perintah, koneksi multihop, dukungan pelanggan yang luar biasa, jumlah koneksi simultan yang diizinkan, dll.
