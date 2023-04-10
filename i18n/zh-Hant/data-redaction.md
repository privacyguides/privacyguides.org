---
title: "資料和中繼資料處理"
icon: material/tag-remove
description: 使用這些工具來移除所分享的相片和文件中的GPS定位和其他識別資訊等中繼資料。
---

分享檔案時，請務必移除相關的中繼資料。 映像文件通常包含 [Exif](https://en.wikipedia.org/wiki/Exif) 數據。 照片有時甚至在文件元數據中包含GPS坐標。

## 電腦版應用程式

### MAT2

!!! recommendation

    ! [MAT2 logo] (assets/img/data-redaction/mat2.svg) {align = right}
    
    * * MAT2 * *是免費軟體，可以移除圖像，音頻，種子和文件文件類型的中繼資料。 它通過[ Nautilus 擴展元件] (https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus)提供命令行工具和圖形用戶界面，Nautilus 是 [GNOME](https://www.gnome.org)的預設檔案管理器， [Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin)是 [KDE](https://kde.org)的預設檔案管理器。
    
    Linux 有MAT2 提供支持的第三方圖形界面工具[Metadata Cleaner] (https://gitlab.com/rmnvgr/metadata-cleaner) ，並且[可從 Flathub 取得] (https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner)。
    
    [:octicons-repo-16: Repository](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title=Documentation}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## 行動

### ExifEraser (Android)

!!! recommendation

    ! [ExifEraser logo] (assets/img/data-redaction/exiferaser.svg) {align = right}
    
    * * ExifEraser * *是 Android 的現代無需許可的圖像中繼資料擦除應用程式。
    
    它目前支持JPEG ， PNG和WebP 檔案格式。
    
    [:octicons-repo-16: Repository](https://github.com/Tommy-Geenexus/exif-eraser){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Tommy-Geenexus/exif-eraser#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/Tommy-Geenexus/exif-eraser){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:octicons-moon-16: Accrescent](https://accrescent.app/app/com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

被清除的元資料取決於影像的檔案類型：

* **JPEG**：可清除 ICC Profile、Exif、Photoshop Image Resources 和 XMP/ExtendedXMP 等中繼資料。
* **PNG**：可清除 ICC Profile、Exif和XMP等中繼資料。
* **WebP**: 可清除 ICC Profile、Exif 和XMP 等中繼資料。

處理完影像後， ExifEraser會為您提供一份完整的報告，說明每張影像中究竟刪除了哪些內容。

該應用程式提供了多種方式來清除圖像中的中繼數據。 亦即:

* 您可以使用 ExifEraser 分享其他應用程序的圖像。
* 通過應用程序本身，可以一次選擇單個圖像，多個圖像，甚至是整個目錄。
* 它具有“相機”選項，該選項使用操作系統的相機應用程序拍攝照片，然後從中刪除中繼數據。
* 在應用分屏模式下，它可以從另一個應用程式拖放圖片到 ExifEraser 。
* 最後，它允許您從剪貼板黏貼圖像。

### Metapho (iOS)

!!! recommendation

    ! [Metapho logo] (assets/img/data-redaction/metapho.jpg) {align = right}
    
    * * Metapho * *是一個簡單清晰的相片中繼資料檢視器，例如日期、檔案名稱、大小、相機型號、快門速度和位置。
    
    [:octicons-home-16: Homepage](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="Privacy Policy" }
    
    ??? 下載
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur

!!! recommendation

    ! [PrivacyBlur logo] (assets/img/data-redaction/privacyblur.svg) {align = right}
    
    * * PrivacyBlur * *是一個免費應用程式，在線上分享前先模糊圖片的敏感部分。
    
    [:octicons-home-16: Homepage](https://privacyblur.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://privacyblur.app/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/privacyblur/id1536274106)

!!! 警告

    您* *永遠不要* *使用模糊來編輯[圖片中的文字] (https://bishopfox.com/blog/unredacter-tool-never-pixelation)。 如果要編輯影像中的文字，請在文字上畫一個框。 為此，我們建議使用[Pocket Paint] (https://github.com/Catrobat/Paintroid)等應用程式。

## 命令行

### ExifTool

!!! recommendation

    ! [ExifTool logo] (assets/img/data-redaction/exiftool.png) {align = right}
    
    * * ExifTool * *是原始的perl庫和命令行應用程式，用於讀取、寫入和編輯各種檔案格式 (JPEG , TIFF , PNG, PDF, RAW等）的中繼資訊(Exif , IPTC , XMP...)。
    
    它通常是其他Exif 移除應用程式的組件，並且在大多數 Linux 發行版儲存庫中。
    
    [:octicons-home-16: Homepage](https://exiftool.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://exiftool.org/faq.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/exiftool/exiftool){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://exiftool.org/#donate){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-windows11: Windows](https://exiftool.org)
        - [:simple-apple: macOS](https://exiftool.org)
        - [:simple-linux: Linux](https://exiftool.org)

!!! 示例「從檔案目錄中刪除資料」

    ```bash
    exiftool -all= *.file_extension
    ```

## 標準

**請注意，我們所推薦專案沒有任何瓜葛。 ** 除了 [標準準則](about/criteria.md)外，我們還發展出一套明確要求以提出客觀建議。 我們建議您在選擇使用項目之前先熟悉此列表，並進行自己的研究，以確保它是您的正確選擇。

!!! 示例“此部分是新的”

    我們正在努力為我們網站的每個部分建立定義的標準，這可能會有所變化。 如果您對我們的標準有任何疑問，請在[論壇上提問] (https://discuss.privacyguides.net/latest) ，如果沒有列出，請不要認為我們在提出建議時沒有考慮到某些事情。 當我們推薦一個項目時，有許多因素被考慮和討論，記錄每一個項目都是正在進行式。

- 為開源作業系統開發的應用程式必須是開源的。
- 應用程式必須是免費的，不應包含廣告或其他限制。
