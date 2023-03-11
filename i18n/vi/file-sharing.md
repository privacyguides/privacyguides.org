---
title: "File Sharing and Sync"
icon: material/share-variant
description: Discover how to privately share your files between your devices, with your friends and family, or anonymously online.
---

Discover how to privately share your files between your devices, with your friends and family, or anonymously online.

## File Sharing

### Send

!!! khuyến nghị

    ![Send logo](assets/img/file-sharing-sync/send.svg){ align=right }
    
    **Send** is a fork of Mozilla’s discontinued Firefox Send service which allows you to send files to others with a link. Files are encrypted on your device so that they cannot be read by the server, and they can be optionally password-protected as well. [Homepage](https://onionshare.org){ .md-button .md-button--primary } [:pg-tor:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .md-button }
    
    ??? You can use other public instances, or you can host Send yourself.
    
    [:octicons-home-16: Homepage](https://send.vis.ee){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/timvisee/send-instances){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://github.com/timvisee/send#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/sponsors/timvisee){ .card-link title=Contribute }

Send can be used via its web interface or via the [ffsend](https://github.com/timvisee/ffsend) CLI. If you are familiar with the command-line and send files frequently, we recommend using the CLI client to avoid JavaScript-based encryption. You can specify the `--host` flag to use a specific server:

```bash
ffsend upload --host https://send.vis.ee/ FILE
```

### OnionShare

!!! khuyến nghị

    ![OnionShare logo](assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    **OnionShare** is an open-source tool that lets you securely and anonymously share a file of any size. It works by starting a web server accessible as a Tor onion service, with an unguessable URL that you can share with the recipients to download or send files.
    
    [Homepage](https://freedombox.org){ .md-button .md-button--primary }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://onionshare.org/#download)
        - [:simple-apple: macOS](https://onionshare.org/#download)
        - [:simple-linux: Linux](https://onionshare.org/#download)

### Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! cảnh báo
    PrivateBin sử dụng JavaScript để xử lý mã hóa, vì vậy bạn phải tin tưởng nhà cung cấp ở mức độ họ không đưa bất kỳ JavaScript độc hại nào vào để lấy khóa cá nhân của bạn.

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** là một pastebin trực tuyến mã nguồn mở, tối giản, nơi máy chủ không có kiến ​​thức về dữ liệu đã dán. Dữ liệu được mã hóa/giải mã trong trình duyệt bằng 256-bit AES. tải xuống
    
        - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/vaultwarden/server)
        - [:fontawesome-brands-github: Mã nguồn](https://github.com/dani-garcia/vaultwarden)

- Must not store decrypted data on a remote server.
- Must be open-source software.
- Must either have clients for Linux, macOS, and Windows; or have a web interface.

## FreedomBox

!!! khuyến nghị

    ![FreedomBox logo](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    **FreedomBox** is an operating system designed to be run on a [single-board computer (SBC)](https://en.wikipedia.org/wiki/Single-board_computer). The purpose is to make it easy to set up server applications that you might want to self-host.
    
    [:octicons-home-16: Homepage](https://freedombox.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title=Documentation}
    [:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://freedomboxfoundation.org/donate/){ .card-link title=Contribute }

## File Sync

### Nextcloud (Client-Server)

!!! khuyến nghị

    ![LibreOffice logo](assets/img/productivity/libreoffice.svg){ align=right }
    
    **LibreOffice** là bộ ứng dụng văn phòng mã nguồn mở miễn phí với nhiều chức năng.
    
    [Homepage](https://www.libreoffice.org){ .md-button .md-button--primary } [Chính Sách Bảo Mật](https://www.libreoffice.org/about-us/privacy/privacy-policy-en/){ .md-button }
    
    ??? tải xuống
    
        - [:fontawesome-brands-windows: Windows](https://www.libreoffice.org/download/download/)
        - [:fontawesome-brands-apple: macOS](https://www.libreoffice.org/download/download/)
        - [:fontawesome-brands-linux: Linux](https://www.libreoffice.org/download/download/)
        - [:pg-flathub: Flatpak](https://www.libreoffice.org/download/download/)
        - [:fontawesome-brands-freebsd: FreeBSD](https://www.freshports.org/editors/libreoffice/)
        - [:pg-openbsd: OpenBSD](https://openports.se/editors/libreoffice)
        - [:pg-netbsd: NetBSD](https://pkgsrc.se/misc/libreoffice)
        - [:fontawesome-brands-google-play: Google Play](https://www.libreoffice.org/download/android-and-ios/)
        - [:fontawesome-brands-app-store-ios: App Store](https://www.libreoffice.org/download/android-and-ios/)
        - [:fontawesome-brands-git: Mã nguồn](https://www.libreoffice.org/about-us/source-code)

!!! danger

    ![OnlyOffice logo](assets/img/productivity/onlyoffice.svg){ align=right }
    
    **OnlyOffice** là lựa chọn thay thế, đây là bộ ứng dụng văn phòng mã nguồn mở miễn phí với nhiều chức năng.

### Syncthing (P2P)

!!! khuyến nghị

    ![Syncthing logo](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    **Syncthing** is an open-source peer-to-peer continuous file synchronization utility. It is used to synchronize files between two or more devices over the local network or the internet. Syncthing does not use a centralized server; it uses the [Block Exchange Protocol](https://docs.syncthing.net/specs/bep-v1.html#bep-v1) to transfer data between devices. All data is encrypted using TLS.
    
    [:octicons-home-16: Homepage](https://syncthing.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.syncthing.net){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://syncthing.net/donations/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:simple-windows11: Windows](https://syncthing.net/downloads/)
        - [:simple-apple: macOS](https://syncthing.net/downloads/)
        - [:simple-linux: Linux](https://syncthing.net/downloads/)
        - [:simple-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:simple-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:simple-netbsd: NetBSD](https://syncthing.net/downloads/)

### Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! cảnh báo
    PrivateBin sử dụng JavaScript để xử lý mã hóa, vì vậy bạn phải tin tưởng nhà cung cấp ở mức độ họ không đưa bất kỳ JavaScript độc hại nào vào để lấy khóa cá nhân của bạn.

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** là một pastebin trực tuyến mã nguồn mở, tối giản, nơi máy chủ không có kiến ​​thức về dữ liệu đã dán. Dữ liệu được mã hóa/giải mã trong trình duyệt bằng 256-bit AES. tải xuống
    
        - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/vaultwarden/server)
        - [:fontawesome-brands-github: Mã nguồn](https://github.com/dani-garcia/vaultwarden)

#### Minimum Requirements

- Must not require a third-party remote/cloud server.
- Must be open-source software.
- Must either have clients for Linux, macOS, and Windows; or have a web interface.

#### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Has mobile clients for iOS and Android, which at least support document previews.
- Supports photo backup from iOS and Android, and optionally supports file/folder sync on Android.
