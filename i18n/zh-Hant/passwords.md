---
title: "密碼管理器。"
icon: material/form-textbox-password
description: 密碼管理員允許您安全地存儲和管理密碼和其他憑證。
schema:
  - 
    "@context": http://schema.org
    "@type": WebPage
    name: Password Manager Recommendations
    url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Bitwarden
    image: /assets/img/password-management/bitwarden.svg
    url: https://bitwarden.com
    sameAs: https://en.wikipedia.org/wiki/Bitwarden
    applicationCategory: 密碼管理器。
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: 1Password
    image: /assets/img/password-management/1password.svg
    url: https://1password.com
    sameAs: https://en.wikipedia.org/wiki/1Password
    applicationCategory: 密碼管理器。
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Psono
    image: /assets/img/password-management/psono.svg
    url: https://psono.com
    applicationCategory: 密碼管理器。
    operatingSystem:
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: KeePassXC
    image: /assets/img/password-management/keepassxc.svg
    url: https://keepassxc.org/
    sameAs: https://en.wikipedia.org/wiki/KeePassXC
    applicationCategory: 密碼管理器。
    operatingSystem:
      - Windows
      - macOS
      - Linux
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: KeePassDX
    image: /assets/img/password-management/keepassdx.svg
    url: https://www.keepassdx.com/
    applicationCategory: 密碼管理器。
    operatingSystem: Android
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Strongbox
    image: /assets/img/password-management/strongbox.svg
    url: https://strongboxsafe.com/
    applicationCategory: 密碼管理器。
    operatingSystem: iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: gopass
    image: /assets/img/password-management/gopass.svg
    url: https://www.gopass.pw/
    applicationCategory: 密碼管理器。
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - FreeBSD
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
---

密碼管理員讓您用主密碼安全地儲存、管理密碼和其他憑證。

[密碼介紹 :material-arrow-right-drop-circle:](./basics/passwords-overview.md)

!!! 資訊

    瀏覽器和作業系統所內置的密碼管理器常常不如專用密碼管理器軟體。 內建的密碼管理器優點是與原生軟體很好地整合，但它通常非常簡單，並且缺乏獨立產品具有的隱私和安全功能。
    
    例如，Microsoft Edge 的密碼管理器根本不提供 E2EE。 Google的密碼管理員有 [optional](https://support.google.com/accounts/answer/11350823)個E2EE ，而[Apple] (https://support.apple.com/en-us/HT202303)預設提供E2EE。

## 雲端型

這些密碼管理員會將您的密碼同步到雲端伺服器，以便您從所有裝置輕鬆存取，並安全地防止裝置丟失。

### Bitwarden

!!! recommendation

    ! [Bitwarden logo] (assets/img/password-management/bitwarden.svg) {align = right}
    
    * * Bitwarden * *是一個免費的開源密碼管理器。 它旨在解決個人、團隊和商業組織的密碼管理問題。 Bitwarden 是最佳和最安全的解決方案之一，可存儲所有登錄名和密碼，同時方便地在所有設備之間保持同步。
    
    [:octicons-home-16: Homepage](https://bitwarden.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://bitwarden.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://bitwarden.com/help/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/bitwarden){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)
        - [:simple-appstore: App Store](https://apps.apple.com/app/bitwarden-password-manager/id1137397744)
        - [:simple-github: GitHub](https://github.com/bitwarden/mobile/releases)
        - [:simple-windows11: Windows](https://bitwarden.com/download)
        - [:simple-linux: Linux](https://bitwarden.com/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/com.bitwarden.desktop)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/jbkfoedolllekgbhcbcoahefnbanhhlh)

Bitwarden還具有 [Bitwarden Send](https://bitwarden.com/products/send/)功能，允許您使用 [端到端加密](https://bitwarden.com/help/send-encryption)安全地共享文本和檔案。 發送分享鏈接時可以要求帶[分享密碼](https://bitwarden.com/help/send-privacy/#send-passwords) 。 Bitwarden Send 還具[自動刪除功能](https://bitwarden.com/help/send-lifespan)。

您需要使用 [高級付費方案](https://bitwarden.com/help/about-bitwarden-plans/#compare-personal-plans) 才能共享檔案。 免費方案只允許文字分享。

Bitwarden 伺服器端代碼是 [開源](https://github.com/bitwarden/server)，因此如果不想使用 Bitwarden 雲端，可以輕鬆地託管自己的 Bitwarden 同步伺服器。

**Vaultwarden** 是以Rust 編寫的Bitwarden 同步伺服器的替代實作，相容官方 Bitwarden 客戶端，非常適合自託管部署取代 Bitwarden  官方資源過載的情況。 如果你想在自己的伺服器上自我託管 Bitwarden ，你幾乎肯定想在 Bitwarden 的官方伺服器代碼上使用 Vaultwarden。

[:octicons-repo-16: Vaultwarden Repository](https://github.com/dani-garcia/vaultwarden ""){.md-button} [:octicons-info-16:](https://github.com/dani-garcia/vaultwarden/wiki){ .card-link title=Documentation}
[:octicons-code-16:](https://github.com/dani-garcia/vaultwarden){ .card-link title="Source Code" }
[:octicons-heart-16:](https://github.com/sponsors/dani-garcia){ .card-link title=Contribute }

### 1Password

!!! recommendation

    ! [1Password logo] (assets/img/password-management/1password.svg) {align = right}
    
    * * 1Password * *是一個密碼管理器，非常注重安全性和易用性，允許您將密碼、信用卡、軟體許可證和任何其他敏感資訊存儲在安全的數位保管庫。 您的保管庫託管在 1Password 伺服器，費用為[每月收取] (https://1password.com/sign-up/)。 1Password 定期[接受審計](https://support.1password.com/security-assessments/)並提供卓越的客戶支援。 1Password 是封閉原始碼；但是，產品的安全性已徹底記錄在他們的[安全白皮書] (https://1passwordstatic.com/files/security/1password-white-paper.pdf)。
    
    [:octicons-home-16: Homepage](https://1password.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://support.1password.com/1password-privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.1password.com/){ .card-link title=Documentation}
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.onepassword.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1511601750?mt=8)
        - [:simple-windows11: Windows](https://1password.com/downloads/windows/)
        - [:simple-apple: macOS](https://1password.com/downloads/mac/)
        - [:simple-linux: Linux](https://1password.com/downloads/linux/)

過去**1Password** 僅為 macOS和 iOS的用戶提供了最佳的密碼管理器用戶體驗，不過它現在已在所有平臺上實現了功能平等。 它擁有許多針對家庭和非技術人員方便使用的特色，也有先進的功能。

您的1Password保管庫使用您的主密碼和隨機34個字符的安全密鑰來加密其伺服器上的數據。 此安全金鑰為您的資料添加了一層保護，因為無論您的主密碼如何，資料都受到高熵保護。 許多其他密碼管理器解決方案完全依賴於您的主密碼的強度來保護您的數據。

相較Bitwarden , 1Password一大優勢是其對原生客戶端的一流支持。 Bitwarden 將許多職責（特別是帳戶管理功能）降級到他們的網頁保管庫界面，而1Password 則是在其原生行動或桌面客戶端中提供了所有功能。 1Password 客戶端也有更直觀的用戶界面 ，更容易使用和導航。

### Psono

!!! recommendation

    ! [Psono logo] (assets/img/password-management/psono.svg) {align = right}
    
    * * Psono * *是來自德國的免費開源密碼管理器，專注於團隊的密碼管理。 Psono支援安全分享密碼、檔案、書籤和電子郵件。 所有機密都受到主密碼的保護。
    
    [:octicons-home-16: Homepage](https://psono.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://psono.com/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://doc.psono.com){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitlab.com/psono){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
        - [:simple-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

Psono為其產品提供廣泛的文檔。 Psono 的網頁用戶端可以自行託管；或者，您可以選擇完整的Community Edition或具有附加功能的Enterprise Edition。

### 標準

**請注意，我們所推薦專案沒有任何瓜葛。 ** 除了 [標準準則](about/criteria.md)外，我們還發展出一套明確要求以提出客觀建議。 我們建議您在選擇使用項目之前先熟悉此列表，並進行自己的研究，以確保它是您的正確選擇。

!!! 示例“此部分是新的”

    我們正在努力為我們網站的每個部分建立定義的標準，這可能會有所變化。 如果您對我們的標準有任何疑問，請在[論壇上提問] (https://discuss.privacyguides.net/latest) ，如果沒有列出，請不要認為我們在提出建議時沒有考慮到某些事情。 當我們推薦一個項目時，有許多因素被考慮和討論，記錄每一個項目都是正在進行式。

#### 最低合格要求

- 必須使用強大的、基於標準的/現代的E2EE。
- 必須有徹底記錄的加密和安全實踐。
- 必須公開由信譽良好、獨立的第三方進行的審計。
- 所有非必要的遙測都必須是可選的。
- 除了收費之必要外，不得收集過多個人識別資訊(PII)。

#### 最佳案例

最佳案例標準代表了我們希望從這個類別的完美項目應具備的功能。 推薦產品可能沒有此功能，但若有這些功能則會讓排名更為提高。

- 遙測應選擇加入（預設情況下禁用）或根本不收集。
- 應該是開源的，並且可以合理地自我託管。

## 本地儲存

這些選項允許您在本地管理加密密碼資料庫。

### KeePassXC

!!! recommendation

    ! [KeePassXC logo] (assets/img/password-management/keepassxc.svg) {align = right}
    
    * * KeePassXC * *是 KeePassX 的社區分支， KeePassX 是KeePass Password Safe 的原生跨平臺端口，其目標是通過新功能和錯誤修復來擴展和改善它，以提供功能豐富，跨平臺和現代開源密碼管理器。
    
    [:octicons-home-16: Homepage](https://keepassxc.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://keepassxc.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://keepassxc.org/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/keepassxreboot/keepassxc){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://keepassxc.org/donate/){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)

KeePassXC 將其匯出數據存儲為 [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) 文件。 如果您將此檔案匯入另一個密碼管理員，這可能意味著資料丟失。 我們建議您手動檢查每個記錄。

### KeePassDX (安卓)

!!! recommendation

    ! [KeePassDX標誌] (assets/img/password-management/keepassdx.svg) {align = right}
    
    * * KeePassDX * *是 Android 輕量級密碼管理器，允許編輯KeePass 格式文件中的加密資料，與安全填寫密碼表單。 [Contributor Pro] (https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro)允許解鎖上妝的內容和非標準協議功能，但更重要的是，它有助於並鼓勵開發。
    
    [:octicons-home-16: Homepage](https://www.keepassdx.com){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Kunzisoft/KeePassDX/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/Kunzisoft/KeePassDX){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.keepassdx.com/#donation){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free)
        - [:simple-github: GitHub](https://github.com/Kunzisoft/KeePassDX/releases)

### Strongbox (iOS & macOS)

!!! recommendation

    ! [Strongbox logo] (assets/img/password-management/strongbox.svg) {align = right}
    
    * * Strongbox * *是 iOS 和 macOS 原生開源密碼管理器。 支援 KeePass 和 Password Safe 格式， Strongbox 可以與其他密碼管理器（如KeePassXC ）一起在非 Apple 平臺上使用。 通過採用[免費增值模式] (https://strongboxsafe.com/pricing/) ， Strongbox 免費會員等級提供了大多數功能，而更方便的 [功能](https://strongboxsafe.com/comparison/) -例如生物識別驗證-則必須在訂閱或購買永久授權之後才能享受。
    
    [:octicons-home-16: Homepage](https://strongboxsafe.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://strongboxsafe.com/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://strongboxsafe.com/getting-started/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/strongbox-password-safe/Strongbox){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/strongbox-password-safe/Strongbox#supporting-development){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/strongbox-keepass-pwsafe/id897283731)

此外，還有一個僅限離線版本： [Strongbox Zero](https://apps.apple.com/app/strongbox-keepass-pwsafe/id1581589638)。 這個版本被剝離許多特色，以試圖減少攻擊面。

### 命令行

這些產品是最低限度的密碼管理器，可以在腳本應用程序中使用。

#### gopass

!!! recommendation

    ! [gopass logo] (assets/img/password-management/gopass.svg) {align = right}
    
    * * gopass * *是用Go編寫的命令行的密碼管理器。 它適用於所有主要的桌面和伺服器作業系統（ Linux ， macOS ， BSD ， Windows ）。
    
    [:octicons-home-16: Homepage](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)

### 標準

**請注意，我們所推薦專案沒有任何瓜葛。 ** 除了 [標準準則](about/criteria.md)外，我們還發展出一套明確要求以提出客觀建議。 我們建議您在選擇使用項目之前先熟悉此列表，並進行自己的研究，以確保它是您的正確選擇。

!!! 示例“此部分是新的”

    我們正在努力為我們網站的每個部分建立定義的標準，這可能會有所變化。 如果您對我們的標準有任何疑問，請在[論壇上提問] (https://discuss.privacyguides.net/latest) ，如果沒有列出，請不要認為我們在提出建議時沒有考慮到某些事情。 當我們推薦一個項目時，有許多因素被考慮和討論，記錄每一個項目都是正在進行式。

- 需為跨平臺。
