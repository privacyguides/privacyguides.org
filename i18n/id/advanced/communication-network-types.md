---
title: "Jenis Jaringan Komunikasi"
icon: 'material/transit-connection-variant'
description: Ikhtisar tentang beberapa arsitektur jaringan yang biasa digunakan oleh aplikasi perpesanan instan.
---

Ada beberapa arsitektur jaringan yang biasa digunakan untuk menyampaikan pesan antar orang. Jaringan ini dapat memberikan jaminan privasi yang berbeda, itulah sebabnya mengapa perlu mempertimbangkan [model ancaman](../basics/threat-modeling.md) Anda ketika memutuskan aplikasi mana yang akan digunakan.

[Pesan Instan yang Direkomendasikan](../real-time-communication.md ""){.md-button}

## Jaringan Terpusat

![Diagram jaringan terpusat](../assets/img/layout/network-centralized.svg){ align=left }

Perpesanan terpusat adalah di mana semua peserta berada di server yang sama atau jaringan server yang dikendalikan oleh organisasi yang sama.

Beberapa perpesanan yang dihosting sendiri memungkinkan Anda untuk mengatur server Anda sendiri. Hosting sendiri dapat memberikan jaminan privasi tambahan, seperti tidak ada catatan penggunaan atau akses terbatas ke metadata (data tentang siapa yang berbicara dengan siapa). Perpesanan terpusat yang dihosting sendiri terisolasi dan semua orang harus berada di server yang sama untuk berkomunikasi.

**Keuntungan:**

- Fitur dan perubahan baru dapat diterapkan dengan lebih cepat.
- Lebih mudah untuk memulai dan menemukan kontak.
- Kebanyakan yang matang dan stabil memfiturkan ekosistem, karena lebih mudah diprogram dalam perangkat lunak terpusat.
- Masalah privasi dapat dikurangi ketika Anda mempercayai server yang Anda hosting sendiri.

**Kekurangan:**

- Dapat menyertakan [kontrol atau akses terbatas](https://drewdevault.com/2018/08/08/Signal.html). Ini dapat mencakup hal-hal seperti:
- Dilarang [menghubungkan klien pihak ketiga](https://github.com/LibreSignal/LibreSignal/issues/37#issuecomment-217211165) ke jaringan terpusat yang mungkin memberikan penyesuaian yang lebih besar atau pengalaman yang lebih baik. Sering kali didefinisikan dalam Syarat dan Ketentuan penggunaan.
- Dokumentasi yang buruk atau tidak ada sama sekali untuk pengembang pihak ketiga.
- [Kepemilikan](https://web.archive.org/web/20210729191953/https://blog.privacytools.io/delisting-wire/), kebijakan privasi, dan operasi layanan dapat berubah dengan mudah ketika satu entitas mengendalikannya, yang berpotensi membahayakan layanan di kemudian hari.
- Hosting mandiri membutuhkan upaya dan pengetahuan tentang cara menyiapkan layanan.

## Jaringan Federasi

![Diagram jaringan federasi](../assets/img/layout/network-decentralized.svg){ align=left }

Perpesanan federasi menggunakan beberapa server yang independen dan terdesentralisasi yang dapat berbicara satu sama lain (surel adalah salah satu contoh layanan federasi). Federasi memungkinkan administrator sistem untuk mengontrol server mereka sendiri dan tetap menjadi bagian dari jaringan komunikasi yang lebih besar.

Ketika dihosting sendiri, anggota server federasi dapat menemukan dan berkomunikasi dengan anggota server lain, meskipun beberapa server dapat memilih untuk tetap pribadi dengan menjadi nonfederasi (misalnya, server tim kerja).

**Keuntungan:**

- Memungkinkan kontrol yang lebih besar atas data Anda saat menjalankan server Anda sendiri.
- Memungkinkan Anda untuk memilih kepada siapa Anda akan memercayakan data Anda dengan memilih di antara beberapa server "publik".
- Sering kali memungkinkan klien pihak ketiga yang dapat memberikan pengalaman yang lebih asli, disesuaikan, atau dapat diakses.
- Perangkat lunak server dapat diverifikasi bahwa itu cocok dengan kode sumber publik, dengan asumsi Anda memiliki akses ke server atau Anda mempercayai orang yang memilikinya (misalnya, anggota keluarga).

**Kekurangan:**

- Menambahkan fitur baru lebih kompleks karena fitur ini perlu distandarisasi dan diuji untuk memastikan fitur tersebut bekerja dengan semua server di jaringan.
- Karena alasan sebelumnya, fiturnya mungkin kurang, atau tidak lengkap atau bekerja dengan cara yang tidak terduga dibandingkan dengan platform terpusat, seperti pengarah pesan saat luring atau penghapusan pesan.
- Beberapa metadata mungkin tersedia (misalnya, informasi seperti "siapa yang berbicara dengan siapa," tetapi bukan konten pesan yang sebenarnya jika E2EE digunakan).
- Server federasi umumnya membutuhkan kepercayaan dari administrator server Anda. Mereka mungkin hanya seorang penghobi atau bukan "profesional keamanan", dan mungkin tidak menyajikan dokumen standar seperti kebijakan privasi atau persyaratan layanan yang merinci bagaimana data Anda digunakan.
- Administrator server terkadang memilih untuk memblokir server lain, yang merupakan sumber penyalahgunaan yang tidak dimoderasi atau melanggar aturan umum perilaku yang dapat diterima. Hal ini akan menghalangi kemampuan Anda untuk berkomunikasi dengan anggota server tersebut.

## Jaringan Peer-to-Peer

![Diagram P2P](../assets/img/layout/network-distributed.svg){ align=left }

Perpesanan P2P terhubung ke [jaringan node yang terdistribusi](https://en.wikipedia.org/wiki/Distributed_networking) untuk menyampaikan pesan ke penerima tanpa server pihak ketiga.

Klien (peer) biasanya menemukan satu sama lain melalui penggunaan jaringan [komputasi terdistribusi](https://id.wikipedia.org/wiki/Komputasi_terdistribusi). Contohnya antara lain [Tabel Hash Terdistribusi](https://id.wikipedia.org/wiki/Tabel_Hash_Terdistribusi) (DHT), yang digunakan oleh [torrent](https://id.wikipedia.org/wiki/BitTorrent) dan [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) sebagai contoh. Pendekatan lain adalah jaringan berbasis kedekatan, di mana koneksi dibuat melalui WiFi atau Bluetooth (misalnya, Briar atau protokol jaringan sosial [Scuttlebutt](https://www.scuttlebutt.nz)).

Setelah peer menemukan rute ke kontaknya melalui salah satu metode ini, koneksi langsung di antara mereka dibuat. Meskipun pesan biasanya dienkripsi, seorang pengamat masih dapat menyimpulkan lokasi dan identitas pengirim dan penerima.

Jaringan P2P tidak menggunakan server, karena rekan-rekan berkomunikasi secara langsung antara satu sama lain dan karenanya tidak dapat dihosting sendiri. Namun, beberapa layanan tambahan mungkin bergantung pada server terpusat, seperti penemuan pengguna atau menyampaikan pesan luring, yang bisa mendapatkan keuntungan dari hosting mandiri.

**Keuntungan:**

- Informasi minimal diekspos ke pihak ketiga.
- Platform P2P modern menerapkan E2EE secara bawaan. Tidak ada server yang berpotensi mencegat dan mendekripsi transmisi Anda, tidak seperti model terpusat dan federasi.

**Kekurangan:**

- Set fitur yang dikurangi:
- Pesan hanya dapat dikirim ketika kedua rekan daring, namun, klien Anda dapat menyimpan pesan secara lokal untuk menunggu kontak kembali daring.
- Umumnya meningkatkan penggunaan baterai di ponsel, karena klien harus tetap terhubung ke jaringan terdistribusi untuk mengetahui siapa saja yang sedang daring.
- Beberapa fitur perpesanan yang umum mungkin tidak diimplementasikan atau tidak lengkap, seperti penghapusan pesan.
- Alamat IP Anda dan alamat IP kontak yang berkomunikasi dengan Anda dapat terekspos jika Anda tidak menggunakan perangkat lunak ini bersama dengan [VPN](../vpn.md) atau [Tor](../tor.md). Banyak negara memiliki beberapa bentuk pengawasan massal dan/atau penyimpanan metadata.

## Perutean Anonim

![Diagram perutean anonim](../assets/img/layout/network-anonymous-routing.svg){ align=left }

Pengirim pesan yang menggunakan [perutean anonim](https://doi.org/10.1007/978-1-4419-5906-5_628) menyembunyikan identitas pengirim, penerima, atau bukti bahwa mereka telah berkomunikasi. Secara ideal, sebuah perpesanan seharusnya menyembunyikan ketiganya.

Ada [banyak](https://doi.org/10.1145/3182658) cara yang berbeda untuk menerapkan perutean anonim. Salah satu yang paling terkenal adalah [perutean bawang](https://en.wikipedia.org/wiki/Onion_routing) (yaitu [Tor](tor-overview.md)), yang mengkomunikasikan pesan terenkripsi melalui jaringan hamparan [virtual](https://en.wikipedia.org/wiki/Overlay_network) yang menyembunyikan lokasi setiap node serta penerima dan pengirim setiap pesan. Pengirim dan penerima tidak pernah berinteraksi secara langsung dan hanya bertemu melalui simpul pertemuan rahasia sehingga tidak ada kebocoran alamat IP atau lokasi fisik. Node tidak dapat mendekripsi pesan, atau tujuan akhir; hanya penerima yang dapat melakukannya. Setiap node perantara hanya dapat mendekripsi bagian yang menunjukkan ke mana harus mengirim pesan yang masih terenkripsi berikutnya, sampai pesan tersebut tiba di penerima yang dapat mendekripsi sepenuhnya, oleh karena itu disebut sebagai "lapisan bawang."

Melayani sebuah node secara sendiri dalam jaringan perutean anonim tidak memberikan manfaat privasi tambahan kepada penyedia, tetapi berkontribusi pada ketahanan seluruh jaringan terhadap serangan identifikasi untuk keuntungan semua orang.

**Keuntungan:**

- Tidak ada informasi atau informasi minimal yang diekspos ke pihak lain.
- Pesan dapat disampaikan secara terdesentralisasi meskipun salah satu pihak sedang luring.

**Kekurangan:**

- Penyebaran pesan lambat.
- Sering kali terbatas pada jenis media yang lebih sedikit, sebagian besar teks, karena jaringannya lambat.
- Kurang diandalkan jika node dipilih dengan perutean acak, beberapa node mungkin sangat jauh dari pengirim dan penerima, menambah latensi atau bahkan gagal mengirimkan pesan jika salah satu node luring.
- Lebih rumit untuk memulai, karena diperlukan pembuatan dan cadangan kunci kriptografi privat yang aman.
- Sama seperti platform terdesentralisasi lainnya, menambahkan fitur lebih kompleks bagi pengembang daripada platform terpusat. Oleh karena itu, fitur mungkin kurang atau tidak diterapkan secara lengkap, seperti pengiriman pesan secara luring atau penghapusan pesan.
