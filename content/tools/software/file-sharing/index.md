---
title: File Sharing and Sync
description: Discover how to privately share your files between your devices, with your friends and family, or anonymously online.
aliases:
- /file-sharing
- /en/file-sharing
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Service Providers" color="indigo" >}}](../../../wiki/basics/common-threats/index.md#privacy-from-service-providers)

Discover how to privately share your files between your devices, with your friends and family, or anonymously online.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#send" title="Send" image="./send.svg" subtitle="Send is a fork of Mozilla's discontinued Firefox Send service which allows you to send files to others with a link. Files are encrypted on your device so that they cannot be read by the server, and they can be optionally password-protected as well." >}}
  {{< card link="#onionshare" title="OnionShare" image="./onionshare.svg" subtitle="OnionShare is an open-source tool that lets you securely and anonymously share a file of any size. It works by starting a web server accessible as a Tor onion service, with an unguessable URL that you can share with the recipients to download or send files." >}}
  {{< card link="#syncthing-p2p" title="Syncthing" image="./syncthing.svg" subtitle="Syncthing is an open-source peer-to-peer continuous file synchronization utility. It is used to synchronize files between two or more devices over the local network or the internet." >}}
{{< /cards >}}
</div>

## File Sharing

If you already use [Proton Drive](../../services/cloud/index.md#proton-drive)[^1] or have a [Bitwarden](../../services/passwords/index.md#bitwarden) Premium[^2] subscription, consider using the file sharing capabilities that they each offer, both of which use end-to-end encryption. Otherwise, the standalone options listed here ensure that the files you share are not read by a remote server.

### Send

{{< title-card logo="./send.svg" >}}

**Send** is a fork of Mozilla's discontinued Firefox Send service which allows you to send files to others with a link. Files are encrypted on your device so that they cannot be read by the server, and they can be optionally password-protected as well. The maintainer of Send hosts a [public instance](https://send.vis.ee). You can use other public instances, or you can host Send yourself.

{{< cards >}}
  {{< card link="https://send.vis.ee" title="Homepage" icon="home" >}}
  {{< card link="https://github.com/timvisee/send-instances" title="Public Instances" icon="server" >}}
{{< /cards >}}

{{< /title-card >}}

Send can be used via its web interface or via the [ffsend](https://github.com/timvisee/ffsend) CLI. If you are familiar with the command-line and send files frequently, we recommend using the CLI client to avoid JavaScript-based encryption. You can specify the `--host` flag to use a specific server:

```bash
ffsend upload --host https://send.vis.ee/ FILE
```

### OnionShare

{{< title-card logo="./onionshare.svg" >}}

**OnionShare** is an open-source tool that lets you securely and [anonymously](../../../wiki/basics/common-threats/index.md#anonymity-vs-privacy){ .pg-purple } share a file of any size. It works by starting a web server accessible as a Tor onion service, with an unguessable URL that you can share with the recipients to download or send files.

{{< cards >}}
  {{< card link="https://onionshare.org" title="Homepage" icon="home" >}}
  {{< card link="http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion" title="Onion Service" icon="link" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://onionshare.org/#download)
[{{< badge content="macOS" color="indigo" >}}](https://onionshare.org/#download)
[{{< badge content="Windows" color="red" >}}](https://onionshare.org/#download)
[{{< badge content="Flathub" >}}](https://flathub.org/apps/org.onionshare.OnionShare)

OnionShare provides the option to connect via [Tor bridges](https://docs.onionshare.org/2.6.2/en/tor.html#automatic-censorship-circumvention) to circumvent [Censorship](../../../wiki/basics/common-threats/index.md#avoiding-censorship){ .pg-blue-gray }.

### Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Must not store decrypted data on a remote server.
- Must be open-source software.
- Must either have clients for Linux, macOS, and Windows; or have a web interface.

## File Sync

### Syncthing (P2P)

{{< title-card logo="./syncthing.svg" >}}

**Syncthing** is an open-source peer-to-peer continuous file synchronization utility. It is used to synchronize files between two or more devices over the local network or the internet. Syncthing does not use a centralized server; it uses the [Block Exchange Protocol](https://docs.syncthing.net/specs/bep-v1.html#bep-v1) to transfer data between devices. All data is encrypted using TLS.

{{< cards >}}
  {{< card link="https://syncthing.net" title="Homepage" icon="home" >}}
  {{< card link="https://docs.syncthing.net" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://syncthing.net/downloads)
[{{< badge content="macOS" color="indigo" >}}](https://syncthing.net/downloads)
[{{< badge content="Windows" color="red" >}}](https://syncthing.net/downloads)
[{{< badge content="FreeBSD" >}}](https://syncthing.net/downloads)

### Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

#### Minimum Requirements

- Must not require a third-party remote/cloud server.
- Must be open-source software.
- Must either have clients for Linux, macOS, and Windows; or have a web interface.

#### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should have mobile clients for iOS and Android which at least support document previews.
- Should support photo backups from iOS and Android, and optionally support file/folder sync on Android.

[^1]: Proton Drive allows you to [share files or folders](https://proton.me/support/drive-shareable-link) by generating a shareable public link or sending a unique link to a designated email address. Public links can be protected with a password, set to expire, and completely revoked, while links shared via email can have custom permissions and be similarly revoked. Per Proton Drive's [privacy policy](https://proton.me/drive/privacy-policy), file contents, file and folder names, and thumbnail previews are end-to-end encrypted.
[^2]: With a [premium](https://bitwarden.com/help/about-bitwarden-plans/#compare-personal-plans) subscription, [Bitwarden Send](https://bitwarden.com/products/send) allows you to share files and text securely with [end-to-end encryption](https://bitwarden.com/help/send-encryption). A [password](https://bitwarden.com/help/send-privacy/#send-passwords) can be required along with the Send link. Bitwarden Send also features [automatic deletion](https://bitwarden.com/help/send-lifespan).
