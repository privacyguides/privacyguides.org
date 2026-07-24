---
title: "General Apps"
description: The apps listed here are Android-exclusive and specifically enhance or replace key system functionality.
aliases:
- /android/general-apps
- /en/android/general-apps
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Passive Attacks" color="amber" >}}](../../../../wiki/basics/common-threats/index.md#security-and-privacy)

We recommend a wide variety of Android apps throughout this site. The apps listed here are Android-exclusive and specifically enhance or replace key system functionality.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#shelter" title="Shelter" image="./shelter.svg" subtitle="Shelter uses a managed work profile to isolate or duplicate apps with optional cross-profile controls." >}}
  {{< card link="#secure-camera" title="Secure Camera" image="./secure_camera.svg" subtitle="Secure Camera captures media with minimal metadata and modern Android storage APIs." >}}
  {{< card link="#secure-pdf-viewer" title="Secure PDF Viewer" image="./secure_pdf_viewer.svg" subtitle="Secure PDF Viewer renders PDFs in a sandboxed WebView without broad file permissions." >}}
{{< /cards >}}
</div>

## Shelter

If your device is on Android 15 or greater, we recommend using the native [Private Space](../_index.md#private-space) feature instead, which provides nearly the same functionality without needing to place trust in and grant powerful permissions to a third-party app.

{{< title-card logo="./shelter.svg" >}}

**Shelter** is an app that helps you leverage Android's Work Profile functionality to isolate or duplicate apps on your device.

Shelter supports blocking contact search cross profiles and sharing files across profiles via the default file manager ([DocumentsUI](https://source.android.com/devices/architecture/modular-system/documentsui)).

{{< cards >}}
  {{< card link="https://gitea.angry.im/PeterCxy/Shelter#shelter" title="Repository" icon="code" >}}
  {{< card link="https://patreon.com/PeterCxy" title="Contribute" icon="heart" >}}
{{< /cards >}}

{{< /title-card >}}

> [!WARNING]
> When using Shelter, you are placing complete trust in its developer, as Shelter acts as a [Device Admin](https://developer.android.com/guide/topics/admin/device-admin) to create the Work Profile, and it has extensive access to the data stored within the Work Profile.


Shelter is recommended over [Insular](https://secure-system.gitlab.io/Insular) and [Island](https://github.com/oasisfeng/island) as it supports [contact search blocking](https://secure-system.gitlab.io/Insular/faq.html).

## Secure Camera

<small>Protects against the following threat(s):</small>
[{{< badge content="Public Exposure" color="green" >}}](../../../../wiki/basics/common-threats/index.md#limiting-public-information)

{{< title-card logo="./secure_camera.svg" >}}

**Secure Camera** is a camera app focused on privacy and security which can capture images, videos, and QR codes. CameraX vendor extensions (Portrait, HDR, Night Sight, Face Retouch, and Auto) are also supported on available devices.

{{< cards >}}
  {{< card link="https://github.com/GrapheneOS/Camera#readme" title="Repository" icon="code" >}}
  {{< card link="https://grapheneos.org/usage#camera" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=app.grapheneos.camera.play)
[{{< badge content="GitHub" >}}](https://github.com/GrapheneOS/Camera/releases)
[{{< badge content="GrapheneOS App Store" >}}](https://github.com/GrapheneOS/Apps/releases)

Main privacy features include:

- Auto removal of [Exif](https://en.wikipedia.org/wiki/Exif) metadata (enabled by default)
- Use of the new [Media](https://developer.android.com/training/data-storage/shared/media) API, therefore [storage permissions](https://developer.android.com/training/data-storage) are not required
- Microphone permission not required unless you want to record sound

> [!NOTE]
> Metadata is not currently deleted from video files, but that is planned.
> 
> The image orientation metadata is not deleted. If you enable location (in Secure Camera) that **won't** be deleted either. If you want to delete that later you will need to use an external app such as [ExifEraser](../../../software/data-redaction/index.md#exiferaser-android).


## Secure PDF Viewer

<small>Protects against the following threat(s):</small>
[{{< badge content="Targeted Attacks" color="red" >}}](../../../../wiki/basics/common-threats/index.md#attacks-against-specific-individuals)

{{< title-card logo="./secure_pdf_viewer.svg" >}}

**Secure PDF Viewer** is a PDF viewer based on [pdf.js](https://en.wikipedia.org/wiki/PDF.js) that doesn't require any permissions. The PDF is fed into a [sandboxed](https://en.wikipedia.org/wiki/Sandbox_(software_development)) [WebView](https://developer.android.com/guide/webapps/webview). This means that it doesn't require permission directly to access content or files.

[Content-Security-Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) is used to enforce that the JavaScript and styling properties within the WebView are entirely static content.

{{< cards >}}
  {{< card link="https://github.com/GrapheneOS/PdfViewer#readme" title="Repository" icon="code" >}}
  {{< card link="https://grapheneos.org/donate" title="Contribute" icon="heart" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=app.grapheneos.pdfviewer.play)
[{{< badge content="GitHub" >}}](https://github.com/GrapheneOS/PdfViewer/releases)
[{{< badge content="GrapheneOS App Store" >}}](https://github.com/GrapheneOS/Apps/releases)

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Applications on this page must not be applicable to any other software category on the site.
- General applications should extend or replace core system functionality.
- Applications should receive regular updates and maintenance.
