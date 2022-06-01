---
title: "Password Managers"
icon: material/form-textbox-password
---
Stay safe and secure online with an encrypted and open-source password manager.

## Password Best Practices

- Always use unique passwords. Don't make yourself a victim of "[credential stuffing](https://en.wikipedia.org/wiki/Credential_stuffing)".
- Store an exported backup of your passwords in an [encrypted container](encryption.md) on another storage device. This can be useful if something happens to your device or the service you are using.
- If possible, store TOTP tokens in a separate [TOTP app](basics/multi-factor-authentication.md#authenticator-apps) and not your password manager. TOTP codes are generated from a "[shared secret](https://en.wikipedia.org/wiki/Time-based_one-time_password#Security)". If the secret is obtained by an adversary they can generate TOTP values. Typically, mobile platforms have better app isolation and more secure methods for storing sensitive credentials.

## Local Password Managers

These password managers store the password database locally.

### KeePassXC

!!! recommendation

    ![KeePassXC logo](assets/img/password-management/keepassxc.svg){ align=right }

    **KeePassXC** is a community fork of KeePassX, a native cross-platform port of KeePass Password Safe, with the goal to extend and improve it with new features and bugfixes to provide a feature-rich, fully cross-platform and modern open-source password manager.

    [:octicons-home-16: Homepage](https://keepassxc.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://keepassxc.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://keepassxc.org/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/keepassxreboot/keepassxc){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://keepassxc.org/donate/){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://keepassxc.org/download/#windows)
        - [:fontawesome-brands-apple: macOS](https://keepassxc.org/download/#mac)
        - [:fontawesome-brands-linux: Linux](https://keepassxc.org/download/#linux)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)

KeePassXC stores its export data as [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files. This may mean data loss if you import this file into another password manager. We advise you check each record manually.

### KeePassDX

!!! recommendation

    ![KeePassDX logo](assets/img/password-management/keepassdx.svg){ align=right }

    **KeePassDX** is a lightweight password manager for Android, allows editing encrypted data in a single file in KeePass format and can fill in the forms in a secure way. [Contributor Pro](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro) allows unlocking cosmetic content and non-standard protocol features, but more importantly, it helps and encourages development.

    [:octicons-home-16: Homepage](https://www.keepassdx.com){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Kunzisoft/KeePassDX/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/Kunzisoft/KeePassDX){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.keepassdx.com/#donation){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free)
        - [:pg-f-droid: F-Droid](https://www.f-droid.org/packages/com.kunzisoft.keepass.libre)
        - [:fontawesome-brands-github: GitHub](https://github.com/Kunzisoft/KeePassDX/releases)

## Cloud Syncing Password Managers

These password managers sync up to a cloud server that may be self-hostable.

### Bitwarden

!!! recommendation

    ![Bitwarden logo](assets/img/password-management/bitwarden.svg){ align=right }

    **Bitwarden** is a free and open-source password manager. It aims to solve password management problems for individuals, teams, and business organizations. Bitwarden is among the easiest and safest solutions to store all of your logins and passwords while conveniently keeping them synced between all of your devices. If you don't want to use the Bitwarden cloud, you can easily host your own Bitwarden server.

    [:octicons-home-16: Homepage](https://bitwarden.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://bitwarden.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://bitwarden.com/help/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/bitwarden){ .card-link title="Source Code" }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://bitwarden.com/download)
        - [:fontawesome-brands-app-store: Mac App Store](https://apps.apple.com/app/bitwarden/id1352778147)
        - [:fontawesome-brands-linux: Linux](https://bitwarden.com/download)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/com.bitwarden.desktop)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/bitwarden-password-manager/id1137397744)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)
        - [:pg-f-droid: F-Droid](https://mobileapp.bitwarden.com/fdroid)
        - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager)
        - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb)
        - [:fontawesome-brands-edge: Edge](https://microsoftedge.microsoft.com/addons/detail/jbkfoedolllekgbhcbcoahefnbanhhlh)

### Psono

!!! recommendation

    ![Psono logo](assets/img/password-management/psono.svg){ align=right }

    **Psono** is a free and open source password manager from Germany, with a focus on password management for teams. It can be [self-hosted](#password-management-servers). Psono supports secure sharing of passwords, files, bookmarks, and emails. All secrets are protected by a master password.

    [:octicons-home-16: Homepage](https://psono.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://psono.com/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://doc.psono.com/){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitlab.com/psono){ .card-link title="Source Code" }

    ??? downloads

        - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
        - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
        - [:fontawesome-brands-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

## Password Management Servers

These products are self-hostable synchronization for cloud based password managers.

### Vaultwarden

!!! recommendation

    ![Vaultwarden logo](assets/img/password-management/vaultwarden.svg#only-light){ align=right }
    ![Vaultwarden logo](assets/img/password-management/vaultwarden-dark.svg#only-dark){ align=right }

    **Vaultwarden** is an alternative implementation of the Bitwarden server API written in Rust and compatible with upstream Bitwarden clients, perfect for self-hosted deployment where running the official resource-heavy service might not be ideal.

    [:octicons-repo-16: Repository](https://github.com/dani-garcia/vaultwarden){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/dani-garcia/vaultwarden/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/dani-garcia/vaultwarden){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/sponsors/dani-garcia){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-docker: Docker Hub](https://hub.docker.com/r/vaultwarden/server)

### Psono Server

!!! recommendation

    ![Psono Server logo](assets/img/password-management/psono.svg){ align=right }

    Psono provides [extensive documentation](https://doc.psono.com/) for their product. The [web-client](https://doc.psono.com/admin/installation/install-webclient.html#installation-with-docker) for Psono can be self-hosted; alternatively, you can choose the the full [Community Edition](https://doc.psono.com/admin/installation/install-server-ce.html) or the [Enterprise Edition](https://doc.psono.com/admin/installation/install-server-ee.html) with additional features.

    [:octicons-repo-16: Repository](https://gitlab.com/psono/psono-server){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://psono.com/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://doc.psono.com/){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitlab.com/psono/psono-server){ .card-link title="Source Code" }

    ??? downloads

        - [:fontawesome-brands-docker: Docker Hub](https://hub.docker.com/r/psono/psono-server)

## Minimal Password Managers

These products are minimal password managers that can be used within scripting applications.

### gopass

!!! recommendation

    ![gopass logo](assets/img/password-management/gopass.svg){ align=right }

    **gopass** is a password manager for the command line written in Go. It works on all major desktop and server operating systems (Linux, macOS, BSD, Windows).

    [:octicons-home-16: Homepage](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Contribute }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://www.gopass.pw/#install-windows)
        - [:fontawesome-brands-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:fontawesome-brands-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:fontawesome-brands-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)

--8<-- "includes/abbreviations.en.md"
