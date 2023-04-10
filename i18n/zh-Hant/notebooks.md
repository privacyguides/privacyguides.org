---
title: "記事本"
icon: material/notebook-edit-outline
description: 這些加密的筆記錄應用程式可讓您跟進記錄，而無需將它們提供給第三方。
---

保存記錄您的筆記和日誌，不要將它們提供給第三方。

如果您目前使用的是 Evernote、Google Keep 或 Microsoft OneNote 等應用程式，我們建議您在這裡選擇一個支援 E2EE 的替代方案。

## 雲端型

### Joplin

!!! recommendation

    ! [Joplin logo] (assets/img/notebooks/joplin.svg) {align = right}
    
    * * Joplin * *是一個免費、開源且功能齊全的筆記和待辦事項應用程式，可以處理大量 Markdown  文件並組織成筆記本和標籤功能。 它提供E2EE ，可以通過Nextcloud ， Dropbox等同步。 它也可以輕鬆自 Evernote 和純文本筆記導入。
    
    [:octicons-home-16: Homepage](https://joplinapp.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://joplinapp.org/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://joplinapp.org/help/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/laurent22/joplin){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://joplinapp.org/donate/){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.cozic.joplin)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/joplin/id1315599797)
        - [:simple-github: GitHub](https://github.com/laurent22/joplin-android/releases)
        - [:simple-windows11: Windows](https://joplinapp.org/#desktop-applications)
        - [:simple-apple: macOS](https://joplinapp.org/#desktop-applications)
        - [:simple-linux: Linux](https://joplinapp.org/#desktop-applications)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/joplin-web-clipper/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/joplin-web-clipper/alofnhikmmkdbbbgpnglcpdollgjjfek)

Joplin 不支援 [應用程式本身或個別筆記和筆記本](https://github.com/laurent22/joplin/issues/289)的密碼/PIN保護。 但是您的資料在傳輸與同步位置中仍會使用主密鑰加密。 自2023年1月起， Joplin 支援 [Android](https://joplinapp.org/changelog_android/#android-v2-10-3-https-github-com-laurent22-joplin-releases-tag-android-v2-10-3-pre-release-2023-01-05t11-29-06z) 和 [iOS](https://joplinapp.org/changelog_ios/#ios-v12-10-2-https-github-com-laurent22-joplin-releases-tag-ios-v12-10-2-2023-01-20t17-41-13z)的生物識別應用程式鎖定功能。

### Standard Notes

!!! recommendation

    ! [Standard Notes 標誌] (assets/img/notebooks/standard-notes.svg) {align = right}
    
    * *Standard Notes * *是一款簡單而私密的筆記應用程式，可隨時隨地輕鬆使用筆記功能。 它在每個平臺上都具有E2EE ，並且具有強大的主題和自訂編輯器的桌面體驗。 它也經過[獨立審計(PDF)] (https://s3.amazonaws.com/standard-notes/security/Report-SN-Audit.pdf)。
    
    [:octicons-home-16: Homepage](https://standardnotes.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://standardnotes.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://standardnotes.com/help){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/standardnotes){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://standardnotes.com/donate){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.standardnotes)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1285392450)
        - [:simple-github: GitHub](https://github.com/standardnotes/app/releases)
        - [:simple-windows11: Windows](https://standardnotes.com)
        - [:simple-apple: macOS](https://standardnotes.com)
        - [:simple-linux: Linux](https://standardnotes.com)
        - [:octicons-globe-16: Web](https://app.standardnotes.com/)

### Cryptee

!!! recommendation

    ! [Cryptee logo] (./assets/img/notebooks/cryptee.svg#only-light) {align = right}
    ! [Cryptee logo] (./assets/img/notebooks/cryptee-dark.svg#only-dark) {align = right}
    
    * * Cryptee * *是一個開源的，網頁版本的 E2EE 文件編輯器和照片存儲應用程式。 Cryptee 為漸進式網路應用程式(PWA) ，這意味著它可以在所有現代設備上無縫工作，而無需為每個平臺提供原生應用程序。
    
    [:octicons-home-16: Homepage](https://crypt.ee){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://crypt.ee/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://crypt.ee/help){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/cryptee){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:octicons-globe-16: PWA](https://crypt.ee/download)

Cryptee 免費提供100MB 的儲存空間，如果需要更多容量，則另有付費選項。 註冊不需要電子郵件或其他個人身份資訊。

## 本地端的記事簿

### Org-mode

!!! recommendation

    ! [Org-mode logo] (assets/img/notebooks/org-mode.svg) {align = right}
    
    * * Org-mode * *是GNU Emacs的[主要模式] (https://www.gnu.org/software/emacs/manual/html_node/elisp/Major-Modes.html)。 Org-mode 用於記錄筆記，維護待辦事項列表，規劃項目，並使用快速有效的純文本系統撰寫文件。 可以利用[檔案同步] (file-sharing.md#file-sync)工具進行同步。
    
    [:octicons-home-16: Homepage](https://orgmode.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://orgmode.org/manuals.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://git.savannah.gnu.org/cgit/emacs/org-mode.git){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://liberapay.com/bzg){ .card-link title=Contribute }

## 標準

**請注意，我們所推薦專案沒有任何瓜葛。 ** 除了 [標準準則](about/criteria.md)外，我們還發展出一套明確要求以提出客觀建議。 我們建議您在選擇使用項目之前先熟悉此列表，並進行自己的研究，以確保它是您的正確選擇。

!!! 示例“此部分是新的”

    我們正在努力為我們網站的每個部分建立定義的標準，這可能會有所變化。 如果您對我們的標準有任何疑問，請在[論壇上提問] (https://discuss.privacyguides.net/latest) ，如果沒有列出，請不要認為我們在提出建議時沒有考慮到某些事情。 當我們推薦一個項目時，有許多因素被考慮和討論，記錄每一個項目都是正在進行式。

- 客戶端應是開源的。
- 任何雲端同步都必須是 E2EE。
- 必須支援將文件匯出為標準格式。

### 最佳案例：

- 本地備份/同步功能應支援加密。
- 基於雲的平臺應支持文件共享。
