---
title: "Blocos de Notas"
icon: material/notebook-edit-outline
description: These encrypted note-taking apps let you keep track of your notes without giving them to a third-party.
---

Mantenha o controle de suas anotações e registros de atividades sem entregá-los a terceiros.

Se você estiver usando atualmente um aplicativo como Evernote, Google Keep, ou Microsoft OneNote, sugerimos que escolha uma alternativa que suporte E2EE.

## Baseado na nuvem

### Joplin

!!! recommendation

    ![Logotipo Joplin](assets/img/notebooks/joplin.svg){ align=right }
    
    * *Joplin** é um aplicativo de anotações e tarefas gratuito, de código aberto e com todos os recursos que pode lidar com um grande número de anotações organizadas em blocos de anotações e tags. Ele oferece E2EE e pode sincronizar através do Nextcloud, Dropbox e muito mais. Oferece também uma importação fácil a partir do Evernote e notas de texto simples.
    
    [:octicons-home-16: Homepage](https://joplinapp.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://joplinapp.org/privacy/){ .card-link title="Política de privacidade" }
    [:octicons-info-16:](https://joplinapp.org/help/){ .card-link title=Documentação}
    [:octicons-code-16:](https://github.com/laurent22/joplin){ .card-link title="Código fonte" }
    [:octicons-heart-16:](https://joplinapp.org/donate/){ .card-link title=Contribua }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.cozic.joplin)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/joplin/id1315599797)
        - [:simple-github: GitHub](https://github.com/laurent22/joplin-android/releases)
        - [:simple-windows11: Windows](https://joplinapp.org/#desktop-applications)
        - [:simple-apple: macOS](https://joplinapp.org/#desktop-applications)
        - [:simple-linux: Linux](https://joplinapp.org/#desktop-applications)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/joplin-web-clipper/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/joplin-web-clipper/alofnhikmmkdbbbgpnglcpdollgjjfek)

O Joplin não suporta proteção por senha/PIN para o [próprio aplicativo ou notas e blocos de anotações individuais](https://github.com/laurent22/joplin/issues/289). No entanto, seus dados ainda são criptografados em trânsito e no local de sincronização usando sua chave mestra. Desde janeiro de 2023, Joplin suporta bloqueio de aplicativo por biometria no [Android](https://joplinapp.org/changelog_android/#android-v2-10-3-https-github-com-laurent22-joplin-releases-tag-android-v2-10-3-pre-release-2023-01-05t11-29-06z) e [iOS](https://joplinapp.org/changelog_ios/#ios-v12-10-2-https-github-com-laurent22-joplin-releases-tag-ios-v12-10-2-2023-01-20t17-41-13z).

### Standard Notes

!!! recommendation

    ![Logotipo do Standard Notes](assets/img/notebooks/standard-notes.svg){ align=right }
    
    **Standard Notes** é um aplicativo de notas simples e privado que torna suas notas fáceis e disponíveis em qualquer lugar que você esteja. Possui E2EE em todas as plataformas e uma poderosa experiência de desktop com temas e editores personalizados. Também foi [auditado independentemente (PDF)](https://s3.amazonaws.com/standard-notes/security/Report-SN-Audit.pdf).
    
    [:octicons-home-16: Homepage](https://standardnotes.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://standardnotes.com/privacy){ .card-link title="Política de privacidade" }
    [:octicons-info-16:](https://standardnotes.com/help){ .card-link title=Documentação}
    [:octicons-code-16:](https://github.com/standardnotes){ .card-link title="Código fonte" }
    [:octicons-heart-16:](https://standardnotes.com/donate){ .card-link title=Contribua }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.standardnotes)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1285392450)
        - [:simple-github: GitHub](https://github.com/standardnotes/app/releases)
        - [:simple-windows11: Windows](https://standardnotes.com)
        - [:simple-apple: macOS](https://standardnotes.com)
        - [:simple-linux: Linux](https://standardnotes.com)
        - [:octicons-globe-16: Web](https://app.standardnotes.com/)

### Criptee

!!! recommendation

    ![Cryptee logo](./assets/img/notebooks/cryptee.svg#only-light){ align=right }
    ![Cryptee logo](./assets/img/notebooks/cryptee-dark.svg#only-dark){ align=right }
    
    **Cryptee** is an open-source, web-based E2EE document editor and photo storage application. Cryptee is a PWA, which means that it works seamlessly across all modern devices without requiring native apps for each respective platform.
    
    [:octicons-home-16: Homepage](https://crypt.ee){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://crypt.ee/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://crypt.ee/help){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/cryptee){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:octicons-globe-16: PWA](https://crypt.ee/download)

Cryptee offers 100MB of storage for free, with paid options if you need more. Sign-up doesn't require an e-mail or other personally identifiable information.

## Local notebooks

### Org-mode

!!! recommendation

    ![Org-mode logo](assets/img/notebooks/org-mode.svg){ align=right }
    
    **Org-mode** is a [major mode](https://www.gnu.org/software/emacs/manual/html_node/elisp/Major-Modes.html) for GNU Emacs. Org-mode is for keeping notes, maintaining TODO lists, planning projects, and authoring documents with a fast and effective plain-text system. Synchronization is possible with [file synchronization](file-sharing.md#file-sync) tools.
    
    [:octicons-home-16: Homepage](https://orgmode.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://orgmode.org/manuals.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://git.savannah.gnu.org/cgit/emacs/org-mode.git){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://liberapay.com/bzg){ .card-link title=Contribute }

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! example "This section is new"

    We are working on establishing defined criteria for every section of our site, and this may be subject to change. If you have any questions about our criteria, please [ask on our forum](https://discuss.privacyguides.net/latest) and don't assume we didn't consider something when making our recommendations if it is not listed here. There are many factors considered and discussed when we recommend a project, and documenting every single one is a work-in-progress.

- Clients must be open-source.
- Any cloud sync functionality must be E2EE.
- Must support exporting documents into a standard format.

### Best Case

- Local backup/sync functionality should support encryption.
- Cloud-based platforms should support document sharing.
