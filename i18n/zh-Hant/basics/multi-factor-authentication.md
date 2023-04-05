---
title: "多重身分驗證"
icon: 'material/two-factor-authentication'
description: MFA是保護您線上帳戶的關鍵安全機制，但有些方法比其他方法更強大。
---

**多因素認證**（**MFA**）是一種安全機制，除了輸入用戶名（或電子郵件）和密碼之外，還需要其他步驟。 最常見的方法是您會從簡訊或應用程式收到的有時間限制的代碼。

通常情況下，如果駭客（或任何想要盜取您帳號的人）能夠找出您的密碼，那麼他們將獲得密碼屬於的帳戶的存取權。 MFA 的帳戶迫使駭客同時擁有密碼（您 *知道*的東西）和您擁有的設備（您 *擁有*的東西），例如您的手機。

不同 MFA 方式的安全性各不相同，但整體來說，讓攻擊者越難訪問您的 MFA 方法越好。 MFA 方式（從最弱到最強）的例子包括簡訊，電子郵件代碼，應用推送通知， TOTP ， Yubico OTP 和 FIDO。

## MFA 方式的比較

### 簡訊或 Email 多重身分驗證

透過簡訊或電子郵件接收 OTP 代碼是透過 MFA 保護帳戶安全的最弱方法之一。 通過電子郵件或簡訊接收驗證碼動搖了*"持有安心*”的概念，因為駭客根本不需要實際拿到您的設備，就可透過多種方式 [接管電話號碼](https://en.wikipedia.org/wiki/SIM_swap_scam) 或讀取電子郵件。 如果未經授權的人獲得了您的電子郵件訪問權限，他們將能夠使用該訪問權限重設您的密碼並收到驗證碼，使他們能夠完全訪問您的帳戶。

### 推送通知

推送通知多重身份認證的形式是將訊息發送到手機上的應用程式，要求您確認新的帳戶登入。 這種方法比短信或電子郵件要好得多，因為攻擊者通常無法在沒有已經登錄的設備的情況下獲得這些推送通知，這意味著他們需要首先破壞您的其他設備之一。

我們都會犯錯誤，您可能不小心接受登錄嘗試。 推送通知登入授權通常一次發送到 *所有* 您的設備，如果您有多個設備，則可擴大 MFA 代碼的可用性。

推送通知 MFA 的安全性取決於應用程序的品質，伺服器組件以及生成它的開發人員的信任。 安裝應用程式可能會要求授予對裝置上其他資料存取的侵入性權限。 不同於好的TOTP 生成器，個別應用程式還要求特定的應用程序，甚至不需要密碼就可開啟服務。

### 暫時性的一次性密碼 (TOTP)

TOTP 是最常見的 MFA 形式之一。 當您設置TOTP時，您通常需要掃描 [QR Code](https://en.wikipedia.org/wiki/QR_code) ，該掃描與您打算使用的服務建立“[共享祕密](https://en.wikipedia.org/wiki/Shared_secret)”。 共用祕密在驗證器應用程式的數據中受到保護，有時會受到密碼的保護。

然後，時間限制代碼從共享機密和當前時間衍生出來。 由於代碼僅在短時間內有效，無法訪問共享機密，因此對手無法生成新代碼。

如果您擁有支援 TOTP 的硬體安全金鑰（例如具有 [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)的YubiKey ） ，我們建議您將「共享機密」儲存在硬體上。 像 YubiKey 這類硬體就是為了讓“共享祕密”難以提取、複製而開發的工具。 YubiKey 也不會連接到網際網路，不像使用 TOTP 應用程式的手機。

與 [WebAuthn](#fido-fast-identity-online)不同， TOTP 無法應對 [網絡釣魚](https://en.wikipedia.org/wiki/Phishing) 或重複使用攻擊。 如果對手從您身上取得有效的登錄碼，他們可以隨意多次使用它，直到過期（通常是60秒）。

對手可以建立一個網站來模仿官方服務，試圖欺騙你提供你的用戶名，密碼和當前的 TOTP 代碼。 如果對手使用這些記錄的憑證，他們可能能夠登錄到真正的服務並劫持帳戶。

雖然不完美，但 TOTP 對大多數人來說足夠安全，當 [硬件安全金鑰](../multi-factor-authentication.md#hardware-security-keys) 不受支持時， [驗證器應用程序](../multi-factor-authentication.md#authenticator-apps) 仍然是一個不錯的選擇。

### 硬體安全金鑰

YubiKey 將資料存在防纂改的強固晶片， 除非運用先進實驗室等級的取證程序，一般非破壞方式[很難存取](https://security.stackexchange.com/a/245772) 。

這些金鑰通常具多重功能，並提供了許多驗證方法。 下面是最常見的。

#### Yubico OTP

Yubico OTP 的驗證協議通常是執行在硬體安全金鑰上。 當決定使用 Yubico OTP 時，該密鑰將產生公用 ID ，私有 ID 和祕密密鑰，然後密鑰日上傳到 Yubico OTP 伺服器。

在登入網站時，需要做的就是實際觸摸安全金鑰。 安全金鑰將模擬鍵盤並將一次性密碼列印到密碼欄位中。

它會將一次性密碼轉發到 Yubico OTP 伺服器進行驗證。 在密鑰和 Yubico 驗證伺服器上的計數器都會迭加。 OTP 只能使用一次，當成功驗證後，計數器會增加，以防止重複使用 OTP。 Yubico 提供了此過程的 [詳細文件](https://developers.yubico.com/OTP/OTPs_Explained.html) 。

<figure markdown>
  ![Yubico OTP](../assets/img/multi-factor-authentication/yubico-otp.png)
</figure>

與 TOTP 相比，使用Yubico OTP 有一些優缺點。

Yubico 驗證伺服器是雲端服務，您把信任託付給  Yubico 相信他們會安全地儲存資料而不會拿來分析您。 與 Yubico OTP 相關聯的公共 ID 可在每個網站上重複使用，並可能讓第三方可對您進行個人剖繪。 與TOTP 一樣， Yubico OTP 無法對抗網路釣魚。

若您的威脅模型要求在不同網站使用不同身份， **請不要** 在這些網站中使用同一個硬體安全密鑰 Yubico OTP ，因為每個安全密鑰都有相同的公共 ID。

#### FIDO （ 快速線上身份驗證）

[FIDO ](https://en.wikipedia.org/wiki/FIDO_Alliance) 包含許多標準，首先是U2F ，然後是 [FIDO2](https://en.wikipedia.org/wiki/FIDO2_Project) ，其中包括 Web 標準 [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn)。

U2F 和 FIDO2 指的是 [Client to Authenticator Protocol](https://en.wikipedia.org/wiki/Client_to_Authenticator_Protocol)，這是安全金鑰和電腦之間的協議，例如筆記本電腦或手機。 它補充了 WebAuthn ， WebAuthn 為驗證網站登錄（ “依賴方” ）之組件。

WebAuthn是最安全、最私密的第二要素驗證形式。 雖然驗證體驗與 Yubico OTP 類似，但密鑰不會打印出一次性密碼也不會使用第三方伺服器進行驗證。 相反，它使用 [公鑰加密](https://en.wikipedia.org/wiki/Public-key_cryptography) 進行驗證。

<figure markdown>
  ![FIDO](../assets/img/multi-factor-authentication/fido.png)
</figure>

當您創建一個帳戶時，公鑰會發送到服務，然後當您登錄時，服務會要求您使用您的私鑰“簽署”一些數據。 這樣做的好處是，服務不會儲存密碼資料，因此對手無從竊取任何東西。

這份簡報探討了密碼驗證的歷史，陷阱（如密碼重用）以及FIDO2 和 [WebAuthn](https://webauthn.guide) 標準等課題。

<div class="yt-embed">
  <iframe width="560" height="315" src="https://invidious.privacyguides.net/embed/aMo4ZlWznao?local=true" title="FIDO2 和 WebAuthn 如何防止帳戶接管" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

相較於其它 MFA方法， FIDO2 和 WebAuthn 具有卓越的安全和隱私特點。

通Web服務通常與 WebAuthn 一起使用， 這是來自 [W3C 的建議](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#W3C_recommendation_(REC))。 它使用公鑰驗證，並且比在 Yubico OTP 和 TOTP 使用的共享機密更安全，因為它在驗證期間包括原始名稱（通常是域名）。 提供證明以保護您免受網路釣魚攻擊，以幫助您確定使用真實服務而不是假網站服務。

與 Yubico OTP不同，WebAuthn不使用任何公共ID ，因此密鑰 **無法** 被不同網站識別。 它也不使用任何第三方雲端伺服器進行驗證。 所有通訊都已在密鑰和所登入的網站之間完成。 FIDO 還使用計數器，該計數器在使用時會增加，以防止期間重用和克隆密鑰。

如果網站或服務支援 WebAuthn 驗證，強烈建議您使用它而不是其他形式的 MFA。

## 一般性建議

我們有這些一般性建議：

### 我應該選擇哪種方法？

設置MFA 方法時，請記住，它的安全程度與您使用的最弱的身份驗證方法一樣。 這意味著您只需使用的最佳MFA方法。 例如，如果您已經使用TOTP ，您應該禁用電子郵件和SMS MFA。 如果您已經使用 FIDO2/WebAuthn ，則不應該在您的帳戶上使用 Yubico OTP 或TOTP。

### 備份

您應該始終備份您的 MFA 方法。 硬體安全金鑰可能會丟失、被盜或隨著時間的推移而停止運作。 建議您擁有一對具有相同帳戶存取權限的硬體安全金鑰，而不僅僅是一個。

當與驗證器應用程式一起使用TOTP時，請務必備份您的恢復密鑰或應用程式本身，或將「共享機密」複製到不同手機上的應用程式的另一個實例或加密容器（例如 [VeraCrypt](../encryption.md#veracrypt)）。

### 初始設定

購買安全金鑰時，請務必變更預設憑證、為金鑰設定密碼保護，並在金鑰支援時啟用觸控確認。 YubiKey 等產品有多重介面，各有其獨立憑證，因此您應該仔細查看每個介面並設置保護。

### 電子郵件和簡訊

如果您必須使用電子郵件進行MFA ，請確保電子郵件帳戶本身具有適當的 MFA 方法。

如果您使用簡訊 MFA ，請選擇不會進行未授權的號碼切換的營營商，或使用具有類似安全性的專用VoIP 號碼，以避免 [SIM 交換攻擊](https://en.wikipedia.org/wiki/SIM_swap_scam)。

[我們推薦的 MFA 工具](../multi-factor-authentication.md ""){.md-button}

## 更多設定MFA的地方

除了保護您的網站登錄外，多因素身份驗證還可用於保護您的本地設備的登錄、 SSH 密鑰甚至密碼資料庫。

### Windows

Yubico 有專門的 [憑證提供者](https://docs.microsoft.com/en-us/windows/win32/secauthn/credential-providers-in-windows) ，為本地 Windows 帳戶在登錄流程添加了Challenge-Response 驗證。 如果您擁有具 Challenge-Response 驗證支援的 YubiKey ，請查看 [Yubico Login for Windows Configuration Guide](https://support.yubico.com/hc/en-us/articles/360013708460-Yubico-Login-for-Windows-Configuration-Guide)，該指南將協助您在 Windows 電腦上設置MFA。

### macOS

macOS 具有 [原生支援](https://support.apple.com/guide/deployment/intro-to-smart-card-integration-depd0b888248/web) 用於使用智慧卡(PIV)進行驗證。 如果您有支援 PIV 介面的智慧卡或硬體安全金鑰(例如 YubiKey) ，建議您遵循智慧卡/硬體安全供應商的文件，為您的macOS 電腦設定第二要素驗證。

Yubico 指南 [在macOS](https://support.yubico.com/hc/en-us/articles/360016649059) 中使用 YubiKey 作為智慧卡，可幫助您在 macOS 設置 YubiKey。

設定智慧卡/安全金鑰後，我們建議您在終端機中執行此命令：

```text
sudo defaults write /Library/Preferences/com.apple.loginwindow DisableFDEAutoLogin -bool YES
```

該指令會防止對手在電腦啟動時繞過 MFA。

### Linux

!!! 警告

    如果系統主機名稱發生變更（例如由於 DHCP ） ，您將無法登入。 在遵循本指南之前，為您的電腦設置正確的主機名至關重要。

Linux 上的 `pam_u2f` 模組可以提供雙因素驗證，以便在最流行的 Linux 發行版上登錄。 如果您有支援 U2F 的硬體安全金鑰，可以為您的登入設定 MFA 驗證。 Yubico有一個 [Ubuntu Linux 登錄指南- U2F](https://support.yubico.com/hc/en-us/articles/360016649099-Ubuntu-Linux-Login-Guide-U2F) ，應該適用於任何發行版。 軟體包管理器指令（例如 `apt-get`）和軟體包名稱可能不同。 本指南 **不適用於**  Qubes OS.

### Qubes OS

Qubes OS 支援 YubiKeys 進行 Challenge-Response 驗證。 如果您擁有具 Challenge-Response 驗證支援的 YubiKey ，請查看 Qubes OS [YubiKey 文檔](https://www.qubes-os.org/doc/yubikey/) ，以在Qubes OS 設置 MFA。

### SSH

#### 硬件安全金鑰

SSH MFA 可以使用多種不同的身份驗證方法進行設置，這些方法在硬體安全金鑰中很受歡迎。 建議您查看 Yubico  [文件檔](https://developers.yubico.com/SSH/) ，了解如何設置此功能。

#### 暫時性的一次性密碼 (TOTP)

SSH MFA 也可以使用 TOTP 設定。 DigitalOcean 提供教學 [如何在 Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-factor-authentication-for-ssh-on-ubuntu-20-04) 為 SSH 設置多因素身份驗證。 無論是哪一個發行版本，大多數操作方式都相同，但是軟體包管理器命令-例如 `apt-get`-和軟體包名稱可能不同。

### KeePass （和KeePassXC ）

KeePass 和 KeePassXC 資料庫可以使用 Challenge-Response 或 HOTP 作為第二要素驗證進行密碼保護。 Yubico 提供了一份 KeePass [Using Your YubiKey with KeePass](https://support.yubico.com/hc/en-us/articles/360013779759-Using-Your-YubiKey-with-KeePass) 文件， [KeePassXC](https://keepassxc.org/docs/#faq-yubikey-2fa) 網站上也有一份。
