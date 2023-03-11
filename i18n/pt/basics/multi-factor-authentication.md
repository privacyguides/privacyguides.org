---
title: "Multi-Factor Authentication"
icon: 'O uso de AMF forte pode parar mais de 99% dos acessos não autorizados à conta, e é fácil de configurar nos serviços que você já usa.'
description: MFA is a critical security mechanism for securing your online accounts, but some methods are stronger than others.
---

**Multi-Factor Authentication** (**MFA**) is a security mechanism that requires additional steps beyond entering your username (or email) and password. The most common method is time limited codes you might receive from SMS or an app.

A idéia por trás do AMF é que mesmo que um hacker (ou adversário) seja capaz de descobrir sua senha (algo que você *sabe*), eles ainda precisarão de um dispositivo que você possui como o seu telefone (algo que você *tem*), a fim de gerar o código necessário para entrar na sua conta. Os métodos de AMF variam na segurança com base nesta premissa: quanto mais difícil for para um atacante ter acesso ao seu método AMF, melhor.

Receber códigos de **SMS** ou **email** são uma das formas mais fracas de proteger as suas contas com AMF. Examples of MFA methods (from weakest to strongest) include SMS, Email codes, app push notifications, TOTP, Yubico OTP and FIDO.

## Comparação do Método AMF

### SMS ou e-mail MFA

**Notificações Push** assume a forma de uma mensagem a ser enviada para um aplicativo no seu telefone pedindo-lhe para confirmar novos logins de conta. Este método é muito melhor que SMS ou e-mail, uma vez que um atacante normalmente não seria capaz de receber estas notificações push sem ter um dispositivo já conectado, o que significa que eles precisariam comprometer um dos seus outros dispositivos primeiro. If an unauthorized person gained access to your email, they would be able to use that access to both reset your password and receive the authentication code, giving them full access to your account.

### Notificações Push

Todos nós cometemos erros, e há o risco de que um usuário possa aceitar a tentativa de login por acidente. As autorizações de login de notificação push são normalmente enviadas para *todos* seus dispositivos de uma só vez, ampliando a disponibilidade do código MFA se você tiver muitos dispositivos.

A segurança da notificação push AMF depende tanto da qualidade do aplicativo, do componente servidor e da confiança do desenvolvedor que o produz. A instalação de um aplicativo também pode exigir que você aceite privilégios invasivos que concedam acesso a outros dados em seu dispositivo.

**TOTP** é uma das formas mais comuns de AMF disponível. Quando um usuário configura o TOTP, ele geralmente é obrigado a digitalizar um [QR Code](https://en.wikipedia.org/wiki/QR_code) que estabelece um "segredo compartilhado" com o serviço que pretende utilizar. O segredo compartilhado é protegido dentro dos dados do aplicativo autenticador, e às vezes é protegido por uma senha.

### Palavra-passe única baseada no tempo (TOTP)

TOTP is one of the most common forms of MFA available. When you set up TOTP, you are generally required to scan a [QR Code](https://en.wikipedia.org/wiki/QR_code) which establishes a "[shared secret](https://en.wikipedia.org/wiki/Shared_secret)" with the service that you intend to use. The shared secret is secured inside of the authenticator app's data, and is sometimes protected by a password.

Se você tem uma chave de segurança de hardware com suporte a TOTP (como uma YubiKey com [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)), recomendamos que você armazene os seus "segredos compartilhados" no hardware. As the code is only valid for a short time, without access to the shared secret, an adversary cannot generate new codes.

Ao contrário de [FIDO2 / U2F](#fido2-u2f), TOTP não oferece protecção contra [phishing](https://en.wikipedia.org/wiki/Phishing) ou ataques de reutilização. Se um adversário obtém um código válido de você, ele pode usá-lo quantas vezes quiser até que expire (geralmente 60 segundos). A YubiKey is also not connected to the Internet, unlike a phone with a TOTP app.

Um adversário poderia criar um site para imitar um serviço oficial, numa tentativa de enganá-lo para dar o seu nome de usuário, senha e código TOTP atual. If an adversary obtains a valid code from you, they may use it as many times as they like until it expires (generally 60 seconds).

An adversary could set up a website to imitate an official service in an attempt to trick you into giving out your username, password and current TOTP code. If the adversary then uses those recorded credentials they may be able to log into the real service and hijack the account.

Although not perfect, TOTP is secure enough for most people, and when [hardware security keys](../multi-factor-authentication.md#hardware-security-keys) are not supported [authenticator apps](../multi-factor-authentication.md#authenticator-apps) are still a good option.

### Chaves de segurança do hardware

The YubiKey stores data on a tamper-resistant solid-state chip which is [impossible to access](https://security.stackexchange.com/a/245772) non-destructively without an expensive process and a forensics laboratory.

Yubico OTP é um protocolo de autenticação tipicamente implementado em chaves de segurança de hardware. Quando um utilizador decide utilizar o Yubico OTP, a chave irá gerar um ID público, um ID privado e uma Chave Secreta que é depois carregada para o servidor Yubico OTP.

#### Yubico OTP

Ao entrar em um site, tudo o que um usuário precisa fazer é tocar fisicamente a chave de segurança. A chave de segurança irá emular um teclado e imprimir uma senha única no campo da senha.

O serviço irá então reencaminhar a senha única para o servidor OTP Yubico para validação. Um contador é incrementado tanto na chave como no servidor de validação do Yubico.

The service will then forward the one-time password to the Yubico OTP server for validation. A counter is incremented both on the key and Yubico's validation server. The OTP can only be used once, and when a successful authentication occurs, the counter is increased which prevents reuse of the OTP. Yubico provides a [detailed document](https://developers.yubico.com/OTP/OTPs_Explained.html) about the process.

<figure markdown>
  ![Yubico OTP](/assets/img/multi-factor-autenticação/yubico-otp.png)
</figure>

There are some benefits and disadvantages to using Yubico OTP when compared to TOTP.

The Yubico validation server is a cloud based service, and you're placing trust in Yubico that they are storing data securely and not profiling you. The public ID associated with Yubico OTP is reused on every website and could be another avenue for third-parties to profile you. Like TOTP, Yubico OTP does not provide phishing resistance.

If your threat model requires you to have different identities on different websites, **do not** use Yubico OTP with the same hardware security key across those websites as public ID is unique to each security key.

#### FIDO2 / U2F

[FIDO](https://en.wikipedia.org/wiki/FIDO_Alliance) includes a number of standards, first there was U2F and then later [FIDO2](https://en.wikipedia.org/wiki/FIDO2_Project) which includes the web standard [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn).

U2F and FIDO2 refer to the [Client to Authenticator Protocol](https://en.wikipedia.org/wiki/Client_to_Authenticator_Protocol), which is the protocol between the security key and the computer, such as a laptop or phone. It complements WebAuthn which is the component used to authenticate with the website (the "Relying Party") you're trying to log in on.

WebAuthn is the most secure and private form of second factor authentication. While the authentication experience is similar to Yubico OTP, the key does not print out a one-time password and validate with a third-party server. Instead, it uses [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) for authentication.

<figure markdown>
  ![FIDO](../assets/img/multi-factor-authentication/fido.png)
</figure>

When you create an account, the public key is sent to the service, then when you log in, the service will require you to "sign" some data with your private key. Ele usa autenticação de chave pública e é mais seguro que os segredos compartilhados usados nos métodos Yubico OTP e TOTP, pois inclui o nome de origem (geralmente, o nome do domínio) durante a autenticação.

This presentation discusses the history of password authentication, the pitfalls (such as password reuse), and discussion of FIDO2 and [WebAuthn](https://webauthn.guide) standards.

<div class="yt-embed">
  <iframe width="560" height="315" src="https://invidious.privacyguides.net/embed/aMo4ZlWznao?local=true" title="Como o FIDO2 e a WebAuthn Stop Account Takeovers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Se um site ou serviço suportar FIDO2 / U2F para a autenticação, é altamente recomendável que o utilize em relação a qualquer outra forma de AMF.

Typically for web services it is used with WebAuthn which is a part of the [W3C recommendations](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#W3C_recommendation_(REC)). It uses public key authentication and is more secure than shared secrets used in Yubico OTP and TOTP methods, as it includes the origin name (usually, the domain name) during authentication. Attestation is provided to protect you from phishing attacks, as it helps you to determine that you are using the authentic service and not a fake copy.

Ao configurar o seu método AMF, tenha em mente que ele é apenas tão seguro quanto o seu método de autenticação mais fraco que você usa. It also does not use any third-party cloud server for authentication. Por exemplo, se você já estiver usando TOTP, você deve desativar o e-mail e SMS MFA. Se já estiver a utilizar o FIDO2 / U2F, não deve utilizar o Yubico OTP ou TOTP na sua conta.

If a website or service supports WebAuthn for the authentication, it is highly recommended that you use it over any other form of MFA.

## Recomendações Gerais

Ao usar TOTP com um aplicativo autenticador, certifique-se de fazer backup das chaves de recuperação, do próprio aplicativo ou copie os "segredos compartilhados" para outra instância do aplicativo em um telefone diferente ou em um container criptografado (por exemplo [VeraCrypt](/encryption/#veracrypt)).

### Qual o método a utilizar?

Ao comprar uma chave de segurança, é importante que você altere as credenciais padrão, configure a proteção por senha para a chave e ative a confirmação por toque se a sua chave suportar tal recurso. Produtos como o [YubiKey](#yubikey) têm múltiplas interfaces com credenciais separadas para cada uma delas, portanto você deve passar por cima de cada interface e configurar a proteção também. For instance, if you are already using TOTP, you should disable email and SMS MFA. If you are already using FIDO2/WebAuthn, you should not be using Yubico OTP or TOTP on your account.

### Cópias de segurança

You should always have backups for your MFA method. Hardware security keys can get lost, stolen or simply stop working over time. It is recommended that you have a pair of hardware security keys with the same access to your accounts instead of just one.

When using TOTP with an authenticator app, be sure to back up your recovery keys or the app itself, or copy the "shared secrets" to another instance of the app on a different phone or to an encrypted container (e.g. [VeraCrypt](../encryption.md#veracrypt)).

### Configuração inicial

When buying a security key, it is important that you change the default credentials, set up password protection for the key, and enable touch confirmation if your key supports it. Products such as the YubiKey have multiple interfaces with separate credentials for each one of them, so you should go over each interface and set up protection as well.

### Email e SMS

Além de proteger apenas os logins do seu site, a autenticação multi-factor pode ser usada para proteger os seus logins locais, chaves ssh ou mesmo bases de dados de senhas também.

If you use SMS MFA, use a carrier who will not switch your phone number to a new SIM card without account access, or use a dedicated VoIP number from a provider with similar security to avoid a [SIM swap attack](https://en.wikipedia.org/wiki/SIM_swap_scam).

[MFA tools we recommend](../multi-factor-authentication.md ""){.md-button}

## Mais lugares para configurar o AMF

Yubico tem um guia [Usando o seu YubiKey como Smart Card em macOS](https://support.yubico.com/hc/en-us/articles/360016649059) que o pode ajudar a configurar o seu YubiKey em macOS.

### Windows

Yubico has a dedicated [Credential Provider](https://docs.microsoft.com/en-us/windows/win32/secauthn/credential-providers-in-windows) that adds Challenge-Response authentication for the username + password login flow for local Windows accounts. If you have a YubiKey with Challenge-Response authentication support, take a look at the [Yubico Login for Windows Configuration Guide](https://support.yubico.com/hc/en-us/articles/360013708460-Yubico-Login-for-Windows-Configuration-Guide), which will allow you to set up MFA on your Windows computer.

### macOS

macOS has [native support](https://support.apple.com/guide/deployment/intro-to-smart-card-integration-depd0b888248/web) for authentication with smart cards (PIV). If you have a smartcard or a hardware security key that supports the PIV interface such as the YubiKey, we recommend that you follow your smartcard/hardware security vendor's documentation and set up second factor authentication for your macOS computer.

Yubico have a guide [Using Your YubiKey as a Smart Card in macOS](https://support.yubico.com/hc/en-us/articles/360016649059) which can help you set up your YubiKey on macOS.

After your smartcard/security key is set up, we recommend running this command in the Terminal:

```text
sudo defaults write /Library/Preferences/com.apple.loginwindow DisableFDEAutoLogin -bool SIM
```

The command will prevent an adversary from bypassing MFA when the computer boots.

### Linux

!!! Recomendamos que você verifique o [documentação](https://developers.yubico.com/SSH/) de Yubico sobre como configurar isso.

    If the hostname of your system changes (such as due to DHCP), you would be unable to login. It is vital that you set up a proper hostname for your computer before following this guide.

The `pam_u2f` module on Linux can provide two-factor authentication for logging in on most popular Linux distributions. A maioria das coisas deve ser a mesma independentemente da distribuição, no entanto os comandos do gerenciador de pacotes, como "apt-get" e nomes de pacotes podem ser diferentes. Yubico has a guide [Ubuntu Linux Login Guide - U2F](https://support.yubico.com/hc/en-us/articles/360016649099-Ubuntu-Linux-Login-Guide-U2F) which should work on any distribution. The package manager commands—such as `apt-get`—and package names may however differ. This guide does **not** apply to Qubes OS.

### SO Qubes

As bases de dados KeePass e KeePassXC podem ser protegidas usando Challenge-Response ou HOTP como um segundo factor de autenticação. Yubico forneceu um documennt para KeePass [Usando a sua YubiKey com KeePass](https://support.yubico.com/hc/en-us/articles/360013779759-Using-Your-YubiKey-with-KeePass) e também existe um no website [KeePassXC](https://keepassxc.org/docs/#faq-yubikey-2fa) .

### SSH

#### Chaves de Segurança de Hardware

SSH MFA could be set up using multiple different authentication methods that are popular with hardware security keys. We recommend that you check out Yubico's [documentation](https://developers.yubico.com/SSH/) on how to set this up.

#### Palavra-passe única baseada no tempo (TOTP)

SSH MFA can also be set up using TOTP. DigitalOcean has provided a tutorial [How To Set Up Multi-Factor Authentication for SSH on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-factor-authentication-for-ssh-on-ubuntu-20-04). Most things should be the same regardless of distribution, however the package manager commands—such as `apt-get`—and package names may differ.

### KeePass (e KeePassXC)

KeePass and KeePassXC databases can be secured using Challenge-Response or HOTP as a second-factor authentication. Yubico has provided a document for KeePass [Using Your YubiKey with KeePass](https://support.yubico.com/hc/en-us/articles/360013779759-Using-Your-YubiKey-with-KeePass) and there is also one on the [KeePassXC](https://keepassxc.org/docs/#faq-yubikey-2fa) website.
