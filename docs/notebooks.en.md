---
title: "Notebooks"
icon: material/notebook-edit-outline
---

Keep track of your notes and journalings without giving them to a third party.

If you are currently using an application like Evernote, Google Keep, or Microsoft OneNote, we suggest you pick an alternative here that supports E2EE.

## Cloud based

### Joplin

!!! recommendation

    ![Joplin logo](assets/img/notebooks/joplin.svg){ align=right }

    **Joplin** is a free, open-source, and fully-featured note-taking and to-do application which can handle a large number of markdown notes organized into notebooks and tags. It offers E2EE and can sync through Nextcloud, Dropbox, and more. It also offers easy import from Evernote and plain-text notes.

    [:octicons-home-16: Homepage](https://joplinapp.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://joplinapp.org/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://joplinapp.org/help/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/laurent22/joplin){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://joplinapp.org/donate/){ .card-link title=Contribute }

    ??? downloads

        [:fontawesome-brands-windows:](https://joplinapp.org/#desktop-applications){ .card-link title=Windows }
        [:fontawesome-brands-apple:](https://joplinapp.org/#desktop-applications){ .card-link title=macOS }
        [:fontawesome-brands-linux:](https://joplinapp.org/#desktop-applications){ .card-link title=Linux }
        [:fontawesome-brands-firefox-browser:](https://addons.mozilla.org/firefox/addon/joplin-web-clipper/){ .card-link title=Firefox }
        [:fontawesome-brands-chrome:](https://chrome.google.com/webstore/detail/joplin-web-clipper/alofnhikmmkdbbbgpnglcpdollgjjfek){ .card-link title=Chrome }
        [:fontawesome-brands-app-store-ios:](https://apps.apple.com/us/app/joplin/id1315599797){ .card-link title="App Store" }
        [:fontawesome-brands-google-play:](https://play.google.com/store/apps/details?id=net.cozic.joplin){ .card-link title="Google Play" }
        [:pg-f-droid:](https://f-droid.org/en/packages/net.cozic.joplin){ .card-link title=F-Droid }

Joplin does not support password/pin protection for the [application itself or individual notes/notebooks](https://github.com/laurent22/joplin/issues/289). Data is still encrypted in transit and at the sync location using your master key.

### Standard Notes

!!! recommendation

    ![Standard Notes logo](assets/img/notebooks/standard-notes.svg){ align=right }

    Standard Notes is a simple and private notes app that makes your notes easy and available everywhere you are. It features E2EE on every platform, and a powerful desktop experience with themes and custom editors. It has also been [independently audited (PDF)](https://s3.amazonaws.com/standard-notes/security/Report-SN-Audit.pdf).

    [:octicons-home-16: Homepage](https://standardnotes.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://standardnotes.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://standardnotes.com/help){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/standardnotes){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://standardnotes.com/donate){ .card-link title=Contribute }

    ??? downloads

        [:fontawesome-brands-windows:](https://standardnotes.com){ .card-link title=Windows }
        [:fontawesome-brands-apple:](https://standardnotes.com){ .card-link title=macOS }
        [:fontawesome-brands-linux:](https://standardnotes.com){ .card-link title=Linux }
        [:fontawesome-brands-app-store-ios:](https://apps.apple.com/app/id1285392450){ .card-link title="App Store" }
        [:fontawesome-brands-google-play:](https://play.google.com/store/apps/details?id=com.standardnotes){ .card-link title="Google Play" }
        [:pg-f-droid:](https://f-droid.org/en/packages/com.standardnotes){ .card-link title=F-Droid }
        [:octicons-globe-16:](https://app.standardnotes.com/){ .card-link title=Web }

### EteSync Notes

!!! recommendation

    ![EteSync Notes logo](assets/img/notebooks/etesync-notes.png){ align=right }

    **EteSync Notes** is a secure, end-to-end encrypted, and privacy-respecting note taking app. EteSync also offers optional software as a service for [$24 per year](https://dashboard.etebase.com/user/partner/pricing/), or you can host the server yourself for free.

    [etebase](https://docs.etebase.com), which is the foundation of EteSync, can also be used by other apps as a backend to store data end-to-end encrypted (E2EE).

    [:octicons-home-16: Homepage](https://www.etesync.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.etesync.com/tos/#privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://www.etesync.com/user-guide/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/etesync){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.etesync.com/contribute/){ .card-link title=Contribute }

    ??? downloads

        [:fontawesome-brands-google-play:](https://play.google.com/store/apps/details?id=com.etesync.notes){ .card-link title="Google Play" }
        [:pg-f-droid:](https://f-droid.org/packages/com.etesync.notes){ .card-link title=F-Droid }
        [:fontawesome-brands-app-store-ios:](https://apps.apple.com/us/app/etesync-notes/id1533806351){ .card-link title="App Store" }
        [:octicons-globe-16:](https://notes.etesync.com){ .card-link title=Web }

## Local notebooks

### Org-mode

!!! recommendation

    ![Org-mode logo](assets/img/notebooks/org-mode.svg){ align=right }

    **Org-mode** is a [major mode](https://www.gnu.org/software/emacs/manual/html_node/elisp/Major-Modes.html) for GNU Emacs. Org-mode is for keeping notes, maintaining TODO lists, planning projects, and authoring documents with a fast and effective plain-text system. Synchronization is possible with [file synchronization](/file-sharing/#file-sync) tools.

    [:octicons-home-16: Homepage](https://orgmode.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://orgmode.org/manuals.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://git.savannah.gnu.org/cgit/emacs/org-mode.git){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://liberapay.com/bzg){ .card-link title=Contribute }

--8<-- "includes/abbreviations.en.md"
