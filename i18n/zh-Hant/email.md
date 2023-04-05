---
title: "電子郵件服務"
icon: material/email
description: 這些電子郵件提供商提供了一個好地方來安全地存儲您的電子郵件，也有不少能與其他供應商相互操作的 OpenPGP 加密。
---

電子郵件實際上是使用任何線上服務的必需品，但我們不建議把它應用於人與人之間的對話。 與其使用電子郵件聯繫他人，不如考慮使用支援前向保密的即時通訊媒介。

[推薦的即時通訊工具](real-time-communication.md ""){.md-button}

除此之外，我們還推薦各種基於可持續商業模式和內置安全和隱私功能的電子郵件提供商。

- [OpenPGP 兼容的郵件提供商 :material-arrow-right-drop-circle:](#openpgp-compatible-services)
- [其他加密提供者 :material-arrow-right-drop-circle:](#more-providers)
- [電子郵箱別名服務 :material-arrow-right-drop-circle:](#email-aliasing-services)
- [自主託管選項 :material-arrow-right-drop-circle:](#self-hosting-email)

## OpenPGP 兼容服務

這些供應商原生支持OpenPGP加密/解密和Web密鑰目錄（ WKD ）標準，允許供應商無關的E2EE電子郵件。 例如， Proton Mail 用戶可以向 Mailbox.org 用戶發送 E2EE 消息，或者您可以從它支援的網際網路服務接收 OpenPGP 加密通知。

<div class="grid cards" markdown>

- ![Proton Mail logo](assets/img/email/protonmail.svg){ .twemoji } [Proton Mail](email.md#proton-mail)
- ![Mailbox.org logo](assets/img/email/mailboxorg.svg){ .twemoji } [Mailbox.org](email.md#mailboxorg)

</div>

!!! 警告

    當使用像 OpenPGP 這類 E2EE 技術時，電子郵件仍然會有一些未加密的元數據。 閱讀更多有關[電子郵件元數據] (basics/email-security.md#email-metadata-overview)的資訊。
    
    OpenPGP 也不支持前向保密，這意味著如果你或收件人的私鑰被盜，所有以前用它加密的消息都會洩露。 [如何保護我的私鑰？] (basics/email-security.md#how-do-i-protect-my-private-keys)

### Proton Mail

!!! recommendation

    ! [Proton Mail logo] (assets/img/email/protonmail.svg) {align = right}
    
    * * Proton Mail * *是一家專注於隱私、加密、安全性和易用性的電子郵件服務。 自* * 2013 年* *開始運營。 Proton AG 總部位於瑞士日內瓦。 免費帳戶有 500 MB 的存儲j容量。
    
    [:octicons-home-16: Homepage](https://proton.me/mail){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://proton.me/support/mail){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/ProtonMail){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play] (https://play.google.com/store/apps/details?id=ch.protonmail.android)
        - [:simple-appstore: App Store] (https://apps.apple.com/app/apple-store/id979659905)
        - [:simple-github: GitHub] (https://github.com/ProtonMail/proton-mail-android/releases)
        - [:simple-windows11: Windows] (https://proton.me/mail/bridge#download)
        - [:simple-apple: macOS] (https://proton.me/mail/bridge#download)
        - [:simple-linux: Linux] (https://proton.me/mail/bridge#download)
        - [:octicons-browser-16: Web] (https://mail.proton.me)

免費帳戶有一些功能限制，例如無法搜索正文文本和無法訪問 [Proton Mail Bridge](https://proton.me/mail/bridge)，它可以用在 [推薦的桌面電子郵件客戶端](email-clients.md) （例如Thunderbird ）。 付費帳戶包括Proton Mail Bridge、額外儲存空間和自訂網域支援等功能。 Proton Mail 應用程式於2021年11月9日由 [Securitum](https://research.securitum.com)提供 [認證函](https://proton.me/blog/security-audit-all-proton-apps) 。

如果您有 Proton Unlimited 、Business 或 Visionary 計劃，也可免費獲得 [SimpleLogin](#simplelogin) Premium。

Proton Mail 的內容崩潰報告 **不會**對其它第三方分享。 可以在以下位置停用此功能： **設定** > **前往設定** > **帳戶** > **安全和隱私** > **傳送崩潰報告**。

#### :material-check:{ .pg-green } Custom Domains and Aliases

付費的 Proton Mail 訂閱者可以使用自定網域服務或 [通用電子郵件](https://proton.me/support/catch-all) 功能。 Proton Mail還支持 [子地址](https://proton.me/support/creating-aliases)，這對於不想購買網域的人很有用。

#### :material-check:{ .pg-green } 私人付款方式

Proton Mail [除了標準信用卡/簽帳卡外，還接受](https://proton.me/support/payment-options) 現金郵寄， [比特幣](advanced/payments.md#other-coins-bitcoin-ethereum-etc)和 PayPal 付款。

#### :material-check:{ .pg-green } 帳戶安全

Proton Mail 支援使用 FIDO2 或 U2F標準 的 TOTP [雙因素驗證](https://proton.me/support/two-factor-authentication-2fa) 和 [硬體安全金鑰](https://proton.me/support/2fa-security-key) 。 使用硬體安全金鑰需要先設定 TOTP 雙因素驗證。

#### :material-check:{ .pg-green } 資料安全

在用戶未登入時，Proton Mail 使用 [zero-access 加密技術](https://proton.me/blog/zero-access-encryption)來保護電子郵件[行事曆](https://proton.me/news/protoncalendar-security-model)的資料安全。 使用零訪問加密保護的數據只能由您訪問。

存儲在 [Proton 通錄](https://proton.me/support/proton-contacts)中的某些資訊，例如顯示名稱和電子郵件地址，並未使用零存取加密進行保護。 支援零存取加密的聯絡人欄位(例如電話號碼)會以掛鎖圖示顯示。

#### :material-check:{ .pg-green }電子郵件加密

Proton Mail 網頁郵件整合了 [OpenPGP 加密](https://proton.me/support/how-to-use-pgp) 。 發送到其他 Proton Mai l帳戶的電子郵件會自動加密，並且可以在您的帳戶設置中輕鬆啟用使用 OpenPGP 金鑰對非 Proton Mail 地址進行加密。 它可以 [加密非 Proton Mail 郵件地址的訊息](https://proton.me/support/password-protected-emails)，不必非得使用 Proton Mail 帳戶或  OpenPGP 之類的軟體。

Proton Mail 還支持通過 HTTP 的 [Web 密鑰目錄（ WKD ）](https://wiki.gnupg.org/WKD)發現公鑰。 這可讓非 Proton Mail 用戶可以輕鬆找到 Proton Mail 帳戶的 OpenPGP 金鑰，以利跨供應商進行 E2EE 。


#### :material-information-outline:{ .pg-blue } 帳戶終止

若您的付費帳戶逾期 14天[未付款](https://proton.me/support/delinquency) ， 您將無法讀取自己的資料。 30天後，您的帳戶將標記為拖欠狀態，無法再收取郵件。 在此期間，我們會繼續向你收費。

#### :material-information-outline:{ .pg-blue } 額外功能

Proton Mail 提供每月 9.99 歐元的“無限 Unlimited”帳戶，除了提供多個帳戶、域名、別名和 500GB 儲存空間外，還可以使用 Proton VPN。

Proton Mail不提供數字遺產功能。

### Mailbox.org

!!! recommendation

    ! [Mailbox.org 標誌] (assets/img/email/mailboxorg.svg) {align = right}
    
    * * Mailbox.org * *電子郵件服務，專注於安全、無廣告和使用 100% 民間環保發電能源。 自* * 2014 年* *開始運營。 Mailbox.org總部位於德國柏林。 初級帳戶有 2GB 儲存空間，可以根據需要升級。
    
    [:octicons-home-16: Homepage](https://mailbox.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://mailbox.org/en/data-protection-privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://kb.mailbox.org/en/private){ .card-link title=Documentation}
    
    ??? downloads
    
        - [:octicons-browser-16: Web](https://login.mailbox.org)

#### :material-check:{ .pg-green } Custom Domains and Aliases

Mailbox.org 可以使用自定網域，且支援 [通用電子郵件](https://kb.mailbox.org/display/MBOKBEN/Using+catch-all+alias+with+own+domain) 地址。 Mailbox.org 也支援 [子地址](https://kb.mailbox.org/display/BMBOKBEN/What+is+an+alias+and+how+do+I+use+it)，如果您不想購買網域，這很有用。

#### :material-check:{ .pg-green } 私人付款方式

Mailbox.org 不接受任何加密貨幣，因為他們的支付處理商 BitPay 暫停了德國業務。 不過他們可以收郵寄現金、銀行帳戶現金支付、銀行轉帳、信用卡、 PayPa l以及幾個德國特定處理商： paydirekt 和 Sofortüberweisung。

#### :material-check:{ .pg-green } 帳戶安全

Mailbox.org支援 [雙因素驗證](https://kb.mailbox.org/display/MBOKBEN/How+to+use+two-factor+authentication+-+2FA) ，僅適用於他們的網絡郵件。 您可以通過 [Yubicloud ](https://www.yubico.com/products/services-software/yubicloud)使用 TOTP 或 [ Yubikey ](https://en.wikipedia.org/wiki/YubiKey) 。 Web 標準如 [WebAuthn ](https://en.wikipedia.org/wiki/WebAuthn) 尚不支援。

#### :material-information-outline:{ .pg-blue } 資料安全

Mailbox.org 允許使用 [加密郵箱](https://kb.mailbox.org/display/MBOKBEN/The+Encrypted+Mailbox)對傳入郵件進行加密。 收到的新訊息將立即用您的公鑰加密。

但是， [Open-Exchange](https://en.wikipedia.org/wiki/Open-Xchange)---- Mailbox.org使用的軟件平臺， [不支持](https://kb.mailbox.org/display/BMBOKBEN/Encryption+of+calendar+and+address+book) 通訊錄和行事曆加密。 [獨立的選項](calendar.md) 可能更適合該資訊。

#### :material-check:{ .pg-green }電子郵件加密

Mailbox.org在他們的網絡郵件中有 [個集成的加密](https://kb.mailbox.org/display/MBOKBEN/Send+encrypted+e-mails+with+Guard) ，這簡化了向具有公開OpenPGP密鑰的人發送消息。 它們還允許 [遠端收件人解密 Mailbox.org伺服器上的電子郵件](https://kb.mailbox.org/display/MBOKBEN/My+recipient+does+not+use+PGP) 。 當遠端收件人沒有 OpenPGP 無法解密自己郵箱中的電子郵件時，此功能非常有用。

Mailbox.org 還支持通過 HTTP 的 [Web密鑰目錄（ WKD ）](https://wiki.gnupg.org/WKD)發現公鑰。 因此其它人可以輕鬆找到 Mailbox.org 帳戶的 OpenPGP 金鑰，便於跨提供者使用 E2EE。

#### :material-information-outline:{ .pg-blue } 帳戶終止

當合約到期後，您的帳戶將受到限制，在 [30天後，它將被永久刪除](https://kb.mailbox.org/en/private/payment-article/what-happens-at-the-end-of-my-contract)。

#### :material-information-outline:{ .pg-blue } 額外功能

您可以透過 IMAP/SMTP 使用其 [.onion 服務](https://kb.mailbox.org/display/MBOKBEN/The+Tor+exit+node+of+mailbox.org)存取您的 Mailbox.org 帳戶。 然而，他們的網頁郵件介面無法訪問其  .onion 服務，可能會遇到 TLS 憑證錯誤。

所有帳戶都附帶有限、[可以加密](https://kb.mailbox.org/display/MBOKBEN/Encrypt+files+on+your+Drive)的雲端儲存空間 。 Mailbox.org 還提供別名 [@ secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring+E-Mails+are+Sent+Securely)，它對郵件伺服器之間的連線強制進行TLS加密，否則根本不會發送訊息。 Mailbox.org 除了支援 IMAP 和 POP3 等標準存取通訊協議外，還支援 [Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) 。

Mailbox.org 所有方案都提供了數位遺產功能。 你可以選擇是否要將任何資料傳遞給繼承人，但對方必須提出你的遺囑證明。 或者，您可以通過姓名和地址提出人選。

## 更多供應商

這些提供商以零知識加密方式儲存您的電子郵件，使其成為保護儲存電子郵件安全的絕佳選擇。 但是，它們不支持供應商之間可相互操作 E2EE 通信的加密標準。

<div class="grid cards" markdown>

- ![StartMail logo](assets/img/email/startmail.svg#only-light){ .twemoji }![StartMail logo](assets/img/email/startmail-dark.svg#only-dark){ .twemoji } [StartMail](email.md#startmail)
- ![Tutanota logo](assets/img/email/tutanota.svg){ .twemoji } [Tutanota](email.md#tutanota)

</div>

### StartMail

!!! recommendation

    ! [StartMail logo] (assets/img/email/startmail.svg#only-light) {align = right}
    ! [StartMail標誌] (assets/img/email/startmail-dark.svg#only-dark) {align = right}
    
    * * StartMail * *是一項電子郵件服務，通過使用標準OpenPGP加密來關注安全和隱私。 StartMail 自 2014 年開始運營，總部位於荷蘭 Zeist Boulevard 11。 帳戶以10GB開始。 提供 30天的試用期。
    
    [:octicons-home-16: Homepage](https://www.startmail.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startmail.com/en/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.startmail.com){ .card-link title=Documentation}
    
    ??? 下載
    
        - [:octicons-browser-16: Web](https://mail.startmail.com/login)

#### :material-check:{ .pg-green } Custom Domains and Aliases

個人帳戶可以使用 [自定或系統生成](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases) 別名。 也可用[自定網域](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain) 。

#### :material-alert-outline:{ .pg-orange } 私人付款方式

StartMail 接受 Visa 、MasterCard 、American Express 信用卡和 Paypal。 StartMail還有其他 [付款選項](https://support.startmail.com/hc/en-us/articles/360006620637-Payment-methods) ，例如 [比特幣](advanced/payments.md#other-coins-bitcoin-ethereum-etc) （目前僅適用於個人帳戶）和 SEPA 直接扣賬（使用超過一年的帳戶）。

#### :material-check:{ .pg-green } 帳戶安全

StartMail 只支援網頁郵件 [ TOTP 雙因素驗證](https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA)。 他們無法透過 U2F 安全金鑰驗證。

#### :material-information-outline:{ .pg-blue } 資料安全

StartMail 還有 [零存取加密](https://www.startmail.com/en/whitepaper/#_Toc458527835)，透過其「使用者保管庫」系統保護用戶未登入時的資料安全。 當您登入後，保管庫將被打開，並將電子郵件移出佇列，由相應的私鑰解密。

StartMail 支援匯入 [聯絡人](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts) ，但它們只能在網頁郵件中存取，而不能透過 [ CalDAV ](https://en.wikipedia.org/wiki/CalDAV)等協議存取。 連絡人資料也不會使用零知識加密儲存。

#### :material-check:{ .pg-green }電子郵件加密

StartMail  網頁郵件 [整合了加密](https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) ，以便使用公開OpenPGP 密鑰發送加密消息。 但是，它們不支持 Web 密鑰目錄標準，這讓其他電子郵件提供商或客戶端軟體不容易找到 Startmail 郵箱的公鑰。

#### :material-information-outline:{ .pg-blue } 帳戶終止

若帳戶遲未按時繳款 StartMail 在[六個月內三階段警告](https://support.startmail.com/hc/en-us/articles/360006794398-Account-expiration)，最後會永久刪除帳戶。

#### :material-information-outline:{ .pg-blue } 額外功能

StartMail 允許在電子郵件中使用代理圖像。 如果您允許載入遠端影像，發件人將不會知道您的IP位址。

Proton Mail不提供數字遺產功能。

### Tutanota

!!! recommendation

    ! [Tutanota標誌] (assets/img/email/tutanota.svg) {align = right}
    
    * * Tutanota * * 使用加密、關注安全和隱私的電子郵件服務。 Tutanota自* * 2011 年* *開始運營，總部位於德國漢諾威。 免費帳戶有 1GB 儲存空間。
    
    [:octicons-home-16: Homepage](https://tutanota.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tutanota.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://tutanota.com/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/tutao/tutanota){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://tutanota.com/community/){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.tutao.tutanota)
        - [:simple-appstore: App Store](https://apps.apple.com/app/tutanota/id922429609)
        - [:simple-github: GitHub](https://github.com/tutao/tutanota/releases)
        - [:simple-windows11: Windows](https://tutanota.com/#download)
        - [:simple-apple: macOS](https://tutanota.com/#download)
        - [:simple-linux: Linux](https://tutanota.com/#download)
        - [:octicons-browser-16: Web](https://mail.tutanota.com/)

Tutanota 不支援 [ IMAP 協議](https://tutanota.com/faq/#imap) 或使用第三方 [電子郵件客戶端](email-clients.md)，您也無法將 [外部電子郵件帳戶](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) 添加到 Tutanota應用程式。 目前不支援 [電子郵件匯入](https://github.com/tutao/tutanota/issues/630) 與 [子資料夾](https://github.com/tutao/tutanota/issues/927) ，但很快就 [會改善](https://tutanota.com/blog/posts/kickoff-import)。 電子郵件可以單個 [或選擇資料夾批量](https://tutanota.com/howto#generalMail)匯出 ，但若您有許多資料夾，可能會不方便。

#### :material-check:{ .pg-green } Custom Domains and Aliases

付費Tutanota 帳戶可以有5 [別名](https://tutanota.com/faq#alias) 和 [自定網域](https://tutanota.com/faq#custom-domain)。 Tutanota 不能 [子地址（加號 +定址）](https://tutanota.com/faq#plus)，但您可以使用自定義域名的 [通用電于郵件](https://tutanota.com/howto#settings-global)功能 。

#### :material-information-outline:{ .pg-blue } 私人付款方式

Tutanota 僅接受信用卡和 PayPal ，但 [加密貨幣](cryptocurrency.md) 可用於通過其[ 合作伙伴 Proxystore ](https://tutanota.com/faq/#cryptocurrency) 購買禮品卡。

#### :material-check:{ .pg-green } 帳戶安全

Tutanota支援 TOTP 或 U2F 的 [雙因素驗證](https://tutanota.com/faq#2fa) 。

#### :material-check:{ .pg-green } 資料安全

Tutanota 提供 [未登入零存取](https://tutanota.com/faq#what-encrypted) 支援，其應用在電子郵件、 [通訊錄](https://tutanota.com/faq#encrypted-address-book)以及 [行事曆](https://tutanota.com/faq#calendar)。 這意味著儲存在您帳戶中的訊息和其他資料只有您能讀取。

#### :material-information-outline:{ .pg-blue } 電子郵件加密

Tutanota [不使用 OpenPGP ](https://www.tutanota.com/faq/#pgp)。 只能透過 [臨時 Tutanota郵箱](https://www.tutanota.com/howto/#encrypted-email-external)，才能接收非Tutanota電子郵件帳戶寄出的加密電子郵件。

#### :material-information-outline:{ .pg-blue } 帳戶終止

Tutanota [刪除六個月未登入使用的免費帳戶](https://tutanota.com/faq#inactive-accounts) 。 付費後，可以重用激活已停用的免費帳戶。

#### :material-information-outline:{ .pg-blue } 額外功能

Tutanota 向非營利組織提供免費 [商業版本](https://tutanota.com/blog/posts/secure-email-for-non-profit) 或大幅折扣。

Tutanota  付費版還有一種 [Secure Connect](https://tutanota.com/secure-connect/)功能。 這可以確保客戶的業務聯繫使用 E2EE。 價格爲一年 € 240 歐元。

Tutanota不提供數字遺產功能。

## 郵箱別名

電子郵件別名服務可讓您輕鬆地為每次網站註冊生成一個新的電子郵件地址。 您電子郵件別名會自動把郵件轉發到您選擇的電子郵件地址，以隱藏您“主要”電子郵件地址和電子郵件提供商。 真正的電子郵件別名比許多提供商常用和支持的加地址更好，這允許您創建別名，如yourname +[anythinghere]@ example.com ，因為網站，廣告商和跟蹤網絡可以簡單地刪除+符號之後的任何內容，以知道您的真實電子郵件地址。

<div class="grid cards" markdown>

- ![AnonAddy logo](assets/img/email/anonaddy.svg#only-light){ .twemoji }![AnonAddy logo](assets/img/email/anonaddy-dark.svg#only-dark){ .twemoji } [AnonAddy](email.md#anonaddy)
- ![SimpleLogin logo](assets/img/email/simplelogin.svg){ .twemoji } [SimpleLogin](email.md#simplelogin)

</div>

電子郵件別名可以作為一種保護措施，一旦您的電子郵件提供商停止運營。 在這種情況下，您可以輕鬆地將別名重新路由到新的電子郵件地址。 但這也意謂，您把信任轉移到另一家別名服務以繼續享用此功能。

使用專門的電子郵件別名服務比自定網域上的通用別名有許多好處：

- 有需要時，可以單獨開啟和關閉別名，防止網站隨機發送電子郵件給您。
- 從別名地址發送回覆，屏蔽真實電子郵件地址。

與「臨時電子郵件」服務相比，它們還有許多好處：

- 別名是永久性的，如果您需要接收密碼重設等內容，可以再次開啟別名。
- 電子郵件會發送到您信任的郵箱，而不是儲存在別名服務提供者。
- 臨時電子郵件服務通常會有公共郵箱，任何知道地址的人都可以訪問，別名則您所私有的。

我們建議的電子郵件別名供應商，可讓您在他們控制的網域上創建別名，或您支付適度的年費來自定網域。 如果您想要最大限度的控制，也可以自主託管。 但是，使用自定網域可能會有隱私上的缺點：如果您是唯一使用該自定網域的人，只需查看電子郵件地址中的網域名稱並忽略 (@) 符號之前的所有內容，即可輕鬆跟蹤您的動作。

使用別名服務需要信任您的電子郵件提供商和您的別名提供商如何對待您未加密的消息。 有些供應商會透過自動 PGP 加密來稍微減輕這種情況，傳送到最終信箱供應商之前加密所傳送的電子郵件，將您需要信任的各方數量從兩個減少到一個。

### AnonAddy

!!! recommendation

    ! [AnonAddy logo] (assets/img/email/anonaddy.svg#only-light) {align = right}
    ! [AnonAddy標誌] (assets/img/email/anonaddy-dark.svg#only-dark) {align = right}
    
    * * AnonAddy * *可讓您在共享網域上免費創建 20 個網域別名，或無限制的「標準」別名，但後者匿名度低。
    
    [:octicons-home-16: Homepage](https://anonaddy.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://anonaddy.com/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://app.anonaddy.com/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/anonaddy){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://anonaddy.com/donate/){ .card-link title=Contribute }
    
    ??? 下載
    
        - [:simple-android: Android](https://anonaddy.com/faq/#is-there-an-android-app)
        - [:material-apple-ios: iOS](https://anonaddy.com/faq/#is-there-an-ios-app)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-GB/firefox/addon/anonaddy/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/anonaddy-anonymous-email/iadbdpnoknmbdeolbapdackdcogdmjpe)

您可以創建的共享別名數量（以@ anonaddy.me等共享網域結束）在AnonAddy的免費計劃上限制為20個，在$ 12/年計劃上限制為50個。 您可以創建無限的標準別名（以 @[username].anonaddy.com 或付費方案上的自定域名） ，但是如前所述，這可能不利隱私，因為人們可以僅根據域名將您的標準別名綁定在一起。 無限共享別名的價格爲36美元/年。

值得注意的免費功能：

- [x] 20共享別名
- [x] 無限的別名
- [ ] No Outgoing Replies
- [x] 2  個收件人郵箱
- [x] 自動PGP加密

### SimpleLogin

!!! recommendation

    ! [Simplelogin logo] (assets/img/email/simplelogin.svg) {align = right}
    
    * * SimpleLogin * *是一項免費服務，可在各種共享域名上提供電子郵件別名，並可選擇提供無限別名和自訂域名等付費功能。
    
    [:octicons-home-16: Homepage](https://simplelogin.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://simplelogin.io/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://simplelogin.io/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/simple-login){ .card-link title="Source Code" }
    
    ??? 下載
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.simplelogin.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1494359858)
        - [:simple-github: GitHub](https://github.com/simple-login/Simple-Login-Android/releases)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/simplelogin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/simpleloginreceive-sen/diacfpipniklenphgljfkmhinphjlfff)
        - [:simple-safari: Safari](https://apps.apple.com/app/id1494051017)

SimpleLogin 在  2022年4 月 8 日被 [ Proton AG](https://proton.me/news/proton-and-simplelogin-join-forces) 買下。 如果您的主要郵箱使用質子郵件， SimpleLogin是一個不錯的選擇。 由於這兩種產品現在都由同一家公司擁有，您現在只需要信任單一實體。 我們預計 SimpleLogin  未來會與 Proton 產品更緊密地整合。 SimpleLogin 繼續支援轉寄至您所選擇的任何電子郵件供應商。 Securitum [在2022年初審核了](https://simplelogin.io/blog/security-audit/) SimpleLogin ，所有問題 [都已解決](https://simplelogin.io/audit2022/web.pdf)。

您可以在設定中將您的 SimpleLogin 帳戶與 Proton 帳戶連結。 如果您有 Proton Unlimited 、Business 或 Visionary 計劃，也可免費獲得 SimpleLogin Premium。

值得注意的免費功能：

- [x] 10共享別名
- [x] 無限回復
- [x] 1收件人郵箱

## 自主託管電子郵件

進階系統管理員可以考慮設定自己的電子郵件伺服器。 郵件伺服器需要注意和持續維護，以確保安全性和郵件傳遞的可靠性。

### 結合軟體解決方案

!!! recommendation

    ! [Mailcow logo] (assets/img/email/mailcow.svg) {align = right}
    
    * * Mailcow * *是一個更先進的郵件伺服器，非常適合有豐富 Linux 經驗者。 它的 Docke r容器中擁有您需要的一切：支援 DKIM 的郵件伺服器、防毒和垃圾郵件監控、具有SOGo 的 Webmail 和 ActiveSync ，以及具有2FA 支援的網頁管理介面。
    
    [:octicons-home-16: Homepage](https://mailcow.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailcow.github.io/mailcow-dockerized-docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mailcow/mailcow-dockerized){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.servercow.de/mailcow?lang=en#sal){ .card-link title=Contribute }

!!! recommendation

    ! [Mail-in-a-Box logo] (assets/img/email/mail-in-a-box.svg) {align = right}
    
    * * Mail-in-a-Box * *是部署 Ubuntu 郵件伺服器的自動設置腳本。 它的目標是讓人們更容易建立自己的郵件伺服器。
    
    [:octicons-home-16: Homepage](https://mailinabox.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailinabox.email/guide.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mail-in-a-box/mailinabox){ .card-link title="Source Code" }

為了更清楚手動設定方法，我們挑選了這兩篇文章：

- [Setting up a mail server with OpenSMTPD, Dovecot and Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
- [How To Run Your Own Mail Server](https://www.c0ffee.net/blog/mail-server-guide/) (August 2017)

## 標準

**請注意，我們與以下推薦的任何供應商並無瓜葛。** 除了 [我們的條件標準](about/criteria.md)外，我們還為任何希望獲得推薦的電子郵件供應商制定了一套明確要求，包括實施業界最佳做法，現代技術等。 我們建議您在選擇電子郵件提供商之前熟悉此列表，並進行自己的研究，以確保您選擇的電子郵件提供商是您的正確選擇。

### 技術

我們認為這些功能很重要，以便提供安全和最佳的服務。 您應該考慮提供商是否具有您需要的功能。

**最低合格要求：**

- 使用零存取加密技術全程加密電子郵件帳戶資料。
- 匯出功能為 [Mbox](https://en.wikipedia.org/wiki/Mbox) 或滙出符合 [RFC5322](https://datatracker.ietf.org/doc/rfc5322/) 標準的個人.eml 格式。
- 允許使用者使用自己的 [網域名稱](https://en.wikipedia.org/wiki/Domain_name)。 自定網域名稱對用戶來說很重要，因為它允許用戶在使用服務時仍維持持自我代理，以防服務變差或被另一家不優先考慮隱私的公司收購。
- 在自有基礎設施上運作，即不建立在第三方電子郵件服務提供商之上。

**最佳案例：**

- 使用零存取加密對所有帳戶資料（通訊錄、行事曆等）進行加密。
- 網頁郵件整合 E2EE/PGP加密以更方便使用。
- 支援 [WKD](https://wiki.gnupg.org/WKD) ，以改善透過HTTP發現公開的OpenPGP金鑰。 GnuPG 使用者可以透過輸入： `gpg --locate-key example_user@example.com` 取得金鑰。
- 支援外部使用者的臨時信箱。 當您想要發送加密的電子郵件時，這非常有用，而無需將實際副本發送給您的收件人。 這些電子郵件通常具有限定時效，之後會被自動刪除。 它們也不需要收件人配置任何像OpenPGP這樣的加密技術。
- 可提供 [onion 服務](https://en.wikipedia.org/wiki/.onion)的電子郵件服務供應商。
- [Subaddressing](https://en.wikipedia.org/wiki/Email_address#Subaddressing) 支持.
- 為擁有自己網域的用戶提供通用地址或別名功能。
- 使用標準電子郵件存取協定，例如 IMAP、SMTP 或 [ JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol)。 標準存取協議確保客戶可以輕鬆下載所有電子郵件，一旦他們想切換到其它提供商。

### 隱私

我們希望所推薦的提供商盡可能少地收集客戶資料。

**最低合格要求：**

- 保護發件人的IP位址。 在 `Received` 標題欄位中過濾它。
- 除了使用者名稱和密碼外，不要求提供個人身份識別資訊(PII)。
- 符合 GDPR 的隱私政策
- 主機機房不要放在美國，因為 [ECPA](https://en.wikipedia.org/wiki/Electronic_Communications_Privacy_Act#Criticism)  [尚未改革](https://epic.org/ecpa/)。

**最佳案例：**

- 接受 [匿名付款選項](advanced/payments.md) （[加密貨幣](cryptocurrency.md)，現金，禮品卡等）

### 安全

電子郵件伺服器處理大量非常敏感的資料。 我們期望供應商採用行業最佳實踐來保護其會員。

**最低合格要求：**

- 使用 2FA 保護網頁郵件，如TOTP。
- 無存取的靜態加密，如零存取加密。 提供者沒有其所持有資料的解密金鑰。 這可以防止流氓員工外洩所存取的資料或遠程對手通過獲得對伺服器的未經授權的訪問來竊取資料。
- [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) 支持。
- 使用 [Hardenize](https://www.hardenize.com/)、 [testssl.sh ](https://testssl.sh/)或 [ Qualys SSL Labs ](https://www.ssllabs.com/ssltest)等工具進行剖繪時，沒有TLS 錯誤或漏洞；這包括與憑證相關的錯誤和弱 DH參數，例如導致 [ Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)) 的錯誤。
- 伺服器套件偏好（在TLS v1.3上可選），適用於支持正向保密和已驗證加密的強大密碼套件。
- 有效的 [MTA-STS](https://tools.ietf.org/html/rfc8461) 和[TLS-RPT](https://tools.ietf.org/html/rfc8460) 政策。
- 有效 [ DANE ](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) 紀錄。
- 有效的 [SPF ](https://en.wikipedia.org/wiki/Sender_Policy_Framework) 和 [ DKIM ](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) 記錄。
- 擁有適當的 [DMARC ](https://en.wikipedia.org/wiki/DMARC) 記錄和原則，或使用 [ ARC ](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) 進行驗證。 如果正在使用 DMARC 驗證，則必須將原則設置為 `拒絕` 或 `隔離`。
- 伺服器套件最好為 TLS 1.2或更高版本以及 [ RFC8996](https://datatracker.ietf.org/doc/rfc8996/)計劃。
- 假設使用SMTP，[SMTPS](https://en.wikipedia.org/wiki/SMTPS) 提交。
- 網站安全標準，例如：
    - [HTTP 嚴格傳輸安全性](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
    - 如果從外部網域加載東西時，[子資源完整性](https://en.wikipedia.org/wiki/Subresource_Integrity) 。
- 必須支援檢視 [訊息表頭](https://en.wikipedia.org/wiki/Email#Message_header)，因為它是確定電子郵件是否為網路釣魚嘗試的關鍵取證功能。

**最佳案例：**

- 支持硬體驗證，即 U2F 和 [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn)。 U2F 和 WebAuthn 更安全，因為它們使用儲存於客戶端硬體設備上的私鑰來驗證人員，而使用 TOTP 時共享祕密則直接儲存在網頁伺服器和客戶端。 再者 U2F 和 WebAuthn 更能抵抗網絡釣魚，因為它們的驗證回應是基於已驗證過的 [域名](https://en.wikipedia.org/wiki/Domain_name)。
- [DNS憑證授權機構授權(CAA)資源記錄](https://tools.ietf.org/html/rfc6844) 除了DANE支持。
- 實現 [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain)，這對於發佈郵件列表 [RFC8617](https://tools.ietf.org/html/rfc8617)非常有用。
- 漏洞獎勵計劃和/或協調漏洞披露過程。
- 網站安全標準，例如：
    - [內容安全策略(CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
    - [RFC9163 Expect-CT](https://datatracker.ietf.org/doc/rfc9163/)

### 信任

您不會把財務資料給身份作假的人，那麼為什麼會信任讓他們來使用您的電子郵件？ 我們要求我們推薦的供應商公開其所有權或領導層級狀況。 我們也希望看到頻繁的透明度報告，特別是關於如何處理政府要求的報告。

**最低合格要求：**

- 面向公眾的領導或所有權。

**最佳案例：**

- 面向公眾的領導
- 頻繁的透明度報告。

### 行銷

對於所推薦的電子郵件供應商，我們樂見其負責任的營銷。

**最低合格要求：**

- 必須自主託管資料分析（沒有Google Analytics、Adobe Analytics等）。 對於那些希望選擇退出者，供應商的網站還必須符合 [DNT （請勿追蹤）](https://en.wikipedia.org/wiki/Do_Not_Track) 。

不得有任何不負責任的行銷：

- 宣稱破解不了的加密 使用加密時應意識到，當有一天技術足以破解它時，它就不再是祕密的。
- 保證 100% 匿名性保護。 當有人聲稱某件事是100 ％時，這意味著失敗沒有確定性。 我們知道人們可以很容易地以多種方式去匿名化自己，例如：

- 用戶在無使用匿名軟件( Tor ， VPN等）時訪問留下個人資料（電子郵件帳戶、獨特的假名等）被一再使用，
- [瀏覽器指紋](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**最佳案例：**

- 清晰易讀的文件。 這包括諸如設置 2FA 、電子郵件客戶端、OpenPGP等。

### 附加功能

雖然不是嚴格要求，但我們在決定推薦哪些提供商時還會考慮其他一些便利或隱私因素。
