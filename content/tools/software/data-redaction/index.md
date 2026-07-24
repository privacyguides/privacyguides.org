---
title: "Data and Metadata Redaction"
description: Use these tools to remove metadata like GPS location and other identifying information from photos and files you share.
aliases:
- /data-redaction
- /en/data-redaction
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Public Exposure" color="green" >}}](../../../wiki/basics/common-threats/index.md#limiting-public-information)

When sharing files, be sure to remove associated metadata. Image files commonly include [Exif](https://en.wikipedia.org/wiki/Exif) data. Photos sometimes even include GPS coordinates in the file metadata.

> [!WARNING]
> You should **never** use blur to redact [text in images](https://bishopfox.com/blog/unredacter-tool-never-pixelation). If you want to redact text in an image, you should draw a box over the text.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#mat2" title="MAT2" image="./mat2.svg" subtitle="MAT2 is free, cross-platform software which allows you to remove metadata from image, audio, torrent, and document file types. It provides both a command line tool and a graphical user interface via an extension for Dolphin, the default file manager of KDE." >}}
  {{< card link="#exiferaser-android" title="ExifEraser" image="./exiferaser.svg" subtitle="ExifEraser is a modern, permissionless image metadata erasing application for Android." >}}
  {{< card link="#exiftool-cli" title="ExifTool" image="./exiftool.png" subtitle="ExifTool is the original Perl library and command-line application for reading, writing, and editing meta information (Exif, IPTC, XMP, and more) in a wide variety of file formats (JPEG, TIFF, PNG, PDF, RAW, and more)." >}}
{{< /cards >}}
</div>

## MAT2

{{< title-card logo="./mat2.svg" >}}

**MAT2** is free, cross-platform software which allows you to remove metadata from image, audio, torrent, and document file types. It provides both a command line tool and a graphical user interface via an extension for [Dolphin](https://github.com/jvoisin/mat2/tree/master/dolphin), the default file manager of [KDE](https://kde.org).

{{< cards >}}
  {{< card link="https://github.com/jvoisin/mat2#readme" title="Repository" icon="code" >}}
  {{< card link="https://github.com/jvoisin/mat2#how-to-use-mat2" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://pypi.org/project/mat2)
[{{< badge content="macOS" color="indigo" >}}](https://github.com/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
[{{< badge content="Windows" color="red" >}}](https://pypi.org/project/mat2)
[{{< badge content="Web" >}}](https://github.com/jvoisin/mat2#web-interface)

## Metadata Cleaner

{{< title-card logo="./metadatacleaner.svg" >}}

**Metadata Cleaner** is a graphical metadata removal tool for Linux powered by [MAT2](https://github.com/jvoisin/mat2).

{{< cards >}}
  {{< card link="https://metadatacleaner.gitlab.io/metadatacleaner/" title="Homepage" icon="home" >}}
  {{< card link="https://gitlab.com/metadatacleaner/metadatacleaner/" title="Source Code" icon="code" >}}
  {{< card link="https://gitlab.com/metadatacleaner/metadatacleaner/-/blob/main/CONTRIBUTING.md" title="Contribute" icon="heart" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Flathub" >}}](https://flathub.org/en/apps/io.gitlab.metadatacleaner.metadatacleaner)

## ExifEraser (Android)

{{< title-card logo="./exiferaser.svg" >}}

**ExifEraser** is a modern, permissionless image metadata erasing application for Android.

It currently supports JPEG, PNG, and WebP files.

{{< cards >}}
  {{< card link="https://github.com/Tommy-Geenexus/exif-eraser#readme" title="Repository" icon="code" >}}
  {{< card link="https://github.com/Tommy-Geenexus/exif-eraser#description" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Google Play" color="green" >}}](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
[{{< badge content="Accrescent" >}}](https://accrescent.app/app/com.none.tom.exiferaser)
[{{< badge content="GitHub" >}}](https://github.com/Tommy-Geenexus/exif-eraser/releases)

The metadata that is erased depends on the image's file type:

- **JPEG**: ICC Profile, Exif, Photoshop Image Resources and XMP/ExtendedXMP metadata will be erased if it exists.
- **PNG**: ICC Profile, Exif and XMP metadata will be erased if it exists.
- **WebP**: ICC Profile, Exif and XMP metadata will be erased if it exists.

After processing the images, ExifEraser provides you with a full report about what exactly was removed from each image.

The app offers multiple ways to erase metadata from images. Namely:

- You can share an image from another application with ExifEraser.
- Through the app itself, you can select a single image, multiple images at once, or even an entire directory.
- It features a "Camera" option, which uses your operating system's camera app to take a photo, and then it removes the metadata from it.
- It allows you to drag photos from another app into ExifEraser when they are both open in split-screen mode.
- Lastly, it allows you to paste an image from your clipboard.

## Shortcuts (iOS & macOS)

On iOS and macOS, you can remove image metadata without using any third-party apps by creating a [**shortcut**](https://apps.apple.com/app/id915249334) for this purpose. Here is an example shortcut you can download to use as is:

[Clean Image Metadata](https://icloud.com/shortcuts/fb774ddb7b5b4296871776c67ac0fff9)
{ .pg:buttons }

You can also use it as a model for your own shortcut; just make sure that the **Preserve Metadata** option under the **Convert** action is unchecked. Once added, you can access the shortcut in the share sheet that appears when you select the Share Share button. You can select multiple images and invoke the shortcut to remove their metadata all at once.

This shortcut removes metadata such as location, device model, lens model, and other camera information. It also sets the image creation date to the time the shortcut was used.

## ExifTool (CLI)

{{< title-card logo="./exiftool.png" >}}

**ExifTool** is the original Perl library and command-line application for reading, writing, and editing meta information (Exif, IPTC, XMP, and more) in a wide variety of file formats (JPEG, TIFF, PNG, PDF, RAW, and more).

It is often a component of other Exif removal applications and in most Linux distribution repositories.

{{< cards >}}
  {{< card link="https://exiftool.org" title="Homepage" icon="home" >}}
  {{< card link="https://exiftool.org/faq.html" title="Documentation" icon="document-text" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://exiftool.org)
[{{< badge content="macOS" color="indigo" >}}](https://exiftool.org)
[{{< badge content="Windows" color="red" >}}](https://exiftool.org)

> [!TIP]
> To delete data from a directory of files, you can run this command inside the directory, replacing `file_extension` with the file type of the files you want to process (e.g. `jpg` or `png`):
> ```bash
> exiftool -all= *.file_extension
> ```

## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

- Apps developed for open-source operating systems must be open source.
- Apps must be free and should not include ads or other limitations.
