---
title: "DNS Resolvers"
icon: material/dns
description: These are some encrypted DNS providers we recommend switching to, to replace your ISP's default configuration.
---

Encrypted DNS with third-party servers should only be used to get around basic [DNS blocking](https://en.wikipedia.org/wiki/DNS_blocking) when you can be sure there won't be any consequences. DNS terenkripsi tidak akan membantu Anda menyembunyikan aktivitas penjelajahan Anda.

[Learn more about DNS :material-arrow-right-drop-circle:](advanced/dns-overview.md ""){.md-button}

## Penyedia yang Direkomendasikan

| Penyedia DNS                                                                    | Kebijakan Privasi                                                                                     | Protokol                                                      | Pencatatan Log | ECS      | Pemfilteran                                                                                                                                                |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | -------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Cleartext <br> DoH/3 <br> DoT <br> DNSCrypt | Beberapa[^1]   | Tidak    | Berdasarkan pilihan server. Daftar filter yang digunakan dapat ditemukan di sini. [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Cleartext <br> DoH/3 <br> DoT                     | Beberapa[^2]   | Tidak    | Berdasarkan pilihan server.                                                                                                                                |
| [**Control D**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Cleartext <br> DoH/3 <br> DoT <br> DoQ      | Opsional[^3]   | Tidak    | Berdasarkan pilihan server.                                                                                                                                |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | DoH <br> DoT                                            | Tidak[^4]      | Tidak    | Berdasarkan pilihan server. Daftar filter yang digunakan dapat ditemukan di sini. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)    |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Cleartext <br> DoH/3 <br> DoT                     | Opsional[^5]   | Opsional | Berdasarkan pilihan server.                                                                                                                                |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Cleartext <br> DoH <br> DoT <br> DNSCrypt   | Beberapa[^6]   | Opsional | Berdasarkan pilihan server, pemblokiran malware secara default.                                                                                            |

## Kriteria

**Harap dicatat bahwa kami tidak berafiliasi dengan proyek-proyek yang kami rekomendasikan.** Selain [kriteria standar kami](about/criteria.md), kami telah mengembangkan serangkaian persyaratan yang jelas untuk memungkinkan kami memberikan rekomendasi yang objektif. Kami sarankan Anda membiasakan diri dengan daftar ini sebelum memilih untuk menggunakan sebuah proyek, dan melakukan riset sendiri untuk memastikan bahwa itu adalah pilihan yang tepat untuk Anda.

!!! contoh "Bagian ini baru"

    Kami sedang berupaya menetapkan kriteria yang ditentukan untuk setiap bagian dari situs kami, dan hal ini dapat berubah sewaktu-waktu. Jika Anda memiliki pertanyaan tentang kriteria kami, silakan [tanyakan di forum kami](https://discuss.privacyguides.net/latest) dan jangan berasumsi bahwa kami tidak mempertimbangkan sesuatu saat membuat rekomendasi jika tidak tercantum di sini. Ada banyak faktor yang dipertimbangkan dan didiskusikan saat kami merekomendasikan sebuah proyek, dan mendokumentasikan setiap faktor tersebut merupakan pekerjaan yang sedang berjalan.

- Harus mendukung [DNSSEC](advanced/dns-overview.md#what-is-dnssec).
- [QNAME Minimization](advanced/dns-overview.md#what-is-qname-minimization).
- Izinkan [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs) dinonaktifkan.
- Prefer [anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) support or geo-steering support.

## Dukungan Sistem Operasi Asli

### Android

Android 9 ke atas mendukung DNS melalui TLS. Pengaturan dapat ditemukan di: **Pengaturan** &rarr; **Jaringan & Internet** &rarr; **DNS Pribadi**.

### Perangkat Apple

Versi terbaru iOS, iPadOS, tvOS, dan macOS, mendukung DoT dan DoH. Kedua protokol didukung secara bawaan melalui [profil konfigurasi](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) atau melalui [API Pengaturan DNS](https://developer.apple.com/documentation/networkextension/dns_settings).

Setelah pemasangan profil konfigurasi atau aplikasi yang menggunakan API Pengaturan DNS, konfigurasi DNS dapat dipilih. Jika VPN aktif, resolusi di dalam terowongan VPN akan menggunakan pengaturan DNS VPN dan bukan pengaturan seluruh sistem Anda.

#### Signed Profiles

Apple does not provide a native interface for creating encrypted DNS profiles. [Secure DNS profile creator](https://dns.notjakob.com/tool.html) is an unofficial tool for creating your own encrypted DNS profiles, however they will not be signed. Signed profiles are preferred; signing validates a profile's origin and helps to ensure the integrity of the profiles. A green "Verified" label is given to signed configuration profiles. For more information on code signing, see [About Code Signing](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **Signed profiles** are offered by [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io), and [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! info

    `systemd-resolved`, yang digunakan banyak distribusi Linux untuk melakukan pencarian DNS, belum [mendukung DoH](https://github.com/systemd/systemd/issues/8639). Jika Anda ingin menggunakan DoH, Anda perlu menginstal proxy seperti [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) dan [konfigurasikan] (https://wiki.archlinux.org/title/Dnscrypt-proxy) untuk mengambil semua permintaan DNS dari resolver sistem Anda dan meneruskannya melalui HTTPS.

## Proxy DNS Terenkripsi

Perangkat lunak proxy DNS terenkripsi menyediakan proxy lokal untuk [DNS tidak terenkripsi](advanced/dns-overview.md#unencrypted-dns) resolver untuk diteruskan. Biasanya digunakan pada platform yang tidak mendukung [DNS terenkripsi](advanced/dns-overview.md#what-is-encrypted-dns).

### RethinkDNS

!!! recommendation

    ![RethinkDNS logo ]( assets/img/android/rethinkdns.svg#only-light ){ align=right }
    ![RethinkDNS logo ]( assets/img/android/rethinkdns-dark.svg#only-dark ){ align=right }
    
    ** RethinkDNS ** adalah klien Android open - source yang mendukung [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), [DNS-over-TLS](advanced/dns-overview.md#dns-over-tls-dot), [DNSCrypt](advanced/dns-overview.md#dnscrypt) dan DNS Proxy bersama dengan tanggapan DNS cache, permintaan DNS logging lokal dan dapat digunakan sebagai firewall juga.
    
    [:octicons-home-16: Beranda ]( https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:]( https://rethinkdns.com/privacy ){.card-link title=" Kebijakan Privasi "}
    [:octicons-info-16:]( https://docs.rethinkdns.com/){.card-link title=Dokumentasi}
    [:octicons-code-16:]( https://github.com/celzero/rethink-app ){.card-link title=" Kode Sumber "}
    
    ??? unduhan
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### dnscrypt-proxy

!!! recommendation

    ![dnscrypt - proxy logo](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt - proxy ** adalah proxy DNS dengan dukungan untuk [DNSCrypt](advanced/dns-overview.md#dnscrypt), [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), dan [Anonymized DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonimized-DNS).
    
    !!! peringatan "Fitur DNS anonim tidak [**tidak**]( advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns) menganonimkan lalu lintas jaringan lainnya."
    
    [:octicons-repo-16: Repositori](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Dokumentasi}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Kode Sumber" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title=Kontribusi }
    
    ??? unduhan
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## Solusi yang dihosting sendiri

Solusi DNS yang dihosting sendiri berguna untuk menyediakan penyaringan pada platform terkontrol, seperti Smart TV dan perangkat IoT lainnya, karena tidak ada perangkat lunak di sisi klien yang diperlukan.

### AdGuard Home

!!! recommendation

    ![AdGuard Home logo](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** is an open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) to block unwanted web content, such as advertisements.
    
    AdGuard Home features a polished web interface to view insights and manage blocked content.
    
    [:octicons-home-16: Homepage](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Source Code" }

### Pi - hole

!!! recommendation

    ![Pi-hole logo](assets/img/dns/pi-hole.svg){ align=right }
    
    **Pi-hole** is an open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) which uses [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) to block unwanted web content, such as advertisements.
    
    Pi-hole is designed to be hosted on a Raspberry Pi, but it is not limited to such hardware. The software features a friendly web interface to view insights and manage blocked content.
    
    [:octicons-home-16: Homepage](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title=Contribute }

[^1]: AdGuard menyimpan metrik kinerja agregat dari server DNS mereka, yaitu jumlah permintaan lengkap ke server tertentu, jumlah permintaan yang diblokir, dan kecepatan pemrosesan permintaan. Mereka juga menjaga dan menyimpan basis data domain yang diminta dalam waktu 24 jam terakhir. "Kami membutuhkan informasi ini untuk mengidentifikasi dan memblokir pelacak dan ancaman baru." "Kami juga mencatat berapa kali pelacak ini atau itu telah diblokir. Kami membutuhkan informasi ini untuk menghapus aturan usang dari filter kami." [https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare hanya mengumpulkan dan menyimpan data permintaan DNS terbatas yang dikirim ke resolver 1.1.1.1. Layanan resolver 1.1.1.1 tidak mencatat data pribadi, dan sebagian besar data kueri yang tidak dapat diidentifikasi secara pribadi hanya disimpan selama 25 jam. [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D hanya mencatat untuk resolver Premium dengan profil DNS khusus. Resolver gratis tidak mencatat data. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: Layanan DNS Mullvad tersedia untuk pelanggan dan non-pelanggan Mullvad VPN. Kebijakan privasi mereka secara eksplisit mengklaim bahwa mereka tidak mencatat permintaan DNS dengan cara apa pun. [https://mullvad.net/en/help/no-logging-data-policy](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS dapat menyediakan fitur wawasan dan pencatatan berdasarkan basis partisipasi. Anda dapat memilih waktu penyimpanan dan lokasi penyimpanan log untuk setiap log yang Anda pilih untuk disimpan. Jika tidak diminta secara khusus, tidak ada data yang dicatat. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 mengumpulkan beberapa data untuk tujuan pemantauan dan tanggapan ancaman. Data itu kemudian dapat dicampur ulang dan dibagikan, seperti untuk tujuan penelitian keamanan. Quad9 tidak mengumpulkan atau mencatat alamat IP atau data lain yang mereka anggap dapat diidentifikasi secara pribadi. [https://www.quad9.net/privacy/policy](https://www.quad9.net/privacy/policy/)
