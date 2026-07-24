---
title: "Notebooks"
description: These encrypted note-taking apps let you keep track of your notes without giving them to a third party.
aliases:
- /notebooks
- /en/notebooks
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)

Keep track of your notes and journals without giving them to a third party.

If you are currently using an application like Evernote, Google Keep, or Microsoft OneNote, we suggest you pick an alternative here that supports end-to-end encryption.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#standard-notes" title="Standard Notes" image="./standard-notes.svg" subtitle="Standard Notes is a simple and private notes app that features cross-platform sync for seamless use. It features E2EE on every platform, and a powerful desktop experience with themes and custom editors." >}}
  {{< card link="#notesnook" title="Notesnook" image="./notesnook.svg" subtitle="Notesnook is a free (as in speech), open-source, and easy-to-use E2EE note-taking app focused on user privacy." >}}
  {{< card link="#joplin" title="Joplin" image="./joplin.svg" subtitle="Joplin is a free, open-source, and fully-featured E2EE note-taking and to-do application which can handle numerous Markdown notes organized into notebooks and tags." >}}
  {{< card link="#cryptee" title="Cryptee" image="./cryptee.svg" subtitle="Cryptee is an open-source, web-based E2EE document editor and photo storage application." >}}
  {{< card link="#org-mode" title="Org-mode" image="./org-mode.svg" subtitle="Org-mode is a major mode for GNU Emacs. Org-mode is for keeping notes, maintaining to-do lists, planning projects, and authoring documents with a fast and effective plain-text system." >}}
{{< /cards >}}
</div>

## Cloud-based

### Standard Notes

{{< title-card logo="./standard-notes.svg" >}}

**Standard Notes** is a simple and private notes app that features cross-platform sync for seamless use. It features E2EE on every platform, and a powerful desktop experience with themes and custom editors.

Standard Notes has also undergone multiple [independent audits](https://standardnotes.com/help/2/has-standard-notes-completed-a-third-party-security-audit).

{{< cards >}}
  {{< card link="https://standardnotes.com" title="Homepage" icon="home" >}}
  {{< card link="https://standardnotes.com/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://standardnotes.com)
[{{< badge content="macOS" color="indigo" >}}](https://standardnotes.com)
[{{< badge content="Windows" color="red" >}}](https://standardnotes.com)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.standardnotes)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1285392450)
[{{< badge content="GitHub" >}}](https://github.com/standardnotes/app/releases)
[{{< badge content="Web" >}}](https://app.standardnotes.com)

Standard Notes has [joined Proton AG](https://standardnotes.com/blog/joining-forces-with-proton) as of April 10, 2024.

### Notesnook

{{< title-card logo="./notesnook.svg" >}}

**Notesnook** is a free (as in speech), open-source, and easy-to-use E2EE note-taking app focused on user privacy.

It features sync functionality that allows you to access your notes on multiple platforms. You can easily import your notes from Evernote, OneNote, and other apps using their [official importer](https://importer.notesnook.com).

{{< cards >}}
  {{< card link="https://notesnook.com" title="Homepage" icon="home" >}}
  {{< card link="https://notesnook.com/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://notesnook.com/downloads)
[{{< badge content="macOS" color="indigo" >}}](https://notesnook.com/downloads)
[{{< badge content="Windows" color="red" >}}](https://notesnook.com/downloads)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.streetwriters.notesnook)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1544027013)
[{{< badge content="GitHub" >}}](https://github.com/streetwriters/notesnook/releases)
[{{< badge content="Flathub" >}}](https://flathub.org/apps/com.notesnook.Notesnook)
[{{< badge content="Firefox" >}}](https://notesnook.com/notesnook-web-clipper)
[{{< badge content="Chrome" >}}](https://chrome.google.com/webstore/detail/kljhpemdlcnjohmfmkogahelkcidieaj)
[{{< badge content="Web" >}}](https://app.notesnook.com)

### Joplin

{{< title-card logo="./joplin.svg" >}}

**Joplin** is a free, open-source, and fully-featured E2EE note-taking and to-do application which can handle numerous Markdown notes organized into notebooks and tags.

It can sync through Nextcloud, Dropbox, and more. It also offers easy import from Evernote and plain-text notes.

{{< cards >}}
  {{< card link="https://joplinapp.org" title="Homepage" icon="home" >}}
  {{< card link="https://joplinapp.org/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://joplinapp.org/#desktop-applications)
[{{< badge content="macOS" color="indigo" >}}](https://joplinapp.org/#desktop-applications)
[{{< badge content="Windows" color="red" >}}](https://joplinapp.org/#desktop-applications)
[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=net.cozic.joplin)
[{{< badge content="App Store" color="blue" >}}](https://apps.apple.com/app/id1315599797)
[{{< badge content="GitHub" >}}](https://github.com/laurent22/joplin-android/releases)
[{{< badge content="Firefox" >}}](https://addons.mozilla.org/firefox/addon/joplin-web-clipper)
[{{< badge content="Chrome" >}}](https://chrome.google.com/webstore/detail/alofnhikmmkdbbbgpnglcpdollgjjfek)

Joplin [does not support](https://github.com/laurent22/joplin/issues/289) password/PIN protection for the application itself or individual notes and notebooks. However, your data is still encrypted in transit and at the sync location using your master key. Since January 2023, Joplin [supports biometrics app lock](https://github.com/laurent22/joplin/commit/f10d9f75b055d84416053fab7e35438f598753e9) for Android and iOS.

### Cryptee

{{< title-card logo="./cryptee.svg" >}}

**Cryptee** is an open-source, web-based E2EE document editor and photo storage application.

Cryptee offers 100 MB of storage for free, with paid options if you need more. Sign-up doesn't require an e-mail or other personally identifiable information.

{{< cards >}}
  {{< card link="https://crypt.ee" title="Homepage" icon="home" >}}
  {{< card link="https://crypt.ee/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Web" >}}](https://crypt.ee/download)

Cryptee is a PWA, which means that it works seamlessly across all modern devices without requiring native apps for each respective platform.

## Local notebooks

### Org-mode

{{< title-card logo="./org-mode.svg" >}}

**Org-mode** is a [major mode](https://gnu.org/software/emacs/manual/html_node/elisp/Major-Modes.html) for GNU Emacs. Org-mode is for keeping notes, maintaining to-do lists, planning projects, and authoring documents with a fast and effective plain-text system. File synchronization is possible with tools like [Syncthing](../file-sharing/index.md#syncthing-p2p).

{{< cards >}}
  {{< card link="https://orgmode.org" title="Homepage" icon="home" >}}
  {{< card link="https://orgmode.org/manuals.html" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

### Minimum Requirements

- Clients must be open source.
- Any cloud sync functionality must be E2EE.
- Must support exporting documents into a standard format.

### Best Case

- Local backup/sync functionality should support encryption.
- Cloud-based platforms should support document sharing.
