---
title: Password Managers
icon: material/form-textbox-password
---
Stay safe and secure online with an encrypted and open-source password manager.

## Password best practices

- Always use unique passwords. Don't make yourself a victim of "[credential stuffing](https://en.wikipedia.org/wiki/Credential_stuffing)".
- Store an exported backup of your passwords in an [encrypted container](/file-encryption) on another storage device. This can be useful if something happens to your device or the service you are using.
- If possible store [Time-based one-time password (TOTP)](https://en.wikipedia.org/wiki/Time-based_one-time_password) tokens in a separate [TOTP app](/multi-factor-authentication) and not your password manager. TOTP codes are generated from a "[shared secret](https://en.wikipedia.org/wiki/Time-based_one-time_password#Security)". If the secret is obtained by an adversary they can generate TOTP values. Typically, mobile platforms have better app isolation and more secure methods for storing sensitive credentials.

## Local Password Managers

These password managers store the password database locally.

### KeepassXC

!!! recommendation

    ![KeepassXC logo](/assets/img/password-management/keepassxc.svg){ align=right }

    **KeePassXC** is a community fork of KeePassX, a native cross-platform port of KeePass Password Safe, with the goal to extend and improve it with new features and bugfixes to provide a feature-rich, fully cross-platform and modern open-source password manager.

    !!! warning
        KeepassXC stores its export data as [comma-separated values (CSV)](https://en.wikipedia.org/wiki/Comma-separated_values). This may mean data loss if you import this file into another password manager. We advise you check each record manually.

    [Visit keepassxc.org](https://keepassxc.org){ .md-button .md-button--primary } [Privacy Policy](https://keepassxc.org/privacy){ .md-button }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://keepassxc.org/download/#windows)
    - [:fontawesome-brands-apple: macOS](https://keepassxc.org/download/#mac)
    - [:fontawesome-brands-linux: Linux](https://keepassxc.org/download/#linux)
    - [:pg-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
    - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
    - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)
    - [:fontawesome-brands-github: Source](https://github.com/keepassxreboot/keepassxc)

### KeepassDX

!!! recommendation

    ![KeepassDX logo](/assets/img/password-management/keepassdx.svg){ align=right }

    **KeepassDX** is a Lightweight password manager for Android, allows editing encrypted data in a single file in KeePass format and can fill in the forms in a secure way. [Contributor Pro](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro) allows unlocking cosmetic content and non-standard protocol features, but more importantly, it helps and encourages development.

    For more details, we recommend looking at their [FAQ](https://github.com/Kunzisoft/KeePassDX/wiki/FAQ).

    [Visit keepassdx.com](https://www.keepassdx.com){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free)
    - [:pg-f-droid: F-Droid](https://www.f-droid.org/packages/com.kunzisoft.keepass.libre)
    - [:fontawesome-brands-github: Source](https://github.com/Kunzisoft/KeePassDX)

## Cloud syncing Password Managers

These password managers sync up to a cloud server that may be self-hostable.

### Bitwarden

!!! recommendation

    ![Bitwarden logo](/assets/img/password-management/bitwarden.svg){ align=right }

    **Bitwarden** is a free and open-source password manager. It aims to solve password management problems for individuals, teams, and business organizations. Bitwarden is among the easiest and safest solutions to store all of your logins and passwords while conveniently keeping them synced between all of your devices. If you don't want to use the Bitwarden cloud, you can easily host your own Bitwarden server.

    [Visit bitwarden.com](https://bitwarden.com){ .md-button .md-button--primary } [Privacy Policy](https://bitwarden.com/privacy){ .md-button }

    **Downloads**
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
    - [:fontawesome-brands-github: Source](https://github.com/bitwarden)

### Psono

!!! recommendation

    ![Psono logo](/assets/img/password-management/psono.svg){ align=right }

    **Psono** is a free and open source password manager from Germany, with a focus on password management for teams. It can be [self-hosted](/password-management/#password-management-servers). Psono supports secure sharing of passwords, files, bookmarks, and emails. All secrets are protected by a master password.

    [Visit psono.com](https://psono.com){ .md-button .md-button--primary } [Privacy Policy](https://psono.com/privacy-policy){ .md-button }

    **Downloads**
    - [:fontawesome-brands-firefox: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
    - [:fontawesome-brands-chrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
    - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/psono/psono-client)
    - [:fontawesome-brands-github: Source](https://gitlab.com/psono)

## Password management servers

These products are self-hostable synchronization for cloud based password managers.

### Vaultwarden

!!! recommendation

    ![Vaultwarden logo](/assets/img/password-management/vaultwarden.svg#only-light){ align=right }
    ![Vaultwarden logo](/assets/img/password-management/vaultwarden-dark.svg#only-dark){ align=right }

    **Vaultwarden** is an alternative implementation of the Bitwarden server API written in Rust and compatible with upstream Bitwarden clients, perfect for self-hosted deployment where running the official resource-heavy service might not be ideal.

    [Visit github.com](https://github.com/dani-garcia/vaultwarden)

    **Downloads**
    - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/vaultwarden/server)
    - [:fontawesome-brands-github: Source](https://github.com/dani-garcia/vaultwarden)

### Psono Server

!!! recommendation

    ![Psono Server logo](/assets/img/password-management/psono.svg){ align=right }

    Psono provides [extensive documentation](https://doc.psono.com/) for their product. The [web-client](https://doc.psono.com/admin/installation/install-webclient.html#installation-with-docker) for Psono can be self hosted; alternatively, you can choose the the full [Community Edition](https://doc.psono.com/admin/installation/install-server-ce.html) or the [Enterprise Edition](https://doc.psono.com/admin/installation/install-server-ee.html) with additional features.

    [Visit ](){ .md-button .md-button--primary } [Privacy Policy](){ .md-button }
    [:pg-tor:](){ .md-button }

    **Downloads**
    - [:fontawesome-brands-docker: Dockerhub](https://hub.docker.com/r/psono/psono-server)
    - [:fontawesome-brands-gitlab: Source](https://gitlab.com/psono/psono-server)

## Minimal Password Managers

These products are minimal password managers that can be used within scripting applications.

### Pass

!!! recommendation

    ![Pass logo](/assets/img/password-management/pass.svg){ align=right }

    **Pass** is a bare-bones password store that keeps passwords using [GnuPG](https://gnupg.org) encrypted files inside a simple directory tree residing at `~/.password-store`. It has a simple terminal interface where the user can perform the usual actions, and its functionality can be extended by plugins. It can also be used in scripts without having to input the actual password in plain text.

    [Visit passwordstore.org](https://www.passwordstore.org){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-apple: macOS](https://www.passwordstore.org)
    - [:fontawesome-brands-linux: Linux](https://www.passwordstore.org)
    - [:fontawesome-brands-git: Source](https://git.zx2c4.com/password-store)

### gopass

!!! recommendation

    ![gopass logo](/assets/img/password-management/gopass.svg){ align=right }

    **gopass** is a password manager for the command line written in Go. It works on all major desktop and server operating systems (Linux, MacOS, BSD, Windows).

    [Visit gopass.pw](https://www.gopass.pw){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://www.gopass.pw/#install-windows)
    - [:fontawesome-brands-apple: macOS](https://www.gopass.pw/#install-macos)
    - [:fontawesome-brands-linux: Linux](https://www.gopass.pw/#install-linux)
    - [:fontawesome-brands-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)
    - [:fontawesome-brands-github: Source](https://github.com/gopasspw/gopass)
