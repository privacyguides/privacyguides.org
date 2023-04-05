---
title: Ikhtisar VPN
icon: material/vpn
description: Virtual Private Networks mengalihkan risiko dari ISP Anda ke pihak ketiga yang Anda percayai. Anda harus mengingat hal-hal ini.
---

Virtual Private Networks adalah cara untuk memperluas ujung jaringan Anda untuk keluar ke tempat lain di dunia. ISP dapat melihat arus lalu lintas internet yang masuk dan keluar dari perangkat terminasi jaringan Anda (misalnya modem).

Protokol enkripsi seperti HTTPS umumnya digunakan di internet, jadi mereka mungkin tidak dapat melihat dengan tepat apa yang Anda posting atau baca, tetapi mereka dapat mengetahui [domain yang Anda minta](../advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns).

VPN dapat membantu karena dapat mengalihkan kepercayaan ke server di tempat lain di dunia. Akibatnya, ISP kemudian hanya melihat bahwa Anda tersambung ke VPN dan tidak ada aktivitas apa pun yang Anda kirimkan ke VPN tersebut.

## Haruskah saya menggunakan VPN?

**Ya**, kecuali Anda sudah menggunakan Tor. VPN melakukan dua hal: mengalihkan risiko dari Penyedia Layanan Internet Anda ke dirinya sendiri dan menyembunyikan IP Anda dari layanan pihak ketiga.

VPN tidak dapat mengenkripsi data di luar koneksi antara perangkat Anda dan server VPN. Penyedia VPN dapat melihat dan memodifikasi lalu lintas Anda dengan cara yang sama seperti yang dilakukan ISP Anda. Dan tidak ada cara untuk memverifikasi kebijakan "tanpa pencatatan" dari penyedia VPN dengan cara apa pun.

Namun, mereka menyembunyikan IP Anda yang sebenarnya dari layanan pihak ketiga, asalkan tidak ada kebocoran IP. Mereka membantu Anda berbaur dengan orang lain dan mengurangi pelacakan berbasis IP.

## Kapan sebaiknya saya tidak menggunakan VPN?

Menggunakan VPN jika Anda menggunakan [identitas yang diketahui](common-threats.md#common-misconceptions) kemungkinan tidak akan berguna.

Melakukan hal itu dapat memicu sistem deteksi spam dan penipuan, seperti jika Anda masuk ke situs web bank Anda.

## Bagaimana dengan enkripsi?

Enkripsi yang ditawarkan oleh penyedia VPN berada di antara perangkat Anda dan server mereka. Ini menjamin bahwa tautan khusus ini aman. Ini merupakan langkah maju dari penggunaan proxy yang tidak terenkripsi, di mana pihak yang tidak bertanggung jawab dalam jaringan dapat mencegat komunikasi antara perangkat Anda dan proxy tersebut dan memodifikasinya. Namun, enkripsi antara aplikasi atau browser Anda dengan penyedia layanan tidak ditangani oleh enkripsi ini.

Untuk menjaga agar apa yang Anda lakukan di situs web yang Anda kunjungi tetap privat dan aman, Anda harus menggunakan HTTPS. Ini akan menjaga kata sandi, token sesi, dan kueri Anda aman dari penyedia VPN. Pertimbangkan untuk mengaktifkan "HTTPS di mana saja" di peramban Anda untuk mengurangi serangan downgrade seperti [SSL Strip](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf).

## Haruskah saya menggunakan DNS terenkripsi dengan VPN?

Kecuali penyedia VPN Anda melayani server DNS terenkripsi, **tidak**. Menggunakan DOH/DOT (atau bentuk lain dari DNS terenkripsi) dengan server pihak ketiga hanya akan menambah lebih banyak entitas untuk dipercaya dan sama sekali **tidak** meningkatkan privasi/keamanan Anda. Penyedia VPN Anda masih dapat melihat situs web mana yang Anda kunjungi berdasarkan alamat IP dan metode lainnya. Alih-alih hanya mempercayai penyedia VPN Anda, Anda sekarang mempercayai penyedia VPN dan penyedia DNS.

Alasan umum untuk merekomendasikan DNS terenkripsi adalah karena ini membantu melawan pemalsuan DNS. Namun, peramban Anda seharusnya sudah memeriksa [sertifikat TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security#Digital_certificates) dengan **HTTPS** dan memperingatkan Anda tentang hal itu. Jika Anda tidak menggunakan **HTTPS**, maka pihak lawan masih bisa memodifikasi apa pun selain kueri DNS Anda dan hasil akhirnya tidak akan jauh berbeda.

Tidak perlu dikatakan lagi, **Anda tidak boleh menggunakan DNS terenkripsi dengan Tor**. Ini akan mengarahkan semua permintaan DNS Anda melalui satu sirkuit dan memungkinkan penyedia DNS terenkripsi untuk mendeanonimkan Anda.

## Haruskah saya menggunakan Tor *dan* VPN?

Dengan menggunakan VPN dengan Tor, Anda pada dasarnya menciptakan simpul masuk permanen, sering kali dengan jejak uang yang melekat. Ini tidak memberikan manfaat tambahan apa pun bagi Anda, sekaligus meningkatkan permukaan serangan koneksi Anda secara dramatis. Jika Anda ingin menyembunyikan penggunaan Tor Anda dari ISP atau pemerintah Anda, Tor memiliki solusi bawaan untuk itu: Jembatan Tor. [Baca lebih lanjut tentang jembatan Tor dan mengapa menggunakan VPN tidak diperlukan](../advanced/tor-overview.md).

## Bagaimana jika saya membutuhkan anonimitas?

VPN tidak dapat memberikan anonimitas. Penyedia VPN Anda masih akan melihat alamat IP asli Anda, dan sering memiliki jejak uang yang dapat dihubungkan langsung kembali kepada Anda. Anda tidak dapat mengandalkan kebijakan "tanpa pencatatan" untuk melindungi data Anda. Gunakan [Tor](https://www.torproject.org/) sebagai gantinya.

## Bagaimana dengan penyedia VPN yang menyediakan node Tor?

Jangan gunakan fitur tersebut. Inti dari penggunaan Tor adalah Anda tidak mempercayai penyedia VPN Anda. Saat ini Tor hanya mendukung protokol [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol). [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (digunakan di [WebRTC](https://en.wikipedia.org/wiki/WebRTC) untuk berbagi suara dan video, protokol [HTTP3/QUIC](https://en.wikipedia.org/wiki/HTTP/3) yang baru, dll), [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) dan paket-paket lainnya akan dibatalkan. Untuk mengimbangi hal ini, penyedia VPN biasanya akan merutekan semua paket non-TCP melalui server VPN mereka (loncatan pertama Anda). Ini adalah kasus pada [ProtonVPN](https://protonvpn.com/support/tor-vpn/). Selain itu, ketika menggunakan pengaturan Tor melalui VPN ini, Anda tidak memiliki kendali atas fitur Tor penting lainnya seperti [Alamat Tujuan Terisolasi](https://www.whonix.org/wiki/Stream_Isolation) (menggunakan sirkuit Tor yang berbeda untuk setiap domain yang Anda kunjungi).

Fitur ini harus dilihat sebagai cara yang nyaman untuk mengakses Jaringan Tor, bukan untuk tetap anonim. Untuk anonimitas yang tepat, gunakan Tor Browser, TorSocks, atau gateway Tor.

## Kapan VPN berguna?

VPN mungkin masih berguna bagi Anda dalam berbagai skenario, seperti:

1. Menyembunyikan lalu lintas Anda dari **hanya** Penyedia Layanan Internet Anda.
1. Menyembunyikan unduhan Anda (seperti torrent) dari ISP dan organisasi anti-pembajakan.
1. Menyembunyikan IP Anda dari situs web dan layanan pihak ketiga, mencegah pelacakan berbasis IP.

Untuk situasi seperti ini, atau jika Anda memiliki alasan kuat lainnya, penyedia VPN yang kami sebutkan di atas adalah yang menurut kami paling dapat dipercaya. Namun, menggunakan penyedia VPN masih berarti Anda *mempercayai* penyedia. Dalam hampir semua skenario lain, Anda sebaiknya menggunakan alat**-by-design** yang aman seperti Tor.

## Sumber dan Bacaan Lebih Lanjut

1. [VPN - Narasi yang Sangat Genting](https://schub.io/blog/2019/04/08/very-precarious-narrative.html) oleh Dennis Schubert
1. [Tor Network Overview](../advanced/tor-overview.md)
1. [IVPN Privacy Guides](https://www.ivpn.net/privacy-guides)
1. ["Apakah saya memerlukan VPN?"](https://www.doineedavpn.com)sebuah alat yang dikembangkan oleh IVPN untuk menantang pemasaran VPN yang agresif dengan membantu individu memutuskan apakah VPN tepat untuk mereka.

## Informasi VPN Terkait

- [Masalah dengan VPN dan Situs Ulasan Privasi](https://blog.privacyguides.org/2019/11/20/the-trouble-with-vpn-and-privacy-review-sites/)
- [Investigasi Aplikasi VPN Gratis](https://www.top10vpn.com/free-vpn-app-investigation/)
- [Hidden VPN owners unveiled: 101 VPN products run by just 23 companies](https://vpnpro.com/blog/hidden-vpn-owners-unveiled-97-vpns-23-companies/)
- [Perusahaan Tiongkok ini diam-diam berada di balik 24 aplikasi populer yang meminta izin berbahaya](https://vpnpro.com/blog/chinese-company-secretly-behind-popular-apps-seeking-dangerous-permissions/)
