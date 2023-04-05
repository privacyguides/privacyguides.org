---
title: "多重因素驗證"
icon: 'material/two-factor-authentication'
description: 這些工具可協助您透過多重身份驗證保護網路帳戶，而無需將您的祕密傳送給第三方。
---

## 安全金鑰硬體

### YubiKey

!!! recommendation

    ![YubiKeys](assets/img/multifactor-authentication/yubikey.png)
    
    * * YubiKeys * *是最常用的安全金鑰之一。 有些 YubiKey 型號具廣泛的功能，例如： [Universal 2nd Factor (U2F)] (https://en.wikipedia.org/wiki/Universal_2nd_Factor)、[FIDO2 and WebAuthn] (basics/multifactor-authentication.md#fido-fast-identity-online)、[Yubico OTP] (basics/multifactor-authentication.md#yubico-otp)、[Personal Identity Verification (PIV)] (https://developers.yubico.com/PIV)、 [OpenPGP](https://developers.yubico.com/PGP/)、[TOTP and HOTP] (https://developers.yubico.com/OATH)驗證。
    
    YubiKey 好處之一是，一支密鑰（ 例如 YubiKey 5 ）可以滿足對安全密鑰硬體的全部期待。 我們建議您在購買前先[作個小測驗](https://www.yubico.com/quiz/) ，以確保您做出正確的選擇。
    
    [:octicons-home-16: Homepage](https://www.yubico.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.yubico.com/){ .card-link title=Documentation}

[比較表](https://www.yubico.com/store/compare/) 顯示了各型號 YubiKeys  功能比較。 我們強烈建議您從YubiKey 5系列中挑選。

YubiKeys可以利用 [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/) 或 [YubiKey Personalization Tools](https://www.yubico.com/support/download/yubikey-personalization-tools/)來收授指令。 若要管理 TOTP 代碼，您可以使用 [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)。 Yubico 所有客戶端軟體都是開源。

支持 HOTP 和 TOTP 的機型， OTP 介面中有2個插槽可用於HOTP 和32個插槽來存儲 TOTP 機密。 這些機密經加密後存儲在密鑰上，永遠不會將它們暴露在插入的設備上。 一旦向 Yubico Authenticator 提供種子（共享祕密） ，它將只會給出六位數的代碼，但永遠不會提供種子。 此安全模型有助於限制攻擊者，即便運行 Yubico Authenticator的設備受到破壞，讓受到物理攻擊時 Yubikey 仍具抵抗力。

!!! 警告
    YubiKey 軔體沒有開源，不可更新。 如果您想要使用較新韌體版本的功能，或者使用中的韌體版本存在漏洞，則需要購買新的金鑰。

### Nitrokey

!!! recommendation

    ![Nitrokey](assets/img/multifactor-authentication/nitrokey.jpg) {align = right}
    
    * * Nitrokey * * 能夠[FIDO2 和 WebAuthn] (basics/multifactor-authentication.md#fido-fast-identity-online)的安全金鑰，稱為* * Nitrokey FIDO2 * *。 若要獲得 PGP 支援，您需要購買他們其他鑰匙，例如* * Nitrokey Start * *、* * Nitrokey Pro 2 * *或* * Nitrokey Storage 2 * *。
    
    [:octicons-home-16: Homepage](https://www.nitrokey.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.nitrokey.com/data-privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.nitrokey.com/){ .card-link title=Documentation}

[比較表](https://www.nitrokey.com/#comparison) 顯示了各型號 Nitrokey 功能比較。 **Nitrokey 3** 具有組合的功能集。

可以使用 [Nitrokey 應用程序](https://www.nitrokey.com/download)配置 Nitrokey 模型。

支持 HOTP 和 TOTP 的型號，有3個 HOTP 插槽，15 個 TOTP 插槽。 有些 Nitrokeys 可以充當密碼管理器。 可以存儲 16 組憑證，並使用與 OpenPGP 接口相同的密碼對憑證加密。

!!! 警告

    雖然 Nitrokeys 不會將 HOTP/TOTP 機密釋放給所插入的設備，但HOTP 和 TOTP存儲* *未經加密* * ，容易受到物理攻擊。 如果您需要存儲 HOTP 或 TOTP 這類祕密，強烈建議您使用Yubikey 代替。

!!! 警告

    重置 Nitrokey 的 OpenPGP 介面會使密碼資料庫變為 [無法存取](https://docs.nitrokey.com/pro/linux/factory-reset)。

Nitrokey Pro 2、Nitrokey Storage 2 和即將推出的 Nitrokey 3 支持筆記型電腦的 [Coreboot](https://www.coreboot.org/) + [Heads](https://osresearch.net/) 軔體與系統完整性驗證。

不同於 YubiKey，Nitrokey 軔體是開源。 NitroKey 型號可（ **NitroKey Pro 2**除外）可更新軔體。

### 標準

**請注意，我們所推薦專案沒有任何瓜葛。 ** 除了 [標準準則](about/criteria.md)外，我們還發展出一套明確要求以提出客觀建議。 建議您在選擇使用項目之前先熟悉此列表，並進行自己的研究，以確保它是您的正確選擇。

!!! 示例“此部分是新的”

    我們正在努力為這個網站的各個部分建立明確標準，它可能依情況變化。 如果您對我們的標準有任何疑問，請在[論壇上提問] (https://discuss.privacyguides.net/latest) ，如果沒有列出，請不要認為我們在提出建議時沒有考慮到某些事情。 當我們推薦一個項目時，有許多因素被考慮和討論，記錄每一個項目都是正在進行式。

#### 最低合格要求

- 必須使用高品質、防篡改的硬體安全模組。
- 必須支援最新的 FIDO2 規格。
- 必須不允許私鑰提取。
- 價格超過 35美元的裝置必須支援處理 OpenPGP 和 S/MIME。

#### 最好的情况

最佳案例標準代表了我們希望從這個類別的完美項目應具備的條件。 推薦產品可能沒有此功能，但若有這些功能則會讓排名更為提高。

- 應採用 USB-C 格式。
- 應與 NFC一起使用。
- 支持 TOTP 機密儲存。
- 應支持安全軔體更新。

## 認證器應用程式

驗證器應用程式實施網際網路工程任務組( IETF)採行的安全標準，稱為 **依據時間的單次密碼**或 **TOTP**。 這是一種網站與您共享祕密的方法，驗證器應用程式使用該祕密根據當前時間生成（通常為）六位數驗證碼，您在登錄網站時輸入以供網站檢查。 通常這些驗證碼每30 秒重新生成一次，一旦生成新碼，舊碼就無用了。 即使駭客獲得六位數的驗證碼，也無法逆轉該代碼去取得原始祕密或透過其他方式去預測以後的驗證碼。

我們強烈建議您使用行動 TOTP 應用程式而不是桌面替代方案，因為 Android 和 iOS 比大多數桌面作業系統具有更好的安全性和應用程式隔離性。

### Aegis Authenticator (Android)

!!! recommendation

    ! [Aegis logo] (assets/img/multifactor-authentication/aegis.png) {align = right}
    
    * * Aegis Authenticator * *是一款免費、安全且開源的應用程式，可為您的線上服務管理兩步驗證令牌。
    
    [:octicons-home-16: Homepage](https://getaegis.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getaegis.app/aegis/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/beemdevelopment/Aegis/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/beemdevelopment/Aegis){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.buymeacoffee.com/beemdevelopment){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
        - [:simple-github: GitHub](https://github.com/beemdevelopment/Aegis/releases)

### Raivo OTP (iOS)

!!! recommendation

    ! [Raivo OTP logo] (assets/img/multifactor-authentication/raivo-otp.png) {align = right}
    
    * * Raivo OTP * *是原生、輕量和安全的時間基礎(TOTP) & 計數器(HOTP)密碼用戶端應用，適用於iOS。 Raivo OTP 提供可選的 iCloud 備份 & 同步。 Raivo OTP也以狀態列應用程式的形式提供給macOS ，但Mac應用程式並不獨立於iOS應用程式運作。
    
    [:octicons-home-16: Homepage](https://raivo-otp.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://raivo-otp.com/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-code-16:](https://github.com/raivo-otp/ios-application){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://raivo-otp.com/donate){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)

### 標準

**請注意，我們所推薦專案沒有任何瓜葛。 ** 除了 [標準準則](about/criteria.md)外，我們還發展出一套明確要求以提出客觀建議。 建議您在選擇使用項目之前先熟悉此列表，並進行自己的研究，以確保它是您的正確選擇。

!!! 示例“此部分是新的”

    我們正在努力為這個網站的各個部分建立明確標準，它可能依情況變化。 如果您對我們的標準有任何疑問，請在[論壇上提問] (https://discuss.privacyguides.net/latest) ，如果沒有列出，請不要認為我們在提出建議時沒有考慮到某些事情。 當我們推薦一個項目時，有許多因素被考慮和討論，記錄每一個項目都是正在進行式。

- 必須是開源軟體。
- 無需網際網路連線。
- 不得同步至第三方雲端同步/備份服務。
    - **可選** 支援與作業系統原生工具的 E2EE 同步是可以的，例如透過 iCloud 進行加密同步。
