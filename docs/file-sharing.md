---
title: File Sharing and Sync
icon: material/share-variant
---
Discover how to privately share your files between your devices, with your friends and family, or anonymously online.

## File Sharing

### OnionShare

!!! recommendation

    ![OnionShare logo](/assets/img/file-sharing-sync/onionshare.svg){ align=right }

    **OnionShare** is an open-source tool that lets you securely and anonymously share a file of any size. It works by starting a web server accessible as a Tor onion service, with an unguessable URL that you can share with the recipients to download or send files.

    [Visit onionshare.org](https://onionshare.org){ .md-button .md-button--primary } [:pg-tor:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .md-button }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://onionshare.org/#download)
    - [:fontawesome-brands-apple: macOS](https://onionshare.org/#download)
    - [:fontawesome-brands-linux: Linux](https://onionshare.org/#download)
    - [:fontawesome-brands-github: Source](https://github.com/onionshare/onionshare)

### Magic Wormhole

!!! recommendation

    ![Magic Wormhole logo](/assets/img/file-sharing-sync/magic_wormhole.png){ align=right }

    Magic Wormhole is a package that provides a library and a command-line tool named wormhole, which makes it possible to get arbitrary-sized files and directories (or short pieces of text) from one computer to another. Their motto: "Get things from one computer to another, safely.

    [Visit magic-wormhole.readthedocs.io](https://magic-wormhole.readthedocs.io){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://magic-wormhole.readthedocs.io/en/latest/welcome.html#installation)
    - [:fontawesome-brands-apple: macOS](https://magic-wormhole.readthedocs.io/en/latest/welcome.html#macos-os-x)
    - [:fontawesome-brands-linux: Linux](https://magic-wormhole.readthedocs.io/en/latest/welcome.html#installation)
    - [:fontawesome-brands-github: Source](https://github.com/magic-wormhole/magic-wormhole)

### croc

!!! recommendation

    ![croc logo](/assets/img/file-sharing-sync/croc.jpg){ align=right }

    **Croc** is a way to easily and securely send arbitrary-sized files from one computer to another. Similar to Magic Wormhole but without dependencies, resulting in a smaller application.

    !!! Warning
        The default encryption curve SIEC is fairly unknown and has not been tested thoroughly. We recommend using the `--curve` [option](https://github.com/schollz/croc/blob/master/README.md#change-encryption-curve) to switch to a more widely known curve such as the p521 curve.

    [Visit schollz.com](https://schollz.com/blog/croc6){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://github.com/schollz/croc/releases)
    - [:fontawesome-brands-apple: macOS](https://github.com/schollz/croc/releases)
    - [:fontawesome-brands-linux: Linux](https://github.com/schollz/croc/releases)
    - [:fontawesome-brands-github: Source](https://github.com/schollz/croc)

## FreedomBox

!!! recommendation

    ![FreedomBox logo](/assets/img/file-sharing-sync/freedombox.svg){ align=right }

    **FreedomBox** is a operating system designed to be run on a [single-board computer (SBC)](https://en.wikipedia.org/wiki/Single-board_computer). The purpose is to make it easy to set up server applications that you might want to selfhost.

    [Visit freedombox.org](https://freedombox.org){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-git: Source](https://salsa.debian.org/freedombox-team/freedombox)

## File Sync

### Syncthing

!!! recommendation

    ![Syncthing logo](/assets/img/file-sharing-sync/syncthing.svg){ align=right }

    **Syncthing** replaces proprietary sync and cloud services with something open, trustworthy, and decentralized. Your data is your data alone and you deserve to choose where it is stored, if it is shared with some third-party, and how it is transmitted over the Internet.

    [Visit syncthing.net](https://syncthing.net){ .md-button .md-button--primary }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://syncthing.net/downloads)
    - [:fontawesome-brands-apple: macOS](https://syncthing.net/downloads)
    - [:fontawesome-brands-linux: Linux](https://syncthing.net/downloads)
    - [:fontawesome-brands-github: Source](https://github.com/syncthing)

### git-annex

!!! recommendation

    ![git-annex logo](/assets/img/file-sharing-sync/gitannex.svg){ align=right }

    **git-annex** allows managing files with git, without checking the file contents into git. While that may seem paradoxical, it is useful when dealing with files larger than git can currently easily handle, whether due to limitations in memory, time, or disk space.

    [Visit git-annex.branchable.com](https://git-annex.branchable.com){ .md-button .md-button--primary } [Privacy Policy](https://git-annex.branchable.com/privacy){ .md-button }

    **Downloads**
    - [:fontawesome-brands-windows: Windows](https://git-annex.branchable.com/install/Windows)
    - [:fontawesome-brands-apple: macOS](https://git-annex.branchable.com/install/OSX)
    - [:fontawesome-brands-linux: Linux](https://git-annex.branchable.com/install)
    - [:fontawesome-brands-git: Source](https://git-annex.branchable.com/install/fromsource/)
