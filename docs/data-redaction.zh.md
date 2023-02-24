---
title: "数据和元数据处理"
icon: material/tag-remove
---

共享文件时，请务必删除关联的元数据。 图像文件通常包括 [Exif](https://en.wikipedia.org/wiki/Exif) 数据。 照片有时甚至包括文件元数据中的GPS坐标。

## 电脑版

### MAT2

!!! recommendation

    ![MAT2标志](assets/img/data-redaction/mat2.svg){ align=right }
    
    **MAT2**是免费软件，它允许从图像、音频、洪流和文件类型中删除元数据。 [KDE]它通过[Nautilus的扩展](https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus)提供命令行工具和图形用户界面， [GNOME](https://www.gnome.org)的默认文件管理器和 [Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin)的默认文件管理器(https://kde.org)。
    
    在Linux上，存在一个由MAT2驱动的第三方图形工具[Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner)，并[在Flathub上提供](https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner)。
    
    [:octicons-repo-16: Repository](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title="文档"}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="源代码" } 。
    
    ??? 下载
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## 手机版

### ExifEraser (安卓系统)

!!! recommendation

    ![ExifEraser标志](assets/img/data-redaction/exiferaser.svg) { align=right }
    
    **ExifEraser**是一个现代的、无权限的图像元数据删除应用程序，适用于Android。
    
    它目前支持JPEG、PNG和WebP文件。
    
    [:octicons-repo-16: Repository](https://gitea.angry.im/PeterCxy/Shelter#shelter){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitea.angry.im/PeterCxy/Shelter){ .card-link title="源代码" }
    [:octicons-code-16:](https://github.com/Tommy-Geenexus/exif-eraser){ .card-link title=贡献 }
    
    ??? 下载
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:octicons-moon-16: Accrescent](https://accrescent.app/app/com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

被删除的元数据取决于图像的文件类型。

* **JPEG**: ICC Profile、Exif、Photoshop Image Resources和XMP/ExtendedXMP元数据如果存在，将被删除。
* **PNG**：ICC Profile、Exif和XMP元数据如果存在，将被删除。
* **WebP**：ICC Profile、Exif和XMP元数据如果存在，将被删除。

在处理完图像后，ExifEraser会向你提供一份完整的报告，说明每张图像中到底有哪些被删除。

该应用程序提供多种方法来消除图像中的元数据。 名称：

* 你可以用ExifEraser分享另一个应用程序的图像。
* 通过应用程序本身，你可以选择一张图片，一次选择多张图片，甚至是整个目录。
* 它有一个 "相机 "选项，它使用你的操作系统的相机应用程序来拍摄照片，然后它将元数据从照片中删除。
* 它允许你将照片从另一个应用程序拖入ExifEraser，当它们都以分屏模式打开时。
* 最后，它允许你从剪贴板上粘贴图片。

### Metapho (iOS)

!!! recommendation

    ![Metapho标志](assets/img/data-redaction/metapho.jpg){ align=right }
    
    **Metapho**是一个简单而干净的照片元数据查看器，如日期、文件名、大小、相机型号、快门速度和位置。
    
    [:octicons-home-16: 首页](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="隐私政策" } 。
    
    ??? 下载
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur

!!! recommendation

    ![PrivacyBlur标志](assets/img/data-redaction/privacyblur.svg) { align=right }
    
    **PrivacyBlur**是一个免费的应用程序，它可以在网上分享之前模糊图片的敏感部分。
    
    [:octicons-home-16: 主页](https://privacyblur.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://privacyblur.app/privacy.html){ .card-link title="隐私政策" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme){ .card-link title=文档}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="源代码" }
    
    ??? 下载
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
        - [:simple-appstore: Web](https://apps.apple.com/us/app/privacyblur/id1536274106)

!!! 警告

    您应该* *从不* *使用模糊来编辑[图片中的文本] (https://bishopfox.com/blog/unredacter-tool-never-pixelation)。 如果你想编辑图像中的文本，在文本上画一个方框。 为此，我们建议使用[Pocket Paint]（https://github.com/Catrobat/Paintroid）等应用程序。

## 命令行

### ExifTool

!!! recommendation

    ![ExifTool标志](assets/img/data-redaction/exiftool.png){ align=right }
    
    **ExifTool**是原始的perl库和命令行应用程序，用于读取、写入和编辑各种文件格式（JPEG、TIFF、PNG、PDF、RAW等）的元信息（Exif、IPTC、XMP等）。
    
    它通常是其他Exif删除应用程序的一个组成部分，并且在大多数Linux发行库中。
    
    [:octicons-home-16: 主页](https://exiftool.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://exiftool.org/faq.html){ .card-link title=文档}
    [:octicons-code-16:](https://github.com/exiftool/exiftool){ .card-link title="源代码" }
    [:octicons-heart-16:](https://exiftool.org/#donate){ .card-link title="贡献" }
    
    ??? 下载
    
        - [:simple-windows11: Windows](https://exiftool.org)
        - [:simple-apple: macOS](https://exiftool.org)
        - [:simple-linux: Linux](https://exiftool.org)

!!! 例子 "从一个文件目录中删除数据"

    ```bash
    exiftool -all= *.file_extension
    ```

## 条件

**请注意，我们与我们推荐的任何项目都没有关系。** 除了 [我们的标准标准](about/criteria.md)，我们还制定了一套明确的要求，使我们能够提供客观的建议。 我们建议你在选择使用一个项目之前熟悉这个清单，并进行自己的研究以确保它是你的正确选择。

!!! 例如 "本节是新的"

    我们正在努力为我们网站的每个部分建立确定的标准，这可能会有变化。 如果你对我们的标准有任何疑问，请[在我们的论坛上提问](https://discuss.privacyguides.net/latest)，如果这里没有列出，不要以为我们在做推荐时没有考虑到什么。 当我们推荐一个项目时，有许多因素被考虑和讨论，而记录每一个因素是一项正在进行的工作。

- 为开源操作系统开发的应用程序必须是开源的。
- 应用程序必须是免费的，不应包括广告或其他限制。
