---
title: "Cloud Storage"
icon: material/file-cloud
---

Many cloud storage providers require your full trust that they will not look at your files. The alternatives listed below eliminate the need for trust by either putting you in control of your data or by implementing E2EE.

If these alternatives do not fit your needs, we suggest you look into [Encryption Software](encryption.md).

??? question "Looking for Nextcloud?"

    Nextcloud is [still a recommended tool](productivity.md) for self-hosting a file management suite, however we do not recommend third-party Nextcloud storage providers at the moment, because we do not recommend Nextcloud's built-in E2EE functionality for home users.

## Proton Drive

!!! khuyến nghị

    ![Proton Drive logo](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** is an E2EE general file storage service by the popular encrypted email provider [Proton Mail](https://proton.me/mail).
    
    [Website](https://drive.protonmail.com){ .md-button .md-button--primary } [Chính Sách Bảo Mật](https://protonmail.com/privacy-policy){ .md-button }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)

Proton Drive's mobile clients were released in December 2022 and are not yet open-source. Proton has historically delayed their source code releases until after initial product releases, and [plans to](https://www.reddit.com/r/ProtonDrive/comments/zf14i8/comment/izdwmme/?utm_source=share&utm_medium=web2x&context=3) release the source code by the end of 2023. Proton Drive desktop clients are still in development.

## Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! cảnh báo
    PrivateBin sử dụng JavaScript để xử lý mã hóa, vì vậy bạn phải tin tưởng nhà cung cấp ở mức độ họ không đưa bất kỳ JavaScript độc hại nào vào để lấy khóa cá nhân của bạn.

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** là một pastebin trực tuyến mã nguồn mở, tối giản, nơi máy chủ không có kiến ​​thức về dữ liệu đã dán. Dữ liệu được mã hóa/giải mã trong trình duyệt bằng 256-bit AES. tải xuống
    
        - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/vaultwarden/server)
        - [:fontawesome-brands-github: Mã nguồn](https://github.com/dani-garcia/vaultwarden)

### Minimum Requirements

- Must enforce end-to-end encryption.
- Must offer a free plan or trial period for testing.
- Must support TOTP or FIDO2 multi-factor authentication, or Passkey logins.
- Must offer a web interface which supports basic file management functionality.
- Must allow for easy exports of all files/documents.
- Must use standard, audited encryption.

### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Clients should be open-source.
- Clients should be audited in their entirety by an independent third-party.
- Should offer native clients for Linux, Android, Windows, macOS, and iOS.
    - These clients should integrate with native OS tools for cloud storage providers, such as Files app integration on iOS, or DocumentsProvider functionality on Android.
- Should support easy file-sharing with other users.
- Should offer at least basic file preview and editing functionality on the web interface.

--8<-- "includes/abbreviations.vi.txt"
