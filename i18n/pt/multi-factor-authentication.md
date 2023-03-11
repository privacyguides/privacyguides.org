---
title: "Autenticadores Multi-Factor"
icon: 'O uso de AMF forte pode parar mais de 99% dos acessos não autorizados à conta, e é fácil de configurar nos serviços que você já usa.'
description: These tools assist you with securing your internet accounts with Multi-Factor Authentication without sending your secrets to a third-party.
---

## Chaves de Segurança de Hardware

### YubiKey

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![YubiKeys](/assets/img/multi-factor-authentication/yubikey.png) As **YubiKeys** estão entre as chaves de segurança mais populares. Alguns modelos YubiKey têm uma vasta gama de características, como por exemplo: [Universal 2nd Factor (U2F)](https://en.wikipedia.org/wiki/Universal_2nd_Factor), [FIDO2 WebAuthn](https://en.wikipedia.org/wiki/WebAuthn), [Yubico OTP](https://developers.yubico.com/OTP/), [PIV](https://en.wikipedia.org/wiki/FIPS_201), [OpenPGP](https://developers.yubico.com/PGP/), [TOTP e HOTP](https://developers.yubico.com/OATH/) autenticação.
    
    Um dos benefícios do YubiKey é que uma chave pode fazer quase tudo (YubiKey 5), que você poderia esperar de uma chave de segurança de hardware. We do encourage you to take the [quiz](https://www.yubico.com/quiz/) before purchasing in order to make sure you make the right choice.
    
    [:octicons-home-16: Homepage](https://www.yubico.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.yubico.com/){ .card-link title=Documentation}

The [comparison table](https://www.yubico.com/store/compare/) shows the features and how the YubiKeys compare. Recomendamos vivamente que seleccione chaves da série YubiKey 5.

YubiKeys can be programmed using the [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/) or [YubiKey Personalization Tools](https://www.yubico.com/support/download/yubikey-personalization-tools/). For managing TOTP codes, you can use the [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/). All of Yubico's clients are open-source.

Para modelos que suportam HOTP e TOTP, existem 2 slots na interface OTP que podem ser utilizados para HOTP e 32 slots para armazenar segredos TOTP. Estes segredos são armazenados encriptados na chave e nunca os expõe aos dispositivos em que estão ligados. Uma vez que uma semente (segredo compartilhado) é dada ao Yubico Authenticator, ele só dará os códigos de seis dígitos, mas nunca a semente. This security model helps limit what an attacker can do if they compromise one of the devices running the Yubico Authenticator and make the YubiKey resistant to a physical attacker.

!!! atenção
    O firmware do YubiKeys não são de código aberto e não são actualizáveis. If you want features in newer firmware versions, or if there is a vulnerability in the firmware version you are using, you would need to purchase a new key.

### Nitrokey / Librem Key

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Nitrokey](assets/img/multi-factor-authentication/nitrokey.jpg){ align=right }
    
    **Nitrokey** has a security key capable of [FIDO2 and WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online) called the **Nitrokey FIDO2**. For PGP support, you need to purchase one of their other keys such as the **Nitrokey Start**, **Nitrokey Pro 2** or the **Nitrokey Storage 2**.
    
    [:octicons-home-16: Homepage](https://www.nitrokey.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.nitrokey.com/data-privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.nitrokey.com/){ .card-link title=Documentation}

The [comparison table](https://www.nitrokey.com/#comparison) shows the features and how the Nitrokey models compare. O **Nitrokey 3** listado terá um conjunto de recursos combinados.

Nitrokey models can be configured using the [Nitrokey app](https://www.nitrokey.com/download).

Para os modelos que suportam HOTP e TOTP, existem 3 slots para HOTP e 15 para TOTP. Alguns Nitrokeys podem agir como um gerenciador de senhas. They can store 16 different credentials and encrypt them using the same password as the OpenPGP interface.

!!! Recomendamos que você verifique o [documentação](https://developers.yubico.com/SSH/) de Yubico sobre como configurar isso.

    While Nitrokeys do not release the HOTP/TOTP secrets to the device they are plugged into, the HOTP and TOTP storage is **not** encrypted and is vulnerable to physical attacks. If you are looking to store HOTP or TOTP these secrets, we highly recommend that you use a Yubikey instead.

!!! Recomendamos que você verifique o [documentação](https://developers.yubico.com/SSH/) de Yubico sobre como configurar isso.

    Resetting the OpenPGP interface on a Nitrokey will also make the password database [inaccessible](https://docs.nitrokey.com/pro/factory-reset.html).

 The Nitrokey Pro 2, Nitrokey Storage 2, and the upcoming Nitrokey 3 supports system integrity verification for laptops with the [Coreboot](https://www.coreboot.org/) + [Heads](https://osresearch.net/) firmware. Purism's [Librem Key](https://puri.sm/products/librem-key/) is a rebranded NitroKey Pro 2 with similar firmware and can also be used for the same purposes.

Nitrokey's firmware is open-source, unlike the YubiKey. The firmware on modern NitroKey models (except the **NitroKey Pro 2**) is updatable.

!!! aviso
     Backup `BitLocker-Recovery-Key.txt` em um dispositivo de armazenamento separado.

    O aplicativo Nitrokey, embora compatível com Librem Keys, requer o `libnitrokey` versão 3.6 ou superior para reconhecê-los. Atualmente, o pacote está desatualizado no Windows, macOS e no repositório da maioria das distribuições Linux, então você provavelmente terá que compilar você mesmo o aplicativo Nitrokey para colocá-lo funcionando com a Chave Librem. No Linux, você pode obter uma versão atualizada de [Flathub](https://flathub.org/apps/details/com.nitrokey.nitrokey-app).

### Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

#### Minimum Requirements

- Must use high quality, tamper resistant hardware security modules.
- Must support the latest FIDO2 specification.
- Must not allow private key extraction.
- Devices which cost over $35 must support handling OpenPGP and S/MIME.

#### Best-Case

Our best-case criteria represents what we would like to see from the perfect project in this category. Our recommendations may not include any or all of this functionality, but those which do may rank higher than others on this page.

- Should be available in USB-C form-factor.
- Should be available with NFC.
- Should support TOTP secret storage.
- Should support secure firmware updates.

## Aplicativos Autenticadores

As aplicações autenticadoras implementam um padrão de segurança adotado pela Internet Engineering Task Force (IETF) chamado **Senhas únicas baseadas no tempo**, ou **TOTP**. Este é um método onde os sites compartilham um segredo com você que é usado pelo seu aplicativo autenticador para gerar um código de seis (geralmente) dígitos baseado na hora atual, que você entra enquanto faz o login para que o site seja verificado. Normalmente estes códigos são regenerados a cada 30 segundos, e assim que um novo código é gerado, o antigo torna-se inútil. Mesmo que um hacker receba um código de seis dígitos, não há maneira de reverter esse código para obter o segredo original, ou ser capaz de prever o que qualquer código futuro pode ser.

Recomendamos vivamente que utilize aplicações TOTP móveis em vez de alternativas de desktop, uma vez que o Android e o IOS têm melhor segurança e isolamento de aplicações do que a maioria dos sistemas operativos desktop.

### Aegis Authenticator (Android)

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logo Aegis](/assets/img/multi-factor-authentication/aegis.png){ align=right }
    
    **Aegis Authenticator** é uma aplicação gratuita, segura e de código aberto para gerir os seus tokens de verificação em 2 passos para os seus serviços online.
    
    [:octicons-home-16: Homepage](https://getaegis.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getaegis.app/aegis/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/beemdevelopment/Aegis/wiki){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/beemdevelopment/Aegis){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.buymeacoffee.com/beemdevelopment){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
        - [:simple-github: GitHub](https://github.com/beemdevelopment/Aegis/releases)

### Raivo OTP (iOS)

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logótipo Raivo OTP](/assets/img/multi-factor-autenticação/raivo-otp.png){ align=right }
    
    **Raivo OTP*** é um cliente nativo, leve e seguro baseado no tempo (TOTP) & cliente com senha baseada em contador (HOTP) para iOS. Raivo OTP oferece backup iCloud opcional & sync. Raivo OTP também está disponível para MacOS na forma de um aplicativo de barra de status, porém o aplicativo Mac não funciona independentemente do aplicativo iOS.
    
    [:octicons-home-16: Homepage](https://raivo-otp.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://raivo-otp.com/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-code-16:](https://github.com/raivo-otp/ios-application){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://raivo-otp.com/donate){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)

### Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

- Must be open-source software.
- Must not require internet connectivity.
- Must not sync to a third-party cloud sync/backup service.
    - **Optional** E2EE sync support with OS-native tools is acceptable, e.g. encrypted sync via iCloud.
