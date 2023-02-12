---
title: "多因认证"
icon: '资料/双因认证'
---

**多因素认证** 是一种安全机制，除了输入用户名（或电子邮件）和密码外，还需要其他步骤。 最常见的方法可能是你需要从短信或应用程序中收到限时代码。

通常，如果黑客（或对手）能够找出您的密码，那么他们就能够访问密码所属的帐户。 有MFA的账户迫使黑客同时拥有密码（你 *知道*的东西）和你的设备（你 *拥有*的东西），比如你的手机。

MFA方法的安全性各不相同，但都是基于同样的前提：攻击者越是难以攻破的MFA方法，就越好。 举例说来，MFA方法（按由弱到强的顺序）包括短信、电子邮件代码、应用程序推送通知、TOTP、Yubico OTP和FIDO。

## MFA方法的比较

### 短信或电子邮件MFA

通过短信或电子邮件接收OTP代码这种MFA方法保护帐户的力度比较弱。 通过电子邮件或短信获取代码会破坏掉“你 *拥有*”这个理念， 因为黑客可以通过各种方式 [接管您的电话号码](https://en.wikipedia.org/wiki/SIM_swap_scam) 或者获得您的电子邮件访问权限，而根本不需要实际访问您的设备。 如果一个未经授权的人得以进入你的电子邮箱，他们将能够重设你的密码并且获得验证码，这会让他们完全掌控你的账户。

### 推送通知

推送通知进行MFA的形式是向你手机上的应用程序发送一条信息，要求你确认新账户的登录。 这种方法比短信或电子邮件好得多，因为如果没有已经登录的设备，攻击者通常无法获得这些推送通知，这意味着他们需要先攻破你的其他设备之一。

我们都会犯错，您有可能会不小心地接受登录尝试。 推送通知登录授权通常一次发送至您 *所有* 的设备，如果您有许多设备，会扩大MFA代码的可用性。

推送通知MFA的安全性既取决于应用程序的质量，也取决于服务组件以及你有多信任该应用程序的开发者。 安装这样一个应用程序可能也会要求你授予侵入性的权限，比如允许访问你设备上的其他数据。 不同于好的TOTP生成器应用程序，个别应用程序还需要你为每项服务准备一个特定的应用程序，而且可能不需要密码就可以打开。

### 基于时间的一次性密码（TOTP）。

TOTP是目前最常见的MFA形式之一。 当你设置TOTP时，一般要求你扫描一个 [二维码](https://en.wikipedia.org/wiki/QR_code) ，与你打算使用的服务建立一个"[共享密钥](https://en.wikipedia.org/wiki/Shared_secret)" 。 共享密钥在身份验证器应用程序的数据中得到保护，有时还会受到密码保护。

然后，时限代码可以由共享密钥和当前时间派生。 由于代码只在很短的时间内有效，在无法获得共享密钥的情况下，对手无法生成新的代码。

如果你有一个支持TOTP的硬件安全密钥（如YubiKey与 [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)），我们建议你将 "共享密钥 "存储在硬件上。 YubiKey等硬件正是为了使 "共享密钥 "难以提取和复制而开发的。 YubiKey也没有连接到互联网，这与带有TOTP应用程序的手机不同。

与 [WebAuthn](#fido-fast-identity-online)不同，TOTP不提供对 [网络钓鱼](https://en.wikipedia.org/wiki/Phishing) 或重放攻击的保护。 如果对手从你那里获得一个有效的代码，他们可以随意使用，直到它过期（一般为60秒）。

对手可以建立一个网站来模仿官方服务，试图欺骗你提供你的用户名、密码和当前的TOTP代码。 如果对手随后使用这些记录下来的凭证，他们可能能够登录到真正的服务并劫持该账户。

虽然不完美，但TOTP对大多数人来说是足够安全的，即使不支持使用 [硬件安全密钥](/multi-factor-authentication/#hardware-security-keys) ， 一个[认证器应用程序](/multi-factor-authentication/#authenticator-apps) 仍然是一个不错的选择。

### 硬件安全密钥

YubiKey将数据存储在防篡改的固态芯片上，如果不经过昂贵的实验室级别的取证程序，用非破坏性的方式是 [不可获取的](https://security.stackexchange.com/a/245772)。

这些密钥通常是多功能的，并提供许多验证方法。 以下是最常见的几种情况。

#### Yubico OTP

Yubico OTP是一种通常在硬件安全密钥中实现的认证协议。 当你决定使用Yubico OTP时，密钥将产生一个公共ID、一个私人ID和一个密钥，然后上传到Yubico OTP服务器。

在登录网站时，你所需要做的就是用物理方式触摸安全钥匙。 安全键将模拟键盘，并将一次性密码打印到密码区。

然后，该服务将把一次性密码转发给Yubico OTP服务器进行验证。 在密钥和Yubico的验证服务器上都会递增计数器。 OTP只能使用一次，当认证成功后，计数器会增加，这可以防止OTP的重复使用。 Yubico提供了一份关于这个过程的 [详细文件](https://developers.yubico.com/OTP/OTPs_Explained.html) 。

<figure markdown>
  ![Yubico OTP](../assets/img/multi-factor-authentication/yubico-otp.png)
</figure>

与TOTP相比，使用Yubico OTP有一些好处和坏处。

Yubico验证服务器是一个基于云的服务，你需要相信Yubico在安全地存储数据，而不是对你进行分析。 与Yubico OTP相关的公共ID在每个网站上都被复用，这可能有助于第三方对你进行行为素描。 与TOTP一样，Yubico OTP不提供防钓鱼功能。

如果你的威胁模型要求你为不同的网站准备不同的身份， **，不要** 在这些网站上使用有相同的硬件安全密钥的Yubico OTP，因为每个安全密钥具有唯一的公共ID。

#### FIDO（快速在线身份认证）

[FIDO](https://en.wikipedia.org/wiki/FIDO_Alliance) 包括许多标准，首先是U2F，后来是 [FIDO2](https://en.wikipedia.org/wiki/FIDO2_Project) ，其中包括web标准 [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn)。

U2F和FIDO2指的是 [客户端到验证器协议](https://en.wikipedia.org/wiki/Client_to_Authenticator_Protocol)，这是安全密钥和计算机（如笔记本电脑或手机）之间的协议。 它带有WebAuthn作为补充，WebAuthn是用来对你试图登录的网站（"信赖方"）进行认证的组件。

WebAuthn是第二因素身份验证中的最安全、最私密的形式。 虽然身份验证体验类似于Yubico OTP ，但密钥不会打印一次性密码并使用第三方服务器进行验证。 相反，它使用 [公钥加密技术](https://en.wikipedia.org/wiki/Public-key_cryptography) 进行认证。

<figure markdown>
  ![FIDO](../assets/img/multi-factor-authentication/fido.png)
</figure>

当你创建一个账户时，公钥被发送到该服务，然后当你登录时，该服务将要求你用你的私钥 "签署 "一些数据。 这样做的好处是，服务中没有存储任何密码数据，因此没有任何东西可供对手窃取。

这个演示文稿讨论了密码身份验证的历史、隐患（如密码复用）以及FIDO2和 [WebAuthn](https://webauthn.guide) 标准的相关内容。

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aMo4ZlWznao" title="FIDO2和WebAuthn如何阻止账户被接管" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

与任何MFA方法相比， FIDO2和WebAuthn都具有更加卓越的安全性和隐私性。

通常对于web服务，使用的WebAuthn是 [W3C建议](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#W3C_recommendation_(REC))的一部分。 它使用公钥身份验证，比Yubico OTP和TOTP方法中使用的共享密文更安全，因为它包括身份验证期间的来源名称（通常是域名）。 提供认证是为了保护您免受网络钓鱼攻击，因为它可以帮助您确定您使用的是真实的服务，而不是伪造的副本。

与Yubico OTP不同， WebAuthn不使用任何公共ID ，因此密钥 **不能** 在不同的网站之间被识别。 它也不使用任何第三方云服务器进行认证。 所有的通信都是在钥匙和你正在登录的网站之间完成的。 FIDO还有会在使用时递增的计数器，以防止会话复用和密钥克隆。

如果一个网站或服务支持WebAuthn的认证，强烈建议你使用它而不是任何其他形式的MFA。

## 一般建议

我们提出以下一般性建议：

### 我应该选择哪种方法？

当配置你的MFA方法时，请记住，它的安全程度只相当于你所用的最弱的那种方法。 这意味着您必须仅使用最佳的MFA方法。 例如，如果你已经在使用TOTP，你应该禁用电子邮件和短信MFA。 如果你已经在用FIDO2/WebAuthn，就不应该再在你的账户上同时使用Yubico OTP或TOTP。

### 备份

你应该始终为你的MFA方法准备备份。 硬件安全钥匙可能会丢失、被盗或仅仅是随着时间的推移停止工作。 建议你准备一对而不是仅一个硬件安全钥匙，它们要对你的账户有相同的访问权限。

当使用TOTP和验证器应用程序时，请确保备份您的恢复密钥或应用程序本身，或将 "共享密文"复制到不同手机上的另一个应用程序实例或加密容器中（例如 [VeraCrypt](../encryption.md#veracrypt)）。

### 初始设置

购买安全密钥时，请务必更改默认凭据，为密钥设置密码保护，并在密钥支持时启用触摸确认。 像YubiKey这样的产品有多个接口，每个接口都有独立的证书，所以你应该去检查每个接口，并为它们全都设置保护。

### 电子邮件和短信

如果你必须使用电子邮件进行MFA，请确保电子邮件账户本身有适当的MFA方法来保护。

如果您使用短信MFA ，请使用那些不允许未经授权的电话号码切换的运营商，或使用提供类似安全性的专用VoIP号码，以避免 [SIM交换攻击](https://en.wikipedia.org/wiki/SIM_swap_scam)。

[我们推荐的MFA工具](../multi-factor-authentication.md ""){.md-button}

## MFA适用的更多场合

除了保护你的网站登录之外，多因素认证还可以用来保护你的本地登录、SSH密钥甚至是密码数据库。

### Windows 系统

Yubico有一个专用的 [凭据提供程序](https://docs.microsoft.com/en-us/windows/win32/secauthn/credential-providers-in-windows) ，为本地Windows帐户的用户名+密码登录流程添加质询-响应身份验证步骤。 如果你有一个支持质询-响应验证的YubiKey, 请看 [Yubico Login for Windows Configuration Guide](https://support.yubico.com/hc/en-us/articles/360013708460-Yubico-Login-for-Windows-Configuration-Guide), 该指南允许您在Windows计算机上设置MFA

### mac系统

macOS [原生支持](https://support.apple.com/guide/deployment/intro-to-smart-card-integration-depd0b888248/web) 使用智能卡（PIV）进行认证。 如果你有一张支持PIV接口的智能卡或硬件安全钥匙，如YubiKey，我们建议你按照你的智能卡/硬件安全供应商的文档，为你的macOS电脑设置第二要素认证。

Yubico有一个指南 [在macOS中把YubiKey作为智能卡使用](https://support.yubico.com/hc/en-us/articles/360016649059) ，可以帮助你在macOS上设置YubiKey。

设置智能卡/安全密钥后，我们建议在终端中运行此命令：

```text
sudo defaults write /Library/Preferences/com.apple.loginwindow DisableFDEAutoLogin -bool YES
```

该命令将阻止对手在计算机启动时绕过MFA。

### Linux系统

!!! 警告

    如果你的系统的主机名改变了（如由于DHCP的原因），你将无法登录。 在遵循本指南之前，为您的计算机设置正确的主机名至关重要。

Linux上的 `pam_u2f` 模块可以在大多数流行的Linux发行版上为登录提供双因素认证。 如果你有一个支持U2F的硬件安全密钥，你可以为你的登录设置MFA认证。 Yubico有一个指南 [Ubuntu Linux登录指南 - U2F](https://support.yubico.com/hc/en-us/articles/360016649099-Ubuntu-Linux-Login-Guide-U2F) ，它应该适用于任何发行版。 然而，软件包管理器的命令--如 `apt-get`--和软件包名称可能不同。 本指南 **不** 适用于Qubes OS。

### Qubes操作系统

Qubes OS支持使用YubiKeys进行质询-响应身份验证。 如果您有一个支持质询-响应身份验证的YubiKey，如果您想在Qubes OS上设置MFA，请查看Qubes OS的 [YubiKey文档](https://www.qubes-os.org/doc/yubikey/)。

### SSH

#### 硬件安全密钥

可以用多种不同的流行的硬件安全密钥验证方法来设置SSH MFA。 我们建议你查看Yubico的 [文档](https://developers.yubico.com/SSH/) 了解如何设置。

#### 基于时间的一次性密码（TOTP）

SSH MFA也可以使用TOTP进行设置。 DigitalOcean提供了一个教程 [如何在Ubuntu 20.04上为SSH设置多因素认证](https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-factor-authentication-for-ssh-on-ubuntu-20-04)。 无论哪个发行版，大多数东西都应该是一样的，但是软件包管理器命令--例如 `apt-get`--和软件包名称可能不同。

### KeePass (和KeePassXC)

KeePass和KeePassXC数据库可以使用质询响应或HOTP作为第二因素身份验证进行保护。 Yubico为KeePass提供了一份文件 [Using Your YubiKey with KeePass](https://support.yubico.com/hc/en-us/articles/360013779759-Using-Your-YubiKey-with-KeePass) ，在 [KeePassXC](https://keepassxc.org/docs/#faq-yubikey-2fa) 网站上也有一份。
