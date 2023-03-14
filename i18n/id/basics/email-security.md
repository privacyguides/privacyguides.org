---
title: Keamanan Email
icon: material/email
description: Email pada dasarnya tidak aman dalam banyak hal, dan ini adalah beberapa alasan mengapa email bukanlah pilihan utama kami untuk komunikasi yang aman.
---

Email adalah bentuk komunikasi yang tidak aman secara default. Anda bisa meningkatkan keamanan email Anda dengan alat seperti OpenPGP, yang menambahkan Enkripsi End-to-End pada pesan Anda, tetapi OpenPGP masih memiliki sejumlah kekurangan dibandingkan dengan enkripsi pada aplikasi perpesanan lainnya, dan beberapa data email tidak pernah bisa dienkripsi secara inheren karena bagaimana email dirancang.

Akibatnya, email paling baik digunakan untuk menerima email transaksional (seperti pemberitahuan, email verifikasi, pengaturan ulang kata sandi, dll.) dari layanan yang Anda daftarkan secara online, bukan untuk berkomunikasi dengan orang lain.

## Email Encryption Overview

Cara standar untuk menambahkan E2EE ke email antara penyedia email yang berbeda adalah dengan menggunakan OpenPGP. Ada beberapa implementasi yang berbeda dari standar OpenPGP, yang paling umum adalah [GnuPG](https://en.wikipedia.org/wiki/GNU_Privacy_Guard) dan [OpenPGP.js](https://openpgpjs.org).

Ada standar lain yang populer di kalangan bisnis yang disebut [S/MIME](https://en.wikipedia.org/wiki/S/MIME), namun standar ini membutuhkan sertifikat yang dikeluarkan dari [Certificate Authority](https://en.wikipedia.org/wiki/Certificate_authority) (tidak semua dari mereka mengeluarkan sertifikat S/MIME). Ini memiliki dukungan di [Google Workplace](https://support.google.com/a/topic/9061730?hl=en&ref_topic=9061731) dan [Outlook untuk Web atau Exchange Server 2016, 2019](https://support.office.com/en-us/article/encrypt-messages-by-using-s-mime-in-outlook-on-the-web-878c79fc-7088-4b39-966f-14512658f480).

Bahkan jika Anda menggunakan OpenPGP, ia tidak mendukung kerahasiaan [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), yang berarti jika kunci privat Anda atau penerima dicuri, semua pesan sebelumnya yang dienkripsi dengan kunci tersebut akan terekspos. Inilah sebabnya mengapa kami merekomendasikan [instant messenger](../real-time-communication.md) yang menerapkan kerahasiaan ke depan melalui email untuk komunikasi orang-ke-orang bila memungkinkan.

### Klien Email Apa yang Mendukung E2EE?

Penyedia email yang memungkinkan Anda menggunakan protokol akses standar seperti IMAP dan SMTP dapat digunakan dengan salah satu klien email [yang kami rekomendasikan](../email-clients.md). Tergantung pada metode otentikasi, ini dapat menyebabkan penurunan keamanan jika baik penyedia atau klien email tidak mendukung SUMPAH atau aplikasi jembatan sebagai [otentikasi multi-faktor](multi-factor-authentication.md) tidak mungkin dengan otentikasi kata sandi biasa.

### Bagaimana Cara Melindungi Kunci Pribadi Saya?

Smartcard (seperti [Yubikey](https://support.yubico.com/hc/en-us/articles/360013790259-Using-Your-YubiKey-with-OpenPGP) atau [Nitrokey](https://www.nitrokey.com)) bekerja dengan menerima pesan email terenkripsi dari perangkat (ponsel, tablet, komputer, dll) yang menjalankan klien email/webmail. Pesan tersebut kemudian didekripsi oleh smartcard dan konten yang telah didekripsi dikirim kembali ke perangkat.

Hal ini menguntungkan untuk dekripsi terjadi pada smartcard sehingga untuk menghindari kemungkinan mengekspos kunci pribadi Anda ke perangkat dikompromikan.

## Email Metadata Overview

Email metadata is stored in the [message header](https://en.wikipedia.org/wiki/Email#Message_header) of the email message and includes some visible headers that you may have seen such as: `To`, `From`, `Cc`, `Date`, `Subject`. Ada juga sejumlah header tersembunyi yang disertakan oleh banyak klien dan penyedia email yang dapat mengungkapkan informasi tentang akun Anda.

Perangkat lunak klien dapat menggunakan metadata email untuk menunjukkan dari siapa pesan itu berasal dan jam berapa diterima. Servers may use it to determine where an email message must be sent, among [other purposes](https://en.wikipedia.org/wiki/Email#Message_header) which are not always transparent.

### Siapa yang Dapat Melihat Metadata Email?

Metadata email dilindungi dari pengamat luar dengan [Opportunistic TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) melindunginya dari pengamat luar, tetapi masih dapat dilihat oleh perangkat lunak klien email Anda (atau webmail) dan server mana pun yang meneruskan pesan dari Anda ke penerima mana pun, termasuk penyedia email Anda. Terkadang server email juga akan menggunakan layanan pihak ketiga untuk melindungi dari spam, yang umumnya juga memiliki akses ke pesan Anda.

### Mengapa Metadata tidak bisa menjadi E2EE?

Email metadata is crucial to the most basic functionality of email (where it came from, and where it has to go). E2EE pada awalnya tidak dibangun ke dalam protokol email, melainkan membutuhkan perangkat lunak tambahan seperti OpenPGP. Karena pesan OpenPGP masih harus bekerja dengan penyedia email tradisional, ia tidak dapat mengenkripsi metadata email, hanya isi pesan itu sendiri. Itu berarti bahwa bahkan ketika menggunakan OpenPGP, pengamat luar dapat melihat banyak informasi tentang pesan Anda, seperti siapa yang Anda kirimi email, baris subjek, ketika Anda mengirim email, dll.
