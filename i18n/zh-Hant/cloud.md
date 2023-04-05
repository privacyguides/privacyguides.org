---
title: "雲端儲存"
icon: material/file-cloud
description: 許多雲端儲存服務供應商需要您相信他們不會查看您的檔案。 這些都是私密替代品！
---

許多雲端儲存服務供應商需要您完全信任他們不會查看您的檔案。 下面列出的替代方案通過實施安全的 E2EE，消除了對信任的需要。

如果這些替代方案不符合您的需求，建議您考慮使用其他雲端提供商的加密軟件，例如 [Cryptomator](encryption.md#cryptomator-cloud) 。 把 Cryptomator 結合在 **任一種** 雲服務商(包含這裡推薦的) 也是好方法，可減低某服務商原生客立端加密漏洞之風險。

??? 提問：找不到 Nextcloud ?

    Nextcloud 是[仍然是一個推薦的工具] (productivity.md) ，可用於自我託管檔案管理套件，但目前不推薦第三方 Nextcloud儲存服務提供商，因為我們[不建議]使用 (https://discuss.privacyguides.net/t/dont-recommend-nextcloud-e2ee/10352/29) Nextcloud  家庭用戶版內置的 E2EE 功能。

## Proton Drive

!!! recommendation

    ! [Proton Drive logo] (assets/img/cloud/protondrive.svg) {align = right}
    
    * * Proton Drive * *是來自流行的加密電子郵件供應商[Proton Mail] (email.md#proton-mail)的瑞士加密雲存儲供應商。
    
    [:octicons-home-16: Homepage](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)

Proton Drive 網路應用程式已於[2021年](https://proton.me/blog/security-audit-all-proton-apps)由 Securitum 獨立審核，並未公開完整詳細資料，但 Securitum 的認證信函指出：

> 審計人員發現了兩個不嚴重的漏洞。 此外，還提出五項一般性建議。 與此同時，我們確認在滲透測試期間沒有發現重大安全問題。

Proton Drive 全新移動客戶端軟體尚未經過第三方公開審核。

## Tresorit

!!! recommendation

    ! [Tresorit logo] (assets/img/cloud/tresorit.svg) {align = right}
    
    * * Tresorit * *是一家成立於2011年的匈牙利加密雲端儲存服務供應商。 Tresorit 由瑞士郵政擁有，瑞士郵政是瑞士的國家郵政服務。
    
    [:octicons-home-16: Homepage](https://tresorit.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tresorit.com/legal/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.tresorit.com/hc/en-us){ .card-link title=Documentation}
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.tresorit.mobile)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id722163232)
        - [:simple-windows11: Windows](https://tresorit.com/download)
        - [:simple-apple: macOS](https://tresorit.com/download)
        - [:simple-linux: Linux](https://tresorit.com/download)

Tresorit 已獲得多項獨立安全稽核：

- [2022](https://tresorit.com/blog/tresorit-receives-iso-27001-certification/): ISO/IEC 27001: 2013[^1] 符合性 [認證](https://www.certipedia.com/quality_marks/9108644476) TÜV Rheinland InterCert Kft
- [2021](https://tresorit.com/blog/fresh-penetration-testing-confirms-tresorit-security/)： Computest 的滲透測試
    - 該檢查評估了Tresorit 網頁用戶端、Android 應用程式、Windows 應用程式和相關基礎設施的安全性。
    - Computest 發現了兩個已解決的漏洞。
- [2019](https://tresorit.com/blog/ernst-young-review-verifies-tresorits-security-architecture/)： Ernst & Young 的滲透測試。
    - 該檢測分析了 Tresorit 完整源代碼，並驗證了落實 Tresorit [白皮書](https://prodfrontendcdn.azureedge.net/202208011608/tresorit-encryption-whitepaper.pdf)中描述的概念。
    - Ernst & Young 還測試了網絡、行動和桌面客戶端： “測試結果發現沒有偏離 Tresorit 的資料機密性聲明。

他們還獲得了數位信任標籤，這是 [Swiss Digital Initiative](https://www.swiss-digital-initiative.org/digital-trust-label/) 的認證，該認證要求通過與安全性，隱私和可靠性相關的 [35標準](https://digitaltrust-label.swiss/criteria/) 。

## 標準

**請注意，我們所推薦專案沒有任何瓜葛。 ** 除了 [標準準則](about/criteria.md)外，我們還發展出一套明確要求以提出客觀建議。 建議您在選擇使用項目之前先熟悉此列表，並進行自己的研究，以確保它是您的正確選擇。

!!! 示例“此部分是新的”

    我們正在努力為我們網站的每個部分建立定義的標準，這可能會有所變化。 如果您對我們的標準有任何疑問，請在[論壇上提問] (https://discuss.privacyguides.net/latest) ，如果沒有列出，請不要認為我們在提出建議時沒有考慮到某些事情。 當我們推薦一個項目時，有許多因素被考慮和討論，記錄每一個項目都是正在進行式。

### 最低合格要求

- 必須執行端到端加密。
- 必須提供免費計劃或試用期以進行測試。
- 必須支援 TOTP 或 FIDO2 多因素驗證，或 Passkey 登入。
- 必須提供支援基本檔案管理功能的網頁介面。
- 允許輕鬆匯出所有檔案/文件。
- 必須使用經審核的標準加密。

### 最好的情况

最佳案例標準代表了我們希望從這個類別的完美項目應具備的條件。 推薦產品可能沒有此功能，但若有這些功能則會讓排名更為提高。

- 客戶端應是開源的。
- 客戶端軟體應由獨立的第三方進行全面審計。
- 應提供 Linux、Android、Windows、macOS 和 iOS 的原生客戶端。
    - 這些用戶端應與雲端儲存供應商的原生作業系統工具整合，例如整合 iOS 的 Files app，或 Android 的 DocumentsProvider 功能。
- 容易與其他用戶輕鬆共享文件。
- 至少在網頁界面應提供基本的文件預覽和編輯功能。

[^1]: [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001): 2013合規性涉及公司的 [資訊安全管理系統](https://en.wikipedia.org/wiki/Information_security_management) ，涵蓋其雲端服務的銷售、開發、維護和支援。
