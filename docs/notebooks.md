---
title: "Notebooks"
icon: material/notebook-edit-outline
description: These encrypted note-taking apps let you keep track of your notes without giving them to a third-party.
cover: notebooks.webp
---
<small>Protects against the following threat(s):</small>

- [:material-server-network: Service Providers](basics/common-threats.md#privacy-from-service-providers){ .pg-teal }

Keep track of your notes and journalings without giving them to a third-party.

If you are currently using an application like Evernote, Google Keep, or Microsoft OneNote, we suggest you pick an alternative here that supports E2EE.

## Cloud-based

### Standard Notes

<div class="admonition recommendation" markdown>

![Standard Notes logo](assets/img/notebooks/standard-notes.svg){ align=right }

**Standard Notes** is a simple and private notes app that makes your notes easy and available everywhere you are. It features E2EE on every platform, and a powerful desktop experience with themes and custom editors. It has also been [independently audited](https://standardnotes.com/help/2/has-standard-notes-completed-a-third-party-security-audit).

[:octicons-home-16: Homepage](https://standardnotes.com){ .md-button .md-button--primary }
[:octicons-eye-16:](https://standardnotes.com/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://standardnotes.com/help){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/standardnotes){ .card-link title="Source Code" }
[:octicons-heart-16:](https://standardnotes.com/donate){ .card-link title=Contribute }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.standardnotes)
- [:simple-appstore: App Store](https://apps.apple.com/app/id1285392450)
- [:simple-github: GitHub](https://github.com/standardnotes/app/releases)
- [:fontawesome-brands-windows: Windows](https://standardnotes.com)
- [:simple-apple: macOS](https://standardnotes.com)
- [:simple-linux: Linux](https://standardnotes.com)
- [:octicons-globe-16: Web](https://app.standardnotes.com)

</details>

</div>

Standard Notes has [joined Proton AG](https://standardnotes.com/blog/joining-forces-with-proton) as of April 10, 2024.

### Notesnook

<div class="admonition recommendation" markdown>

![Notesnook logo](assets/img/notebooks/notesnook.svg){ align=right }

**Notesnook** is a free (as in speech) & open-source note-taking app focused on user privacy & ease of use. It features end-to-end encryption on all platforms with a powerful sync to take your notes on the go. You can easily import your notes from Evernote, OneNote & a lot of other apps using their [official importer](https://importer.notesnook.com).

[:octicons-home-16: Homepage](https://notesnook.com){ .md-button .md-button--primary }
[:octicons-eye-16:](https://notesnook.com/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://help.notesnook.com){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/streetwriters/notesnook){ .card-link title="Source Code" }
[:octicons-heart-16:](https://github.com/streetwriters/notesnook/blob/master/CONTRIBUTING.md){ .card-link title=Contribute }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.streetwriters.notesnook)
- [:simple-appstore: App Store](https://apps.apple.com/app/id1544027013)
- [:simple-github: GitHub](https://github.com/streetwriters/notesnook/releases)
- [:fontawesome-brands-windows: Windows](https://notesnook.com/downloads)
- [:simple-apple: macOS](https://notesnook.com/downloads)
- [:simple-linux: Linux](https://notesnook.com/downloads)
- [:simple-firefoxbrowser: Firefox](https://notesnook.com/notesnook-web-clipper)
- [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/notesnook-web-clipper/kljhpemdlcnjohmfmkogahelkcidieaj)
- [:octicons-globe-16: Web](https://app.notesnook.com)
- [:simple-flathub: Flathub](https://flathub.org/apps/com.notesnook.Notesnook)

</details>

</div>

### Joplin

<div class="admonition recommendation" markdown>

![Joplin logo](assets/img/notebooks/joplin.svg){ align=right }

**Joplin** is a free, open-source, and fully-featured note-taking and to-do application which can handle a large number of markdown notes organized into notebooks and tags. It offers E2EE and can sync through Nextcloud, Dropbox, and more. It also offers easy import from Evernote and plain-text notes.

[:octicons-home-16: Homepage](https://joplinapp.org){ .md-button .md-button--primary }
[:octicons-eye-16:](https://joplinapp.org/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://joplinapp.org/help){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/laurent22/joplin){ .card-link title="Source Code" }
[:octicons-heart-16:](https://joplinapp.org/donate){ .card-link title=Contribute }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.cozic.joplin)
- [:simple-appstore: App Store](https://apps.apple.com/app/id1315599797)
- [:simple-github: GitHub](https://github.com/laurent22/joplin-android/releases)
- [:fontawesome-brands-windows: Windows](https://joplinapp.org/#desktop-applications)
- [:simple-apple: macOS](https://joplinapp.org/#desktop-applications)
- [:simple-linux: Linux](https://joplinapp.org/#desktop-applications)
- [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/joplin-web-clipper)
- [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/joplin-web-clipper/alofnhikmmkdbbbgpnglcpdollgjjfek)

</details>

</div>

Joplin does not [support](https://github.com/laurent22/joplin/issues/289) password/PIN protection for the application itself or individual notes and notebooks. However, your data is still encrypted in transit and at the sync location using your master key.
Since January 2023, Joplin [supports biometrics](https://github.com/laurent22/joplin/commit/f10d9f75b055d84416053fab7e35438f598753e9) app lock for Android and iOS.

### Cryptee

<div class="admonition recommendation" markdown>

![Cryptee logo](./assets/img/notebooks/cryptee.svg#only-light){ align=right }
![Cryptee logo](./assets/img/notebooks/cryptee-dark.svg#only-dark){ align=right }

**Cryptee** is an open-source, web-based E2EE document editor and photo storage application. Cryptee is a PWA, which means that it works seamlessly across all modern devices without requiring native apps for each respective platform.

[:octicons-home-16: Homepage](https://crypt.ee){ .md-button .md-button--primary }
[:octicons-eye-16:](https://crypt.ee/privacy){ .card-link title="Privacy Policy" }
[:octicons-info-16:](https://crypt.ee/help){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/cryptee){ .card-link title="Source Code" }

<details class="downloads" markdown>
<summary>Downloads</summary>

- [:octicons-globe-16: PWA](https://crypt.ee/download)

</details>

</div>

Cryptee offers 100MB of storage for free, with paid options if you need more. Sign-up doesn't require an e-mail or other personally identifiable information.

## Local notebooks

### Org-mode

<div class="admonition recommendation" markdown>

![Org-mode logo](assets/img/notebooks/org-mode.svg){ align=right }

**Org-mode** is a [major mode](https://gnu.org/software/emacs/manual/html_node/elisp/Major-Modes.html) for GNU Emacs. Org-mode is for keeping notes, maintaining to-do lists, planning projects, and authoring documents with a fast and effective plain-text system. Synchronization is possible with [file synchronization](file-sharing.md#file-sync) tools.

[:octicons-home-16: Homepage](https://orgmode.org){ .md-button .md-button--primary }
[:octicons-info-16:](https://orgmode.org/manuals.html){ .card-link title=Documentation}
[:octicons-code-16:](https://git.savannah.gnu.org/cgit/emacs/org-mode.git){ .card-link title="Source Code" }
[:octicons-heart-16:](https://liberapay.com/bzg){ .card-link title=Contribute }

</details>

</div>

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Clients must be open source.
- Any cloud sync functionality must be E2EE.
- Must support exporting documents into a standard format.

### Best Case

- Local backup/sync functionality should support encryption.
- Cloud-based platforms should support document sharing.
