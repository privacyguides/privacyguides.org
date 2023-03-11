---
title: "多重身分驗證"
icon: 'material/two-factor-authentication'
description: MFA is a critical security mechanism for securing your online accounts, but some methods are stronger than others.
---

**多因素認證**（**MFA**）是一種安全機制，除了輸入用戶名（或電子郵件）和密碼之外，還需要其他步驟。 最常見的方法是您會從簡訊或應用程式收到的有時間限制的代碼。

通常情況下，如果駭客（或任何想要盜取您帳號的人）能夠找出您的密碼，那麼他們將獲得密碼屬於的帳戶的存取權。 MFA 的帳戶迫使駭客同時擁有密碼（您 *知道*的東西）和您擁有的設備（您 *擁有*的東西），例如您的手機。

不同 MFA 方式的安全性各不相同，但整體來說，讓攻擊者越難訪問您的 MFA 方法越好。 MFA 方式（從最弱到最強）的例子包括簡訊，電子郵件代碼，應用推送通知， TOTP ， Yubico OTP 和 FIDO。

## MFA 方式的比較

### 簡訊或 Email 多重身分驗證

透過簡訊或電子郵件接收 OTP 代碼是透過 MFA 保護帳戶安全的最弱方法之一。 Obtaining a code by email or SMS takes away from the "something you *have*" idea, because there are a variety of ways a hacker could [take over your phone number](https://en.wikipedia.org/wiki/SIM_swap_scam) or gain access to your email without having physical access to any of your devices at all. 如果未經授權的人獲得了您的電子郵件訪問權限，他們將能夠使用該訪問權限重設您的密碼並收到驗證碼，使他們能夠完全訪問您的帳戶。

### 推送通知

推送通知多重身份認證的形式是將訊息發送到手機上的應用程式，要求您確認新的帳戶登入。 這種方法比短信或電子郵件要好得多，因為攻擊者通常無法在沒有已經登錄的設備的情況下獲得這些推送通知，這意味著他們需要首先破壞您的其他設備之一。

We all make mistakes, and there is the risk that you might accept the login attempt by accident. 推送通知登入授權通常一次發送到 *所有* 您的設備，如果您有多個設備，則可擴大 MFA 代碼的可用性。

推送通知 MFA 的安全性取決於應用程序的品質，伺服器組件以及生成它的開發人員的信任。 Installing an app may also require you to accept invasive privileges that grant access to other data on your device. An individual app also requires that you have a specific app for each service which may not require a password to open, unlike a good TOTP generator app.

### 暫時性的一次性密碼 (TOTP)

TOTP 是最常見的 MFA 形式之一。 當您設置TOTP時，您通常需要掃描 [QR Code](https://en.wikipedia.org/wiki/QR_code) ，該掃描與您打算使用的服務建立“[共享祕密](https://en.wikipedia.org/wiki/Shared_secret)”。 共用祕密在驗證器應用程式的數據中受到保護，有時會受到密碼的保護。

然後，時間限制代碼從共享機密和當前時間衍生出來。 由於代碼僅在短時間內有效，無法訪問共享機密，因此對手無法生成新代碼。

If you have a hardware security key with TOTP support (such as a YubiKey with [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)), we recommend that you store your "shared secrets" on the hardware. Hardware such as the YubiKey was developed with the intention of making the "shared secret" difficult to extract and copy. A YubiKey is also not connected to the Internet, unlike a phone with a TOTP app.

Unlike [WebAuthn](#fido-fast-identity-online), TOTP offers no protection against [phishing](https://en.wikipedia.org/wiki/Phishing) or reuse attacks. If an adversary obtains a valid code from you, they may use it as many times as they like until it expires (generally 60 seconds).

對手可以建立一個網站來模仿官方服務，試圖欺騙你提供你的用戶名，密碼和當前的 TOTP 代碼。 如果對手使用這些記錄的憑證，他們可能能夠登錄到真正的服務並劫持帳戶。

雖然不完美，但 TOTP 對大多數人來說足夠安全，當 [硬件安全金鑰](../multi-factor-authentication.md#hardware-security-keys) 不受支持時， [驗證器應用程序](../multi-factor-authentication.md#authenticator-apps) 仍然是一個不錯的選擇。

### 硬體安全金鑰

The YubiKey stores data on a tamper-resistant solid-state chip which is [impossible to access](https://security.stackexchange.com/a/245772) non-destructively without an expensive process and a forensics laboratory.

These keys are generally multi-function and provide a number of methods to authenticate. Below are the most common ones.

#### Yubico OTP

Yubico OTP is an authentication protocol typically implemented in hardware security keys. When you decide to use Yubico OTP, the key will generate a public ID, private ID, and a Secret Key which is then uploaded to the Yubico OTP server.

When logging into a website, all you need to do is to physically touch the security key. The security key will emulate a keyboard and print out a one-time password into the password field.

The service will then forward the one-time password to the Yubico OTP server for validation. A counter is incremented both on the key and Yubico's validation server. The OTP can only be used once, and when a successful authentication occurs, the counter is increased which prevents reuse of the OTP. Yubico provides a [detailed document](https://developers.yubico.com/OTP/OTPs_Explained.html) about the process.

<figure markdown>
  ![Yubico OTP](../assets/img/multi-factor-authentication/yubico-otp.png)
</figure>

There are some benefits and disadvantages to using Yubico OTP when compared to TOTP.

The Yubico validation server is a cloud based service, and you're placing trust in Yubico that they are storing data securely and not profiling you. The public ID associated with Yubico OTP is reused on every website and could be another avenue for third-parties to profile you. Like TOTP, Yubico OTP does not provide phishing resistance.

If your threat model requires you to have different identities on different websites, **do not** use Yubico OTP with the same hardware security key across those websites as public ID is unique to each security key.

#### FIDO (Fast IDentity Online)

[FIDO](https://en.wikipedia.org/wiki/FIDO_Alliance) includes a number of standards, first there was U2F and then later [FIDO2](https://en.wikipedia.org/wiki/FIDO2_Project) which includes the web standard [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn).

U2F and FIDO2 refer to the [Client to Authenticator Protocol](https://en.wikipedia.org/wiki/Client_to_Authenticator_Protocol), which is the protocol between the security key and the computer, such as a laptop or phone. It complements WebAuthn which is the component used to authenticate with the website (the "Relying Party") you're trying to log in on.

WebAuthn is the most secure and private form of second factor authentication. While the authentication experience is similar to Yubico OTP, the key does not print out a one-time password and validate with a third-party server. Instead, it uses [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) for authentication.

<figure markdown>
  ![FIDO](../assets/img/multi-factor-authentication/fido.png)
</figure>

When you create an account, the public key is sent to the service, then when you log in, the service will require you to "sign" some data with your private key. The benefit of this is that no password data is ever stored by the service, so there is nothing for an adversary to steal.

This presentation discusses the history of password authentication, the pitfalls (such as password reuse), and discussion of FIDO2 and [WebAuthn](https://webauthn.guide) standards.

<div class="yt-embed">
  <iframe width="560" height="315" src="https://invidious.privacyguides.net/embed/aMo4ZlWznao?local=true" title="How FIDO2 and WebAuthn Stop Account Takeovers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

FIDO2 and WebAuthn have superior security and privacy properties when compared to any MFA methods.

Typically for web services it is used with WebAuthn which is a part of the [W3C recommendations](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#W3C_recommendation_(REC)). It uses public key authentication and is more secure than shared secrets used in Yubico OTP and TOTP methods, as it includes the origin name (usually, the domain name) during authentication. Attestation is provided to protect you from phishing attacks, as it helps you to determine that you are using the authentic service and not a fake copy.

Unlike Yubico OTP, WebAuthn does not use any public ID, so the key is **not** identifiable across different websites. It also does not use any third-party cloud server for authentication. All communication is completed between the key and the website you are logging into. FIDO also uses a counter which is incremented upon use in order to prevent session reuse and cloned keys.

If a website or service supports WebAuthn for the authentication, it is highly recommended that you use it over any other form of MFA.

## 一般性建議

我們有這些一般性建議：

### 我應該選擇哪種方法？

When configuring your MFA method, keep in mind that it is only as secure as your weakest authentication method you use. This means it is important that you only use the best MFA method available. For instance, if you are already using TOTP, you should disable email and SMS MFA. If you are already using FIDO2/WebAuthn, you should not be using Yubico OTP or TOTP on your account.

### 備份

您應該始終備份您的 MFA 方法。 硬體安全金鑰可能會丟失、被盜或隨著時間的推移而停止運作。 建議您擁有一對具有相同帳戶存取權限的硬體安全金鑰，而不僅僅是一個。

當與驗證器應用程式一起使用TOTP時，請務必備份您的恢復密鑰或應用程式本身，或將「共享機密」複製到不同手機上的應用程式的另一個實例或加密容器（例如 [VeraCrypt](../encryption.md#veracrypt)）。

### Initial Set Up

When buying a security key, it is important that you change the default credentials, set up password protection for the key, and enable touch confirmation if your key supports it. Products such as the YubiKey have multiple interfaces with separate credentials for each one of them, so you should go over each interface and set up protection as well.

### Email and SMS

If you have to use email for MFA, make sure that the email account itself is secured with a proper MFA method.

If you use SMS MFA, use a carrier who will not switch your phone number to a new SIM card without account access, or use a dedicated VoIP number from a provider with similar security to avoid a [SIM swap attack](https://en.wikipedia.org/wiki/SIM_swap_scam).

[MFA tools we recommend](../multi-factor-authentication.md ""){.md-button}

## More Places to Set Up MFA

Beyond just securing your website logins, multi-factor authentication can be used to secure your local logins, SSH keys or even password databases as well.

### Windows

Yubico has a dedicated [Credential Provider](https://docs.microsoft.com/en-us/windows/win32/secauthn/credential-providers-in-windows) that adds Challenge-Response authentication for the username + password login flow for local Windows accounts. If you have a YubiKey with Challenge-Response authentication support, take a look at the [Yubico Login for Windows Configuration Guide](https://support.yubico.com/hc/en-us/articles/360013708460-Yubico-Login-for-Windows-Configuration-Guide), which will allow you to set up MFA on your Windows computer.

### macOS

macOS 具有 [原生支援](https://support.apple.com/guide/deployment/intro-to-smart-card-integration-depd0b888248/web) 用於使用智慧卡(PIV)進行驗證。 If you have a smartcard or a hardware security key that supports the PIV interface such as the YubiKey, we recommend that you follow your smartcard/hardware security vendor's documentation and set up second factor authentication for your macOS computer.

Yubico have a guide [Using Your YubiKey as a Smart Card in macOS](https://support.yubico.com/hc/en-us/articles/360016649059) which can help you set up your YubiKey on macOS.

設定智慧卡/安全金鑰後，我們建議您在終端機中執行此命令：

```text
sudo defaults write /Library/Preferences/com.apple.loginwindow DisableFDEAutoLogin -bool YES
```

The command will prevent an adversary from bypassing MFA when the computer boots.

### Linux

!!! warning

    If the hostname of your system changes (such as due to DHCP), you would be unable to login. It is vital that you set up a proper hostname for your computer before following this guide.

The `pam_u2f` module on Linux can provide two-factor authentication for logging in on most popular Linux distributions. If you have a hardware security key that supports U2F, you can set up MFA authentication for your login. Yubico has a guide [Ubuntu Linux Login Guide - U2F](https://support.yubico.com/hc/en-us/articles/360016649099-Ubuntu-Linux-Login-Guide-U2F) which should work on any distribution. The package manager commands—such as `apt-get`—and package names may however differ. This guide does **not** apply to Qubes OS.

### Qubes OS

Qubes OS has support for Challenge-Response authentication with YubiKeys. If you have a YubiKey with Challenge-Response authentication support, take a look at the Qubes OS [YubiKey documentation](https://www.qubes-os.org/doc/yubikey/) if you want to set up MFA on Qubes OS.

### SSH

#### Hardware Security Keys

SSH MFA could be set up using multiple different authentication methods that are popular with hardware security keys. We recommend that you check out Yubico's [documentation](https://developers.yubico.com/SSH/) on how to set this up.

#### 暫時性的一次性密碼 (TOTP)

SSH MFA can also be set up using TOTP. DigitalOcean has provided a tutorial [How To Set Up Multi-Factor Authentication for SSH on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-factor-authentication-for-ssh-on-ubuntu-20-04). Most things should be the same regardless of distribution, however the package manager commands—such as `apt-get`—and package names may differ.

### KeePass (and KeePassXC)

KeePass and KeePassXC databases can be secured using Challenge-Response or HOTP as a second-factor authentication. Yubico has provided a document for KeePass [Using Your YubiKey with KeePass](https://support.yubico.com/hc/en-us/articles/360013779759-Using-Your-YubiKey-with-KeePass) and there is also one on the [KeePassXC](https://keepassxc.org/docs/#faq-yubikey-2fa) website.
