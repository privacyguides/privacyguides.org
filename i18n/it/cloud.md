---
title: "Archiviazione in cloud"
icon: material/file-cloud
description: Many cloud storage providers require your trust that they will not look at your files. These are private alternatives!
---

Molti fornitori di spazio di archiviazione cloud richiedono la tua totale fiducia sul fatto che non guarderanno nei tuoi file. Le alternative elencate di seguito eliminano la necessità di fiducia mettendo l'utente in controllo dei propri dati o implementando E2EE.

Se queste alternative non soddisfano le tue esigenze, ti suggeriamo di esaminare la sezione sui [software di crittografia](encryption.md).

??? recommendation

    Nextcloud is [still a recommended tool](productivity.md) for self-hosting a file management suite, however we do not recommend third-party Nextcloud storage providers at the moment, because we do not recommend Nextcloud's built-in E2EE functionality for home users.

## Cryptee

!!! recommendation

    ![Logo Proton Drive](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** è un servizio di archiviazione generale di file E2EE del popolare provider di posta elettronica criptata [Proton Mail](https://proton.me/mail).
    
    [:octicons-home-16: Pagina principale](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=Documentazione}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Codice sorgente" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)


## CryptPad

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. recommendation

!!! recommendation

    ![PrivateBin logo](assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** è un pastebin online minimalista e open-source in cui il server non ha alcuna conoscenza dei dati incollati. Infatti, vengono criptati/decriptati nel tuo browser utilizzando AES a 256 bit. downloads
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)

### Requisiti minimi

- Must enforce end-to-end encryption.
- Must offer a free plan or trial period for testing.
- Must support TOTP or FIDO2 multi-factor authentication, or Passkey logins.
- Must offer a web interface which supports basic file management functionality.
- Must allow for easy exports of all files/documents.
- Must use standard, audited encryption.

### Caso migliore

KeePassXC memorizza i suoi dati di esportazione come file [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Ciò può comportare la perdita di dati se si importa questo file in un altro gestore di password.

- Clients should be open-source.
- Clients should be audited in their entirety by an independent third-party.
- Should offer native clients for Linux, Android, Windows, macOS, and iOS.
    - These clients should integrate with native OS tools for cloud storage providers, such as Files app integration on iOS, or DocumentsProvider functionality on Android.
- Should support easy file-sharing with other users.
- Should offer at least basic file preview and editing functionality on the web interface.
